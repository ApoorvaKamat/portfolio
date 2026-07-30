<template>
  <section id="contact" class="contact-wrap">
    <div class="contact-block fade-up" v-animate>
      <h2 class="contact-heading">Let's build<br />something great.</h2>
      <p class="contact-sub">
        Open to new roles, interesting projects, and good conversations.
        Drop me a line.
      </p>
      <div class="contact-actions">
        <a :href="`mailto:${email}`" class="pill-btn pill-filled contact-cta">
          Get in touch
        </a>
        <a :href="resumeUrl" download="Apoorva-Kamat-Resume.pdf" class="pill-btn pill-outline contact-cta contact-cta-secondary">
          Download CV
        </a>
      </div>
      <div class="contact-links">
        <a :href="`mailto:${email}`" class="contact-link">{{ email }}</a>
        <a :href="github" target="_blank" class="contact-link">github.com/{{ github.split('/').pop() }}</a>
        <a :href="linkedin" target="_blank" class="contact-link">linkedin.com/in/{{ linkedin.split('/').pop() }}</a>
      </div>
    </div>
    <footer>
      <span>Apoorva Kamat</span>
      <span>© {{ year }}</span>
    </footer>
  </section>
</template>

<script setup>
import { useFadeUp } from '../composables/useFadeUp'

const vAnimate = useFadeUp()
const year = new Date().getFullYear()
const email = 'apoorvakamat885@gmail.com';
const github = 'https://github.com/ApoorvaKamat';
const linkedin = 'https://www.linkedin.com/in/apoorva-anil-kamat'
const resumeUrl = '/Apoorva_Anil_Kamat_Resume.pdf'
</script>

<style scoped>
.contact-wrap {
  padding: 0 4% 0;
  max-width: 980px;
  margin: 0 auto;
}

.contact-block {
  background: var(--black);
  border-radius: 24px;
  padding: 80px 4%;
  text-align: center;
  margin: 100px 0 0;
}

.contact-heading {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 1.1;
  color: #f5f5f7;
  margin-bottom: 1.25rem;
}

.contact-sub {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(245, 245, 247, 0.5);
  max-width: 480px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.contact-actions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.contact-cta {
  font-size: 0.9rem;
  padding: 14px 28px;
}

.contact-cta-secondary {
  background: transparent;
  border: 1px solid rgba(245, 245, 247, 0.25);
  color: #f5f5f7;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.contact-link {
  font-size: 0.82rem;
  color: rgba(245, 245, 247, 0.4);
  transition: color 0.2s;
  text-decoration: none;
}

.contact-link:hover {
  color: #f5f5f7;
}

footer {
  border-top: 1px solid var(--off2);
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--light);
  margin-top: 0;
}

@media (max-width: 560px) {
  .contact-block {
    padding: 64px 5%;
    margin-top: 80px;
  }

  .contact-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-cta {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  footer {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>