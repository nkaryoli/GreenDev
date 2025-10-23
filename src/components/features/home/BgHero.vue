<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
	name: 'ParticleAnimation',
	props: {
		showUI: {
		type: Boolean,
		default: false
		}
	},
	setup() {
		const canvas = ref(null);
		const particles = ref([]);
		const deathCount = ref(0);
		const drawnInLastFrame = ref(0);
		const fps = ref(0);
		const zoom = ref(100);
		const width = ref(0);
		const height = ref(0);
		
		let ctx = null;
		let animationId = null;
		let stepCount = 0;
		let grid = [];
		let gridMaxIndex = 0;
		
		// Configuración
		const config = {
			lifespan: 110,        // 👈 VELOCIDAD: Vida de cada partícula (más = viven más tiempo)
			popPerBirth: 1,        // 👈 VELOCIDAD: Partículas que nacen cada vez
			maxPop: 100,           // 👈 VELOCIDAD: Número máximo de partículas (más = más denso)
			birthFreq: 5,          // 👈 VELOCIDAD: Frecuencia de nacimiento (menor = más partículas más rápido)
			gridSize: 8,           
			dataToImageRatio: 1,
			// PARÁMETROS DE VELOCIDAD
			springK: 8,            // 👈 VELOCIDAD: Fuerza del resorte (5-15: mayor = más rápido)
			viscosity: 0.4,        // 👈 VELOCIDAD: Viscosidad (0.2-0.6: menor = más rápido y caótico)
			speedMultiplier: 0.001,  // 👈 VELOCIDAD: Multiplicador (0.05-0.3: mayor = más rápido)
			colorChangeSpeed: 30,  // 👈 COLOR: Velocidad cambio de color (10-50: menor = más rápido)
			fadeSpeed: 0.09        // 👈 RASTRO: Velocidad de desvanecimiento (0.03-0.15: mayor = rastro más corto)
		};
    
		const setup = () => {
			if (!canvas.value) return;
			
			canvas.value.width = window.innerWidth;
			canvas.value.height = window.innerHeight;
			ctx = canvas.value.getContext('2d');
			
			width.value = canvas.value.width;
			height.value = canvas.value.height;
			
			ctx.imageSmoothingEnabled = false;
			ctx.webkitImageSmoothingEnabled = false;
			ctx.msImageSmoothingEnabled = false;
			
			// Build grid
			const gridSteps = Math.floor(1000 / config.gridSize);
			let i = 0;
			
			for (let xx = -500; xx < 500; xx += config.gridSize) {
				for (let yy = -500; yy < 500; yy += config.gridSize) {
					const r = Math.abs(xx) + Math.abs(yy);
					const r0 = 100;
					let field;
					
					if (r < r0) field = 255 / r0 * r;
					else if (r > r0) field = 255 - Math.min(255, (r - r0) / 2);
				
					grid.push({
						x: xx,
						y: yy,
						busyAge: 0,
						spotIndex: i,
						isEdge: (xx === -500 ? 'left' : 
								(xx === (-500 + config.gridSize * (gridSteps - 1)) ? 'right' : 
								(yy === -500 ? 'top' : 
								(yy === (-500 + config.gridSize * (gridSteps - 1)) ? 'bottom' : 
									false
								)
								)
								)
								),
						field: field
					});
					i++;
				}
			}
			gridMaxIndex = i;
			
			initDraw();
		};
    
		const initDraw = () => {
			ctx.beginPath();
			ctx.rect(0, 0, width.value, height.value);
			ctx.fillStyle = 'transparent'; // Fondo transparente
			ctx.fill();
			ctx.closePath();
		};
		
		const birth = () => {
			const gridSpotIndex = Math.floor(Math.random() * gridMaxIndex);
			const gridSpot = grid[gridSpotIndex];
			const x = gridSpot.x;
			const y = gridSpot.y;
			const colorChoice = Math.random();
			let hue, sat, lum;
			
			if (colorChoice < 0.5) {
				// Primary (naranja)
				hue = 39 + Math.floor(10 * Math.random()); // Variación 39-49
				sat = 90 + Math.floor(10 * Math.random()); // 90-100%
				lum = 50 + Math.floor(20 * Math.random()); // 50-70%
			} else if (colorChoice < 0.9) {
				// Secondary (verde azulado)
				hue = 161 + Math.floor(10 * Math.random()); // Variación 161-171
				sat = 85 + Math.floor(15 * Math.random()); // 85-100%
				lum = 35 + Math.floor(20 * Math.random()); // 35-55%
			} else {
				// Accent (tierra/beige) - ocasionalmente
				hue = 16 + Math.floor(15 * Math.random()); // Variación 16-31
				sat = 15 + Math.floor(20 * Math.random()); // 15-35%
				lum = 50 + Math.floor(15 * Math.random()); // 50-65%
			}
			
			const particle = {
				hue: hue,
				sat: sat,
				lum: lum,
				x: x, 
				y: y,
				xLast: x, 
				yLast: y,
				xSpeed: 0, 
				ySpeed: 0,
				age: 0,
				ageSinceStuck: 0,
				attractor: {
					oldIndex: gridSpotIndex,
					gridSpotIndex: gridSpotIndex,
				},
				name: 'seed-' + Math.ceil(10000000 * Math.random())
			};
			
			particles.value.push(particle);
		};
    
		const kill = (particleName) => {
			particles.value = particles.value.filter(seed => seed.name !== particleName);
		};
		
		const move = () => {
			const gridSteps = Math.floor(1000 / config.gridSize);
			
			for (let i = particles.value.length - 1; i >= 0; i--) {
				const p = particles.value[i];
				
				p.xLast = p.x;
				p.yLast = p.y;
				
				const index = p.attractor.gridSpotIndex;
				let gridSpot = grid[index];
				
				if (Math.random() < 0.5) {
					if (!gridSpot.isEdge) {
						const topIndex = index - 1;
						const bottomIndex = index + 1;
						const leftIndex = index - gridSteps;
						const rightIndex = index + gridSteps;
						
						const neighbors = [
							grid[topIndex],
							grid[bottomIndex],
							grid[leftIndex],
							grid[rightIndex]
						];
					
						const chaos = 30;
						let maxFieldSpot = neighbors[0];
						let maxValue = neighbors[0].field + chaos * Math.random();
						
						for (let j = 1; j < neighbors.length; j++) {
							const value = neighbors[j].field + chaos * Math.random();
							if (value > maxValue) {
								maxValue = value;
								maxFieldSpot = neighbors[j];
							}
						}
					
						const potentialNewGridSpot = maxFieldSpot;
						if (potentialNewGridSpot.busyAge === 0 || potentialNewGridSpot.busyAge > 15) {
							p.ageSinceStuck = 0;
							p.attractor.oldIndex = index;
							p.attractor.gridSpotIndex = potentialNewGridSpot.spotIndex;
							gridSpot = potentialNewGridSpot;
							gridSpot.busyAge = 1;
						} else {
							p.ageSinceStuck++;
						}
					} else {
						p.ageSinceStuck++;
					}
				
					if (p.ageSinceStuck === 10) {
						kill(p.name);
						continue;
					}
				}
			
				const k = config.springK, visc = config.viscosity;
				const dx = p.x - gridSpot.x;
				const dy = p.y - gridSpot.y;
				
				const xAcc = -k * dx;
				const yAcc = -k * dy;
				
				p.xSpeed += xAcc;
				p.ySpeed += yAcc;
				
				p.xSpeed *= visc;
				p.ySpeed *= visc;
				
				p.x += config.speedMultiplier * p.xSpeed;
				p.y += config.speedMultiplier * p.ySpeed;
				
				p.age++;
				
				if (p.age > config.lifespan) {
					kill(p.name);
					deathCount.value++;
				}
			}
		};
    
		const draw = () => {
			drawnInLastFrame.value = 0;
			if (!particles.value.length) return false;
			
			ctx.beginPath();
			ctx.rect(0, 0, width.value, height.value);
			ctx.fillStyle = `rgba(0, 0, 0, ${config.fadeSpeed})`; // Negro semi-transparente
			ctx.globalCompositeOperation = 'destination-out'; // Esto "borra" gradualmente
			ctx.fill();
			ctx.globalCompositeOperation = 'source-over'; // Volver al modo normal
			ctx.closePath();
			
			for (let i = 0; i < particles.value.length; i++) {
				const p = particles.value[i];
				
				const h = p.hue + stepCount / config.colorChangeSpeed;
				const s = p.sat;
				const l = p.lum;
				const a = 1;
				
				const last = dataXYtoCanvasXY(p.xLast, p.yLast);
				const now = dataXYtoCanvasXY(p.x, p.y);
				const attracSpot = grid[p.attractor.gridSpotIndex];
				const attracXY = dataXYtoCanvasXY(attracSpot.x, attracSpot.y);
				const oldAttracSpot = grid[p.attractor.oldIndex];
				const oldAttracXY = dataXYtoCanvasXY(oldAttracSpot.x, oldAttracSpot.y);
				
				ctx.beginPath();
				ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`;
				ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`;
				
				ctx.moveTo(last.x, last.y);
				ctx.lineTo(now.x, now.y);
				ctx.lineWidth = 1.5 * config.dataToImageRatio;
				ctx.stroke();
				ctx.closePath();
				
				ctx.beginPath();
				ctx.lineWidth = 1.5 * config.dataToImageRatio;
				ctx.moveTo(oldAttracXY.x, oldAttracXY.y);
				ctx.lineTo(attracXY.x, attracXY.y);
				ctx.arc(attracXY.x, attracXY.y, 1.5 * config.dataToImageRatio, 0, 2 * Math.PI, false);
				ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`;
				ctx.fill();
				ctx.closePath();
				
				drawnInLastFrame.value++;
			}
		};
    
		const dataXYtoCanvasXY = (x, y) => {
			const zoomFactor = 1.6;
			const xC = width.value / 2;
			const yC = height.value / 2;
			const xx = xC + x * zoomFactor * config.dataToImageRatio;
			const yy = yC + y * zoomFactor * config.dataToImageRatio;
			
			return { x: xx, y: yy };
		};
    
		const evolve = () => {
			const time1 = performance.now();
			
			stepCount++;
			
			grid.forEach(e => {
				if (e.busyAge > 0) e.busyAge++;
			});
			
			if (stepCount % config.birthFreq === 0 && 
				(particles.value.length + config.popPerBirth) < config.maxPop) {
				birth();
			}
		
			move();
			draw();
			
			const time2 = performance.now();
			fps.value = Math.floor(1000 / (time2 - time1));
		};
		
		const animate = () => {
			evolve();
			animationId = requestAnimationFrame(animate);
		};
		
		const zoomIn = () => {
			zoom.value = Math.min(200, zoom.value + 10);
		};
	
		const zoomOut = () => {
			zoom.value = Math.max(50, zoom.value - 10);
		};
	
		const saveCanvas = () => {
			const link = document.createElement('a');
			link.download = 'particle-animation.png';
			link.href = canvas.value.toDataURL();
			link.click();
		};
		
		onMounted(() => {
			setup();
			animate();
			
			const handleResize = () => {
				if (canvas.value) {
					canvas.value.width = window.innerWidth;
					canvas.value.height = window.innerHeight;
					width.value = canvas.value.width;
					height.value = canvas.value.height;
					initDraw();
				}
			};
	
			window.addEventListener('resize', handleResize);
			
			onBeforeUnmount(() => {
				window.removeEventListener('resize', handleResize);
			});
		});
	
		onBeforeUnmount(() => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		});
	
		return {
			canvas,
			particles,
			deathCount,
			drawnInLastFrame,
			fps,
			zoom,
			width,
			height,
			zoomIn,
			zoomOut,
			saveCanvas
		};
	}
};

</script>

<template>
	<div class="particle-container">
		<canvas ref="canvas"></canvas>
		<div class="ui" v-if="showUI">
			<p class="zoom">
				<span class="zoom zoomin" @click="zoomIn">+</span>
				<span class="zoom zoomout" @click="zoomOut">-</span>
			</p>
			<p class="zoomlevel">
				<span class="percent">{{ zoom }}</span> % - 
				(<span class="width">{{ width }}</span>px)
				(<span class="height">{{ height }}</span>px)
			</p>
			<p>Dead: <span class="dead">{{ deathCount }}</span></p>
			<p>Alive: <span class="alive">{{ particles.length }}</span></p>
			<p>Drawn: <span class="drawn">{{ drawnInLastFrame }}</span></p>
			<p><span class="fps">{{ fps }}</span> FPS</p>
			<a class="save" href="#" @click.prevent="saveCanvas" download="capture.png">Save</a>
		</div>
	</div>
</template>


<style scoped>
.particle-container {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: absolute;
	top: 0;
	transform: scale(1.5);
	margin: 0;
	padding: 0;
}

canvas {
	background: transparent;
	width: 100%;
	height: 100%;
	display: block;
}

.ui {
	position: fixed;
	z-index: 5;
	bottom: 0;
	left: 0;
	width: 120px;
	padding: 10px;
	background: rgba(255, 255, 255, 0.7);
	font-family: Arial, sans-serif;
}

.ui p {
	font-size: 11px;
	font-weight: 700;
	margin: 5px 0;
}

.ui p.zoom {
	margin-bottom: 5px;
}

.ui span.zoom {
	margin-right: 5px;
	border: solid 1px #777;
	cursor: pointer;
	border-radius: 2px;
	display: inline-block;
}

.ui span.zoomin {
	padding: 2px 5px;
}

.ui span.zoomout {
	padding: 2px 8px;
}

.ui a.save {
	display: inline-block;
	margin-top: 10px;
	padding: 5px 10px;
	background: #333;
	color: white;
	text-decoration: none;
	border-radius: 3px;
	font-size: 11px;
}

</style>