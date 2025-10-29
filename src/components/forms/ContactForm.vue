<script setup>
import { User, Mail, Building2, Phone, Send } from 'lucide-vue-next';
import PrimaryBtn from '../global/PrimaryBtn.vue';
</script>

<template>
	<div class="card">
		<div class="inner-card">
			<form class="form">
				<h3 id="heading">Solicita Información</h3>
				<div class="field">
					<User class="input-icon" />
					<input type="text" class="input-field" placeholder="Tu nombre" />
				</div>
				<div class="field">
					<Mail class="input-icon" />
					<input type="text" class="input-field" placeholder="tu@empresa.com" />
				</div>
				<div class="field">
					<Building2 class="input-icon" />
					<input type="text" class="input-field" placeholder="Nombre de la empresa" />
				</div>
				<div class="field">
					<Phone class="input-icon" />
					<input type="text" class="input-field" placeholder="+34 600 000 000" />
				</div>
				<div class="field">
					<textarea rows="4" cols="50" class="input-field" placeholder="Cuentanos sobre tu proyecto y cómo podemos ayudarte..."></textarea>
				</div>
				
				<PrimaryBtn @click="navigate('/contacto')" variant="default" size="large" :icon="ArrowRight" iconPosition="right">
					Enviar consulta
				</PrimaryBtn>
			</form>
		</div>
	</div>
</template>

<style scoped>

.card {
	background-image: linear-gradient(163deg, var(--primary-100) 0%, var(--secondary-100) 100%);
	border-radius: 3rem;
	transition: all 0.3s;
}

.inner-card {
border-radius: 3.7rem;
	overflow: hidden;
	transition: all 0.2s;
}

.inner-card:hover {
	transform: scale(0.99);
	border-radius: 3rem;
}

.card:hover {
	box-shadow: 0px 0px 30px 1px var(--secondary-50);
}

.form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 3rem;
	background-color: var(--bg-secondary);
	transition: 0.4s ease-in-out;
}

#heading {
	font-size: 1.5rem;
	max-width: 800px;
	margin-bottom: 1rem;
}

.field {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	border-radius: 8px;
	padding: 0.6rem;
	border: none;
	outline: none;
	background-color: var(--bg-secondary);
	box-shadow: inset 2px 5px 10px var(--bg-primary);
}

.input-icon {
	height: 1.3rem;
	width: 1.3rem;
	opacity: 0.7;
}

.input-field {
	background: none;
	border: none;
	outline: none;
	width: 100%;
	color: var(--text-color);
}


</style>
