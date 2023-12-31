<script setup lang="ts">
  import { db } from '@/firestore';
  import { useFirestore } from '@vueuse/firebase/useFirestore';
  import { collection, orderBy, limit, query } from 'firebase/firestore';
  import GameCard from '@/components/GameCard.vue';

  const q = query(collection(db, 'games'), orderBy('updatedAt', 'desc'), limit(5))
  const games = useFirestore(q, undefined, { autoDispose: false })
</script>

<template>
  <div class="games-container">
    <h1>Most popular Bingo games</h1>
    <GameCard
      v-for="game in games"
      :key="game.id"
      :id="game.id"
      :title="game.name"
      :description="game.description"
      :updatedAt="game.updatedAt"
    />
  </div>
</template>

<style>
  .games-container > :nth-child(odd),
  .games-container > :nth-child(odd) > * {
    background-color: var(--color-background-lighter);
  }
  .games-container > :nth-child(even),
  .games-container > :nth-child(even) > * {
    background-color: var(--color-background-light);
  }
  .games-container h1 {
    font-size: var(--font-size-large);
    padding: var(--gap-normal);
  }
</style>
