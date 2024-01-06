<script setup lang="ts">
  import IconPlus from '@/components/icons/IconPlus.vue';

  defineProps<{
    hideHeader?: boolean,
    hideContent?: boolean,
    hideFooter?: boolean,
    open: boolean,
  }>()

  const emit = defineEmits<{
    (e: 'close'): void,
  }>()

  const close = () => {
    emit('close')
  }
</script>

<template>
  <Transition name="enlarge">
    <dialog v-if="open" :open="open" @click="close" @keyup.escape="close">
      <div class="dialog-content" @click.stop="">
        <div v-if="!hideHeader" class="header">
          <slot name="header"></slot>
          <IconPlus @click="close" class="cross" color="var(--color-foreground-darkest)" />
        </div>
        <div v-if="!hideContent" class="content">
          <slot name="content"></slot>
        </div>
        <div v-if="!hideFooter" class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </dialog>
  </Transition>
</template>

<style scoped>
  dialog {
    border: none;
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: grid;
    place-items: center;
    color: inherit;

    transition: all 100ms ease-in-out;
  }
  .dialog-content {
    max-height: 60%;
    max-width: 90%;
    border-radius: var(--border-radius-normal);
    overflow: hidden;
  }
  .header {
    position: relative;
    background: var(--color-background-light);
    padding: var(--gap-normal);
    padding-right: calc(var(--gap-normal) + var(--gap-tiny) + var(--font-size-huge));
  }
  .content {
    background: var(--color-background);
    padding: var(--gap-normal);
  }
  .footer {
    background: var(--color-background-light);
    padding: var(--gap-normal);
    display: flex;
    justify-content: flex-end;
  }
  .cross {
    position: absolute;
    top: 50%;
    right: var(--gap-small);
    transform: translateY(-50%) rotate(45deg);
    height: calc(2*var(--gap-tiny) + var(--font-size-huge));
    padding: var(--gap-tiny);
    border-radius: 50%;
  }
  .cross:hover {
    cursor: pointer;
    background: var(--color-background-lightest);
  }

  .enlarge-enter-from,
  .enlarge-leave-to {
    opacity: 0;
    transform: scale(0.5);
  }
</style>
