<script setup>
import { Leaf, TrendingDown, Zap, Target } from 'lucide-vue-next';
import SectionHeader from '../../global/SectionHeadder.vue';
import SectionContainer from '../../global/SectionContainer.vue';
import Badge from '../../global/Badge.vue'
import GraphicBg from './GraphicBg.vue';
</script>

<template>
  <section class="wrapper">
    <GraphicBg/>
    <SectionContainer>
      <div class="container-sustenability">
        <Badge>
        <span class="hero-badge">
          <Leaf class="badge-icon" />
          Compromiso Ambiental
        </span>
      </Badge>
        <SectionHeader>
          <template #title>Sostenibilidad en cada línea de código</template>
          <template #subtitle>Construimos tecnología que impulsa el progreso sin comprometer
            el futuro del planeta. Nuestro compromiso con la sostenibilidad
            está integrado en cada decisión que tomamos.</template>
        </SectionHeader>

        <div class="hero-metrics">
          <div class="metric">
            <TrendingDown class="metric-icon" />
            <span class="metric-number">-45%</span>
            <span class="metric-label">Reducción media de CO₂</span>
          </div>
          <div class="metric">
            <Zap class="metric-icon" />
            <span class="metric-number">100%</span>
            <span class="metric-label">Energía renovable</span>
          </div>
          <div class="metric">
            <Target class="metric-icon" />
            <span class="metric-number">17</span>
            <span class="metric-label">ODS integrados</span>
          </div>
        </div>
      </div>
    </SectionContainer>
  </section>
</template>

<style scoped>

.wrapper {
  padding-top: 3rem;
  background: linear-gradient(to top, var(--secondary-30), transparent);
  position: relative;
} 

.container-sustenability {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(2px);
  z-index: 2;
}


.badge-icon {
  width: 18px;
  height: 18px;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

p {
  font-size: 1.3rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  opacity: 0.95;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-metrics {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.metric {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.metric-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
}

.metric-number {
  color: var(--primary-100);
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
}

.metric-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.1rem;
  }

  .hero-metrics {
    gap: 2rem;
  }

  .metric-number {
    font-size: 2.5rem;
  }
}
</style>