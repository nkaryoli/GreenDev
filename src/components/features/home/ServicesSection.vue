<script setup>
import { Globe, Smartphone, Server, TrendingDown, Zap, ArrowRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import SectionContainer from '../../global/SectionContainer.vue';
import SectionHeadder from '../../global/SectionHeadder.vue';
import Badge from '../../global/Badge.vue';
import PrimaryBtn from '../../global/PrimaryBtn.vue';
const router = useRouter();

const services = [
	{
		icon: Globe,
		tag: 'DAW',
		title: 'Desarrollo Web Sostenible',
		description: 'Creamos aplicaciones web modernas y eficientes que priorizan el rendimiento y la reducción del consumo energético sin sacrificar funcionalidad.',
		reduction: '-40% CO₂',
		efficiency: 'Alta eficiencia'
	},
	{
		icon: Smartphone,
		tag: 'DAM',
		title: 'Apps Multiplataforma',
		description: 'Desarrollamos aplicaciones que funcionan perfectamente en cualquier dispositivo, optimizando recursos y extendiendo la vida útil de la batería.',
		reduction: '-35% recursos',
		efficiency: 'Máximo rendimiento'
	},
	{
		icon: Server,
		tag: 'ASIX',
		title: 'Infraestructura Verde',
		description: 'Gestionamos sistemas y redes con tecnologías de vanguardia, energías renovables y estrategias de refrigeración eficiente.',
		reduction: '-60% emisiones',
		efficiency: '100% renovable'
	}
];

const navigateToServices = () => {
	router.push('/servicios');
};
</script>

<template>
	<section class="wrapper">
		<SectionContainer>
		<div class="container">
			<SectionHeadder>
				<template #title>Soluciones Tecnológicas Sostenibles</template>
				<template #subtitle>Tres áreas de especialización para transformar tu negocio con responsabilidad ambiental.</template>
			</SectionHeadder>

			<div class="services-list">
				<article v-for="(service, index) in services" :key="index" class="service-item"
					:class="{ 'reverse': index % 2 !== 0 }">
					<div class="service-visual">
						<div class="service-video">
							<video src="/src/assets/nk_qr_demo.mp4" muted controls></video>
						</div>
					</div>

					<div class="service-content">
						<Badge>{{ service.tag }}</Badge>
						<h3>{{ service.title }}</h3>
						<p>{{ service.description }}</p>
						<div class="service-metrics">
							<div class="metric">
								<TrendingDown class="metric-icon" />
								<span>{{ service.reduction }}</span>
							</div>
							<div class="metric">
								<Zap class="metric-icon" />
								<span>{{ service.efficiency }}</span>
							</div>
						</div>
					</div>
				</article>
			</div>

			<div class="cta-footer">
				<p>¿Quieres saber cómo podemos ayudarte?</p>
				<PrimaryBtn @click="navigateToServices" variant="default">
					<div class="btn-explore">
						Explorar servicios completos
						<ArrowRight class="btn-icon" />
					</div>
				</PrimaryBtn>
				
			</div>
		</div></SectionContainer>
	</section>
</template>
<style scoped>

.wrapper {
	background: linear-gradient(135deg, var(--secondary-30),  transparent, transparent, var(--primary-10));
}

.container {
	max-width: 1500px;
	margin: 0 auto;
}

.services-list {
	display: flex;
	flex-direction: column;
	gap: 4rem;
}

.service-item {
	display: grid;
	grid-template-columns: 1fr 1.5fr;
	gap: 3rem;
	align-items: center;
}

.service-item.reverse {
	grid-template-columns: 1.5fr 1fr;
}

.service-item.reverse .service-visual {
	order: 2;
}

.service-visual {
	position: relative;
	height: 300px;
	border-radius: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
}

@keyframes slidePattern {
	0% {
		transform: translate(0, 0);
	}

	100% {
		transform: translate(50px, 50px);
	}
}

.service-video {
	position: relative;
	z-index: 2;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.service-video video {
	width: 100%;
	height: 100%;
	object-fit: cover;
	box-shadow: 
		0 10px 30px var(--primary-30),
		0 5px 15px var(--primary-10),
		inset 0 1px 0 var(--accent-color);
	border: none;
	border-radius: 5px;
}

.service-content {
	position: relative;
	padding: 2rem;
}

.service-content h3 {
	font-size: 1.7rem;
	font-weight: 500;
	margin-bottom: 1rem;
	position: relative;
	z-index: 2;
}

.service-content p {
	font-size: 0.95rem;
	font-weight: 200;
	line-height: 1.7;
	opacity: 0.8;
	margin-bottom: 1.5rem;
}

.service-metrics {
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
}

.metric {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-weight: 300;
	color: var(--primary-100);
}

.metric-icon {
	width: 20px;
	height: 20px;
}

.cta-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	margin-top: 5rem;
	padding: 3rem;
	background: linear-gradient(165deg, var(--bg-primary), var(--secondary-30), var(--bg-primary));
	border-radius: 0.725rem;
	border: 2px solid var(--secondary-30);
}

.cta-footer p {
	font-size: 1.3rem;
	font-weight: 500;
}

.btn-explore {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
}

.btn-icon {
	width: 20px;
	height: 20px;
	transition: transform 0.3s ease;
}

.btn-explore:hover .btn-icon {
	transform: translateX(5px);
}

@media (max-width: 968px) {

	.service-item,
	.service-item.reverse {
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	.service-item.reverse .service-visual {
		order: 0;
	}

	.service-visual {
		height: 250px;
	}

	.service-video video {
		box-shadow: 
			0 8px 20px rgba(0, 0, 0, 0.25),
			0 3px 10px rgba(0, 0, 0, 0.15);
	}

	.service-content h3 {
		font-size: 1.6rem;
	}

	.cta-footer {
		padding: 2rem;
	}
}
</style>