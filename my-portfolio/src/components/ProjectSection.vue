<template>
  <section id="projects" class="section-inner">
    <p class="section-label fade-up" v-animate>Projects</p>
    <h2 class="big-heading fade-up" v-animate>Work I'm proud of.</h2>
    <div class="projects-grid fade-up" v-animate>
      <component
        :is="project.link && !project.video ? 'a' : 'div'"
        v-for="project in projects"
        :key="project.id"
        :href="project.link && !project.video ? project.link : null"
        :target="project.link && !project.video ? '_blank' : null"
        :rel="project.link && !project.video ? 'noopener' : null"
        :class="['proj-card', { featured: project.featured }]"
      >
        <template v-if="project.featured">
          <div class="proj-content">
            <!-- <div class="proj-num">{{ project.id }} — Featured</div> -->
            <h3 class="proj-title">{{ project.title }}</h3>
            <p class="proj-desc">{{ project.desc }}</p>
            <div class="proj-tags">
              <span v-for="tag in project.tags" :key="tag" class="proj-tag">{{ tag }}</span>
            </div>
            <a
              v-if="project.link && project.video"
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="proj-repo-link"
            >
              View on GitHub ↗
            </a>
          </div>
          <div class="proj-visual" :class="{ 'has-video': project.video }">
            <iframe
              v-if="project.video"
              class="proj-video"
              :src="`https://www.youtube.com/embed/${project.video}`"
              title="Project demo video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div v-else class="proj-visual-inner">
              <span>Case study</span>
              <strong>Live product experience</strong>
            </div>
          </div>
        </template>
        <template v-else>
          <!-- <div class="proj-num">{{ project.id }}</div> -->
          <h3 class="proj-title">{{ project.title }}</h3>
          <p class="proj-desc">{{ project.desc }}</p>
          <div class="proj-tags">
            <span v-for="tag in project.tags" :key="tag" class="proj-tag">{{ tag }}</span>
          </div>
        </template>
      </component>
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
    title: 'One Stop Portal',
    desc: 'A centralized productivity portal built with a 4-person team — a task dashboard synced with JIRA, a searchable project help and discussion forum, and integrated expert chat with meeting scheduling. Deployed live with a full demo walkthrough.',
    tags: ['React', 'JavaScript', 'Team Project'],
    link: 'https://github.com/ApoorvaKamat/React-one-stop-portal-app',
    video: '59-LhhL0ekc',
  },
  {
    id: '02',
    featured: false,
    title: 'Library Management System',
    desc: 'A desktop library management system built with Python and a MySQL backend, using stored procedures for all data access and a polished ttkthemes-based GUI.',
    tags: ['Python', 'MySQL', 'Stored Procedures'],
    link: 'https://github.com/ApoorvaKamat/LibraryManagementSystem-DatabaseDesignWithMySqlandPython',
  },
  {
    id: '03',
    featured: false,
    title: 'Distributed Mutual Exclusion Algorithms',
    desc: "Java implementations of two classic distributed systems algorithms — Maekawa's algorithm and Ricart-Agrawala optimized by Roucairol-Carvalho — exploring how nodes coordinate access to shared resources without a central authority.",
    tags: ['Java', 'Distributed Systems', 'Algorithms'],
    link: 'https://github.com/ApoorvaKamat/Advanced-Operating-Systems',
  },
  {
    id: '04',
    featured: false,
    title: 'This Portfolio',
    desc: 'Vue 3 + Vite build with the Composition API, scroll-triggered animations, and an Apple-inspired aesthetic — designed and built section by section, animation included.',
    tags: ['Vue 3', 'Vite', 'Composition API'],
    link: null,
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
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  cursor: default;
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid transparent;
}

a.proj-card {
  cursor: pointer;
}

.proj-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.07);
  border-color: var(--off2);
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
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.proj-video {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.proj-repo-link {
  display: inline-block;
  margin-top: 1.25rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s;
}

.proj-repo-link:hover {
  color: #fff;
}

.proj-visual-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-align: center;
  color: rgba(255,255,255,0.8);
  font-weight: 500;
}

.proj-visual-inner span {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  opacity: 0.7;
}

.proj-visual-inner strong {
  font-size: 1.1rem;
  letter-spacing: -0.3px;
}

@media (max-width: 680px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .proj-card.featured {
    grid-column: auto;
    grid-template-columns: 1fr;
  }
  .proj-visual:not(.has-video) {
    display: none;
  }
}
</style>