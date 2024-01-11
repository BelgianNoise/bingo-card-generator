<script setup lang="ts">
  import { db } from '@/firebase';
  import { useFirestore } from '@vueuse/firebase/useFirestore';
  import { collection, orderBy, limit, query } from 'firebase/firestore';
  import GameCard from '@/components/GameCard.vue';
  import Intro from '@/components/IntroComponent.vue';
  import { ref, type Ref } from 'vue';
  import type { Game } from '@/models/game';

  const q = query(collection(db, 'games'), orderBy('updatedAt', 'desc'), limit(5))
  const games: Ref<Game[] | undefined> = useFirestore(q, undefined, { autoDispose: false }) as Ref<Game[] | undefined>

  const gamesContainer = ref<HTMLElement | null>(null)
  const scrollToGames = () => {
    if (!gamesContainer.value) return
    const b = gamesContainer.value.getBoundingClientRect()
    const top = b.top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' })
  }
</script>

<template>
  <!-- eslint-disable-next-line vue/require-toggle-inside-transition -->
  <div>
    <Intro @scroll-to-games="scrollToGames"/>
    <div class="games-container" ref="gamesContainer">
      <h1>Most popular Bingo games</h1>
      <!-- eslint-disable vue/no-use-v-if-with-v-for -->
      <GameCard
        v-if="games?.length"
        v-for="game in games"
        :key="game.id"
        :game="game"
      />
      <!-- eslint-enable -->
      <p v-else class="no-games">No games found</p>
    </div>
    <div class="browse">
      <RouterLink to="/browse">
        <button class="secondary">Browse all games</button>
      </RouterLink>
    </div>
  </div>
</template>

<style>
  .games-container {
    width: 100%;
  }
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
  .games-container .no-games {
    font-size: var(--font-size-large);
    padding: var(--gap-normal);
    text-align: center;
    color: var(--color-foreground-darker);
  }
  .browse {
    margin-top: var(--gap-normal);
    display: flex;
    justify-content: center;
  }
</style>
