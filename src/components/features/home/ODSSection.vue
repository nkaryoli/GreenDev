<script setup>

import { Target, Award, TrendingUp, ArrowRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import SectionContainer from '../../global/SectionContainer.vue';
import Badge from '../../global/Badge.vue';
import PrimaryBtn from '../../global/PrimaryBtn.vue';

const router = useRouter();

const navigateToODS = () => {
	router.push('/i+d');
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
					<PrimaryBtn @click="navigateToODS" variant="default" :icon="ArrowRight" iconPosition="right">
						Explorar los ODS
					</PrimaryBtn>
				</div>
				<div class="ods-grid">
					<div v-for="n in 8" :key="n" class="ods-item">
						<img :src="`./src/assets/ods/o${n}.svg`" :alt="`ODS ${n}`" />
					</div>

					<PrimaryBtn @click="navigateToODS" variant="outline" size="full">
						Saber más
					</PrimaryBtn>

				</div>
			</div>
		</SectionContainer>
	</section>
</template>

<style scoped>
.sustainability {
	background: linear-gradient(to right, var(--bg-primary), var(--bg-secondary-40), var(--bg-primary));
}

.wrapper {
	max-width: 1500px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 400px;
	gap: 4rem;
	align-items: center;
}

.content {
	width: 100%;
}

.content h2 {
	font-size: 2.5rem;
	margin-bottom: 1.5rem;
	font-weight: 500;

}

.content p {
	font-size: 1.1rem;
	font-weight: 200;
	line-height: 1.7;
	opacity: 0.9;
	line-height: 1.7;
	margin-bottom: 2rem;

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
	font-size: 0.95rem;
	font-weight: 300;
	line-height: 1.7;
	opacity: 0.8;
}

.highlight-icon {
	width: 24px;
	height: 24px;
	color: var(--primary-100);
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

@media (max-width: 968px) {
	.wrapper {
		grid-template-columns: 1fr;
	}

	.ods-grid {
		grid-template-columns: repeat(6, 1fr);
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

@media (max-width: 668px) {
	.ods-grid {
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>