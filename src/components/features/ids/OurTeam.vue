<script setup>
import { Linkedin, Github, Twitter, Users, Heart, Lightbulb, Target, Leaf, ArrowRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import Badge from '../../global/Badge.vue';
import PrimaryBtn from '../../global/PrimaryBtn.vue';

const router = useRouter();

const teamMembers = [
	{
		name: 'Laura Fernández',
		role: 'CEO & Fundadora',
		image: 'data:image/jpeg;base64,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',
		bio: 'Ingeniera informática con 15 años de experiencia en desarrollo sostenible y transformación digital.',
		skills: ['Estrategia', 'Liderazgo', 'Sostenibilidad'],
		socials: [
			{ icon: Linkedin, url: 'https://linkedin.com' },
			{ icon: Twitter, url: 'https://twitter.com' }
		]
	},
	{
		name: 'Javier Torres',
		role: 'CTO',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5skQeQLmQApR-el6JWgTEvAkvasZ7no5DRw&s',
		bio: 'Arquitecto de software especializado en infraestructuras cloud verdes y optimización de recursos.',
		skills: ['Cloud', 'DevOps', 'Arquitectura'],
		socials: [
			{ icon: Linkedin, url: 'https://linkedin.com' },
			{ icon: Github, url: 'https://github.com' }
		]
	},
	{
		name: 'Carmen López',
		role: 'Head of Design',
		image: 'https://mockmind-api.uifaces.co/content/human/212.jpg',
		bio: 'Diseñadora UX/UI enfocada en crear experiencias digitales accesibles y de bajo impacto energético.',
		skills: ['UX/UI', 'Accesibilidad', 'Design Systems'],
		socials: [
			{ icon: Linkedin, url: 'https://linkedin.com' },
			{ icon: Twitter, url: 'https://twitter.com' }
		]
	},
	{
		name: 'Miguel Sánchez',
		role: 'Lead Developer',
		image: 'https://mockmind-api.uifaces.co/content/human/222.jpg',
		bio: 'Full-stack developer apasionado por el código limpio, eficiente y las mejores prácticas de desarrollo verde.',
		skills: ['Vue.js', 'Node.js', 'Performance'],
		socials: [
			{ icon: Linkedin, url: 'https://linkedin.com' },
			{ icon: Github, url: 'https://github.com' }
		]
	},
	{
		name: 'Elena Moreno',
		role: 'Sustainability Officer',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwBZHYrWDtR9jrrVLGtA3EAW-r2u3qXZvPg&s',
		bio: 'Especialista en medición de impacto ambiental y certificaciones de sostenibilidad empresarial.',
		skills: ['ASG', 'Certificaciones', 'Análisis de impacto'],
		socials: [
			{ icon: Linkedin, url: 'https://linkedin.com' }
		]
	},
	{
		name: 'David Ramírez',
		role: 'DevOps Engineer',
		image: 'https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/f3d22da1-6a33-45e4-944c-78f482103507/1739287028627.jpeg?t=1751712284',
		bio: 'Ingeniero DevOps especializado en automatización y despliegue continuo con infraestructura sostenible.',
		skills: ['Docker', 'Kubernetes', 'CI/CD'],
		socials: [
			{ icon: Linkedin, url: 'https://linkedin.com' },
			{ icon: Github, url: 'https://github.com' }
		]
	}
];

const navigate = () => {
	router.push('/contacto');
};
</script>

<template>
	<section class="our-team">
		<div class="container">
			<div class="section-header">
				<Badge>Nuestro Equipo</Badge>
				<h2>Expertos comprometidos con la sostenibilidad</h2>
				<p>
					Un equipo multidisciplinar apasionado por la tecnología verde
					y el desarrollo sostenible.
				</p>
			</div>

			<div class="team-grid">
				<article v-for="(member, index) in teamMembers" :key="index" class="team-card">
					<div class="member-image">
						<img :src="member.image" :alt="member.name">
						<div class="member-overlay">
							<div class="social-links">
								<a v-for="(social, idx) in member.socials" :key="idx" :href="social.url"
									class="social-link" target="_blank">
									<component :is="social.icon" class="social-icon" />
								</a>
							</div>
						</div>
					</div>

					<div class="member-info">
						<h3>{{ member.name }}</h3>
						<p class="member-role">{{ member.role }}</p>
						<p class="member-bio">{{ member.bio }}</p>

						<div class="member-skills">
							<span v-for="(skill, idx) in member.skills" :key="idx" class="skill-tag">
								{{ skill }}
							</span>
						</div>
					</div>
				</article>
			</div>

			<div class="join-team-cta">
				<div class="cta-content">
					<Users class="cta-icon" />
					<div>
						<h3>¿Quieres formar parte del equipo?</h3>
						<p>
							Estamos siempre buscando talento apasionado por la tecnología
							sostenible. Únete a nosotros y ayuda a construir un futuro mejor.
						</p>
					</div>
				</div>
				<PrimaryBtn @click="navigate" variant="default" size="large" :icon="ArrowRight" iconPosition="right">
					Contactanos
				</PrimaryBtn>
			</div>
		</div>
	</section>
</template>

<style scoped>
.our-team {
	padding: 5rem 2rem;
	background: var(--bg-secondary-20);
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

.team-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin-bottom: 5rem;
}

.team-card {
	background: var(--bg-primary);
	border: 2px solid var(--secondary-30);
	border-radius: 1.5rem;
	overflow: hidden;
	transition: all 0.3s ease;
}

.team-card:hover {
	transform: translateY(-8px);
	border-color: var(--secondary-100);
	box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.member-image {
	position: relative;
	width: 100%;
	aspect-ratio: 1;
	overflow: hidden;
	background: var(--secondary-30);
}

.member-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;
}

.team-card:hover .member-image img {
	transform: scale(1.1);
}

.member-overlay {
	position: absolute;
	inset: 0;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
	display: flex;
	align-items: flex-end;
	justify-content: center;
	padding: 1.5rem;
	opacity: 0;
	transition: opacity 0.3s ease;
}

.team-card:hover .member-overlay {
	opacity: 1;
}

.social-links {
	display: flex;
	gap: 1rem;
}

.social-link {
	width: 40px;
	height: 40px;
	background: var(--bg-secondary);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
}

.social-link:hover {
	transform: scale(1.3);
	background: var(--primary-50);
}

.social-icon {
	width: 20px;
	height: 20px;
	color: var(--text-primary);
}

.social-link:hover .social-icon {
	color: white;
}

.member-info {
	padding: 2rem;
}

.member-info h3 {
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
	color: var(--text-primary);
}

.member-role {
	font-size: 1rem;
	color: var(--secondary-100);
	font-weight: 600;
	margin-bottom: 1rem;
}

.member-bio {
	font-size: 0.95rem;
	line-height: 1.6;
	color: var(--text-secondary);
	margin-bottom: 1.5rem;
}

.member-skills {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}

.skill-tag {
	padding: 0.4rem 1rem;
	background: var(--primary-10);
	border-radius: 2rem;
	font-size: 0.85rem;
	font-weight: 600;
}

.team-values {
	margin-bottom: 4rem;
}

.team-values h3 {
	font-size: 2rem;
	text-align: center;
	margin-bottom: 3rem;
	color: var(--text-primary);
}

.values-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
}

.join-team-cta {
	padding: 3rem;
	background: linear-gradient(135deg, var(--secondary-30),  transparent);
	border-radius: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: end;
}

.cta-content {
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-bottom: 2rem;
}

.cta-icon {
	width: 70px;
	height: 70px;
	flex-shrink: 0;
}

.cta-content h3 {
	font-size: 2rem;
	margin-bottom: 1rem;
}

.cta-content p {
	font-size: 1.1rem;
	line-height: 1.7;
	opacity: 0.95;
}

@media (max-width: 1024px) {
	.team-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 768px) {
	.our-team {
		padding: 3rem 1rem;
	}

	h2 {
		font-size: 2rem;
	}

	.team-grid {
		grid-template-columns: 1fr;
	}

	.join-team-cta {
		align-items: center;
	}

	.cta-content {
		flex-direction: column;
		text-align: center;
	}

}
</style>