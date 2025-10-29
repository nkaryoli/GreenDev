<template>
  <section class="asg-certifications">
    <div class="container">
      <div class="section-header">
        <h2>Compromiso ASG</h2>
        <p>
          Nuestros estándares Ambientales, Sociales y de Gobernanza 
          garantizan transparencia, ética y responsabilidad en cada proyecto.
        </p>
      </div>

      <!-- Pilares ASG -->
      <div class="asg-pillars">
        <article 
          v-for="(pillar, index) in asgPillars" 
          :key="index"
          class="pillar-card"
        >
          <div class="pillar-icon-wrapper">
            <component :is="pillar.icon" class="pillar-icon" />
          </div>
          <h3>{{ pillar.title }}</h3>
          <p class="pillar-description">{{ pillar.description }}</p>
          <div class="pillar-commitments">
            <div 
              v-for="(commitment, idx) in pillar.commitments" 
              :key="idx"
              class="commitment-item"
            >
              <Check class="commitment-icon" />
              <span>{{ commitment }}</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Certificaciones -->
      <div class="certifications-grid">
        <h3>Nuestras Certificaciones</h3>
        <div class="certs">
          <article 
            v-for="(cert, index) in certifications" 
            :key="index"
            class="cert-card"
          >
            <div class="cert-badge">
              <component :is="cert.icon" class="cert-icon" />
            </div>
            <h4>{{ cert.name }}</h4>
            <p>{{ cert.description }}</p>
            <span class="cert-year">{{ cert.year }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Leaf, Users, Shield, Award, Globe, Recycle, Check, FileText, Download, BarChart } from 'lucide-vue-next';

const asgPillars = [
  {
    icon: Leaf,
    title: 'Ambiental',
    description: 'Minimizamos nuestro impacto ecológico y promovemos la sostenibilidad en cada decisión tecnológica.',
    commitments: [
      'Infraestructura 100% con energía renovable certificada',
      'Medición continua de huella de carbono',
      'Compensación de emisiones inevitable',
      'Economía circular en hardware y equipamiento',
      'Reducción de residuos electrónicos'
    ]
  },
  {
    icon: Users,
    title: 'Social',
    description: 'Promovemos la equidad, inclusión y bienestar de nuestro equipo, clientes y comunidades.',
    commitments: [
      'Igualdad salarial y de oportunidades',
      'Diversidad e inclusión en contratación',
      'Accesibilidad digital en todos los proyectos',
      'Programas de formación continua',
      'Apoyo a comunidades tecnológicas locales'
    ]
  },
  {
    icon: Shield,
    title: 'Gobernanza',
    description: 'Actuamos con transparencia, ética y responsabilidad en todas nuestras operaciones.',
    commitments: [
      'Código de ética empresarial estricto',
      'Transparencia en reportes financieros',
      'Protección de datos y privacidad',
      'Auditorías externas anuales',
      'Cumplimiento de normativas internacionales'
    ]
  }
];

const certifications = [
  {
    icon: Award,
    name: 'ISO 14001',
    description: 'Sistema de gestión ambiental certificado',
    year: '2022'
  },
  {
    icon: Globe,
    name: 'Green Web Foundation',
    description: 'Hosting 100% verde verificado',
    year: '2023'
  },
  {
    icon: Shield,
    name: 'B Corp Certified',
    description: 'Empresa con propósito social verificado',
    year: '2023'
  },
  {
    icon: Recycle,
    name: 'Carbon Neutral',
    description: 'Neutralidad de carbono certificada',
    year: '2024'
  }
];
</script>

<style scoped>
.asg-certifications {
  padding: 5rem 2rem;
  background: var(--bg-secondary-40);
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

.asg-pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
}

.pillar-card {
  padding: 2.5rem;
  background: var(--bg-primary);
  border: 2px solid var(--secondary-30);
  border-radius: 1.5rem;
  transition: all 0.3s ease;
}

.pillar-card:hover {
  transform: translateY(-8px);
  border-color: var(--secondary-100);
  box-shadow: 0 20px 50px var(--primary-y0);
}

.pillar-icon-wrapper {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--secondary-100), var(--primary-100));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.pillar-icon {
  width: 400px;
  height: 400px;
}

.pillar-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.pillar-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.pillar-commitments {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.commitment-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.commitment-icon {
  width: 18px;
  height: 18px;
  color: var(--secondary-100);
  flex-shrink: 0;
  margin-top: 2px;
}

.certifications-grid {
  margin-bottom: 4rem;
}

.certifications-grid h3 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
}

.certs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.cert-card {
  padding: 2rem;
  background: var(--bg-primary);
  border: 2px solid var(--secondary-30);
  border-radius: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.cert-card:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, var(--primary-10), var(--bg-primary),  var(--bg-primary));
  border: 2px solid var(--primary-30);
  border-color: var(--secondary-100);
  box-shadow: 0 15px 40px var(--primary-30);
}

.cert-badge {
  width: 80px;
  height: 80px;
  background: var(--secondary-30);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.cert-icon {
  width: 40px;
  height: 40px;
  color: var(--secondary-100);
}

.cert-card:hover .cert-icon {
  color: var(--primary-100);
  
}

.cert-card h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.cert-card p {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.cert-year {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: var(--primary-50);
  color: var(--bg-primary);
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 700;
}


.cert-card:hover .cert-year {
  background: var(--primary-100);
}
.transparency-section {
  padding: 3rem;
  background: var(--bg-primary);
  border: 2px solid var(--secondary-30);
  border-radius: 1.5rem;
}

.transparency-content {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.transparency-icon {
  width: 70px;
  height: 70px;
  color: var(--secondary-100);
  flex-shrink: 0;
}

.transparency-content h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.transparency-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.report-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-report {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--secondary-100);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-report:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.btn-report.secondary {
  background: transparent;
  color: var(--secondary-100);
  border: 2px solid var(--secondary-100);
}

.btn-report.secondary:hover {
  background: var(--secondary-100);
  color: white;
}

.btn-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 1024px) {
  .asg-pillars {
    grid-template-columns: 1fr;
  }

  .certs {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .asg-certifications {
    padding: 3rem 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .pillar-card {
    padding: 2rem;
  }

  .certs {
    grid-template-columns: 1fr;
  }

  .transparency-content {
    flex-direction: column;
    text-align: center;
  }

  .report-buttons {
    flex-direction: column;
  }

  .btn-report {
    width: 100%;
    justify-content: center;
  }
}
</style>