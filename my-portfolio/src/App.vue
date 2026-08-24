<script setup>
import PortfolioPage from './modules/PortfolioPage.vue';
import ChatWidget from './components/ChatWidget.vue';
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <PortfolioPage />
  <ChatWidget />
  <Analytics />
</template>
