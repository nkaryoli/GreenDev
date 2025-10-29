<script setup>
import { Triangle, DollarSign, Users, Leaf, Check, Network, Sparkles, TrendingUp, Heart, Sprout } from 'lucide-vue-next';

const dimensions = [
	{
		icon: DollarSign,
		title: 'Dimensión Económica',
		description: 'Crecimiento económico que sea rentable y viable a largo plazo, sin agotar los recursos naturales ni comprometer las generaciones futuras.',
		features: [
			'Eficiencia en el uso de recursos',
			'Innovación tecnológica sostenible',
			'Modelo de negocio circular',
			'Inversión en economía verde'
		]
	},
	{
		icon: Users,
		title: 'Dimensión Social',
		description: 'Equidad, justicia social y bienestar para todas las personas, garantizando derechos humanos y oportunidades para todos.',
		features: [
			'Igualdad de oportunidades',
			'Inclusión digital y accesibilidad',
			'Condiciones laborales dignas',
			'Educación y formación continua'
		]
	},
	{
		icon: Leaf,
		title: 'Dimensión Ambiental',
		description: 'Protección del medio ambiente y los ecosistemas, reduciendo el impacto negativo de las actividades humanas en el planeta.',
		features: [
			'Reducción de emisiones de CO₂',
			'Uso de energías renovables',
			'Conservación de biodiversidad',
			'Gestión responsable de residuos'
		]
	}
];

const integrations = [
	{
		icon: TrendingUp,
		title: 'Equilibrio Económico-Ambiental',
		description: 'Desarrollamos soluciones tecnológicas que no solo son rentables para nuestros clientes, sino que también reducen el consumo energético y las emisiones de CO₂. La eficiencia operativa se traduce en ahorros económicos y beneficios ambientales simultáneos.'
	},
	{
		icon: Heart,
		title: 'Equilibrio Social-Económico',
		description: 'Creamos tecnología accesible y asequible que democratiza el acceso a soluciones digitales avanzadas. Promovemos la inclusión digital y condiciones laborales justas en toda nuestra cadena de valor, generando empleo verde y oportunidades de formación.'
	},
	{
		icon: Sprout,
		title: 'Equilibrio Ambiental-Social',
		description: 'Nuestras soluciones sostenibles benefician a las comunidades al reducir la contaminación y mejorar la calidad de vida. Apoyamos proyectos que tienen impacto social positivo mientras protegen el medio ambiente para las generaciones futuras.'
	}
];
</script>

<template>
	<section class="sustainable-development">
		<div class="container">
			<div class="section-header">
				<h2>Desarrollo Sostenible</h2>
				<p class="lead">
					Un modelo de desarrollo que equilibra las necesidades económicas,
					sociales y ambientales para asegurar el bienestar presente sin
					comprometer el futuro.
				</p>
			</div>

			<div class="intro-card">
				<Triangle class="intro-icon" />
				<h3>El Modelo de las Tres Dimensiones</h3>
				<p>
					El desarrollo sostenible se basa en el equilibrio entre tres pilares
					fundamentales que deben trabajar en armonía para garantizar un futuro
					próspero y equitativo para todos.
				</p>
			</div>

			<!-- Las 3 Dimensiones -->
			<div class="dimensions-grid">
				<article v-for="(dimension, index) in dimensions" :key="index" class="dimension-card">
					<div class="dimension-icon-wrapper">
						<component :is="dimension.icon" class="dimension-icon" />
					</div>
					<h3>{{ dimension.title }}</h3>
					<p class="dimension-description">{{ dimension.description }}</p>
					<ul class="dimension-features">
						<li v-for="(feature, idx) in dimension.features" :key="idx">
							<Check class="check-icon" />
							<span>{{ feature }}</span>
						</li>
					</ul>
				</article>
			</div>

			<!-- Cómo GreenDev Integra las 3 Dimensiones -->
			<div class="integration-section">
				<h3 class="integration-title">
					<Network class="title-icon" />
					Cómo GreenDev Integra las Tres Dimensiones
				</h3>

				<div class="integration-grid">
					<article v-for="(integration, index) in integrations" :key="index" class="integration-card">
						<div class="integration-header">
							<component :is="integration.icon" class="integration-icon" />
							<h4>{{ integration.title }}</h4>
						</div>
						<p>{{ integration.description }}</p>
					</article>
				</div>

				<div class="benefits-banner">
					
					<div>
						<h4>Beneficios a largo plazo</h4>
						<p>
							Las empresas que integran estos tres pilares en sus proyectos
							tecnológicos no solo aseguran su viabilidad económica, sino que
							también contribuyen activamente a la construcción de un futuro
							más justo, equitativo y sostenible para la sociedad y el planeta.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.sustainable-development {
	padding: 5rem 2rem;
	background: var(--bg-primary);
}

.container {
	max-width: 1200px;
	margin: 0 auto;
}

.section-header {
	text-align: center;
	max-width: 900px;
	margin: 0 auto 3rem;
}

h2 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: var(--text-primary);
}

.lead {
	font-size: 1.2rem;
	line-height: 1.8;
	color: var(--text-secondary);
}

.intro-card {
	margin: 0 auto 4rem;
	padding: 3rem;
	border: 2px solid var(--primary-30);
	background: linear-gradient(135deg, var(--secondary-30), var(--bg-primary),  var(--secondary-30));
	border-radius: 1.5rem;
	text-align: center;
	transition: all 0.3s ease;
}


.intro-icon {
	width: 60px;
	height: 60px;
	color: var(--secondary-100);
	margin: 0 auto 1.5rem;
}

.intro-card:hover  .intro-icon {
	color: var(--primary-100);
}

.intro-card h3 {
	font-size: 1.8rem;
	margin-bottom: 1rem;
	color: var(--text-primary);
}

.intro-card p {
	font-size: 1.1rem;
	line-height: 1.7;
	color: var(--text-secondary);
}

.dimensions-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin-bottom: 5rem;
}

.dimension-card {
	padding: 2.5rem;
	background: linear-gradient(135deg, var(--secondary-30), var(--bg-primary),  var(--secondary-30));
	border: 2px solid var(--secondary-30);
	border-radius: 1.5rem;
	transition: all 0.3s ease;
}

.dimension-card:hover {
	background: linear-gradient(135deg, var(--bg-primary), var(--secondary-30), var(--bg-primary));
	border: 2px solid var(--secondary-100);
	transform: translateY(-8px);
	box-shadow: 0 20px 50px var(--primary-30);
}

.dimension-icon-wrapper {
	width: 80px;
	height: 80px;
	background: linear-gradient(135deg, var(--secondary-100), var(--primary-100));
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
}

.dimension-icon {
	width: 40px;
	height: 40px;
	color: white;
}

.dimension-card h3 {
	font-size: 1.6rem;
	margin-bottom: 1rem;
	color: var(--text-primary);
}

.dimension-description {
	font-size: 1rem;
	line-height: 1.6;
	color: var(--text-secondary);
	margin-bottom: 1.5rem;
}

.dimension-features {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.dimension-features li {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	font-size: 0.95rem;
	color: var(--text-secondary);
}

.check-icon {
	width: 18px;
	height: 18px;
	color: var(--primary-100);
	flex-shrink: 0;
}

.integration-section {
	padding: 4rem 0 0 0;
}

.integration-title {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	font-size: 2rem;
	text-align: center;
	margin-bottom: 3rem;
	color: var(--text-primary);
}

.title-icon {
	width: 40px;
	height: 40px;
	color: var(--secondary-100);
}

.integration-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin-bottom: 3rem;
}

.integration-card {
	padding: 2rem;
	background: var(--bg-secondary-40);
	border: 2px solid var(--secondary-30);
	border-radius: 1rem;
	transition: all 0.3s ease;
}

.integration-card:hover {
	border-color: var(--secondary-100);
	transform: translateY(-5px);
}

.integration-header {
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;
}

.integration-icon {
	width: 30px;
	height: 30px;
	color: var(--secondary-100);
	flex-shrink: 0;
}

.integration-card h4 {
	font-size: 1.3rem;
	color: var(--text-primary);
}

.integration-card p {
	font-size: 1rem;
	line-height: 1.7;
	color: var(--text-secondary);
}

.benefits-banner {
	display: flex;
	align-items: flex-start;
	gap: 2rem;
	padding: 3rem;
	background: linear-gradient(135deg, var(--primary-10), var(--primary-10));
	border-radius: 1.5rem;
	color: white;
}


.benefits-banner h4 {
	font-size: 1.8rem;
	margin-bottom: 1rem;
	color: white;
}

.benefits-banner p {
	font-size: 1.1rem;
	line-height: 1.8;
	opacity: 0.95;
}

@media (max-width: 1024px) {

	.dimensions-grid,
	.integration-grid {
		grid-template-columns: 1fr;
	}

	.intro-card {
		padding: 2rem;
	}
}

@media (max-width: 768px) {
	.sustainable-development {
		padding: 3rem 1rem;
	}

	h2 {
		font-size: 2rem;
	}

	.intro-card {
		padding: 1.5rem;
	}

	.dimension-card {
		padding: 2rem;
	}

	.integration-title {
		font-size: 1.5rem;
	}

	.benefits-banner {
		flex-direction: column;
		text-align: center;
		padding: 2rem;
	}
}
</style>