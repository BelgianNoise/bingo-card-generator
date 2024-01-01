<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Header from '@/components/HeaderComponent.vue'
  import Footer from '@/components/FooterComponent.vue'
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />
</template>

<style scoped>
  main {
    padding: var(--gap-normal);

    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    flex: 1;
  }
</style>
