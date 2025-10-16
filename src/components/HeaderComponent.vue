<script></script>

<template>
	<header>
		<nav>
			<div class="logo">
				<h1>GreenDev</h1>
				<p>Tecnologia para un futuro sostenible</p>
			</div>
			<ul>
				<li><a href="">Inicio</a></li>
				<li><a href="">Servicios</a></li>
				<li><a href="">Sostenibilidad</a></li>
				<li><a href="">Investigacion y Desarrollo</a></li>
				<li><a href="">Contacto</a></li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>

nav {
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 120px;
	padding-inline: 32px;
	background: linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0));
	z-index: 999;
}

.logo p {
	font-size: small;
	color: var(--text-color);
	opacity: 0.9;
	margin-top: 10px;
}

ul {
	display: flex;
	gap: 50px;
}

</style>