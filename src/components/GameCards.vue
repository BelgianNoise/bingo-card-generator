<script setup lang="ts">
  import { db } from '@/firebase';
  import { useFirestore } from '@vueuse/firebase/useFirestore';
  import { collection, orderBy, query, where } from 'firebase/firestore';
  import { type Ref } from 'vue';
  import GameCardsItem from '@/components/GameCardsItem.vue';
  import IconEdit from '@/components/icons/IconEdit.vue';
  import type { Card } from '@/models/card';
  import IconPlay from './icons/IconPlay.vue';
  import { useRouter } from 'vue-router';

  const props = defineProps<{
    gameId: string;
    editMode: boolean;
  }>()

  const emit = defineEmits<{
    (e: 'openPasswordValidationDialog'): void
  }>()

  const router = useRouter()

  const q = query(collection(db, 'cards'), where('gameId', '==', props.gameId), orderBy('createdAt', 'desc'))
  const cards = useFirestore(q, undefined, { autoDispose: false }) as Ref<Card[]>

  const openPasswordValidationDialog = () => emit('openPasswordValidationDialog')
</script>

<template>
  <div class="table-view" v-if="cards?.length">
    <div class="table-header">
      <span>
        Active cards
        <span class="total-count">
          ({{ cards?.length }})
        </span>
      </span>
      <button
        v-if="!editMode"
        @click="openPasswordValidationDialog"
        class="secondary"
      >
        Manage
        <IconEdit class="icon" color="var(--color-primary-dark)"/>
      </button>
    </div>
    <TransitionGroup name="fly-in-top">
      <div v-for="card in cards" :key="card.id" class="table-row">
        <GameCardsItem :card="card" :editMode="props.editMode" />
      </div>
    </TransitionGroup>
    <div>
      <span></span>
      <button
        class="primary"
        @click="router.push(`/game/${gameId}/play/new`)"
        :style="{ marginRight: 'var(--gap-small)' }"
      >
        Create a new card
        <IconPlay class="icon" color="var(--color-foreground)"/>
      </button>
    </div>
  </div>

</template>

<style scoped>
  .total-count {
    font-size: var(--font-size-small);
    color: var(--color-foreground-darkest);
  }
</style>
