<script setup>
import { MapPin, Phone, Mail } from 'lucide-vue-next';

const items = [
	{
		icon: MapPin,
		title: 'Oficina Principal',
		description: 'Paseo de la Sostenibilidad 42 28001 Madrid, España'
	},
	{
		icon: Phone,
		title: 'Teléfono',
		description: '+34 912 345 678'
	},
	{
		icon: Mail,
		title: 'Correo Electrónico',
		description: 'Paseo de la Sostenibilidad 42	28001 Madrid, España'	
	}
]
</script>

<template>
	<div class="section">
		<h3>Información de Contacto</h3>
		<div class="contact-info" v-for="(item, index) in items" :key="index">
			<div class="contact-icon">
				<component :is="item.icon" />
			</div>
			<div class="contact-info-text">
				<h4>{{ item.title }}</h4>
				<p>{{ item.description }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.section {
	padding-top: 2rem;
}

.section h3 {
	font-size: 1.5rem;
	max-width: 800px;
	margin-top:  1rem;
	margin-bottom: 2rem;
}

.contact-info {
	display: flex;
	gap: 1rem;
	margin-bottom: 2rem;
}

.contact-info h4 {
	font-size: 1rem;
	margin-bottom: 0.5rem;
}

.contact-info p {
	font-size: 0.8rem;
	max-width: 25ch;
}

.contact-icon {
	background-color: var(--primary-100);
	padding: 1rem;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	width: 60px;
}

.contact-icon svg {
	width: 24px;
	height: 24px;
	color: var(--bg-primary);
}

</style>