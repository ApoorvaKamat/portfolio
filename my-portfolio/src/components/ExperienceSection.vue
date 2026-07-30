<template>
  <div class="exp-bg">
    <div id="experience" class="section-inner">
      <p class="section-label fade-up" v-animate>Experience</p>
      <h2 class="big-heading fade-up" v-animate>Where I've been.</h2>
      <div class="exp-list">
        <div
          v-for="job in experience"
          :key="job.role"
          class="exp-row fade-up"
          v-animate
        >
          <div class="exp-meta">
            <div class="exp-period">{{ job.period }}</div>
            <div class="exp-company">{{ job.company }}</div>
          </div>
          <div class="exp-content">
            <div class="exp-role-title">{{ job.role }}</div>
            <p class="exp-blurb">{{ job.desc }}</p>
            <div class="exp-chips">
              <span v-for="tech in job.tech" :key="tech" class="exp-chip">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFadeUp } from '../composables/useFadeUp'

const vAnimate = useFadeUp()

const experience = [
  {
    period: 'Jun 2022 — Present',
    company: 'Lumen Technologies',
    role: 'Software Engineer II (Promoted from Intern)',
    desc: 'Lead front-end development of production React and TypeScript microapps, building reusable component libraries and self-service operational dashboards used by cross-functional engineering teams. Upgraded 3 Vue.js microapps from v2 to v3, cutting page load times by 62%, and drove a 30% increase in user engagement through real-time features. Achieved 90% Cypress test coverage and mentored junior engineers, improving team coding proficiency by 70%.',
    tech: ['React', 'Vue.js', 'TypeScript', 'Java Spring', 'Cypress', 'ServiceNow'],
  },
  {
    period: 'Jul 2018 — Jul 2021',
    company: 'Accenture',
    role: 'Application Development Analyst',
    desc: 'Designed and delivered reusable UX prototypes and accessible interfaces, modernizing legacy applications for a tenfold improvement in user experience. Built scalable REST APIs and backend transaction systems with .NET and SQL Server for high-volume data pipelines, accelerating application performance by 30%. Cut testing cycle time by 40% with automated Selenium suites and resolved 150+ production issues via Splunk log analysis.',
    tech: ['.NET', 'ASP.NET', 'C#', 'SQL Server', 'Selenium', 'Splunk'],
  },
  {
    period: 'Feb 2017 — Jun 2017',
    company: 'Imedrix',
    role: 'Machine Learning Intern',
    desc: 'Implemented a K-means machine learning algorithm to classify 12 cardiac arrhythmias for a handheld ECG device, achieving 70% classification accuracy — an early hands-on application of ML to real-world medical data. Managed project timelines and task delegation, leading the team to a 95% on-time completion rate.',
    tech: ['Python', 'Machine Learning', 'Data Classification'],
  },
]
</script>

<style scoped>
.exp-bg {
  background: var(--off);
}

.exp-list {
  margin-top: 4rem;
}

.exp-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 3rem;
  padding: 2.25rem 0;
  border-top: 1px solid var(--off2);
  align-items: start;
}

.exp-period {
  font-size: 0.78rem;
  color: var(--mid);
  font-weight: 500;
  margin-bottom: 0.45rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.exp-company {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--black);
}

.exp-role-title {
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: -0.3px;
  margin-bottom: 0.7rem;
}

.exp-blurb {
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--mid);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.exp-chips {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.exp-chip {
  font-size: 0.68rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 980px;
  border: 1px solid var(--off2);
  color: var(--mid);
  background: var(--card);
}

@media (max-width: 680px) {
  .exp-row {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}
</style>