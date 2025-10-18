<script setup>
import { Globe, Smartphone, Server } from 'lucide-vue-next';
import ServiceCard from '../components/ServiceCard.vue';

const services = [
	{
		icon: Globe,
		title: 'Desarrollo Sostenible de Aplicaciones Web (DAW)',
		description: 'Optimizamos cada línea de código para minimizar el consumo energético. Utilizamos frameworks eficientes, lazy loading, compresión de assets y técnicas de renderizado optimizado para reducir la carga del servidor y el consumo de recursos del cliente.',
		features: [
			'Optimización del rendimiento y velocidad de carga',
			'Código limpio y eficiente energéticamente',
			'Hosting en servidores con energía 100% renovable',
			'CDN optimizado para reducir distancia de transferencia'
		]
	},
	{
		icon: Smartphone,
		title: 'Desarrollo de Aplicaciones Multiplataforma Eficientes (DAM)',
		description: 'Diseñamos aplicaciones que funcionan de manera óptima en múltiples dispositivos, reduciendo el consumo de recursos y maximizando la eficiencia energética. Una sola base de código para todas las plataformas significa menor impacto ambiental.',
		features: [
			'Desarrollo multiplataforma con código único',
			'Optimización de batería y consumo de red',
			'Gestión inteligente de recursos del dispositivo',
			'Actualizaciones OTA para reducir ciclos de desarrollo'
		]
	},
	{
		icon: Server,
		title: 'Administración de Sistemas Energéticamente Eficientes (ASIX)',
		description: 'Implementamos estrategias avanzadas para reducir el consumo energético en centros de datos y redes corporativas. Utilizamos virtualización, balanceo de carga inteligente y tecnologías de enfriamiento eficiente.',
		features: [
			'Migración a infraestructura cloud eficiente',
			'Implementación de energías renovables',
			'Monitorización en tiempo real del consumo',
			'Estrategias de refrigeración pasiva y activa'
		]
	}
];

</script>

<template>
	<section id="servicios">
		<h2>Nuestros Servicios</h2>
		<span>Soluciones tecnológicas diseñadas para minimizar el impacto ambiental sin comprometer la calidad ni el rendimiento</span>
		<div class="cards-container">
			<ServiceCard 
				v-for="servicio in services" 
				:key="servicio.title"
				:icon="servicio.icon"
				:title="servicio.title"
			>
				<template #description>
					<p>{{ servicio.description }}</p>
				</template>
				<template #features>
					<ul class="features-list">
						<li v-for="feature in servicio.features" :key="feature">
							{{ feature }}
						</li>
					</ul>
				</template>
			</ServiceCard>
		</div>
	</section>	
</template>
<style scoped>

section {
	width: 100%;
	min-height: 100vh;
	padding: 4rem 2rem;
	background-color: var(--bg-secondary-40);
	display: flex;
	flex-direction: column;
	align-items: center;
}

h2 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
	text-align: center;
}

span {
	font-size: 1.2rem;
	text-align: center;
	max-width: 800px;
	margin-bottom: 3rem;
}

p {
	font-size: 0.9rem;
	line-height: 1.6rem;
	font-weight: 300;
	max-width: 800px;
	margin-bottom: 1.2rem;
}

.cards-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
	width: 100%;
	max-width: 1500px;
}

.features-list {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	font-size: 0.9rem;
	list-style-type: disc;
	margin-left: 1rem;
}

</style>