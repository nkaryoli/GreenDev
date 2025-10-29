<script setup>
import { ArrowRight, TrendingDown, Zap } from 'lucide-vue-next';
import Stats from './Stats.vue';
import PrimaryBtn from '../../global/PrimaryBtn.vue';
import { useRouter } from 'vue-router';
import Badge from '../../global/Badge.vue'
import bg from '../../global/bg.vue'

const router = useRouter();

const navigate = (path) => {
	router.push(path || '/contacto');
};

</script>

<template>
	<section id="inicio">
		<bg rays-origin="top-center" rays-color="#00ffff" :rays-speed="1.5" :light-spread="0.8" :ray-length="1.2"
			:follow-mouse="true" :mouse-influence="0.1" :noise-amount="0.1" :distortion="0.05" class-name="custom-rays">
		</bg>
		<div class="wrapper">
			<Badge>
				<Zap size="20" />
				<span>Compromiso Neutralidad Climática 2050</span>
			</Badge>
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
				<PrimaryBtn @click="navigate('/contacto')" variant="default" size="large" :icon="ArrowRight" iconPosition="right">
					Consulta sin compromiso
				</PrimaryBtn>

				<PrimaryBtn @click="navigate('/servicios')" variant="outline" size="large">
					Conoce nuestros servicios
				</PrimaryBtn>
			</div>
		</div>
		<Stats />
	</section>
</template>

<style scoped>

#inicio {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 9rem;
	position: relative;
	overflow: hidden;
	margin-bottom: 1rem;
}

.wrapper {
	max-width: 900px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	z-index: 1;
	margin-bottom: 1rem;
}

.wrapper h2 {
	font-size: 3.4rem;
	line-height: 3.6rem;
	margin-bottom: 1.6rem;
	letter-spacing: 0.035em;
}

.wrapper h2 span {
	background: linear-gradient(to right, var(--primary-100), var(--secondary-100));
	background-clip: text;
	color: transparent;
}

.wrapper p {
	max-width: 800px;
	font-size: 1.1rem;
	font-weight: 300;
	line-height: 1.6rem;
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