<script setup>
import { Globe, Smartphone, Server } from 'lucide-vue-next';
import SectionContainer from '../../global/SectionContainer.vue';
import SectionHeader from '../../global/SectionHeadder.vue';
import Card from './Card.vue';
import PrimaryBtn from '../../global/PrimaryBtn.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigate = () => {
	router.push('/contacto');
};
const services = [
	{
		icon: Globe,
		badge: 'DAW',
		title: 'Desarrollo Sostenible de Aplicaciones Web',
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
		badge: 'DAM',
		title: 'Desarrollo de Aplicaciones Multiplataforma Eficientes',
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
		badge: 'ASIX',
		title: 'Administración de Sistemas Energéticamente Eficientes',
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
	<SectionContainer>
		<SectionHeader id="services-overview">
			<template #title>Nuestras áreas de especialización</template>
			<template #subtitle>Tres servicios complementarios que cubren todas las necesidades 
				tecnológicas de tu empresa, siempre con sostenibilidad en el centro.
			</template>
		</SectionHeader>
		<div class="cards-container">
			<Card v-for="(servicio, index) in services" :key="index" :icon="servicio.icon" :title="servicio.title" class="card">
				<template #badge>{{ servicio.badge }}</template>
				<template #description>
					<p>{{ servicio.description }}</p>
				</template>
				<template #features>
					<div class="card-number">{{ String(index + 1).padStart(2, '0') }}</div>
					<ul class="features-list">
						<li v-for="feature in servicio.features" :key="feature">
							{{ feature }}
						</li>
					</ul>
					<div class="cta-container">
					<PrimaryBtn @click="navigate" variant="default" size="medium">Solicitar Información</PrimaryBtn></div>
				</template>
			</Card>
		</div>
	</SectionContainer>
</template>

<style scoped>

.cards-container {
	display: grid;
	grid-template-columns: auto auto;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	width: 100%;
	max-width: 1200px;
	margin: 3rem auto 0 auto;
}

.features-list {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	font-size: 0.9rem;
	list-style-type: disc;
	margin: 1rem;
	opacity: 0.85;
}

.cta-container {
	display: flex;
	justify-content: center;
	margin-top: 1rem;
	padding-top: 1rem;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.cards-container p {
	/* max-width: 70%; */
	margin-bottom: 1rem;
	opacity: 0.85;
}

.card-number {
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 4rem;
	font-weight: 700;
	color: var(--secondary-50);
	line-height: 1;
	transition: all 0.5s ease;
	opacity: 0.3;
}

.card:hover .card-number {
	font-weight: 800;
	color: var(--primary-100);
	opacity: 1;

}
</style>