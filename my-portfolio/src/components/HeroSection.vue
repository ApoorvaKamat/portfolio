<template>
  <section class="hero">
    <div class="hero-grid">
      <div class="hero-text-col">
        <div class="hero-eyebrow reveal-fade" style="animation-delay: 1.25s">Software Engineer II</div>
        <h1 class="hero-name name-reveal" style="animation-delay: 1.35s">Apoorva Anil Kamat</h1>

        <p class="hero-tagline grow-settle">
          Building resilient products <span>from idea to production.</span>
        </p>
        <p class="hero-sub reveal-fade" style="animation-delay: 1.6s">
          I create full-stack experiences with Vue, Java, Python, and cloud-native systems, with a focus on performance, reliability, and maintainability.
        </p>
        <div class="hero-actions reveal-fade" style="animation-delay: 1.75s">
          <a href="#projects" class="pill-btn pill-filled">See my work</a>
          <a href="#contact" class="pill-btn pill-outline">Let's talk</a>
          <a :href="resumeUrl" class="pill-btn pill-outline" download="Apoorva-Kamat-Resume.pdf">Download CV</a>
        </div>
        <div class="credibility-row reveal-fade" style="animation-delay: 1.9s">
          <div class="credibility-item">
            <strong>4+ years</strong>
            <span>building products</span>
          </div>
          <div class="credibility-item">
            <strong>10+ shipped</strong>
            <span>web and platform projects</span>
          </div>
          <div class="credibility-item">
            <strong>Full-stack</strong>
            <span>frontend, backend, cloud</span>
          </div>
        </div>
        <div class="stack-row reveal-fade" style="animation-delay: 2.05s">
          <span v-for="tech in stack" :key="tech" class="stack-pill">{{ tech }}</span>
        </div>
      </div>

      <div class="tile-col">
        <a
          v-for="(tile, i) in tiles"
          :key="tile.label"
          :href="tile.href"
          class="nav-tile"
          :style="{ animationDelay: `${1.95 + i * 0.1}s` }"
        >
          <div class="tile-top">
            <div class="tile-label">{{ tile.label }}</div>

            <svg class="tile-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="tile-desc">{{ tile.desc }}</div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const stack = ['Vue.js', 'Java', 'Python', 'React', 'SQL', 'REST APIs']
const resumeUrl = '/Apoorva_Anil_Kamat_Resume.pdf'

const tiles = [
  { label: 'About', desc: 'Who I am, beyond the stack.', href: '#about' },
  { label: 'Experience', desc: 'Where I\u2019ve built and shipped.', href: '#experience' },
  { label: 'Work', desc: 'Selected projects, in detail.', href: '#projects' },
  { label: 'Skills', desc: 'Tools I reach for daily.', href: '#skills' },
]
</script>

<style scoped>
.hero {
  background: var(--off);
  padding: 8vh 4% 8vh;
  min-height: 88vh;
  display: flex;
  align-items: center;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

/* ---------- Text column ---------- */

.hero-text-col {
  position: relative;
}

/* Tagline starts huge and dead-center on the full viewport, then
   shrinks and slides into its resting spot as a subheading. */
.hero-tagline.grow-settle {
  position: relative;
  z-index: 5;
  transform-origin: left center;
  animation: growSettle 1.4s cubic-bezier(0.19, 1, 0.22, 1) both;
}

@keyframes growSettle {
  0% {
    opacity: 0;
    transform: translateX(24vw) scale(4.2);
  }
  55% {
    opacity: 1;
    transform: translateX(6vw) scale(4.8);
  }
  80% {
    transform: translateX(-1vw) scale(2.1);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

/* Name pops in fresh right as the tagline finishes settling */
.hero-name.name-reveal {
  opacity: 0;
  animation: nameReveal 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes nameReveal {
  0% {
    opacity: 0;
    transform: translateY(16px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Eyebrow, subtext, and stack pills settle in after the headline lands */
.reveal-fade {
  opacity: 0;
  animation: revealFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes revealFade {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-eyebrow {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--blue);
  letter-spacing: 0.02em;
  margin-bottom: 1.25rem;
}

.hero-name {
  font-size: clamp(2.6rem, 5.2vw, 4.2rem);
  font-weight: 600;
  letter-spacing: -2.2px;
  line-height: 1.05;
  color: var(--black);
  margin-bottom: 0.75rem;
}

.hero-tagline {
  font-size: clamp(1.15rem, 2.1vw, 1.5rem);
  font-weight: 500;
  letter-spacing: -0.3px;
  color: var(--black);
  margin-bottom: 1.5rem;
}

.hero-tagline span {
  color: var(--mid);
  font-weight: 300;
}

.hero-sub {
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  font-weight: 300;
  color: var(--mid);
  max-width: 600px;
  margin-bottom: 1.75rem;
  line-height: 1.65;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.credibility-row {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.credibility-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.65);
}

.credibility-item strong {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--black);
}

.credibility-item span {
  font-size: 0.72rem;
  color: var(--mid);
}

.stack-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.stack-pill {
  font-size: 0.72rem;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 980px;
  background: rgba(0, 0, 0, 0.06);
  color: var(--mid);
}

/* ---------- Tile column ---------- */

.tile-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.nav-tile {
  background: #fff;
  border: 1px solid var(--off2);
  border-radius: 20px;
  padding: 1.6rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  text-decoration: none;
  height: 10rem;
  color: inherit;
  opacity: 0;
  animation: tileIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

@keyframes tileIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-tile:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.tile-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.tile-index {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--mid);
}

.tile-arrow {
  width: 16px;
  height: 16px;
  color: var(--mid);
  transition: transform 0.25s ease, color 0.25s ease;
}

.nav-tile:hover .tile-arrow {
  transform: translate(2px, -2px);
  color: var(--blue);
}

.tile-label {
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.3px;
  color: var(--black);
}

.tile-desc {
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--mid);
  line-height: 1.5;
}

/* ---------- Responsive ---------- */

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .hero-text-col {
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .credibility-row {
    justify-content: center;
  }

  .hero-eyebrow {
    justify-content: center;
  }

  .hero-tagline.grow-settle {
    transform-origin: center;
    animation-name: growSettleMobile;
  }

  @keyframes growSettleMobile {
    0% {
      opacity: 0;
      transform: scale(2.6);
    }
    55% {
      opacity: 1;
      transform: scale(3);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .hero-sub {
    margin-left: auto;
    margin-right: auto;
  }

  .stack-row {
    justify-content: center;
  }
}

@media (max-width: 560px) {
  .hero {
    padding: 7vh 5% 8vh;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions a {
    justify-content: center;
    text-align: center;
    min-height: 44px;
  }

  .credibility-row {
    flex-direction: column;
  }

  .credibility-item {
    border-radius: 16px;
    align-items: center;
  }

  .tile-col {
    grid-template-columns: 1fr;
  }
}
</style>