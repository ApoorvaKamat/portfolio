<template>
  <NavBar/>
   <main>
    <HeroSection />
    <hr class="divider" />
    <AboutSection />
    <hr class="divider" />
    <SkillsSection />
    <hr class="divider" />
    <ProjectSection />
    <hr class="divider" />
    <ExperienceSection />
    <ContactSection />
  </main>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import ProjectSection from '../components/ProjectSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import ContactSection from '../components/ContactSection.vue';
</script>

<style>

</style>