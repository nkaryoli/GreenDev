<script setup>
import { TrendingDown, Zap, Droplets, TreePine, Car, Home, Users } from 'lucide-vue-next';

const metrics = [
  {
    icon: TrendingDown,
    value: '450 ton',
    label: 'CO₂ evitado anualmente',
    description: 'Emisiones prevenidas gracias a nuestras soluciones eficientes'
  },
  {
    icon: Zap,
    value: '2.5 GWh',
    label: 'Energía ahorrada',
    description: 'Reducción del consumo energético en proyectos implementados'
  },
  {
    icon: Droplets,
    value: '180K L',
    label: 'Agua conservada',
    description: 'Ahorro en refrigeración de centros de datos'
  },
  {
    icon: TreePine,
    value: '6,800',
    label: 'Árboles equivalentes',
    description: 'Equivalente a plantar miles de árboles cada año'
  }
];

</script>

<template>
  <section class="our-impact">
    <div class="container">
      <div class="section-header">
        <h2>Nuestro Impacto Ambiental</h2>
        <p>
          Medimos y reportamos de forma transparente el impacto positivo 
          que generamos en cada proyecto que desarrollamos.
        </p>
      </div>

      <div class="impact-metrics">
        <article 
          v-for="(metric, index) in metrics" 
          :key="index"
          class="metric-card"
        >
          <component :is="metric.icon" class="metric-icon" />
          <div class="metric-content">
            <span class="metric-value">{{ metric.value }}</span>
            <span class="metric-label">{{ metric.label }}</span>
            <p class="metric-description">{{ metric.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>

.our-impact {
  padding: 5rem 2rem 0 2rem;
  background: var(--bg-primary);
}

.container {
  max-width: 1400px;
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
}

.section-header p {
  font-size: 1.1rem;
  line-height: 1.7;
}

.impact-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
}

.metric-card {
  padding: 2rem;
  background: var(--bg-secondary-40);
  border: 2px solid var(--secondary-30);
  border-radius: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-5px);
  border-color: var(--secondary-100);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.metric-icon {
  width: 50px;
  height: 50px;
  color: var(--secondary-100);
  margin: 0 auto 1.5rem;
}

.metric-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--primary-100);
  margin-bottom: 0.5rem;
}

.metric-label {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.metric-description {
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .impact-metrics {
    grid-template-columns: repeat(2, 1fr);
  }

  .comparison-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .our-impact {
    padding: 3rem 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .impact-metrics {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>