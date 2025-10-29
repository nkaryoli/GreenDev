<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref(null);

let ctx = null;
let W = 0;
let H = 0;
let pixels = [];
let animationId = null;

const fov = 250;

function createPixels() {
    pixels = [];
    // crear una rejilla centrada en X, con profundidad Z
    const step = 6;
    const spanX = 800; // ancho virtual
    const spanZ = 500; // profundidad virtual
    for (let x = -spanX / 2; x < spanX / 2; x += step) {
        for (let z = -spanZ / 2; z < spanZ / 2; z += step) {
            pixels.push({ x: x, y: 100, z: z });
        }
    }
}

function resize() {
    if (!canvasRef.value) return;
    const canvas = canvasRef.value;
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    // opcional: regenerar pixels si quieres adaptar a tamaño
    // createPixels();
}

function render(ts) {
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, W, H);
    const len = pixels.length;

    for (let i = 0; i < len; i++) {
        const pixel = pixels[i];
        const scale = fov / (fov + pixel.z);
        const x2d = pixel.x * scale + W / 2;
        const y2d = pixel.y * scale + H / 2;

        if (x2d >= 0 && x2d <= W && y2d >= 0 && y2d <= H) {
            const c = (Math.round(y2d) * imageData.width + Math.round(x2d)) * 4;
            imageData.data[c] = 0;        // R
            imageData.data[c + 1] = 255;  // G
            imageData.data[c + 2] = 255;   // B
            imageData.data[c + 3] = 255;  // A
        }

        // animación
        pixel.z -= 0.4;
        pixel.y = H / 14 + Math.sin((i / len) * 15 + ts / 450) * 10;

        if (pixel.z < -fov) pixel.z += 2 * fov;
    }

    ctx.putImageData(imageData, 0, 0);
}

function loop(ts) {
    // limpiar fondo
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);

    render(ts);
    animationId = requestAnimationFrame(loop);
}

onMounted(() => {
    const canvas = canvasRef.value;
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    resize();
    createPixels();

    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(loop);
});

onUnmounted(() => {
    window.removeEventListener('resize', resize);
    if (animationId) cancelAnimationFrame(animationId);
});
</script>

<template>
    <canvas ref="canvasRef"></canvas>
</template>

<style scoped>
canvas {
	position: absolute;
	top: 0;
    display: block;
    width: 100%;
    height: 100%;
}
</style>