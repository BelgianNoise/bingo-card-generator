<script setup lang="ts">
  import DialogComponent from '@/components/DialogComponent.vue';
  import IconTrash from '@/components/icons/IconTrash.vue';

  defineProps<{
    open: boolean,
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
      <slot name="content"></slot>
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
  button + button {
    margin-left: var(--gap-small);
  }
</style>
