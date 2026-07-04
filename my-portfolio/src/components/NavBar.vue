<template>
  <nav :class="{ scrolled: isScrolled }">
    <div class="nav-logo">AK</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Work</a></li>
      <li><a href="#experience">Experience</a></li>
    </ul>
    <a href="#contact" class="nav-cta">Get in touch →</a>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
nav {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  padding: 0 4%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: box-shadow 0.3s;
}

nav.scrolled {
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.06);
}

.nav-logo {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: var(--black);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  font-size: 0.78rem;
  color: var(--mid);
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--black);
}

.nav-cta {
  font-size: 0.78rem;
  color: var(--blue);
  cursor: pointer;
  transition: color 0.2s;
}

.nav-cta:hover {
  color: var(--blue-h);
}

@media (max-width: 600px) {
  .nav-links {
    display: none;
  }
}
</style>