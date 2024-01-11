<script setup lang="ts">
  import type { Card } from '@/models/card';
  import IconPlay from '@/components/icons/IconPlay.vue';
  import { useRouter } from 'vue-router';
  import { timeAgo } from '@/utils/time-ago';
  import IconClock from './icons/IconClock.vue';
  import IconTrash from './icons/IconTrash.vue';
  import { ref } from 'vue';
  import DeleteConfirmationDialog from '@/components/DeleteConfirmationDialog.vue';
import { deleteCardForever } from '@/utils/firestore';

  const props = defineProps<{
    card: Card;
    editMode: boolean;
  }>()

  const router = useRouter()
  const askingDeleteCard = ref(false)

  const openGame = () => {
    router.push(`/game/${props.card.gameId}/play/${props.card.id}`)
  }
  const deleteCard = () => {
    askingDeleteCard.value = false
    deleteCardForever(props.card.id)
  }
</script>

<template>
  <div class="container">

    <div class="info">
      <p>{{ card.title }}</p>
      <div class="time-ago">
        <IconClock class="clock" color="var(--color-foreground-darkest)" />
        <span>created {{ timeAgo(card.createdAt) }}</span>
      </div>
    </div>
    <div class="buttons">
      <button class="primary" @click="openGame">
        Play
        <IconPlay class="icon" color="var(--color-foreground)" />
      </button>
      <button v-if="editMode" class="primary remove" @click="askingDeleteCard = true">
        <IconTrash class="icon" color="var(--color-foreground)" />
      </button>
    </div>

    <DeleteConfirmationDialog
      :open="askingDeleteCard"
      @close="askingDeleteCard = false"
      @denied="askingDeleteCard = false"
      @approved="deleteCard"
    >
      <template #content>
        <p>Are you sure you want to delete "{{ card.title }}"?</p>
      </template>
    </DeleteConfirmationDialog>

  </div>
</template>

<style scoped>
  .container {
    padding: var(--gap-small);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-small);
    width: 100%;
    max-width: 100%;
  }
  .info p {
    /* elipsis */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info {
    min-width: 0;
  }
  .info span {
    font-size: var(--font-size-small);
    color: var(--color-foreground-darkest);
    font-style: italic;
  }
  .clock {
    height: var(--font-size-small);
  }
  .time-ago {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--gap-tiny);
  }
  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--gap-small);
  }
  .button .remove {
    padding: var(--gap-small);
  }
</style>
