<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import IconPlay from '@/components/icons/IconPlay.vue';
  import IconCopy from '@/components/icons/IconCopy.vue';

  const props = defineProps<{
    gameId: string,
  }>()

  const router = useRouter()

  const playNow = () => {
    router.push(`/game/${props.gameId}/play/new}`)
  }
  const shareGame = () => {
    navigator.clipboard.writeText(window.location.href);
    // TODO copied notification
  }
</script>

<template>
  <div>
    <button class="primary" @click="playNow">
      <IconPlay class="icon" color="var(--color-foreground)" />
      Play Now!
    </button>
    <button class="secondary" @click="shareGame">
      <IconCopy class="icon" color="var(--color-primary)" />
      Share this game
    </button>
  </div>
</template>

<style scoped>
  div {
    font-size: var(--font-size-large);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--gap-normal);
    padding: var(--gap-large);
  }
  @media screen and (min-width: 550px) {
    div {
      flex-direction: row;
      font-size: var(--font-size-huge);
      gap: var(--gap-large);
    }
    button {
      flex-grow: 1;
      max-width: 400px;
    }
  }
</style>
