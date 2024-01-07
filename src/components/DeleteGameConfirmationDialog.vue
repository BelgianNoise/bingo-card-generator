<script setup lang="ts">
  import DialogComponent from '@/components/DialogComponent.vue';
  import IconTrash from '@/components/icons/IconTrash.vue';

  defineProps<{
    open: boolean,
    gameId: string,
  }>()

  const emit = defineEmits<{
    (e: 'close'): void
    (e: 'denied'): void
    (e: 'approved'): void
  }>()

  const maxWidth = '600px'
  const deny = () => emit('denied')
  const approve = () => emit('approved')
  const close = () => emit('close')
</script>

<template>
  <DialogComponent :open="open" @close="close" :maxWidth="maxWidth">
    <template #header>
      <h2>Confirm deletion</h2>
    </template>
    <template #content>
      <p>
        Are you sure you want to delete this game? Once deleted all data will be lost.
      </p>
    </template>
    <template #footer>
      <button class="secondary" @click="deny">
        NO, GO BACK
      </button>
      <button class="primary remove" @click="approve">
        <IconTrash class="icon" color="var(--color-foreground)" />
        YES
      </button>
    </template>
  </DialogComponent>
</template>

<style scoped>
  p {
    padding: var(--gap-small) var(--gap-normal);
    width: 100%;
    color: var(--color-foreground-dark);
  }
  button + button {
    margin-left: var(--gap-small);
  }
</style>
