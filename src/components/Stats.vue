<script setup>
import { TrendingDown, Zap } from 'lucide-vue-next';
</script>

<template>
	<div class="stats">
		<div class="stat">
			<TrendingDown class="icon"  />
			<p>-40%</p>
			<small>Reducción consumo energético</small>
		</div>
		<div class="stat">
			<Zap  class="icon" />
			<p>100%</p>
			<small>Energía renovable</small>
		</div>
		<div class="stat">
			<TrendingDown class="icon" />
			<p>-60%</p>
			<small >Emisiones CO2</small>
		</div>
	</div>
</template>

<style scoped>

.stats {
	display: flex;
	justify-content: center;
	gap: 10%;
	width: 100%;
	padding: 2rem;
	background: linear-gradient(to top, transparent, var(--bg-primary-50), transparent);
	z-index: 9;
}

.stat {
	display: flex;
	align-items: center;
	gap: 0.625rem;
}

.stats .icon {
	color: var(--primary-100);
	width: 28px;
	height: 28px;
}

.stat p {
	font-size: 1.3rem;
	line-height: 2rem;
	font-weight: 700;
	margin-bottom: 0.25rem;
	opacity: 0.9;

}

.stat small {
	font-size: 0.89rem;
	opacity: 0.89;
}
</style>