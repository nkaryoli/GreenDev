<script setup>
import SectionContainer from '../../global/SectionContainer.vue';
import { Leaf, ChevronDown } from 'lucide-vue-next';
import Badge from '../../global/Badge.vue';
import PrimaryBtn from '../../global/PrimaryBtn.vue';

const scrollToServices = () => {
	document.querySelector('#services-overview')?.scrollIntoView({
		behavior: 'smooth'
	});
};

</script>

<template>
	<section class="wrapper">
		<SectionContainer>
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
					<PrimaryBtn @click="scrollToServices" :icon="ChevronDown" variant="outline" size="large">
						Explorar servicios
					</PrimaryBtn>
			</section>
		</SectionContainer>
	</section>
</template>

<style scoped>
.wrapper {
	position: relative;
	background: url('/bg-green.png');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: right;
} 

.wrapper::before {
	content: '';
	position: absolute;
	inset: 0;
	background: linear-gradient(to right, var(--bg-primary) 40%, transparent);
	pointer-events: none;
}

.hero {
	position: relative;
	width: 100%;
	max-width: 1400px;
	margin: 4rem auto;
	z-index: 2;
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
