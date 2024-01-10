<script setup lang="ts">
  import { db } from '@/firebase';
  import type { Entry } from '@/models/entry';
  import { useFirestore } from '@vueuse/firebase';
  import { doc } from 'firebase/firestore';
  import { ref, watch, type Ref } from 'vue';

  const props = defineProps<{
    entryId: string;
    isFree: boolean;
  }>()

  const entryDoc = doc(db, 'entries', props.entryId)
  const entry = useFirestore(entryDoc, undefined, { autoDispose: false }) as Ref<Entry | undefined>
  const pRef = ref<HTMLElement | null>(null)
  const pFreeRef = ref<HTMLElement | null>(null)
  const fontSizeRem = ref(2)

  const isOverflowing = (el: HTMLElement) => {
    const pel = el.parentElement!
    return (el.offsetWidth > pel.offsetWidth)
      || (el.offsetHeight > pel.offsetHeight)
  }

  const fixFontSize = () => {
    if (pRef.value || pFreeRef.value) {
      const overflow = isOverflowing(pRef.value ?? pFreeRef.value!)
      if (overflow) {
        fontSizeRem.value -= 0.1
        setTimeout(fixFontSize, 30)
      }
    }
  }

  watch([entry, pRef, pFreeRef], () => {
    fixFontSize()
  })
</script>

<template>
  <Transition name="fade">
    <p
      ref="pRef"
      v-if="entry && !isFree"
      :style="{
        fontSize: `${fontSizeRem}rem`,
        'word-break': entry.value.split(' ').map(w => w.length > 7).some(b => b) ? 'break-word' : 'normal',
      }"
    >{{ entry.value }}</p>
    <p
      ref="pFreeRef"
      :style="{ fontSize: `${fontSizeRem}rem` }"
      v-else-if="isFree"
    >{{ entryId }}</p>
    <p v-else>...</p>
  </Transition>
</template>

<style scoped>
  p {
    transition: font-size 0.025s linear;
    word-break: normal;
    text-align: center;
    padding: var(--gap-small);
    min-width: 100%;
  }
</style>
