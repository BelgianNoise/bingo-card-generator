<script setup lang="ts">
  import { db } from '@/firebase';
  import type { Game } from '@/models/game';
  import { useFirestore } from '@vueuse/firebase';
  import { collection, orderBy, query } from 'firebase/firestore';
  import { computed, ref, type Ref } from 'vue';
  import GameCard from '@/components/GameCard.vue';
  import debounce from 'debounce';

  const showItems = ref(5)
  const filter = ref('')

  const q = query(collection(db, 'games'), orderBy('updatedAt', 'desc'))
  const games: Ref<Game[] | undefined> = useFirestore(q, undefined, { autoDispose: false }) as Ref<Game[] | undefined>

  const filteredList = computed(() => {
    if (games.value) {
      return games.value.filter(
        g => g.name.toLowerCase().includes(filter.value.toLowerCase())
      ).slice(0, showItems.value)
    } else {
      return []
    }
  })
  const debounceInput = debounce((e: Event) => {
    if (e.target && e.target instanceof HTMLInputElement) {
      filter.value = e.target.value
    }
  }, 500)
</script>

<template>
  <div class="container">
    <input
      @input="debounceInput"
      type="text"
      placeholder="Search for a game"
      class="search"
    />
    <div class="games-container" ref="gamesContainer">
      <TransitionGroup name="fly-in-top">
        <!-- eslint-disable vue/no-use-v-if-with-v-for -->
        <GameCard
          v-if="filteredList.length"
          v-for="game in filteredList"
          :key="game.id"
          :game="game"
        />
        <!-- eslint-enable -->
        <p v-else class="no-games">No games found</p>
      </TransitionGroup>
    </div>

    <button
      v-if="filteredList.length >= showItems"
      class="secondary"
      @click="showItems += 5"
    >
      Load more
    </button>

  </div>

</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-normal);
  }
  .search {
    width: 100%;
    padding: var(--gap-normal);
    font-size: var(--font-size-large);
    border: 1px solid var(--color-foreground-darkest);
    border-radius: var(--border-radius);
    background-color: var(--color-background-light);
    color: var(--color-foreground-darker);
    outline: none;
    transition: border-color 0.2s ease-in-out;
  }
</style>
