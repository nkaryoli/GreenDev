<script setup>
import CirclesAnimation from '../../global/CirclesAnimation.vue';
import FlippingCard from '../../global/FlippingCard.vue';
import SectionHeadder from '../../global/SectionHeadder.vue';
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
</script>

<template>
	<section>
		<!-- <div class="animation">
			<CirclesAnimation />
		</div> -->
		<SectionHeadder>
			<template #title>Objetivos de Desarrollo Sostenible (ODS)</template>
			<template #subtitle>Nuestro compromiso con un futuro sostenible a través de la tecnología</template>
		</SectionHeadder>
		<div class="cards-container">
			<FlippingCard 
				v-for="obj in ods" 
				:key="obj.num"
				:number="obj.num.toString().padStart(2, '0')"
				:title="obj.title"
			>
				<template #description>
					<p>{{ obj.description }}</p>
				</template>
			</FlippingCard>
		</div>
	</section>
</template>

<style scoped>
section {
	width: 100%;
	padding: 4rem 2rem;
	background-color: var(--bg-secondary-20);
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}

/* .animation {
	position: absolute;
	top: -29%;
	left: 50vw;
	transform: translateX(-25%);
	z-index: -1;
	scale: 2;
	opacity: 0.5;
} */

.cards-container {
	width: 100%;
	max-width: 1500px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1rem;
	justify-items: center;
}
</style>