<script setup>
import ContactForm from '../../forms/ContactForm.vue';
import ContactInfomation from '../Contact/ContactInfomation.vue';
</script>

<template>
	<section>
		<h2>Contacto</h2>
		<p>Transforma tu negocio con tecnología sostenible. Hablemos de cómo podemos ayudarte.</p>
		<div class="container">
			<ContactForm />
			<ContactInfomation />
		</div>
	</section>
</template>

<style scoped>
section {
	max-width: 1500px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	padding: 8rem 2rem;

}

h2 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
	text-align: center;
}

p {
	font-size: 1.2rem;
	text-align: center;
	max-width: 800px;
	margin-bottom: 3rem;
}

.container {
	width: 100%;
	display: grid;
	grid-template-columns: auto auto;
	justify-content: center;
	gap: 5rem;
}

@media (max-width: 968px) {
	.container {
		grid-template-columns: auto;
	}
}
</style>