<script setup>
import { ArrowRight, TrendingDown, Zap } from 'lucide-vue-next';
import Card from './Card.vue';
import BgHero from './BgHero.vue';

</script>

<template>
	<section id="inicio" >
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

			<p >
				En GreenDev, nuestra misión es reducir la huella de carbono del sector tecnológico,
				ofreciendo soluciones innovadoras que respetan los principios ASG (Ambiental, Social y Gobernanza).
			</p>

			<div class="action-btns">
				<a href="#contact" class="contact-btn">
					<span>Consulta sin compromiso</span>
					<ArrowRight class="arrow-icon"/>
				</a>
				<button class="services-btn">
					Conoce nuestros servicios
				</button>
			</div>

			<div class="cards-box">
				<Card>
					<TrendingDown class="icon"  />
					<p>-40%</p>
					<small>Reducción consumo energético</small>
				</Card>
				<Card>
					<Zap  class="icon" />
					<p>100%</p>
					<small>Energía renovable</small>
				</Card>
				<Card>
					<TrendingDown class="icon" />
					<p>-60%</p>
					<small >Emisiones CO2</small>
				</Card>
			</div>
		</div>
		<BgHero/>
    </section>
</template>

<style scoped>

section {
	display: flex;
	align-items: center;
	justify-content: center;	
	min-height: 100vh;
	padding: 140px 0 80px 0;
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

.contact-btn {
	display: flex;
	align-items: center;
	gap: 0.3rem;
	font-size: 1rem;
	font-weight: 700;
	color: white;
	background: var(--primary-100);
	padding: 1rem 2rem;
	border-radius: 8px;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
}

.contact-btn:hover {
	box-shadow: 0 10px 15px -3px var(--primary-50);
}

.arrow-icon {
	transition: transform 0.1s ease;
}

.contact-btn:hover .arrow-icon {
	transform: translateX(5px);
}

.services-btn {
	font-size: 1rem;
	font-weight: 700;
	padding: 1rem 2rem;
	background-color: transparent;
	border: 1px solid var(--primary-100);
	color: var(--primary-100);
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.3s ease;
}

.services-btn:hover {
	background: var(--primary-10);
}


.cards-box {
	display: flex;
	gap: 1.8rem;
	width: 100%;
	height: 200px;
}

.cards-box .icon {
	color: var(--primary-100);
	width: 40px;
	height: 40px;
	margin-bottom: 1rem;
}

.cards-box p {
	font-size: 1.7rem;
	line-height: 2rem;
	font-weight: 700;
	margin-bottom: 0.25rem;
}

.cards-box small {
	font-size: 0.85rem;
	opacity: 0.7;
}

</style>