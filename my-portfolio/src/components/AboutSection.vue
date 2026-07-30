<template>
  <section id="about" class="section-inner">
    <p class="section-label fade-up" v-animate>About me</p>
    <h2 class="big-heading fade-up" v-animate>
      Engineering end&#8209;to&#8209;end,<br />with a product mindset.
    </h2>
    <div class="about-grid fade-up" v-animate>
      <div class="about-body">
        <p>
          I’m a <strong>Software Engineer II</strong> building products that need to work well, ship reliably, and stay maintainable over time. At Lumen Technologies, I’ve led frontend architecture across <strong>Vue.js, Angular</strong>, and <strong>React</strong>, creating production microapps, reusable component systems, and operational tools used by engineers across the business.
        </p>
        <p>
          My background spans both client-facing interfaces and backend foundations. I’ve worked with <strong>Java Spring</strong> and <strong>ASP.NET</strong> to design REST APIs and data flows that support real users at scale, and I’m especially interested in the full path from UI design to platform reliability.
        </p>
        <p>
          I hold an <strong>M.S. in Computer Engineering</strong> from UT Dallas, and I care deeply about clean systems, thoughtful testing, and building software that is easy for teams to evolve.
        </p>
        <a href="#contact" class="pill-btn pill-outline about-cta">Let’s connect</a>
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

.about-cta {
  width: fit-content;
  margin-top: 0.25rem;
}

@media (max-width: 680px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>