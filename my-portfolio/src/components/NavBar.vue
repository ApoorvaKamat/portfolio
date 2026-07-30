<template>
  <nav :class="{ scrolled: isScrolled }">
    <a href="#" class="nav-logo">AK</a>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Work</a></li>
      <li><a href="#experience">Experience</a></li>
    </ul>
    <a href="#contact" class="nav-cta">Get in touch</a>
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
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  padding: 0 4%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: box-shadow 0.25s ease, background 0.25s ease;
}

nav.scrolled {
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.06);
  background: rgba(255, 255, 255, 0.97);
}

.nav-logo {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--black);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  align-items: center;
}

.nav-links a {
  font-size: 0.95rem;
  color: var(--mid);
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--black);
}

.nav-cta {
  font-size: 0.8rem;
  color: var(--blue);
  cursor: pointer;
  transition: color 0.2s ease;
}

.nav-cta:hover {
  color: var(--blue-h);
}

@media (max-width: 600px) {
  .nav-links {
    display: none;
  }

  nav {
    padding: 0 5%;
  }
}
</style>