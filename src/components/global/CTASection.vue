<script setup>
import { useRouter } from 'vue-router';
import SectionContainer from './SectionContainer.vue';
import PrimaryBtn from './PrimaryBtn.vue';
import SpotedCard from './SpotedCard.vue';

const router = useRouter();

const navigateToContact = () => {
	router.push('/contacto');
};
</script>

<template>
	<SectionContainer>
		<div class="cta-box">
			<SpotedCard class-name="custom-spotlight-card" spotlight-color="rgba(139, 148, 158, 0.35)">
				<div class="cta-stats">
					<div class="stat">
						<span class="stat-number">24h</span>
						<span class="stat-label">Tiempo de respuesta</span>
					</div>
					<div class="stat-divider"></div>
					<div class="stat">
						<span class="stat-number">100+</span>
						<span class="stat-label">Proyectos sostenibles</span>
					</div>
				</div>

				<h2>¿Hablamos de tu proyecto?</h2>
				<p>
					Cuéntanos tus necesidades y diseñaremos juntos una solución
					tecnológica sostenible y eficiente.
				</p>

				<PrimaryBtn @click="navigateToContact" variant="default" size="medium">
					<div class="btn-primary">
						Contactar
					</div>
				</PrimaryBtn>

			</SpotedCard>
		</div>
	</SectionContainer>
</template>


<style scoped>
.cta-box {
	max-width: 1200px;
	margin: 0 auto;
	text-align: center;
	background: var(--bg-primary);
}

.cta-stats {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	margin-bottom: 3rem;
}

.stat {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.stat-number {
	font-size: 3rem;
	font-weight: 700;
	color: var(--primary-100);
	line-height: 1;
}

.stat-label {
	font-size: 0.9rem;
	color: var(--text-secondary);
}

.stat-divider {
	width: 1px;
	height: 50px;
	background: var(--secondary-30);
}

.cta-box h2 {
	font-size: 2.5rem;
	font-weight: 500;
	margin-bottom: 1rem;
	color: var(--text-primary);
}

.cta-box p {
	font-size: 1.1rem;
	line-height: 1.6;
	opacity: 0.95;
	font-weight: 200;
	color: var(--text-secondary);
	margin-bottom: 2.5rem;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
}

.cta-buttons {
	display: flex;
	gap: 1rem;
	justify-content: center;
	flex-wrap: wrap;
}

.btn-primary {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	width: 250px;
}

.btn-secondary {
	width: 320px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 0.8rem 2.5rem;
	background: transparent;
	color: var(--secondary-100);
	border: 2px solid var(--secondary-100);
	border-radius: 0.5rem;
	font-size: 1rem;
	font-weight: 700;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.3s ease;
}

.btn-secondary:hover {
	background: var(--secondary-100);
	color: white;
}

.btn-icon {
	width: 20px;
	height: 20px;
}

@media (max-width: 768px) {
	.contact-minimal {
		padding: 3rem 1rem;
	}

	.cta-box {
		padding: 2.5rem 1.5rem;
	}

	.cta-stats {
		gap: 2rem;
	}

	.stat-number {
		font-size: 2.5rem;
	}

	.cta-box h2 {
		font-size: 2rem;
	}

	.cta-box p {
		font-size: 1rem;
	}

	.cta-buttons {
		flex-direction: column;
	}

	.btn-primary,
	.btn-secondary {
		width: 100%;
		justify-content: center;
	}
}
</style>