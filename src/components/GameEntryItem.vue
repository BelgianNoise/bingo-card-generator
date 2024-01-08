<script setup lang="ts">
  import type { Entry } from '@/models/entry';
  import { computed, ref, watch } from 'vue';
  import IconSave from '@/components/icons/IconSave.vue';
  import { deleteEntryForever, saveChangesEntry } from '@/utils/firestore';
  import { timeAgo } from '@/utils/time-ago';
  import IconClock from '@/components/icons/IconClock.vue';
  import IconTrash from '@/components/icons/IconTrash.vue';

  const props = defineProps<{
    entry: Entry,
    editMode: boolean,
  }>()

  const saveChanges = async () => {
    await saveChangesEntry({
      ...props.entry,
      value: inputValue.value,
      id: props.entry.id,
    })
  }

  const inputValue = ref(props.entry.value)

  const showSave = computed(() => {
    return props.editMode && inputValue.value !== props.entry.value
  })

  watch(() => props.entry.value, (newValue) => {
    inputValue.value = newValue
  })

  const deleteEntry = async () => {
    await deleteEntryForever(props.entry)
  }
</script>

<template>
  <div class="container">
    <div class="input-container">
      <form @submit.prevent="saveChanges">
        <input
          size="1"
          v-model="inputValue"
          type="text"
          :disabled="!editMode"
        />
        <Transition name="fade">
          <button v-if="showSave" type="submit" class="primary">
            <IconSave class="icon" color="var(--color-foreground)" />
          </button>
        </Transition>
      </form>
  
      <button v-if="editMode" @click="deleteEntry" class="primary remove">
        <IconTrash class="icon" color="var(--color-foreground)" />
      </button>
    </div>

    <div v-if="editMode" class="updated-container">
      <IconClock color="var(--color-foreground-darker)" />
      <span>updated {{ timeAgo(entry.updatedAt) }}</span>
    </div>

  </div>
</template>

<style scoped>
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);
  }
  form {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: var(--gap-small);
    align-items: center;
  }
  form input {
    flex: 1;
    padding: var(--gap-small);
    background: var(--color-background-lightest);
  }
  form input:disabled {
    background: transparent;
  }
  button {
    padding: var(--gap-small);
  }
  .input-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  span {
    font-size: var(--font-size-small);
    color: var(--color-foreground-darker);
    font-style: italic;
  }
  .updated-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--gap-small);
  }
  .updated-container svg {
    padding-left: var(--gap-small);
    height: var(--font-size-normal);
  }
</style>
