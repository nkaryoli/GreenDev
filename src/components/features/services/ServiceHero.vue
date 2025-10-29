<script setup>
import SectionContainer from '../../global/SectionContainer.vue';
import { Leaf, ChevronDown } from 'lucide-vue-next';
import Badge from '../../global/Badge.vue';
import PrimaryBtn from '../../global/PrimaryBtn.vue';
import Planet from './Planet.vue';

const scrollToServices = () => {
	document.querySelector('#services-overview')?.scrollIntoView({
		behavior: 'smooth'
	});
};

</script>

<template>
	<SectionContainer>
		<section class="wrapper">
			<section class="hero">
				<Badge>
					<Leaf class="badge-icon" />
					Servicios Sostenibles
				</Badge>

				<h1>Soluciones tecnológicas que respetan el planeta</h1>
				<p>
					Desarrollamos proyectos digitales eficientes, escalables y
					comprometidos con la reducción de la huella de carbono.
				</p>
				<PrimaryBtn @click="scrollToServices" :icon="ChevronDown" variant="default" size="large">
					Explorar servicios
				</PrimaryBtn>
			</section>
			<div class="plane-container">
				<Planet />
			</div>
		</section>
	</SectionContainer>
</template>

<style scoped>
.wrapper {
	max-width: 1200px;
	display: flex;
	align-items: center;
	margin: auto;
}

.hero {
	position: relative;
	width: 100%;
	max-width: 1200px;
	margin: 4rem auto;
}

.planet-container {
	min-width: 300px;
	aspect-ratio: 1/1;
}

.badge-icon {
	width: 18px;
	height: 18px;
}

.hero h1 {
	font-size: 3rem;
	margin-bottom: 1.5rem;
	font-weight: 700;
	max-width: 800px;
}

.hero p {
	max-width: 800px;
	font-size: 1.1rem;
	font-weight: 300;
	line-height: 2rem;
	margin-bottom: 2rem;
	opacity: 0.95;
}

@keyframes bounce {

	0%,
	100% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(5px);
	}
}

@media (max-width: 768px) {
	h1 {
		font-size: 2.5rem;
	}
}
</style>
