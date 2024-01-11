<script setup lang="ts">
  import { db } from '@/firebase';
  import { useFirestore } from '@vueuse/firebase/useFirestore';
  import { collection, orderBy, query, where } from 'firebase/firestore';
  import { type Ref } from 'vue';
  import GameCardItem from '@/components/GameCardItem.vue';
  import IconEdit from '@/components/icons/IconEdit.vue';
  import type { Card } from '@/models/card';

  const props = defineProps<{
    gameId: string;
    editMode: boolean;
  }>()

  const emit = defineEmits<{
    (e: 'openPasswordValidationDialog'): void
  }>()

  const q = query(collection(db, 'cards'), where('gameId', '==', props.gameId), orderBy('createdAt', 'desc'))
  const cards = useFirestore(q, undefined, { autoDispose: false }) as Ref<Card[]>

  const openPasswordValidationDialog = () => emit('openPasswordValidationDialog')
</script>

<template>
  <div class="table-view" v-if="cards?.length">
    <div class="table-header">
      <span>Active cards</span>
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
        <GameCardItem :card="card" :editMode="props.editMode" />
      </div>
    </TransitionGroup>
  </div>

</template>

<style scoped>

</style>
