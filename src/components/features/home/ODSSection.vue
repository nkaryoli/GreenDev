<script setup>

import { Target, Award, TrendingUp, ArrowRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import SectionContainer from '../../global/SectionContainer.vue';
import Badge from '../../global/Badge.vue';
import PrimaryBtn from '../../global/PrimaryBtn.vue';

const router = useRouter();

const navigateToODS = () => {
	router.push('/sostenibilidad');
};

</script>


<template>
	<section class="sustainability">
		<SectionContainer>
			<div class="wrapper">
				<div class="content">
					<Badge>Compromiso Global</Badge>
					<h2>Objetivos de Desarrollo Sostenible</h2>
					<p>
						Alineamos cada proyecto con los 17 ODS de la ONU. Ayudamos a las
						empresas a integrar la sostenibilidad en su estrategia digital y
						contribuir activamente al bienestar del planeta.
					</p>
					<div class="ods-highlights">
						<div class="highlight-item">
							<Target class="highlight-icon" />
							<span>17 ODS integrados</span>
						</div>
						<div class="highlight-item">
							<Award class="highlight-icon" />
							<span>Certificación ASG</span>
						</div>
						<div class="highlight-item">
							<TrendingUp class="highlight-icon" />
							<span>Impacto medible</span>
						</div>
					</div>
					<PrimaryBtn @click="navigateToODS" variant="default">
						<div class="btn-primary">
							Explorar los ODS
							<ArrowRight class="btn-icon" />
						</div>
					</PrimaryBtn>
				</div>
				<div class="ods-grid">
					<div v-for="n in 8" :key="n" class="ods-item">
						<img :src="`./src/assets/ods/o${n}.svg`" :alt="`ODS ${n}`" />
					</div>

					<PrimaryBtn @click="navigateToODS" variant="secondary" size="full">
						Saber más
					</PrimaryBtn>

				</div>
			</div>
		</SectionContainer>
	</section>
</template>

<style scoped>
.sustainability {
	background: linear-gradient(to right, var(--bg-secondary), var(--bg-primary));
}

.wrapper {
	max-width: 1500px;
	margin: 1rem auto;
	display: grid;
	grid-template-columns: 1fr 30%;
	gap: 4rem;
	align-items: center;
}

.content h2 {
	font-size: 2.5rem;
	margin-bottom: 1.5rem;

}

.content p {
	font-size: 0.9rem;
	line-height: 1.7;
	margin-bottom: 2rem;
	opacity: 0.85;
}

.ods-highlights {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2rem;
}

.highlight-item {
	display: flex;
	align-items: center;
	gap: 1rem;
	font-weight: 500;
}

.highlight-icon {
	width: 24px;
	height: 24px;
	color: var(--primary-100);
}

.btn-primary {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
}

.btn-icon {
	width: 20px;
	height: 20px;
}

.ods-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0.7rem;
}

.ods-item {
	width: 100%;
	aspect-ratio: 1;
	border-radius: 0.25rem;
	overflow: hidden;
	transition: all 0.3s ease;
	opacity: 0.7;
}

.ods-item img {
	width: 100%;
	object-fit: contain;
}

.ods-item:hover {
	transform: scale(1.1);
	opacity: 1;
	z-index: 10;
}

@media (max-width: 768px) {
	.sustainability-preview {
		padding: 3rem 1rem;
	}

	.content-wrapper {
		grid-template-columns: 1fr;
		gap: 3rem;
	}

	.content h2 {
		font-size: 2rem;
	}

	.content p {
		font-size: 1rem;
	}
}
</style>