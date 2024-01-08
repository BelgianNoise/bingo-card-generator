<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import GameDetails from '@/components/GameDetails.vue';
  import GameEntries from '@/components/GameEntries.vue';

  const route = useRoute()

  const gameIdRouteParam = route.params.id
  let gameId: string
  if (typeof gameIdRouteParam === 'string') {
    gameId = gameIdRouteParam
  } else {
    gameId = gameIdRouteParam[0]
  }
</script>

<template>
  <div id="container">
    <GameDetails :gameId="gameId" />
    <GameEntries :gameId="gameId" />
  </div>
</template>

<style scoped>
  #container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
  }
</style>
