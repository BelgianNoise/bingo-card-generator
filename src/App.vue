<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Header from '@/components/HeaderComponent.vue'
  import Footer from '@/components/FooterComponent.vue'
  import NotificationPane from '@/components/NotificationPane.vue';
</script>

<template>
  <NotificationPane />

  <Header />

  <main>
    <Transition name="fade" :duration="{ enter: 100, leave: 100 }">
      <RouterView />
    </Transition>
  </main>

  <Footer />
</template>

<style scoped>
  main {
    padding: var(--gap-normal);
    padding-bottom: 0;

    max-width: var(--max-page-width);
    margin: 0 auto;
    width: 100%;
    flex: 1;
  }
</style>
