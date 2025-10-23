<script setup>
import { Leaf } from 'lucide-vue-next';
</script>

<template>
	<div class="logoType">
		<div class="logo-box">
			<Leaf size="28" color="oklch(0.129 0.042 264.695)"/>
		</div>
		<div class="logo-text">
			<h1>GreenDev</h1>
			<p>Tecnologia para un futuro sostenible</p>
		</div>
	</div>
</template>

<style scoped>

.logoType {
	display: flex;
	align-items: end;
	gap: 0.7rem;
	z-index: 999;
}

.logo-box {
	background: linear-gradient(to bottom right, var(--primary-100), var(--secondary-100));
	padding: 9px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.logo-text {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}

.logo-text h1 {
	font-size: 1.2rem;
	line-height: 1.2rem;
}

.logo-text p {
	font-size: 0.75rem;
	line-height: 0.75rem;
	color:  var(--primary-100);
}

</style>