<script setup lang="ts">
  import DeleteConfirmationDialog from '@/components/DeleteConfirmationDialog.vue';

  defineProps<{
    open: boolean,
  }>()

  const emit = defineEmits<{
    (e: 'close'): void
    (e: 'denied'): void
    (e: 'approved'): void
  }>()

  const deny = () => emit('denied')
  const approve = () => emit('approved')
  const close = () => emit('close')
</script>

<template>
  <DeleteConfirmationDialog
    :open="open"
    @close="close"
    @denied="deny"
    @approved="approve"
  >
    <template #content>
      <p>
        Are you sure you want to delete this game? Once deleted all data will be lost.
      </p>
    </template>
  </DeleteConfirmationDialog>
</template>

<style scoped>
  p {
    padding: var(--gap-small) var(--gap-normal);
    width: 100%;
    color: var(--color-foreground-dark);
  }
</style>
