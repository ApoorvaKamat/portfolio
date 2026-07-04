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
    period: '2023 — Present',
    company: 'Current Company',
    role: 'Software Engineer II',
    desc: 'Lead Vue.js development for the core product. Collaborated with Java engineers to design and maintain REST APIs. Owned database schemas, optimized slow queries, and mentored junior engineers on the team.',
    tech: ['Vue.js', 'Java', 'PostgreSQL', 'REST APIs', 'Agile'],
  },
  {
    period: '2021 — 2023',
    company: 'Previous Company',
    role: 'Software Engineer I',
    desc: 'Built and maintained React-based web apps. Wrote Python scripts for data processing and automation pipelines. Developed SQL queries powering reporting and analytics features.',
    tech: ['React', 'Python', 'SQL', 'JavaScript'],
  },
  {
    period: '2020 — 2021',
    company: 'First Role',
    role: 'Junior Developer',
    desc: 'Started with HTML, CSS, and JavaScript — picked up React on the job. Contributed bug fixes and small features under senior engineers. First exposure to Java and relational databases.',
    tech: ['HTML/CSS', 'JavaScript', 'React', 'Java'],
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
  padding: 2.5rem 0;
  border-top: 1px solid var(--off2);
}

.exp-period {
  font-size: 0.8rem;
  color: var(--mid);
  font-weight: 300;
  margin-bottom: 0.4rem;
}

.exp-company {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--black);
}

.exp-role-title {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.3px;
  margin-bottom: 0.75rem;
}

.exp-blurb {
  font-size: 0.88rem;
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
}

@media (max-width: 680px) {
  .exp-row {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}
</style>