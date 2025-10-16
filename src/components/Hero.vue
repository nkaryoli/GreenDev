<script></script>

<template>
	<div class="hero">
		<div class="hero-title">
			<h1>GreenDev </h1>
			<h2>Desarrollo Sostenible</h2>
			<p>Combinando Innovación Digital con Responsabilidad Digital</p>
		</div>
		<img src="/public/bg.svg" alt="">
	</div>
</template>

<style scoped>

.hero {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: end;
	align-items: center;
	position: relative;
}

.hero-title {
	width: 75vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 5rem;
	background: linear-gradient(to right, rgb(0, 0, 0), rgba(21, 25, 28, 1), transparent);
	position: absolute;
	left: 0;
}

.hero-title h1 {
	font-size: 10rem;
	line-height: 11rem;
}

.hero-title h2 {
	font-size: 5rem;
}

.hero-title p {
	font-size: 1.7rem;
	margin-top: 1rem;
}

.hero img {
	height: 100vh;
	margin-right: -150px;
}

@media (width>1600px) {
	.hero-title h1 {
		font-size: 13rem;
		line-height: 13rem;
	}

}

</style>