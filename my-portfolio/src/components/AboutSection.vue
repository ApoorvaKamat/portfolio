<template>
  <section id="about" class="section-inner">
    <p class="section-label fade-up" v-animate>About me</p>
    <h2 class="big-heading fade-up" v-animate>
      Engineering end&#8209;to&#8209;end,<br />thinking full&#8209;stack.
    </h2>
    <div class="about-grid fade-up" v-animate>
      <div class="about-body">
        <p>
          I'm a <strong>Software Engineer II</strong> with a primary focus on
          <strong>Vue.js</strong> frontend development — crafting interfaces
          that are fast, clean, and maintainable at scale.
        </p>
        <p>
          On the backend I work in <strong>Java</strong>, designing REST APIs
          and handling business logic. I also use <strong>Python</strong> for
          scripting, automation, and data work.
        </p>
        <p>
          Database design is something I genuinely enjoy — from schema modeling
          to query optimization. I've also built projects in
          <strong>React</strong>, giving me fluency across the JS ecosystem.
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
  { value: '2', suffix: '+', label: 'Years as SWE II' },
  { value: '5', suffix: '', label: 'Core technologies' },
  { value: '4', suffix: '', label: 'Shipped projects' },
  { value: '1', suffix: '', label: 'Stack, full depth' },
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
  grid-template-columns: 1fr 1fr;
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