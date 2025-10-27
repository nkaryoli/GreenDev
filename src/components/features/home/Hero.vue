<script setup>
import { ArrowRight, TrendingDown, Zap } from 'lucide-vue-next';
import BgHero from './BgHero.vue';
import Stats from './Stats.vue';
import PrimaryBtn from '../../global/PrimaryBtn.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigate = (path) => {
	router.push(path || '/contacto');
};

</script>

<template>
	<section id="inicio">
		<div class="wrapper">
			<div class="tag">
				<Zap size="20" color="#FFB74D" />
				<span>Compromiso Neutralidad Climática 2050</span>
			</div>

			<h2>
				Desarrollo Tecnológico
				<span>
					Sostenible y Eficiente
				</span>
			</h2>

			<p>
				En GreenDev, nuestra misión es reducir la huella de carbono del sector tecnológico,
				ofreciendo soluciones innovadoras que respetan los principios ASG (Ambiental, Social y Gobernanza).
			</p>

			<div class="action-btns">
				<PrimaryBtn @click="navigate('/contacto')" variant="default" :icon="ArrowRight" iconPosition="right">
					Consulta sin compromiso
				</PrimaryBtn>

				<PrimaryBtn @click="navigate('/servicios')" variant="outline">
					Conoce nuestros servicios
				</PrimaryBtn>
			</div>
		</div>
		<Stats />
		<BgHero />
	</section>
</template>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	padding-top: 140px;
	background: linear-gradient(to bottom, var(--bg-secondary), transparent);
	position: relative;
	overflow: hidden;
}

.wrapper {
	max-width: 900px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	z-index: 11;
	margin-bottom: 2rem;
}

.tag {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	background-color: var(--primary-10);
	padding: 0.5rem 1rem;
	border-radius: 24px;
	border: 1px solid var(--primary-30);
	font-size: small;
	color: var(--primary-100);
	margin-bottom: 2rem;
}

.wrapper h2 {
	font-size: 3.4rem;
	line-height: 3.6rem;
	margin-bottom: 1.6rem;
}

.wrapper h2 span {
	background: linear-gradient(to right, var(--primary-100), var(--secondary-100));
	background-clip: text;
	color: transparent;
}

.wrapper p {
	max-width: 800px;
	font-size: 1.1rem;
	line-height: 2rem;
	margin-bottom: 2rem;
}

.action-btns {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 3rem;
	gap: 1rem;
}

</style>