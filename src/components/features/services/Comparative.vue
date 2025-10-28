<script setup>
import { Globe, Smartphone, Server, Zap, DollarSign, Clock, Users, Check, X, Minus } from 'lucide-vue-next';
import SectionContainer from '../../global/SectionContainer.vue';
import SectionHeader from '../../global/SectionHeadder.vue';

const services = [
	{ id: 'daw', icon: Globe, tag: 'DAW', shortTitle: 'Web' },
	{ id: 'dam', icon: Smartphone, tag: 'DAM', shortTitle: 'Apps' },
	{ id: 'asix', icon: Server, tag: 'ASIX', shortTitle: 'Infraestructura' }
];

const features = [
	{
		name: 'Mejor para',
		icon: Users,
		values: {
			daw: { icon: Check, class: 'check', text: 'Empresas con presencia web' },
			dam: { icon: Check, class: 'check', text: 'Apps móviles y desktop' },
			asix: { icon: Check, class: 'check', text: 'Infraestructura IT' }
		}
	},
	{
		name: 'Tiempo estimado',
		icon: Clock,
		values: {
			daw: { icon: Minus, class: 'neutral', text: '2-4 meses' },
			dam: { icon: Minus, class: 'neutral', text: '3-6 meses' },
			asix: { icon: Minus, class: 'neutral', text: '1-3 meses' }
		}
	},
	{
		name: 'Inversión',
		icon: DollarSign,
		values: {
			daw: { icon: Minus, class: 'neutral', text: 'Media' },
			dam: { icon: Minus, class: 'neutral', text: 'Media-Alta' },
			asix: { icon: Minus, class: 'neutral', text: 'Variable' }
		}
	},
	{
		name: 'Reducción CO₂',
		icon: Zap,
		values: {
			daw: { icon: Check, class: 'check', text: '40%' },
			dam: { icon: Check, class: 'check', text: '35%' },
			asix: { icon: Check, class: 'check', text: '60%' }
		}
	}
];
</script>

<template>
	<SectionContainer>
		<div class="container">
			<SectionHeader>
				<template #title>¿Qué servicio necesitas?</template>
				<template #subtitle>Compara nuestros servicios y encuentra el que mejor se adapta a tu proyecto</template>
			</SectionHeader>
			<div class="comparison-table">
				<div class="table-header">
					<div class="header-cell empty"></div>
					<div class="header-cell" v-for="service in services" :key="service.id">
						<span class="header-tag">{{ service.tag }}</span>
						<h4>{{ service.shortTitle }}</h4>
					</div>
				</div>

				<div class="table-body">
					<div v-for="(feature, index) in features" :key="index" class="table-row">
						<div class="feature-cell">
							<component :is="feature.icon" class="feature-icon" />
							<span>{{ feature.name }}</span>
						</div>
						<div v-for="service in services" :key="service.id" class="value-cell">
							<component :is="feature.values[service.id].icon"
								:class="['value-icon', feature.values[service.id].class]" />
							<span>{{ feature.values[service.id].text }}</span>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</SectionContainer>
</template>



<style scoped>

.container {
	max-width: 1400px;
	margin: 0 auto;
}

.comparison-table {
	border: 2px solid var(--secondary-30);
	border-radius: 0.625rem;
	overflow: hidden;
}

.table-header {
	display: grid;
	grid-template-columns: 250px repeat(3, 1fr);
	gap: 1px;
	background: var(--secondary-30);
}

.header-cell {
	padding: 2rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
	border-left: 1px solid var(--bg-primary);
	margin-left: -1px;
}

.header-cell.empty {
	background: transparent;
}

.header-tag {
	padding: 0.3rem 0.8rem;
	background: var(--primary-100);
	color: var(--bg-primary);
	border-radius: 2rem;
	font-size: 0.75rem;
	font-weight: 700;
}

h4 {
	font-size: 1.2rem;
}

.table-body {
	display: flex;
	flex-direction: column;
	gap: 1px;
}

.table-row {
	display: grid;
	grid-template-columns: 250px repeat(3, 1fr);
	gap: 1px;
}

.feature-cell,
.value-cell {
	padding: 1.5rem;
	background: var(--bg-secondary-40);
}

.feature-cell {
	display: flex;
	align-items: center;
	gap: 1rem;
	font-weight: 600;
	background: var(--secondary-30);
}

.table-row:first-child .feature-cell {
	border-top: 1px solid var(--bg-primary);
}

.feature-icon {
	width: 24px;
	height: 24px;
	color: var(--primary-100);
	flex-shrink: 0;
}

.value-cell {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	text-align: center;
}

.value-icon {
	width: 24px;
	height: 24px;
}

.value-icon.check {
	color: var(--primary-100);
}

@media (max-width: 1024px) {
	.comparison-table {
		overflow-x: auto;
	}

	.table-header,
	.table-row {
		min-width: 800px;
	}
}
</style>