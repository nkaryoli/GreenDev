<script setup>
import { Star, Quote, TrendingDown } from 'lucide-vue-next';
import Badge from '../../global/Badge.vue';

const testimonials = [
	{
		name: 'María González',
		role: 'CTO',
		company: 'EcoTech Solutions',
		avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqVhcdQfmZzXlQ1qbQRS2b4994c5ho585vA&s', 
		rating: 5,
		quote: 'GreenDev transformó completamente nuestra infraestructura. No solo redujimos costes operativos en un 35%, sino que también logramos certificar nuestra neutralidad de carbono. El equipo fue excepcional.',
		impact: '-42% CO₂',
		projectType: 'Infraestructura Cloud'
	},
	{
		name: 'Carlos Ruiz',
		role: 'Director de Innovación',
		company: 'Sustainable Retail Group',
		avatar: 'https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d70e/689f36244b9da2b6e44e1074_Ryan-7.jpg',
		rating: 5,
		quote: 'La plataforma web que desarrollaron es increíblemente rápida y eficiente. Nuestros clientes notan la diferencia y nosotros estamos orgullosos de tener una presencia digital sostenible.',
		impact: '-38% consumo energético',
		projectType: 'E-commerce Sostenible'
	},
	{
		name: 'Ana Martínez',
		role: 'CEO',
		company: 'GreenLogistics',
		avatar: 'https://www.heygen.com/_next/image?url=https%3A%2F%2Fdynamic.heygen.ai%2Fwww%2FAvatars%2520Page%2520-%2520Rebrand%2FSilvia.png%3FupdatedAt%3D1757984236000&w=640&q=75',
		rating: 5,
		quote: 'Desde el primer día demostraron un compromiso real con la sostenibilidad. La app que crearon optimiza nuestras rutas de entrega reduciendo emisiones. Es exactamente lo que necesitábamos.',
		impact: '-55% emisiones logísticas',
		projectType: 'App Multiplataforma'
	}
];

</script>

<template>
	<section class="testimonials">
		<div class="container">
			<div class="section-header">
				<Badge>Testimonios</Badge>
				<h2>Lo que dicen nuestros clientes</h2>
				<p>
					Historias reales de empresas que han transformado su tecnología
					con un enfoque sostenible.
				</p>
			</div>

			<!-- Testimonios destacados -->
			<div class="testimonials-grid">
				<article v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
					<div class="testimonial-header">
						<div class="client-avatar">
							<img :src="testimonial.avatar" :alt="testimonial.name">
						</div>
						<div class="client-info">
							<h4>{{ testimonial.name }}</h4>
							<p class="client-role">{{ testimonial.role }}</p>
							<p class="client-company">{{ testimonial.company }}</p>
						</div>
					</div>

					<div class="rating">
						<Star v-for="n in 5" :key="n" class="star-icon"
							:class="{ 'filled': n <= testimonial.rating }" />
					</div>

					<blockquote>
						<Quote class="quote-icon" />
						<p>{{ testimonial.quote }}</p>
					</blockquote>

					<div class="testimonial-footer">
						<div class="project-impact">
							<TrendingDown class="impact-icon" />
							<span>{{ testimonial.impact }}</span>
						</div>
						<Badge class="badge">{{ testimonial.projectType }}</Badge>
					</div>
				</article>
			</div>

			<!-- Stats de satisfacción -->
			<div class="satisfaction-stats">
				<div class="stat-item">
					<span class="stat-number">98%</span>
					<span class="stat-label">Satisfacción del cliente</span>
				</div>
				<div class="stat-divider"></div>
				<div class="stat-item">
					<span class="stat-number">4.9/5</span>
					<span class="stat-label">Valoración media</span>
				</div>
				<div class="stat-divider"></div>
				<div class="stat-item">
					<span class="stat-number">150+</span>
					<span class="stat-label">Proyectos completados</span>
				</div>
			</div>

		</div>
	</section>
</template>

<style scoped>
.testimonials {
	padding: 4rem 2rem;
	background: var(--bg-secondary);
}

.container {
	max-width: 1200px;
	margin: 0 auto;
}

.section-header {
	text-align: center;
	max-width: 800px;
	margin: 0 auto 4rem;
}

h2 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: var(--text-primary);
}

.section-header p {
	font-size: 1.1rem;
	line-height: 1.7;
	color: var(--text-secondary);
}

.testimonials-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 2rem;
	margin-bottom: 4rem;
}

.testimonial-card {
	padding: 2.5rem;
	background: var(--bg-secondary-40);
	border: 2px solid var(--secondary-30);
	border-radius: 1.5rem;
	transition: all 0.3s ease;
	position: relative;
}

.testimonial-card:hover {
	transform: translateY(-8px);
	border-color: var(--secondary-100);
	box-shadow: 0 20px 50px var(--secondary-30);
}

.testimonial-header {
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1.5rem;
}

.client-avatar {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
	background: var(--secondary-30);
	flex-shrink: 0;
}

.client-avatar img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.client-info h4 {
	font-size: 1.2rem;
	margin-bottom: 0.25rem;
	color: var(--text-primary);
}

.client-role {
	font-size: 0.9rem;
	color: var(--text-secondary);
	font-weight: 600;
	margin-bottom: 0.25rem;
}

.client-company {
	font-size: 0.85rem;
	color: var(--secondary-100);
	font-weight: 600;
}

.rating {
	display: flex;
	gap: 0.25rem;
	margin-bottom: 1.5rem;
}

.star-icon {
	width: 20px;
	height: 20px;
	color: var(--secondary-30);
	fill: var(--secondary-30);
}

.star-icon.filled {
	color: #FCC30B;
	fill: #FCC30B;
}

blockquote {
	position: relative;
	margin: 0 0 1.5rem 0;
	padding: 0;
}

.quote-icon {
	position: absolute;
	top: -10px;
	left: -20px;
	width: 30px;
	height: 30px;
	color: var(--primary-50);
	opacity: 0.5;
}

blockquote p {
	font-size: 1rem;
	line-height: 1.7;
	color: var(--text-secondary);
	font-style: italic;
}

.testimonial-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
	padding-top: 1.5rem;
	border-top: 1px solid var(--secondary-30);
}

.project-impact {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-weight: 700;
	color: var(--secondary-100);
}

.impact-icon {
	width: 18px;
	height: 18px;
}

.badge {
	margin: 0;
}

.satisfaction-stats {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	padding: 3rem;
	background: var(--bg-secondary-40);
	border: 2px solid var(--secondary-30);
	border-radius: 1.5rem;
	margin-bottom: 4rem;
	flex-wrap: wrap;
}

.stat-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
}

.stat-number {
	font-size: 3rem;
	font-weight: 900;
	color: var(--secondary-100);
	line-height: 1;
}

.stat-label {
	font-size: 0.95rem;
	color: var(--text-secondary);
	text-align: center;
}

.stat-divider {
	width: 1px;
	height: 60px;
	background: var(--secondary-30);
}

@media (max-width: 768px) {
	.testimonials {
		padding: 3rem 1rem;
	}

	h2 {
		font-size: 2rem;
	}

	.testimonials-grid {
		grid-template-columns: 1fr;
	}

	.testimonial-card {
		padding: 2rem;
	}

	.satisfaction-stats {
		flex-direction: column;
		gap: 2rem;
		padding: 2rem;
	}

	.stat-divider {
		width: 60px;
		height: 1px;
	}

}
</style>