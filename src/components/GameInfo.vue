<script setup lang="ts">
  import type { Game } from '@/models/game';
  import { useRouter } from 'vue-router';
  import IconInfo from '@/components/icons/IconInfo.vue';
  import { computed } from 'vue';

  const props = defineProps<{
    gameId: string;
    game: Game;
    maxDescriptionLength?: number;
  }>()

  const router = useRouter()

  const goToGamePage = () => {
    router.push(`/game/${props.gameId}`)
  }
  const length = computed(() => props.maxDescriptionLength ?? 100)
  const desc = computed(() => {
    if (props.game.description.length > length.value) {
      return props.game.description.substring(0, length.value) + '...'
    } else {
      return props.game.description
    }
  })
</script>

<template>
  <div class="game-info-container">
    <h2>{{ game.name }}</h2>
    <p>
      {{ desc }}
    </p>
    <button @click="goToGamePage" class="secondary">
      <IconInfo class="icon" color="var(--color-primary)" />
      More info
    </button>
  </div>
</template>

<style scoped>
  .game-info-container {
    text-align: center;
    padding: var(--gap-normal);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-small);
    background: var(--color-background-dark);
    border-radius: var(--border-radius-normal);
  }
  .game-info-container h2 {
    padding: 0 var(--gap-normal);
    padding-bottom: var(--gap-small);
    border-bottom: 1px solid var(--color-foreground);
  }
  .game-info-container p {
    color: var(--color-foreground-darker);
  }
</style>
