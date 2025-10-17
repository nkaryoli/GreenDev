<script setup>
import Logotype from './Logotype.vue'
import { MapPin, Phone, Mail, Linkedin, Twitter, Github } from 'lucide-vue-next';
const servicios = [
	{
		id: 1,
		link: "#servicios",
		name: "Desarrollo Web Sostenible",
	},
	{
		id: 2,
		link: "#servicicios",
		name: "Aplicaciones Multiplataforma",
	},
	{
		id: 1,
		link: "#servicios",
		name: "Administración de Sistemas",
	},
	{
		id: 1,
		link: "#inveestigacion",
		name: "Investigación y Desarrollo",
	}
];

const sostenibilidad = [
	{
		id: 1,
		link: "#sostenibilidad",
		name: "Compromiso ASG",
	},
	{
		id: 2,
		link: "#sostenibilidad",
		name: "Objetivos ODS",
	},
	{
		id: 1,
		link: "#sostenibilidad",
		name: "Neutralidad Climática",
	},
	{
		id: 1,
		link: "#sostenibilidad",
		name: "Informe de Sostenibilidad",
	}
];

</script>

<template>
	<footer>
		<div class="container">
			<div>
				<Logotype/>
				<p>Comprometidos con la innovación tecnológica sostenible y la neutralidad climática 2050.</p>
				<div class="icon-box">
					<a href="#" >
						<Linkedin size="20" color="rgb(255, 169, 41)" />
					</a>
					<a href="#" >
						<Twitter size="20" color="rgb(255, 169, 41)" />
					</a>
					<a href="#" >
						<Github size="20" color="rgb(255, 169, 41)" />
					</a>
				</div>
			</div>

			<div class="nav-wrapper">
				<ul class="servicios">
					<li>Servicios</li>
					<li v-for="servicio in servicios" :key="servicio.id">
						<a :href="servicio.link">
						{{ servicio.name }}
						</a>
					</li>
				</ul>
				<ul class="sostenibilidad">
					<li>Sostenibilidad</li>
					<li v-for="item in sostenibilidad" :key="item.id">
						<a :href="item.link" >
						{{ item.name }}
						</a>
					</li>
				</ul>

				<ul class="contact-info">
					<li>Contacto</li>
					<li>
						<MapPin color="rgb(255, 169, 41)"/>
						<span>
							Paseo de la Sostenibilidad 42<br/>
							08001 Barcelona, España
						</span>
					</li>
					<li>
						<Phone color="rgb(255, 169, 41)" />
						<span>+34 910 123 456</span>
					</li>
					<li>
						<Mail color="rgb(255, 169, 41)" />
						<span>contacto@greendev.es</span>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style scoped>

footer {
	width: 100%;
	background: linear-gradient(to top, var(--bg-secondary), transparent);
	padding: 3rem;
}

.container {
	max-width: 1500px;
	display: flex;
	justify-content: space-between;
	align-items: start;
	margin: auto;
}

p {
	margin: 1rem 0;
	max-width: 40ch;
}

a, li span, p {
	font-weight: 300;
	font-size: 0.9rem;
	opacity: 0.8;
	transition: all 0.2s ease
}

.icon-box {
	display: flex;
	gap: 1rem;
}

.icon-box a {
	display: flex;
	background: var(--bg-secondary);
	padding: 0.5rem;
	border-radius: 0.5rem;
}

.icon-box a:hover {
	background-color: var(--primary-10);
}

.nav-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: start;
	gap: 6rem;
}

li:first-child {
	font-weight: 600;
}

li {
	margin-bottom: 0.6rem;
}

a:hover {
	color: var(--primary-100)
}

.contact-info li {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.contact-info li:nth-child(2) {
	align-items: start;
}

</style>