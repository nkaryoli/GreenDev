<script setup>
import { MapPin, Phone, Mail } from 'lucide-vue-next';
</script>

<template>
	<div class="section">
		<h3>Información de Contacto</h3>
		
		<div class="contact-info">
			<div class="contact-icon">
				<MapPin />
			</div>
			<div>
				<h4>Oficina Principal</h4>
				<p>Paseo de la Sostenibilidad 42
					28001 Madrid, España</p>
			</div>
		</div>

		<div class="contact-info">
			<div class="contact-icon">
				<Phone />
			</div>
			<div>
				<h4>Oficina Principal</h4>
				<p>Paseo de la Sostenibilidad 42
					28001 Madrid, España</p>
			</div>
		</div>

		<div class="contact-info">
			<div class="contact-icon">
				<Mail />
			</div>
			<div>
				<h4>Oficina Principal</h4>
				<p>Paseo de la Sostenibilidad 42
					28001 Madrid, España</p>
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
	margin-bottom: 3rem;
}

.contact-info {
	display: flex;
	gap: 1rem;
	margin-bottom: 2rem;
}

.contact-icon {
	background-color: var(--secondary-100);
	padding: 1rem;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.contact-icon svg {
	width: 24px;
	height: 24px;
	color: var(--bg-primary);
}

</style>