<script setup>

import { Server, Zap, Cloud, Database, Leaf, Target } from 'lucide-vue-next';
import SectionContainer from '../../global/SectionContainer.vue';

const researchProjects = [
  {
    icon: Server,
    title: 'Optimización Energética Web',
    description: 'Algoritmos avanzados de renderizado y carga diferida que reducen significativamente el consumo energético de aplicaciones web modernas.',
    progress: 75,
    impact: 'Reducción del 40% en consumo energético'
  },
  {
    icon: Cloud,
    title: 'Centros de Datos Verdes',
    description: 'Investigación de sistemas de refrigeración innovadores y aprovechamiento del calor residual para infraestructuras cloud carbono-neutras.',
    progress: 45,
    impact: 'Objetivo: -80% emisiones CO₂'
  },
  {
    icon: Zap,
    title: 'Edge Computing Renovable',
    description: 'Arquitecturas de procesamiento distribuido alimentadas exclusivamente por energía solar y eólica para computación en tiempo real.',
    progress: 60,
    impact: 'Cero emisiones en procesamiento edge'
  },
  {
    icon: Database,
    title: 'IA para Optimización Energética',
    description: 'Modelos de machine learning que predicen y optimizan el consumo en tiempo real, adaptándose a la disponibilidad de energías renovables.',
    progress: 30,
    impact: 'Optimización adaptativa 24/7'
  }
];
</script>

<template>
  <SectionContainer>

    <div class="container">
      <div class="section-intro">
        <h2>Investigación y Desarrollo</h2>
        <p>
          Nuestro compromiso con la innovación sostenible nos impulsa a investigar 
          y desarrollar soluciones que reduzcan drásticamente el impacto ambiental 
          de la tecnología, trabajando hacia la <strong>neutralidad climática en 2050</strong>.
        </p>
      </div>

      <div class="projects-grid">
        <article 
          v-for="(project, index) in researchProjects" 
          :key="index"
          class="project-card"
        >
          <div class="card-header">
            <component :is="project.icon" class="project-icon" />
            <span class="progress-badge" :style="{ '--progress': project.progress }">
              {{ project.progress }}%
            </span>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="card-footer">
            <div class="impact">
              <Leaf class="leaf-icon" />
              <span>{{ project.impact }}</span>
            </div>
          </div>
        </article>
      </div>

      <div class="commitment-banner">
        <Target class="target-icon" />
        <div>
          <h3>Objetivo 2050: Neutralidad Climática</h3>
          <p>
            Todos nuestros proyectos de I+D están alineados con el objetivo global 
            de alcanzar la neutralidad en emisiones de carbono para 2050.
          </p>
        </div>
      </div>
    </div>

  </SectionContainer>
</template>

<style scoped>


.container {
  max-width: 1300px;
  margin: 2rem auto 0 auto;
}

.section-intro {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 4rem;
}

.section-intro h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.section-intro p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: var(--bg-secondary-40);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--secondary-30);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--secondary-100);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.project-icon {
  width: 50px;
  height: 50px;
  padding: 12px;
  background: var(--secondary-100);
  color: white;
  border-radius: 12px;
}

.progress-badge {
  padding: 0.4rem 1rem;
  background: linear-gradient(
    to right, 
    var(--secondary-100) var(--progress), 
    var(--secondary-30) var(--progress)
  );
  color: white;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 700;
}

.project-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.project-card p {
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.card-footer {
  padding-top: 1rem;
  border-top: 1px solid var(--secondary-30);
}

.impact {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-100);
  font-weight: 600;
  font-size: 0.9rem;
}

.leaf-icon {
  width: 18px;
  height: 18px;
}

.commitment-banner {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, var(--secondary-100), var(--primary-100));
  border-radius: 1rem;
  color: white;
  margin-top: 3rem;
}

.target-icon {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.commitment-banner h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: white;
}

.commitment-banner p {
  font-size: 1rem;
  opacity: 0.95;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .research-grid-section {
    padding: 3rem 1rem;
  }

  .section-intro h2 {
    font-size: 2rem;
  }

  .section-intro p {
    font-size: 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .commitment-banner {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .commitment-banner h3 {
    font-size: 1.5rem;
  }
}
</style>