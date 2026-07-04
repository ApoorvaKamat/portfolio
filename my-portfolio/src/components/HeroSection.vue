<template>
  <section class="hero">
    <div class="hero-eyebrow">Software Engineer II</div>
    <h1 class="hero-h1">Built for scale.<br /><span>Designed to last.</span></h1>
    <p class="hero-sub">
      I engineer full-stack systems — Vue frontends, Java backends,
      and the databases that hold it all together.
    </p>
    <div class="hero-actions">
      <a href="#projects" class="pill-btn pill-filled">View my work</a>
      <a href="#contact" class="pill-btn pill-outline">Get in touch</a>
    </div>
    <div class="stack-row">
      <span v-for="tech in stack" :key="tech" class="stack-pill">{{ tech }}</span>
    </div>
  </section>
</template>

<script setup>
const stack = ['Vue.js', 'Java', 'Python', 'React', 'SQL', 'REST APIs']
</script>

<style scoped>
.hero {
  background: var(--off);
  text-align: center;
  padding: 120px 4% 130px;
}

.hero-eyebrow {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--blue);
  letter-spacing: 0.02em;
  margin-bottom: 1.25rem;
}

.hero-h1 {
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 600;
  letter-spacing: -2.5px;
  line-height: 1.05;
  color: var(--black);
  margin-bottom: 1.5rem;
}

.hero-h1 span {
  color: var(--mid);
}

.hero-sub {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 300;
  color: var(--mid);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.5;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.stack-row {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 2.5rem;
}

.stack-pill {
  font-size: 0.72rem;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 980px;
  background: rgba(0, 0, 0, 0.06);
  color: var(--mid);
}
</style>