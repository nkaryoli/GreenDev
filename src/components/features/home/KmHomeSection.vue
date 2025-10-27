<script setup>

import { MapPin, ArrowRight } from 'lucide-vue-next';
import PrimaryBtn from '../../global/PrimaryBtn.vue';
import { useRouter } from 'vue-router';
import Badge from '../../global/Badge.vue';
import SectionContainer from '../../global/SectionContainer.vue';

const router = useRouter();

const navigate = () => {
	router.push('/sostenibilidad');
};

</script>

<template>
	<section class="km0-cta">
		<SectionContainer>

		<div class="km0-content">
			<div class="km0-text">
				<Badge>Innovación Local</Badge>

				<h2>Desarrollo Tecnológico KM 0</h2>
				<p>
					En Green Dev aplicamos el concepto KM 0 minimizando la distancia entre recursos digitales y usuarios finales.
					Servidores locales, edge computing y tecnologías de proximidad para
					un desarrollo más sostenible.

				</p>

				<PrimaryBtn @click="navigate('/contacto')" variant="default" :icon="ArrowRight" iconPosition="right">
					Descubre cómo trabajamos
				</PrimaryBtn>
			</div>
			<div class="km0-visual">
				<MapPin class="floating-icon" />
			</div>
		</div>
		</SectionContainer>
	</section>
</template>

<style scoped>
.km0-cta {
	background: linear-gradient(135deg, var(--secondary-30) 0%, var(--bg-secondary-40) 100%);
}

.km0-content {
	max-width: 1400px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 3rem;
	position: relative;
	z-index: 2;
}

.km0-text {
	flex: 1;
}

.km0-text h2 {
	font-size: 2rem;
	font-weight: 500;
	margin-bottom: 1rem;

}

.km0-text p {
	max-width: 700px;
	margin-bottom: 2rem;
	font-size: 0.95rem;
	font-weight: 200;
	line-height: 1.7;
	opacity: 0.8;
}

.km0-visual {
	width: 100%;
	max-width: 400px;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url("/src/assets/map.svg");
	background-size: cover;
	background-repeat: no-repeat;
}

.floating-icon {
	width: 100px;
	height: 100px;
	color: var(--primary-100);
	animation: float 3s ease-in-out infinite;
}

@keyframes float {

	0%,
	100% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(-20px);
	}
}

@media (max-width: 968px) {
	.km0-content {
		flex-direction: column-reverse;
		text-align: center;
		gap: 2rem;
	}

	.km0-text h2 {
		font-size: 2rem;
	}

	.km0-text p {
		font-size: 1rem;
	}

	.km0-visual {
		flex: 0 0 auto;
	}

	.floating-icon {
		width: 100px;
		height: 100px;
	}
}

@media (max-width: 480px) {
	.km0-text h2 {
		font-size: 1.75rem;
	}

	.km0-text p {
		font-size: 0.9rem;
	}

	.cta-button {
		padding: 0.875rem 1.5rem;
		font-size: 0.95rem;
	}
}
</style>