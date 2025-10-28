<script setup>
import { Search, Lightbulb, Code, TestTube, Rocket, Headphones, Check, Clock, Target, Zap, Shield, TrendingUp } from 'lucide-vue-next';
import SectionHeader from '../../global/SectionHeadder.vue';
import SectionContainer from '../../global/SectionContainer.vue';

const phases = [
	{
		icon: Search,
		title: 'Análisis y Descubrimiento',
		description: 'Estudiamos tus necesidades, objetivos y el contexto de tu proyecto para diseñar la mejor solución sostenible.',
		actions: [
			'Reunión inicial de requisitos',
			'Análisis de impacto ambiental',
			'Definición de objetivos',
			'Estudio de viabilidad'
		],
		duration: '1-2 semanas'
	},
	{
		icon: Lightbulb,
		title: 'Planificación y Diseño',
		description: 'Creamos una arquitectura eficiente y diseñamos la experiencia de usuario optimizada para reducir el consumo energético.',
		actions: [
			'Arquitectura de información',
			'Diseño UX/UI sostenible',
			'Selección de tecnologías verdes',
			'Planificación de sprints'
		],
		duration: '2-3 semanas'
	},
	{
		icon: Code,
		title: 'Desarrollo',
		description: 'Implementamos código limpio, eficiente y escalable siguiendo las mejores prácticas de desarrollo sostenible.',
		actions: [
			'Código optimizado',
			'Lazy loading y code splitting',
			'Optimización de imágenes',
			'Revisiones de código continuas'
		],
		duration: '4-12 semanas'
	},
	{
		icon: TestTube,
		title: 'Testing y Optimización',
		description: 'Probamos exhaustivamente el rendimiento, la accesibilidad y el consumo energético antes del lanzamiento.',
		actions: [
			'Tests de rendimiento',
			'Auditoría de accesibilidad',
			'Medición de huella de carbono',
			'Optimización de recursos'
		],
		duration: '1-2 semanas'
	},
	{
		icon: Rocket,
		title: 'Despliegue',
		description: 'Lanzamos tu proyecto en infraestructura verde con estrategias de despliegue que minimizan el impacto ambiental.',
		actions: [
			'Deploy en servidores verdes',
			'Configuración de CDN eficiente',
			'Monitorización de CO₂',
			'Documentación completa'
		],
		duration: '1 semana'
	},
	{
		icon: Headphones,
		title: 'Soporte y Mantenimiento',
		description: 'Te acompañamos después del lanzamiento con soporte continuo y actualizaciones sostenibles.',
		actions: [
			'Soporte técnico 24/7',
			'Actualizaciones de seguridad',
			'Optimizaciones continuas',
			'Informes de impacto mensual'
		],
		duration: 'Continuo'
	}
];

const processBenefits = [
	{
		icon: Target,
		title: 'Transparencia Total',
		description: 'Comunicación constante y acceso a todas las fases del proyecto en tiempo real.'
	},
	{
		icon: Zap,
		title: 'Entregas Rápidas',
		description: 'Metodología ágil con sprints cortos para ver resultados desde las primeras semanas.'
	},
	{
		icon: Shield,
		title: 'Calidad Garantizada',
		description: 'Testing exhaustivo y revisiones de código que aseguran un producto robusto y eficiente.'
	},
	{
		icon: TrendingUp,
		title: 'Mejora Continua',
		description: 'Optimizaciones constantes basadas en métricas reales de rendimiento y sostenibilidad.'
	}
];
</script>

<template>
	<section class="work-process">
		<SectionContainer>
			<SectionHeader>
				<template #title>Nuestro proceso de desarrollo sostenible</template>
				<template #subtitle>Una metodología probada que garantiza eficiencia, transparencia y
					compromiso ambiental en cada fase del proyecto.</template>
			</SectionHeader>
			<div class="process-timeline">
				<article v-for="(phase, index) in phases" :key="index" class="phase-card">
					<div class="phase-number">{{ String(index + 1).padStart(2, '0') }}</div>
					<div class="phase-header">
						<div class="phase-icon-wrapper">
							<component :is="phase.icon" class="phase-icon" />
						</div>
						<h3>{{ phase.title }}</h3>
					</div>
					<div class="phase-content">
						<p>{{ phase.description }}</p>
						<ul class="phase-actions">
							<li v-for="(action, idx) in phase.actions" :key="idx">
								<Check class="check-icon" />
								<span>{{ action }}</span>
							</li>
						</ul>
						<div class="phase-duration">
							<Clock class="duration-icon" />
							<span>{{ phase.duration }}</span>
						</div>
					</div>
				</article>
			</div>


			<div class="process-benefits">

				<h3>Beneficios de nuestro proceso</h3>
				<div class="benefits-grid">
					<div v-for="(benefit, index) in processBenefits" :key="index" class="benefit-item">
						<div class="wrapper">
							<component :is="benefit.icon" class="benefit-icon" />
							<h4>{{ benefit.title }}</h4>
							<p>{{ benefit.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>

	</section>
</template>

<style scoped>
.work-process {
	background: var(--bg-secondary-40);
}

.process-timeline {
	max-width: 1500px;
	display: flex;
	gap: 1rem;
	margin: 0 auto 5rem auto;
	height: 620px;
}

.phase-card {
	position: relative;
	flex: 1;
	background: var(--bg-primary-50);
	border: 2px solid var(--secondary-30);
	border-radius: 1.5rem;
	transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 2.5rem;
}

.phase-card:hover {
	flex: 4;
	border-color: var(--secondary-100);
	box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.phase-number {
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	font-size: 3rem;
	font-weight: 900;
	color: var(--secondary-50);
	line-height: 1;
	opacity: 0.5;
	transition: opacity 0.3s ease;
}

.phase-card:hover .phase-number {
	opacity: 0.3;
}

.phase-header {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	min-height: 0;
}

.phase-icon-wrapper {
	width: 70px;
	height: 70px;
	background: linear-gradient(135deg, var(--secondary-50), var(--primary-50));
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
	transition: all 0.3s ease;
	opacity: 0;
}

.phase-card:hover .phase-icon-wrapper {
	transform: scale(0.9);
	opacity: 1;
}

.phase-icon {
	width: 35px;
	height: 35px;
}

.phase-card h3 {
	font-size: 1.4rem;
	font-weight: 500;
	text-align: center;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	transition: all 0.001s ease;
	white-space: nowrap;
	margin: 0;
}

.phase-card:hover h3 {
	writing-mode: horizontal-tb;
	transform: rotate(0);
	text-align: left;
	margin-bottom: 1rem;
}

.phase-content {
	opacity: 0;
	max-height: 0;
	overflow: hidden;
	transition: all 1s ease;
}

.phase-card:hover .phase-content {
	opacity: 1;
	max-height: 1000px;
}

.phase-content>p {
	font-size: 1rem;
	line-height: 1.7;
	margin-bottom: 1.5rem;
	opacity: 0.85;
}

.phase-actions {
	list-style: none;
	padding: 0;
	margin: 0 0 1.5rem 0;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.phase-actions li {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	font-size: 0.95rem;
}

.check-icon {
	width: 18px;
	height: 18px;
	color: var(--secondary-100);
	flex-shrink: 0;
}

.phase-duration {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.75rem 1.25rem;
	background: var(--secondary-30);
	border-radius: 2rem;
	font-weight: 600;
	color: var(--secondary-100);
	width: fit-content;
}

.duration-icon {
	width: 18px;
	height: 18px;
}


.process-benefits {
	padding: 3rem 0;
	max-width: 1500px;
	margin: auto;
	box-shadow: ;
}

.process-benefits h3 {
	font-size: 2rem;
	font-weight: 500;
	text-align: center;
	margin-bottom: 3rem;
}

.benefits-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 2rem;
}

.benefit-item {
	position: relative;
	padding: 0;
	text-align: center;
	transition: all 0.3s ease;
	overflow: hidden;
	border-radius: 1rem;
	background: var(--bg-secondary);
}

.benefit-item::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 200%;
	height: 200%;
	background: conic-gradient(
	from 0deg,
	transparent 0deg 160deg,
	var(--primary-100) 160deg 170deg,
	var(--secondary-100) 170deg 180deg,
	transparent 180deg 340deg,
	var(--primary-100) 340deg 350deg,
	var(--secondary-100) 350deg 360deg
);
	transform: translate(-50%, -50%) rotate(0deg);
	animation: rotating 8s linear infinite paused;
	border-radius: inherit;
	z-index: 0;
}

.benefit-item:hover::before {
	animation-play-state: running;
}

.benefit-item:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 30px var(--primary-10);
}

.wrapper {
	position: relative;
	background: var(--bg-secondary);
	padding: 2rem;
	border-radius: calc(1rem - 2px);
	margin: 2px;
	z-index: 1;
	transition: all 0.3s ease;
	height: 99%;
}

@keyframes rotating {
	0% {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	100% {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}

.benefit-icon {
	width: 50px;
	height: 50px;
	color: var(--primary-100);
	margin: 0 auto 1rem;
}

.benefit-item h4 {
	font-size: 1.3rem;
	margin-bottom: 0.75rem;
	color: var(--text-primary);
}

.benefit-item p {
	font-size: 0.95rem;
	line-height: 1.6;
}

@media (max-width: 768px) {
	.work-process {
		padding: 3rem 1rem;
	}

	.section-header h2 {
		font-size: 2rem;
	}

	.process-timeline {
		flex-direction: column;
		height: auto;
	}

	.phase-card {
		min-height: 120px;
		padding: 1.5rem;
	}

	.phase-card:hover {
		flex: 1;
		min-height: 500px;
	}

	.phase-card h3 {
		font-size: 1.2rem;
	}

	.phase-number {
		font-size: 2rem;
		top: 1rem;
		right: 1rem;
	}
}
</style>