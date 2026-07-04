<template>
  <section id="projects" class="section-inner">
    <p class="section-label fade-up" v-animate>Projects</p>
    <h2 class="big-heading fade-up" v-animate>Work I'm proud of.</h2>
    <div class="projects-grid fade-up" v-animate>
      <div
        v-for="project in projects"
        :key="project.id"
        :class="['proj-card', { featured: project.featured }]"
      >
        <template v-if="project.featured">
          <div class="proj-content">
            <div class="proj-num">{{ project.id }} — Featured</div>
            <h3 class="proj-title">{{ project.title }}</h3>
            <p class="proj-desc">{{ project.desc }}</p>
            <div class="proj-tags">
              <span v-for="tag in project.tags" :key="tag" class="proj-tag">{{ tag }}</span>
            </div>
          </div>
          <div class="proj-visual">
            <div class="proj-visual-inner">{ }</div>
          </div>
        </template>
        <template v-else>
          <div class="proj-num">{{ project.id }}</div>
          <h3 class="proj-title">{{ project.title }}</h3>
          <p class="proj-desc">{{ project.desc }}</p>
          <div class="proj-tags">
            <span v-for="tag in project.tags" :key="tag" class="proj-tag">{{ tag }}</span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFadeUp } from '../composables/useFadeUp'

const vAnimate = useFadeUp()

const projects = [
  {
    id: '01',
    featured: true,
    title: 'Internal Analytics Dashboard',
    desc: 'A real-time data platform built with Vue 3 Composition API. Live charts, role-based access, Java REST backend, and a PostgreSQL schema designed from scratch.',
    tags: ['Vue 3', 'Java', 'PostgreSQL', 'REST'],
  },
  {
    id: '02',
    featured: false,
    title: 'ETL Pipeline Automation',
    desc: 'Python-powered ETL jobs that pull from multiple database sources, transform records, and load into a normalized schema — fully automated and scheduled.',
    tags: ['Python', 'SQL', 'Automation'],
  },
  {
    id: '03',
    featured: false,
    title: 'Shared Vue Component Library',
    desc: 'Design-token-driven component system with Storybook docs and automated tests. Shipped to multiple internal products and teams.',
    tags: ['Vue.js', 'Storybook', 'Jest'],
  },
  {
    id: '04',
    featured: false,
    title: 'Full-Stack Task Manager',
    desc: 'React frontend with Spring Boot backend, WebSocket real-time updates, and a clean database schema for tasks, users, and teams.',
    tags: ['React', 'Spring Boot', 'WebSockets'],
  },
]
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 4rem;
}

.proj-card {
  background: var(--off);
  border-radius: 18px;
  padding: 2.5rem 2rem;
  transition: transform 0.3s;
  cursor: default;
}

.proj-card:hover {
  transform: scale(1.01);
}

.proj-card.featured {
  grid-column: span 2;
  background: var(--black);
  color: #f5f5f7;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.proj-num {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--light);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.proj-card.featured .proj-num {
  color: rgba(255, 255, 255, 0.35);
}

.proj-title {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  color: var(--black);
}

.proj-card.featured .proj-title {
  font-size: 2rem;
  letter-spacing: -1px;
  color: #f5f5f7;
}

.proj-desc {
  font-size: 0.85rem;
  font-weight: 300;
  color: var(--mid);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.proj-card.featured .proj-desc {
  color: rgba(245, 245, 247, 0.6);
  font-size: 0.95rem;
}

.proj-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.proj-tag {
  font-size: 0.68rem;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 980px;
  background: rgba(0, 0, 0, 0.07);
  color: var(--mid);
}

.proj-card.featured .proj-tag {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
}

.proj-visual {
  aspect-ratio: 4 / 3;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.proj-visual-inner {
  font-size: 3rem;
  opacity: 0.2;
  font-weight: 600;
  letter-spacing: -2px;
  color: #fff;
}

@media (max-width: 680px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .proj-card.featured {
    grid-column: auto;
    grid-template-columns: 1fr;
  }
  .proj-visual {
    display: none;
  }
}
</style>