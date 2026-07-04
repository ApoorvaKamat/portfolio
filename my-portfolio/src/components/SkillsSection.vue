<template>
  <div class="skills-bg">
    <div id="skills" class="section-inner">
      <p class="section-label fade-up" v-animate>Skills</p>
      <h2 class="big-heading fade-up" v-animate>The full picture.</h2>
      <p class="subtext fade-up" v-animate>
        Years of building has shaped a stack that goes wide and deep.
      </p>
      <div class="skills-grid fade-up" v-animate>
        <div v-for="cat in categories" :key="cat.label" class="skill-tile">
          <div class="skill-tile-label">{{ cat.label }}</div>
          <ul class="skill-list">
            <li
              v-for="skill in cat.skills"
              :key="skill.name"
              :class="{ secondary: skill.secondary }"
            >
              {{ skill.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFadeUp } from '../composables/useFadeUp'

const vAnimate = useFadeUp()

const categories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'Vue.js' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'HTML / CSS' },
      { name: 'Storybook', secondary: true },
      { name: 'Vitest / Jest', secondary: true },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'REST APIs' },
      { name: 'Python' },
      { name: 'Flask', secondary: true },
      { name: 'WebSockets', secondary: true },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'SQL' },
      { name: 'PostgreSQL' },
      { name: 'Schema design' },
      { name: 'Query tuning' },
      { name: 'Migrations', secondary: true },
      { name: 'Indexing', secondary: true },
    ],
  },
  {
    label: 'Tooling',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'CI / CD' },
      { name: 'Docker' },
      { name: 'Agile / Scrum' },
      { name: 'Code review', secondary: true },
      { name: 'Mentoring', secondary: true },
    ],
  },
]
</script>

<style scoped>
.skills-bg {
  background: var(--off);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--off2);
  border: 1px solid var(--off2);
  border-radius: 18px;
  overflow: hidden;
  margin-top: 4rem;
}

.skill-tile {
  background: var(--white);
  padding: 2rem 1.5rem;
  transition: background 0.2s;
}

.skill-tile:hover {
  background: #fafafa;
}

.skill-tile-label {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--light);
  margin-bottom: 1.5rem;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-list li {
  font-size: 0.88rem;
  font-weight: 400;
  color: var(--black);
  display: flex;
  align-items: center;
  gap: 8px;
}

.skill-list li::before {
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--blue);
  flex-shrink: 0;
}

.skill-list li.secondary {
  color: var(--mid);
}

.skill-list li.secondary::before {
  background: var(--light);
}

@media (max-width: 680px) {
  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>