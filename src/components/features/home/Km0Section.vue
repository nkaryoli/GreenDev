<script setup>
import { MapPin } from 'lucide-vue-next';

const concepts = [
	{
		title: 'Servidores Locales',
		description: 'Uso de infraestructura de servidores cercana geográficamente para reducir la latencia y el consumo energético en transmisión de datos.'
	},
	{
		title: 'Tecnologías Locales',
		description: 'Priorización de proveedores de servicios y tecnologías con presencia local, reduciendo la huella de carbono del transporte y logística.'
	},
	{
		title: 'Edge Computing',
		description: 'Procesamiento de datos cerca de donde se generan, minimizando transferencias innecesarias y optimizando el consumo energético.'
	}
];

</script>

<template>
	<section class="km">
		<img src="../../../assets/bgs1.svg" alt="Background concepto KM 0">
		<div class="wraper">
			<div class="container">
				<div class="container-header">
					<MapPin class="header-icon"/>
					<div class="header-text">
						<h2>Concepto KM 0 en Tecnología</h2>
						<p>Al igual que en la alimentación, el concepto de KM 0 aplicado al desarrollo tecnológico busca minimizar la distancia entre los recursos y su uso. En GreenDev, promovemos:</p>
					</div>
				</div>

				<div class="container-article">
					<article 
						v-for="concept in concepts" 
						:key="concept.title" 
						class="card"
					>
						<h4>{{ concept.title }}</h4>
						<p>{{ concept.description }}</p>
					</article>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>

.km {
	width: 100vw;
	position: relative;
	margin-bottom: 6rem;
	overflow: hidden;
	border: 1px solid var(--secondary);
}

.km img {
	width: 100%;
	height: 700px;
	object-fit: cover;
}

.km .wraper {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
}

.container {
	width: 100%;
	max-width: 1300px;
	margin: auto;
	padding: 3rem;
	display: flex;
	gap: 2rem;
	flex-direction: column;
	backdrop-filter: blur(15px);
	border: 1px solid var(--secondary-30);
	border-radius: 0.6rem;
	background-color: var(--bg-primary-50);
}

.container-header {
	width: 100%;
	display: flex;
	gap: 1rem;
}

.header-icon {
	width: 80px;
	height: 80px;
	color: var(--secondary-100);
}

.container-article {
	display: flex;
	gap: 1rem;
}

.card {
	width: 100%;
	padding: 2rem;
	background-color: var(--bg-secondary-40);
	border-radius: 0.6rem;
}

.card p {
	font-size: 0.8rem;
	opacity: 0.8;
	margin-top: 1rem;
}

@media (max-width: 1200px) {
	.container {
		padding: 2rem;
		max-width: 95%;
	}
}

@media (max-width: 768px) {

	h2 {
		font-size: 2rem;
	}
	
	p {
		font-size: 0.85rem;
		line-height: 1.5rem;
	}
	
	.km {
		position: relative;
		height: auto;
		min-height: 600px;
		display: flex;
		flex-direction: column;
	}
	
	.km img {
		position: absolute;
		height: 100%;
		z-index: 1;
	}
	
	.km .wraper {
		position: relative;
		height: auto;
		min-height: 600px;
		z-index: 2;
		flex: 1;
	}
	
	.container {
		position: relative;
		margin: 1rem;
		padding: 1.5rem;
		height: auto;
		min-height: 500px;
	}
	
	.container-header {
		flex-direction: column;
		text-align: center;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}
	
	.header-icon {
		width: 60px;
		height: 60px;
		margin: 0 auto;
	}
	
	.container-article {
		flex-direction: column;
		gap: 1rem;
	}
	
	.card {
		padding: 1.5rem;
	}
	
	.card h4 {
		font-size: 1rem;
	}
	
	.card p {
		font-size: 0.8rem;
	}
}

@media (max-width: 480px) {

	h2 {
		font-size: 1.75rem;
	}
	
	p {
		font-size: 0.8rem;
		line-height: 1.4rem;
		margin-bottom: 1rem;
	}
	
	.container {
		padding: 1rem;
	}
	
	.container-header h2 {
		font-size: 1.25rem;
	}
	
	.container-header p {
		font-size: 0.85rem;
	}
	
	.card {
		padding: 1rem;
	}
	
	.card h4 {
		font-size: 0.9rem;
	}
	
	.card p {
		font-size: 0.75rem;
		margin-top: 0.5rem;
	}
}

@media (max-width: 360px) {
	h2 {
		font-size: 1.5rem;
	}
	
	.km {
		min-height: 500px;
		/* padding: 1rem; */
	}
	
	.km .wraper {
		min-height: 500px;
	}
	
	.container {
		padding: 0.75rem;
	}
	
	.card {
		padding: 0.75rem;
	}
}

</style>