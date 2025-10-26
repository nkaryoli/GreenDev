<script setup>
import { TrendingDown, Award } from 'lucide-vue-next';
import SectionContainer from '../../global/SectionContainer.vue';
import SectionHeadder from '../../global/SectionHeadder.vue';

const items = [
	{
		icon: TrendingDown,
		title: 'Reducción de Costes Ambientales',
		features: [
			'Reducción de hasta 40% en costes de infraestructura',
			'Optimización del ciclo de vida de hardware',
			'Menor necesidad de refrigeración y mantenimiento'
		]
	},
	{
		icon: Award,
		title: 'Ventajas Competitivas Sostenibles',
		features: [
			'Mejora de la imagen corporativa y branding',
			'Acceso a incentivos y subvenciones verdes',
			'Atracción de talento comprometido con la sostenibilidad'
		]
	}
];


</script>

<template>
	<SectionContainer>
		<SectionHeadder>
			<template #title>Enfoque Sostenible</template>
			<template #subtitle>La sostenibilidad no es solo responsabilidad ambiental, es una ventaja competitiva</template>
		</SectionHeadder>
		<div class="card-container">
			<article 
				v-for="item in items" 
				:key="item.title"
				class="focus-card"
			>
				<component :is="item.icon" class="card-icon"/>
				<h3>{{ item.title }}</h3>
				<p>{{ item.description }}</p>
				<ul>
					<li v-for="feature in item.features" :key="feature">
						{{ feature }}
					</li>
				</ul>
			</article>
		</div>
	</SectionContainer>
</template>

<style scoped>
.card-container {
    width: 100%;
    max-width: 1500px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 4rem;
}

.focus-card {
    width: 100%;
    border-left: 5px solid var(--secondary-50);
    padding: 2rem 0 2rem 2rem;
    background: linear-gradient(to right, var(--secondary-30), transparent);
}

.card-icon {
    width: 60px;
    height: 60px;
    color: var(--secondary-100);
    margin-bottom: 1rem;
    transition: all 0.3s ease;
}

.card-container h3 {
    font-size: 1.25rem;
	font-weight: 500;
    margin: 0 0 1rem 0;
}

.card-container p {
    font-size: 0.9rem;
    line-height: 1.6rem;
    font-weight: 300;
    margin-bottom: 1.2rem;
}

.card-container ul {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-size: 0.95rem;
	font-weight: 200;
	line-height: 1.7;
	opacity: 0.8;
    list-style-type: disc;
    margin-left: 1rem;
}

@media (max-width: 1200px) {
    .card-container {
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .card-container {
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .focus-card {
        padding: 1.5rem;
        border-left: 4px solid var(--secondary-50);
        border-top: 4px solid var(--secondary-50);
        background: linear-gradient(to bottom, var(--secondary-30), transparent);
    }

    .card-icon {
        width: 50px;
        height: 50px;
    }

    .card-container h3 {
        font-size: 1.1rem;
    }

    .card-container p {
        font-size: 0.85rem;
        line-height: 1.5rem;
    }
}

@media (max-width: 480px) {
    .focus-card {
        padding: 1rem;
    }

    .card-icon {
        width: 40px;
        height: 40px;
        margin-bottom: 0.75rem;
    }

    .card-container h3 {
        font-size: 1rem;
        margin-bottom: 0.75rem;
    }

    .card-container p {
        font-size: 0.8rem;
        line-height: 1.4rem;
        margin-bottom: 1rem;
    }

    .card-container ul {
        font-size: 0.8rem;
        gap: 0.5rem;
        margin-left: 0.5rem;
    }
}
</style>