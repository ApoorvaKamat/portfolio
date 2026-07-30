<template>
  <nav :class="{ scrolled: isScrolled }">
    <a href="#" class="nav-logo">AK</a>

    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" :class="{ open: isMenuOpen }">
      <li><a href="#about" :class="{ active: activeSection === 'about' }" @click="closeMenu">About</a></li>
      <li><a href="#skills" :class="{ active: activeSection === 'skills' }" @click="closeMenu">Skills</a></li>
      <li><a href="#projects" :class="{ active: activeSection === 'projects' }" @click="closeMenu">Work</a></li>
      <li><a href="#experience" :class="{ active: activeSection === 'experience' }" @click="closeMenu">Experience</a></li>
      <li><a href="#contact" class="nav-cta" :class="{ active: activeSection === 'contact' }" @click="closeMenu">Get in touch</a></li>
    </ul>

    <button
      class="theme-toggle"
      @click="toggleTheme"
      :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    >
      <svg v-show="theme === 'dark'" viewBox="0 0 24 24" fill="none" width="16" height="16">
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.6" />
        <path stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <svg v-show="theme !== 'dark'" viewBox="0 0 24 24" fill="none" width="16" height="16">
        <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span class="theme-toggle-tooltip">{{ theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme' }}</span>
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme } = useTheme()
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('')

const updateActiveSection = () => {
  const sectionOrder = ['about', 'skills', 'projects', 'experience', 'contact']
  const viewportMid = window.innerHeight * 0.35
  let currentSection = ''

  for (let index = 0; index < sectionOrder.length; index += 1) {
    const sectionId = sectionOrder[index]
    const section = document.getElementById(sectionId)

    if (!section) continue

    const rect = section.getBoundingClientRect()
    const isInView = rect.top <= viewportMid && rect.bottom >= viewportMid

    if (isInView) {
      currentSection = sectionId
      break
    }

    if (rect.top > viewportMid) {
      currentSection = sectionId
      break
    }
  }

  activeSection.value = currentSection
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  updateActiveSection()
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
nav {
  background: var(--nav-bg);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--border-soft);
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
  background: var(--nav-bg-scrolled);
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

.nav-links a.active {
  color: var(--black);
  font-weight: 600;
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

.theme-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid var(--border-soft);
  border-radius: 999px;
  background: transparent;
  color: var(--mid);
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
  justify-self: end;
}

.theme-toggle:hover {
  color: var(--black);
  border-color: var(--off2);
}

.theme-toggle-tooltip {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  white-space: nowrap;
  font-size: 0.72rem;
  font-weight: 500;
  color: #f5f5f7;
  background: var(--ink);
  padding: 5px 10px;
  border-radius: 6px;
  opacity: 0;
  transform: translateY(-4px);
  pointer-events: none;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.theme-toggle:hover .theme-toggle-tooltip {
  opacity: 1;
  transform: translateY(0);
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
    background: var(--nav-bg-scrolled);
    border-bottom: 1px solid var(--border-soft);
  }

  .nav-links.open {
    display: flex;
  }

  nav {
    padding: 0 5%;
  }
}
</style>