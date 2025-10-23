<script setup>
import { Globe, Smartphone, Server } from 'lucide-vue-next';
import ServiceCard from '../../global/ServiceCard.vue';
import { ArrowRight } from 'lucide-vue-next';

const services = [
	{
		icon: Globe,
		title: 'Desarrollo Sostenible de Aplicaciones Web (DAW)',
		description: 'Utilizamos frameworks eficientes y técnicas de renderizado optimizado para reducir la carga del servidor y el consumo de recursos del cliente.',
	},
	{
		icon: Smartphone,
		title: 'Desarrollo de Aplicaciones Multiplataforma Eficientes (DAM)',
		description: 'Aplicaciones que funcionan de manera óptima en múltiples dispositivos, reduciendo el consumo de recursos y maximizando la eficiencia energética.',
	},
	{
		icon: Server,
		title: 'Administración de Sistemas Energéticamente Eficientes (ASIX)',
		description: 'Implementamos estrategias avanzadas para reducir el consumo energético en centros de datos y redes corporativas.',
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
				<template #action>
					<RouterLink to="/servicios" class="srv-btn">
						Saber más
						<ArrowRight size="20" class="btn-icon"/>
					</RouterLink>
				</template>
			</ServiceCard>
		</div>
	</section>	
</template>
<style scoped>

section {
	width: 100%;
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

.srv-btn {
	color: var(--primary-100);
	display: flex;
	align-items: center;
	justify-self: end;
	gap: 0.25rem;
	margin-right: 1rem;
	font-size: 0.9rem;
	transition: all 0.3s ease;
	font-weight: 300;
}

.srv-btn:hover {
	font-weight: 500;
}

.btn-icon {
	transition: all 0.3s ease;
}

.srv-btn:hover .btn-icon {
	transform: translateX(3px);
}

</style>