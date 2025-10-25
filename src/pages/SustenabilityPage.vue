<script setup>
import { TrendingDown, Award, MapPin } from 'lucide-vue-next';
import SectionContainer from '../components/global/SectionContainer.vue';
import Km0Concept from '../components/features/sustenability/Km0Section.vue';

const items = [
	{
		icon: TrendingDown,
		title: 'Reducción de Costes Ambientales',
		description: 'Las empresas que trabajan con GreenDev experimentan una reducción significativa en sus costes operativos gracias a la optimización del consumo energético. Menos consumo significa menores facturas y un impacto ambiental reducido.',
		features: [
			'Reducción de hasta 40% en costes de infraestructura',
			'Optimización del ciclo de vida de hardware',
			'Menor necesidad de refrigeración y mantenimiento'
		]
	},
	{
		icon: Award,
		title: 'Ventajas Competitivas Sostenibles',
		description: 'La eficiencia energética y el compromiso con la sostenibilidad ofrecen ventajas competitivas tangibles en el mercado actual. Los consumidores y socios comerciales valoran cada vez más las empresas responsables.',
		features: [
			'Mejora de la imagen corporativa y branding',
			'Acceso a incentivos y subvenciones verdes',
			'Atracción de talento comprometido con la sostenibilidad'
		]
	}
];

const concepts = [
	{
		title: 'Servidores Locales',
		description: 'Uso de infraestructura de servidores cercana geográficamente para reducir la latencia y el consumo energético en transmisión de datos.'
	},
	{
		title: 'Tecnologías Locales',
		description: 'Priorización de proveedores de servicios y tecnologías con presencia local, reduciendo la huella de carbono del transporte y logística.'
	},
	{
		title: 'Edge Computing',
		description: 'Procesamiento de datos cerca de donde se generan, minimizando transferencias innecesarias y optimizando el consumo energético.'
	}
];
</script>

<template>
	<SectionContainer>
		<div class="section">
			<h2>Enfoque Sostenible</h2>
			<span>La sostenibilidad no es solo responsabilidad ambiental, es una ventaja competitiva</span>

			<div class="card-container">
				<article v-for="item in items" :key="item.title" class="focus-card">
					<component :is="item.icon" class="card-icon" />
					<h3>{{ item.title }}</h3>
					<p>{{ item.description }}</p>
					<ul>
						<li v-for="feature in item.features" :key="feature">
							{{ feature }}
						</li>
					</ul>
				</article>
			</div>
		</div>
		
	</SectionContainer>
	<Km0Concept />
</template>

<style scoped>
.section {
	width: 100%;
	max-width: 1500px;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
}

h2 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
	text-align: center;
}

span {
	font-size: 1.2rem;
	text-align: center;
	margin-bottom: 3rem;
}

.card-container {
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 4rem;
	margin-bottom: 3rem;
}

.focus-card {
	max-width: 100%;
	border-left: 5px solid var(--secondary-50);
	padding: 2rem 0 2rem 2rem;
	background: linear-gradient(to right, var(--secondary-30), transparent);
}

.card-icon {
	width: 60px;
	height: 60px;
	color: var(--secondary-100);
	margin-bottom: 1rem;
	transition: all 0.3s ease;
}

h3 {
	font-size: 1.25rem;
	color: var(--text-primary);
	margin: 0 0 1rem 0;
}

p {
	font-size: 0.9rem;
	line-height: 1.6rem;
	font-weight: 300;
	margin-bottom: 1.2rem;
}

ul {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	font-size: 0.9rem;
	list-style-type: disc;
	margin-left: 1rem;
}

ul li {
	margin-bottom: 1rem;
}


.container {
	width: 100%;
	max-width: 1300px;
	margin: auto;
	padding: 3rem;
	display: flex;
	flex-direction: column;
	backdrop-filter: blur(15px);
	border: 1px solid var(--secondary-30);
	border-radius: 0.6rem;
	background-color: var(--bg-primary-50);
}

.container-header {
	width: 100%;
	display: flex;
	gap: 1rem;
}

.header-icon {
	width: 80px;
	height: 80px;
	color: var(--secondary-100);
}

.container-article {
	display: flex;
	gap: 1rem;
}

.card {
	width: 100%;
	padding: 2rem;
	background-color: var(--bg-secondary-40);
	border-radius: 0.6rem;
}

.card p {
	font-size: 0.8rem;
	opacity: 0.8;
	margin-top: 1rem;
}


@media (max-width: 1200px) {
	.card-container {
		gap: 2rem;
	}

	.container {
		padding: 2rem;
		max-width: 95%;
	}
}

@media (max-width: 768px) {
	section {
		padding: 2rem 1rem;
	}

	h2 {
		font-size: 2rem;
	}

	span {
		font-size: 1.1rem;
		margin-bottom: 2rem;
	}

	.card-container {
		flex-direction: column;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.focus-card {
		padding: 1.5rem;
		border-left: 4px solid var(--secondary-50);
		border-top: 4px solid var(--secondary-50);
		background: linear-gradient(to bottom, var(--secondary-30), transparent);
	}

	.card-icon {
		width: 50px;
		height: 50px;
	}

	h3 {
		font-size: 1.1rem;
	}

	p {
		font-size: 0.85rem;
		line-height: 1.5rem;
	}

	.km {
		position: relative;
		height: auto;
		min-height: 600px;
		display: flex;
		flex-direction: column;
	}

	.km img {
		position: absolute;
		height: 100%;
		z-index: 1;
	}

	.km .wraper {
		position: relative;
		height: auto;
		min-height: 600px;
		z-index: 2;
		flex: 1;
	}

	.container {
		position: relative;
		margin: 1rem;
		padding: 1.5rem;
		height: auto;
		min-height: 500px;
	}

	.container-header {
		flex-direction: column;
		text-align: center;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.header-icon {
		width: 60px;
		height: 60px;
		margin: 0 auto;
	}

	.container-article {
		flex-direction: column;
		gap: 1rem;
	}

	.card {
		padding: 1.5rem;
	}

	.card h4 {
		font-size: 1rem;
	}

	.card p {
		font-size: 0.8rem;
	}
}

@media (max-width: 480px) {
	section {
		padding: 1.5rem 1rem;
	}

	h2 {
		font-size: 1.75rem;
	}

	span {
		font-size: 1rem;
	}

	.focus-card {
		padding: 1rem;
	}

	.card-icon {
		width: 40px;
		height: 40px;
		margin-bottom: 0.75rem;
	}

	h3 {
		font-size: 1rem;
		margin-bottom: 0.75rem;
	}

	p {
		font-size: 0.8rem;
		line-height: 1.4rem;
		margin-bottom: 1rem;
	}

	ul {
		font-size: 0.8rem;
		gap: 0.5rem;
		margin-left: 0.5rem;
	}

	ul li {
		margin-bottom: 0.5rem;
	}

	.container {
		padding: 1rem;
	}

	.container-header h3 {
		font-size: 1.25rem;
	}

	.container-header p {
		font-size: 0.85rem;
	}

	.card {
		padding: 1rem;
	}

	.card h4 {
		font-size: 0.9rem;
	}

	.card p {
		font-size: 0.75rem;
		margin-top: 0.5rem;
	}
}

@media (max-width: 360px) {
	h2 {
		font-size: 1.5rem;
	}

	span {
		font-size: 0.9rem;
	}

	.km {
		min-height: 500px;
	}

	.km .wraper {
		min-height: 500px;
	}

	.container {
		padding: 0.75rem;
	}

	.card {
		padding: 0.75rem;
	}
}
</style>