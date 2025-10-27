<script setup>
import { ArrowRight, Server, Cloud, TrendingDown } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import SectionContainer from '../../global/SectionContainer.vue';
import Badge from '../../global/Badge.vue';
import PrimaryBtn from '../../global/PrimaryBtn.vue';

const router = useRouter();

const featuredProjects = [
	{
		id: 1,
		icon: Server,
		title: 'Optimización Web',
		summary: 'Reducción del consumo energético en aplicaciones web mediante algoritmos eficientes.',
		impact: '-40% CO₂'
	},
	{
		id: 2,
		icon: Cloud,
		title: 'Cloud Neutro',
		summary: 'Centros de datos alimentados por energías renovables con sistemas de refrigeración innovadores.',
		impact: '-80% emisiones'
	}
];

const navigateToID = () => {
	router.push('/investigacion-desarrollo');
};
</script>

<template>
	<div class="wrapper">
		<SectionContainer>
			<div class="header">
				<div class="header-content">
					<Badge>Innovación</Badge>

					<h2>Investigación y Desarrollo</h2>
					<p>
						Trabajamos en soluciones tecnológicas con bajo impacto de CO₂
						para alcanzar la neutralidad climática en 2050.
					</p>
				</div>
				<PrimaryBtn @click="navigateToServices" variant="outline" :icon="ArrowRight" iconPosition="right">
					Ver todos los proyectos
				</PrimaryBtn>
			</div>

			<div class="projects-preview">
				<article v-for="project in featuredProjects" :key="project.id" class="project-card-mini">
					<component :is="project.icon" class="project-icon" />
					<h3>{{ project.title }}</h3>
					<p>{{ project.summary }}</p>
					<div class="project-impact">
						<TrendingDown class="impact-icon" />
						<span>{{ project.impact }}</span>
					</div>
				</article>
			</div>
		</SectionContainer>
	</div>
</template>


<style scoped>
.wrapper {
	max-width: 1500px;
	margin: auto;
}


.header {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 3rem;
	gap: 2rem;
}


.header-content h2 {
	font-size: 2.5rem;
	font-weight: 500;
	margin-bottom: 1rem;
	color: var(--text-primary);
}

.header-content p {
	font-size: 1.1rem;
	font-weight: 200;
	line-height: 1.7;
	opacity: 0.95;
	color: var(--text-secondary);
	max-width: 700px;
}

.projects-preview {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
}

.project-card-mini {
	padding: 2rem;
	background: linear-gradient(135deg, var(--bg-primary), var(--bg-primary), var(--secondary-30));
	border: 1px solid var(--primary-10);
	border-radius: 1rem;
	transition: all 0.3s ease;
}

.project-card-mini:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	border-color: var(--primary-50);
	background: linear-gradient(135deg, var(--bg-primary), var(--secondary-30), var(--bg-primary));
	box-shadow: 0 10px 25px var(--primary-10);
}

.project-icon {
	width: 50px;
	height: 50px;
	padding: 12px;
	background: linear-gradient(to bottom right, var(--bg-primary), var(--primary-100), var(--bg-primary));
	color: white;
	border-radius: 12px;
	margin-bottom: 1.5rem;
}

.project-card-mini h3 {
	font-size: 1.25rem;
	font-weight: 500;
	line-height: 1.7;
	margin-bottom: 1rem;
}

.project-card-mini p {
	font-size: 0.95rem;
	font-weight: 200;
	line-height: 1.7;
	opacity: 0.8;
	margin-bottom: 1.5rem;
}

.project-impact {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: var(--primary-100);
	font-weight: 600;
	font-size: 0.95rem;
}

.impact-icon {
	width: 18px;
	height: 18px;
}

@media (max-width: 968px) {

	.wrapper {
		margin: 0 auto;
	}

	.header {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.preview-header {
		flex-direction: column;
		align-items: flex-start;
	}

	.header-content h2 {
		font-size: 2rem;
	}

	.header-content p {
		font-size: 1rem;
	}

	.projects-preview {
		grid-template-columns: 1fr;
	}
}
</style>