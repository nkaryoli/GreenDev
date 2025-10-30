<script setup>
import FlippingCard from '../../global/FlippingCard.vue';
import { ArrowRight, Target } from 'lucide-vue-next';
import SectionHeadder from '../../global/SectionHeadder.vue';

const priorityODS = [
	{
		number: 7,
		title: 'Energía Asequible y No Contaminante',
		description: 'Garantizar el acceso a energía asequible, fiable, sostenible y moderna.',
		color: '#FCC30B',
		actions: [
			'Infraestructura 100% con energías renovables',
			'Optimización del consumo energético en aplicaciones',
			'Promoción de tecnologías de eficiencia energética'
		]
	},
	{
		number: 9,
		title: 'Industria, Innovación e Infraestructura',
		description: 'Construir infraestructuras resilientes, promover la industrialización sostenible y fomentar la innovación.',
		color: '#FD6925',
		actions: [
			'Desarrollo de soluciones tecnológicas innovadoras',
			'Infraestructura cloud sostenible y eficiente',
			'Apoyo a la transformación digital verde'
		]
	},
	{
		number: 12,
		title: 'Producción y Consumo Responsables',
		description: 'Garantizar modalidades de consumo y producción sostenibles.',
		color: '#BF8B2E',
		actions: [
			'Código limpio y eficiente que reduce recursos',
			'Modelo de economía circular en tecnología',
			'Reducción de residuos electrónicos'
		]
	},
	{
		number: 13,
		title: 'Acción por el Clima',
		description: 'Adoptar medidas urgentes para combatir el cambio climático y sus efectos.',
		color: '#3F7E44',
		actions: [
			'Medición y reducción de huella de carbono',
			'Compensación de emisiones en cada proyecto',
			'Concienciación sobre impacto climático digital'
		]
	}
];

const ods = [
	{ num: 1, title: 'Fin de la Pobreza', description: 'Desarrollamos tecnologías accesibles que democratizan el acceso a soluciones digitales, reduciendo costes operativos.' },
	{ num: 2, title: 'Hambre Cero', description: 'Apoyamos sistemas de optimización logística y agrícola mediante IoT eficiente y bajo consumo.' },
	{ num: 3, title: 'Salud y Bienestar', description: 'Creamos plataformas de telemedicina y salud digital con infraestructura sostenible y accesible.' },
	{ num: 4, title: 'Educación de Calidad', description: 'Desarrollamos plataformas educativas eficientes que funcionan incluso con conectividad limitada.' },
	{ num: 5, title: 'Igualdad de Género', description: 'Promovemos la diversidad en tecnología y creamos espacios digitales inclusivos y equitativos.' },
	{ num: 6, title: 'Agua Limpia y Saneamiento', description: 'Desarrollamos sistemas de monitorización de calidad del agua mediante sensores de bajo consumo.' },
	{ num: 7, title: 'Energía Asequible y No Contaminante', description: 'Toda nuestra infraestructura funciona con energía 100% renovable y optimizamos el consumo energético.' },
	{ num: 8, title: 'Trabajo Decente y Crecimiento Económico', description: 'Creamos empleo verde en el sector tecnológico y fomentamos prácticas laborales sostenibles.' },
	{ num: 9, title: 'Industria, Innovación e Infraestructura', description: 'Innovamos en infraestructuras digitales resilientes, sostenibles y de bajo impacto ambiental.' },
	{ num: 10, title: 'Reducción de las Desigualdades', description: 'Desarrollamos soluciones accesibles que reducen la brecha digital y tecnológica.' },
	{ num: 11, title: 'Ciudades y Comunidades Sostenibles', description: 'Creamos smart cities con tecnología eficiente para gestión urbana sostenible.' },
	{ num: 12, title: 'Producción y Consumo Responsables', description: 'Promovemos el desarrollo responsable, reutilización de código y hardware de larga duración.' },
	{ num: 13, title: 'Acción por el Clima', description: 'Nuestro compromiso principal: neutralidad climática 2050 y reducción activa de emisiones de CO2.' },
	{ num: 14, title: 'Vida Submarina', description: 'Desarrollamos sistemas de monitorización oceánica con tecnología de bajo impacto ambiental.' },
	{ num: 15, title: 'Vida de Ecosistemas Terrestres', description: 'Apoyamos proyectos de conservación mediante tecnología eficiente de monitorización y análisis.' },
	{ num: 16, title: 'Paz, Justicia e Instituciones Sólidas', description: 'Desarrollamos sistemas transparentes y seguros que promueven la gobernanza digital responsable.' },
	{ num: 17, title: 'Alianzas para Lograr los Objetivos', description: 'Colaboramos con organizaciones, empresas y gobiernos para alcanzar los objetivos de sostenibilidad.' }
];

const getOdsImage = (num) => {
	return new URL(`../../../ods/o${num}.svg`, import.meta.url).href
}
</script>

<template>
	<section class="ods-section">
		<div class="container">
			<SectionHeadder>
				<template #title>Objetivos de Desarrollo Sostenible</template>
				<template #subtitle>
					Alineamos nuestros proyectos con los 17 ODS de la ONU,
					contribuyendo activamente a la Agenda 2030 para un futuro sostenible.
				</template>
			</SectionHeadder>
			<div class="priority-ods">
				<h3>Nuestros ODS Prioritarios</h3>
				<div class="priority-grid">
					<article v-for="(ods, index) in priorityODS" :key="index" class="ods-card priority">
						<div class="wrapper">
							<div class="ods-number">
								<img :src="`/ods/o${ods.number}.svg`" :alt="`ODS ${ods.number}`" />
							</div>
							<div class="content">

								<h4>{{ ods.title }}</h4>
								<p>{{ ods.description }}</p>
								<div class="ods-actions">
									<h5>Cómo contribuimos:</h5>
									<ul>
										<li v-for="(action, idx) in ods.actions" :key="idx">
											<ArrowRight class="action-icon" />
											<span>{{ action }}</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>


			<h3 class="ods-title">Los 17 Objetivos de Desarrollo Sostenible</h3>
			<div class="cards-container">
				<FlippingCard v-for="obj in ods" :key="obj.num" :number="obj.num.toString().padStart(2, '0')"
					:title="obj.title">
					<template #description>
						<p>{{ obj.description }}</p>
					</template>
				</FlippingCard>
			</div>

			<div class="ods-commitment">
				<Target class="commitment-icon" />
				<div>
					<h3>Compromiso con la Agenda 2030</h3>
					<p>
						Cada proyecto que desarrollamos considera su impacto en al menos
						5 de los 17 ODS, asegurando que la tecnología sea una herramienta
						para el cambio positivo y el desarrollo sostenible global.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.ods-section {
	padding: 5rem 2rem;
	background: var(--bg-secondary-20);
}

.container {
	max-width: 1200px;
	margin: 0 auto;
}

.priority-ods {
	margin-bottom: 5rem;
}

.priority-ods h3 {
	font-size: 2rem;
	font-weight: 600;
	text-align: center;
	margin-bottom: 3rem;
}

.priority-grid {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 2rem;
}

.ods-card {
	position: relative;
	padding: 0.1rem;
	transition: all 0.3s ease;
	overflow: hidden;
	border-radius: 1.5rem;
	background: var(--bg-primary);
	/* border: 2px solid var(--secondary-30); */
}

.ods-card::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 200%;
	height: 200%;
	background: conic-gradient(from 0deg,
			transparent 0deg 160deg,
			var(--primary-100) 160deg 170deg,
			var(--secondary-100) 170deg 180deg,
			transparent 180deg 340deg,
			var(--primary-100) 340deg 350deg,
			var(--secondary-100) 350deg 360deg);
	transform: translate(-50%, -50%) rotate(0deg);
	animation: rotating 8s linear infinite running;
	border-radius: inherit;
	z-index: 0;
}

.ods-card:hover::before {
	animation-play-state: paused;
}

.ods-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.wrapper {
	position: relative;
	background: var(--bg-secondary);
	padding: 3rem;
	border-radius: calc(1.5rem - 2px);
	margin: 2px;
	z-index: 1;
	transition: all 0.3s ease;
	height: 98.6%;
	display: flex;
	gap: 4rem
}

@keyframes rotating {
	0% {
		transform: translate(-50%, -50%) rotate(0deg);
	}

	100% {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}

.ods-number img {
	width: 250px;
	height: 250px;
}

.ods-card h4 {
	font-size: 1.5rem;
	margin-bottom: 1rem;
	color: var(--text-primary);
}

.ods-card>p {
	font-size: 1rem;
	line-height: 1.6;
	color: var(--text-secondary);
	margin-bottom: 1.5rem;
}

.ods-actions h5 {
	font-size: 1rem;
	margin-bottom: 1rem;
	color: var(--text-primary);
	font-weight: 600;
}

.ods-actions ul {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.ods-actions li {
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;
	font-size: 0.95rem;
	color: var(--text-secondary);
}

.action-icon {
	width: 18px;
	height: 18px;
	color: var(--secondary-100);
	flex-shrink: 0;
	margin-top: 2px;
}

.ods-title {
	text-align: center;
	font-size: 2rem;
	font-weight: 600;
	text-align: center;
	margin-bottom: 3rem;
}

.cards-container {
	width: 100%;
	max-width: 1500px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1rem;
	justify-items: center;
	margin-bottom: 4rem;
}

.ods-commitment {
	display: flex;
	align-items: center;
	gap: 2rem;
	padding: 3rem;
	background: var(--bg-primary);
	border: 2px solid var(--secondary-100);
	border-radius: 1.5rem;
}

.commitment-icon {
	width: 70px;
	height: 70px;
	color: var(--secondary-100);
	flex-shrink: 0;
}

.ods-commitment h3 {
	font-size: 1.8rem;
	font-weight: 600;
	margin-bottom: 1rem;
}

.ods-commitment p {
	font-size: 1.1rem;
	line-height: 1.7;
	opacity: 0.85;
}

@media (max-width: 1024px) {
	.priority-grid {
		grid-template-columns: 1fr;
	}

}

@media (max-width: 768px) {
	.ods-section {
		padding: 3rem 1rem;
	}

	h2 {
		font-size: 2rem;
	}

	.ods-card {
		padding: 2rem;
	}

	.ods-commitment {
		flex-direction: column;
		text-align: center;
		padding: 2rem;
	}
}
</style>