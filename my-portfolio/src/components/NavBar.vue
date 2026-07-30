<template>
  <nav :class="{ scrolled: isScrolled }">
    <a href="#" class="nav-logo">AK</a>

    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" :class="{ open: isMenuOpen }">
      <li><a href="#about" @click="closeMenu">About</a></li>
      <li><a href="#skills" @click="closeMenu">Skills</a></li>
      <li><a href="#projects" @click="closeMenu">Work</a></li>
      <li><a href="#experience" @click="closeMenu">Experience</a></li>
      <li><a href="#contact" class="nav-cta" @click="closeMenu">Get in touch</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMenu = () => {
  isMenuOpen.value = false
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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
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
  justify-self: start;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  justify-self: end;
}

.menu-toggle span {
  width: 20px;
  height: 2px;
  background: var(--black);
  border-radius: 999px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  align-items: center;
  justify-self: center;
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
  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 5%;
    gap: 1rem;
    background: rgba(255,255,255,0.98);
    border-bottom: 1px solid rgba(0,0,0,0.07);
  }

  .nav-links.open {
    display: flex;
  }

  nav {
    padding: 0 5%;
  }
}
</style>