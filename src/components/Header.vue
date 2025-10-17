<script setup>
import Logotype from './Logotype.vue';
import { Leaf, Menu, X  } from 'lucide-vue-next';
import { ref } from 'vue';

const isMenuOpen = ref(false);

</script>

<template>
	<header>
		<div class="container">
			<Logotype/>

			<nav :class="{ open: isMenuOpen }" class="navbar">
				<ul>
					<li><a href="">Inicio</a></li>
					<li><a href="">Servicios</a></li>
					<li><a href="">Sostenibilidad</a></li>
					<li><a href="">I + D</a></li>
					<li><a href="">Contacto</a></li>
				</ul>
			</nav>

			<button class="menu-toggle" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle menu" :aria-expanded="isMenuOpen.toString()">
				<X v-if="isMenuOpen" />
				<Menu v-else />
			</button>

		</div>
	</header>
</template>

<style scoped>

header {
	position: fixed;
	z-index: 999;
	width: 100%;
	background: linear-gradient(to bottom, rgb(0, 0, 0), transparent);
	padding-inline: 2rem;
}

.container {
	max-width: 1500px;
	height: 90px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

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

.navbar ul {
	display: flex;
	gap: 1.35rem;
}

.navbar a {
	transition: all ease-in 0.1s;
}

.navbar a:hover {
	color:  var(--primary-100);
}

.menu-toggle {
	background: none;
	border: none;
	color: white;
	font-size: 1.5rem;
	cursor: pointer;
	display: none;
	z-index: 999;
}

@media (max-width: 968px) {

	.menu-toggle {
		display: block;
	}

	.navbar {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		padding: 120px 0;
		display: flex;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 1), var(--bg-secondary));
		z-index: 99;
		transform: translateY(-100%);
		opacity: 0;
		transition: transform 0.3s ease, opacity 0.4s ease;
	}
	
	.navbar.open {
		display: flex;
		justify-content: center;
		transform: translateY(0);
		opacity: 1;
	}

	.navbar.open ul {
		flex-direction: column;
		align-items: center;
	}

	.navbar.open ul a {
		padding: 0.6rem 1rem
	}
}
</style>