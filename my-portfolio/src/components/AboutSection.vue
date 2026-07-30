<template>
  <section id="about" class="section-inner">
    <p class="section-label fade-up" v-animate>About me</p>
    <h2 class="big-heading fade-up" v-animate>
      Engineering end&#8209;to&#8209;end,<br />thinking full&#8209;stack.
    </h2>
    <div class="about-grid fade-up" v-animate>
      <div class="about-body">
        <p>
          I'm a <strong>Software Engineer II</strong> at Lumen Technologies, where I
          lead frontend architecture across <strong>Vue.js, Angular</strong> and
          <strong>React</strong>; building production microapps, reusable
          component systems, and self-service dashboards used by
          cross-functional engineering teams.
        </p>
        <p>
          On the backend I work with <strong>Java Spring</strong> and
          <strong>ASP.NET</strong>, designing REST APIs and the data pipelines
          that sit behind them. That range came from starting my career at
          Accenture, working across the full stack on travel and insurance
          platforms before moving into frontend-focused engineering.
        </p>
        <p>
          I hold an <strong>M.S. in Computer Engineering</strong> from UT
          Dallas, and I care as much about the systems behind an interface as
          the interface itself — performance, test coverage, and the
          engineers who'll maintain it after me.
        </p>
      </div>
      <div class="about-nums">
        <div v-for="stat in stats" :key="stat.label" class="num-item">
          <div class="num-val">
            {{ stat.value }}<span>{{ stat.suffix }}</span>
          </div>
          <div class="num-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFadeUp } from '../composables/useFadeUp'

const vAnimate = useFadeUp()

const stats = [
  { value: '6', suffix: '+', label: 'Years in software engineering' },
  { value: '62', suffix: '%', label: 'Faster page loads, Vue 2→3' },
  { value: '90', suffix: '%', label: 'Cypress test coverage shipped' },
  { value: '2', suffix: '', label: 'Companies, one full stack' },
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 4rem;
}

.about-body {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 0.95rem;
  font-weight: 300;
  color: var(--mid);
  line-height: 1.9;
}

.about-body strong {
  color: var(--black);
  font-weight: 500;
}

.about-nums {
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 2.5rem;
}

.num-val {
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -2px;
  color: var(--black);
  line-height: 1;
  margin-bottom: 0.4rem;
}

.num-val span {
  font-size: 1.5rem;
  color: var(--blue);
}

.num-label {
  font-size: 0.8rem;
  color: var(--mid);
  font-weight: 300;
}

@media (max-width: 680px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>