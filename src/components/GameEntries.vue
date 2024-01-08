<script setup lang="ts">
  import { db } from '@/firebase';
  import { useFirestore } from '@vueuse/firebase/useFirestore';
  import { collection, orderBy, query, where } from 'firebase/firestore';
  import IconPlus from '@/components/icons/IconPlus.vue';
  import { ref, type Ref } from 'vue';
  import { saveNewEntry } from '@/utils/firestore';
  import PasswordValidationDialog from '@/components/PasswordValidationDialog.vue';
  import IconEdit from '@/components/icons/IconEdit.vue';
  import GameEntryItem from '@/components/GameEntryItem.vue';
  import type { Entry } from '@/models/entry';

  const props = defineProps<{
    gameId: string
  }>()

  const q = query(collection(db, 'entries'), where('gameId', '==', props.gameId), orderBy('updatedAt', 'desc'))
  const entries = useFirestore(q, undefined, { autoDispose: false }) as Ref<Entry[]>

  const validatingPassword = ref(false)
  const validatedPassword = ref(false)
  const openPasswordValidationDialog = () => validatingPassword.value = true
  const closePasswordValidationDialog = () => validatingPassword.value = false
  const passwordValidated = () => validatedPassword.value = true

  const newEntry = ref('')
  const addNew = async () => {
    await saveNewEntry({
      gameId: props.gameId,
      value: newEntry.value,
      updatedAt: new Date().getTime(),
    })
    newEntry.value = ''
  }
</script>

<template>

  <PasswordValidationDialog
    :open="validatingPassword"
    :gameId="props.gameId"
    @validated="passwordValidated"
    @close="closePasswordValidationDialog"
  />

  <div class="table-view">
    <div class="table-header">
      <span>What's on the cards ?</span>
      <button
        v-if="!validatedPassword"
        @click="openPasswordValidationDialog"
        class="secondary"
      >
        Manage
        <IconEdit class="icon" color="var(--color-primary-dark)"/>
      </button>
    </div>
    <div v-if="entries?.length === 0" class="table-row empty">
      <span>No entries yet, add one :)</span>
    </div>
    <TransitionGroup name="fly-in-top">
      <div v-if="validatedPassword" class="table-row">
        <form @submit.prevent="addNew" class="add-form">
          <input
            size="1"
            v-model="newEntry"
            type="text"
            placeholder="Add something new here..."
          />
          <button type="submit" class="primary">
            <IconPlus class="icon" color="var(--color-foreground)" />
          </button>
        </form>
      </div>

      <div v-for="entry in entries" :key="entry.id" class="table-row">
        <GameEntryItem :entry="entry" :editMode="validatedPassword"/>
      </div>
    </TransitionGroup>
  </div>

</template>

<style scoped>
  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .add-form {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: var(--gap-small);
  }
  .add-form input {
    flex: 1;
    background: var(--color-background-lightest);
    padding: var(--gap-small);
  }
  .add-form button {
    padding: var(--gap-small);
  }
  .add-form .icon {
    height: var(--font-size-large);
  }
</style>
