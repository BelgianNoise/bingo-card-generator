<script setup lang="ts">
  import IconCaret from '@/components/icons/IconCaret.vue';
  import { computed } from 'vue';
  import { timeAgo } from '@/utils/time-ago';
  import type { Game } from '@/models/game';

  const props = defineProps<{
    game: Game;
  }>()

  const ago = computed(() => {
    if (props.game.updatedAt === props.game.createdAt) {
      return `Created ${timeAgo(props.game.createdAt)}`
    } else {
      return `Updated ${timeAgo(props.game.updatedAt)}`
    }
  })

  const shortenedDesc = computed(() => {
    if (props.game.description.length > 200) {
      return props.game.description.slice(0, 200) + '...'
    } else {
      return props.game.description
    }
  })
</script>

<template>
  <RouterLink :to="`/game/${game.id}`">
    <div class="game">
      <h2>{{ game.name }}</h2>
      <p class="description">{{ shortenedDesc }}</p>
      <p class="time-ago">{{ ago }}</p>
      <IconCaret
        color="var(--color-background)"
        class="arrow"
      />
    </div>
  </RouterLink>
</template>

<style scoped>
  .game {
    padding: var(--gap-normal);
    position: relative;
  }
  .game::before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent 80%, var(--color-primary-dark) 100%);
    opacity: 0;
    transition: opacity 0.2s linear;
  }
  .game:hover::before {
    opacity: 1;
  }
  .game h2 {
    font-size: var(--font-size-large);
    line-height: var(--font-size-large);
    color: var(--color-primary-dark);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: var(--gap-small);
  }
  .game .description {
    font-size: var(--font-size-normal);
    color: var(--color-foreground-dark);
    padding-bottom: var(--gap-small);
  }
  .game .time-ago {
    font-size: var(--font-size-small);
    color: var(--color-foreground-darker);
  }
  .game .arrow {
    position: absolute;
    right: var(--gap-normal);
    top: 50%;
    transform: translateY(-50%);
    max-height: var(--gap-large);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s linear;
  }
  .game:hover .arrow {      
    opacity: 1;
  }
</style>
