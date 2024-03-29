<script setup lang="ts">
  import type { Game } from '@/models/game';
  import { timeAgo } from '@/utils/time-ago';
  import { ref, type Ref } from 'vue';
  import { doc } from 'firebase/firestore';
  import { useFirestore } from '@vueuse/firebase/useFirestore';
  import { db } from '@/firebase';
  import { useRouter } from 'vue-router';
  import { deleteGameForever, saveChangesGame } from '@/utils/firestore';
  import IconEdit from '@/components/icons/IconEdit.vue';
  import IconSave from '@/components/icons/IconSave.vue';
  import IconPlus from '@/components/icons/IconPlus.vue';
  import IconTrash from '@/components/icons/IconTrash.vue';
  import IconClock from '@/components/icons/IconClock.vue';
  import GameDetailsButtons from '@/components/GameDetailsButtons.vue';
  import DeleteGameConfirmationDialog from '@/components/DeleteGameConfirmationDialog.vue';
  import ChangePasswordDialog from '@/components/ChangePasswordDialog.vue';

  const props = defineProps<{
    gameId: string,
    editMode: boolean,
  }>()

  const emit = defineEmits<{
    (e: 'openPasswordValidationDialog'): void
    (e: 'disableEditMode'): void
  }>()

  const router = useRouter()
  const deletingGame = ref(false)
  const changingPassword = ref(false)

  const d = doc(db, 'games', props.gameId)
  const game = useFirestore(d, undefined, { autoDispose: false }) as Ref<Game | undefined | null>

  const cancelChanges = () => emit('disableEditMode')
  const saveChanges = async () => {
    if (game.value) {
      emit('disableEditMode')
      await saveChangesGame(game.value)
    }
  }
  const openPasswordValidationDialog = () => emit('openPasswordValidationDialog')
  const askToDelete = () => deletingGame.value = true
  const closeDeleteGameConfirmationDialog = () => deletingGame.value = false
  const changePassword = () => changingPassword.value = true
  const closeChangePasswordDialog = () => changingPassword.value = false
  const deleteGame = async () => {
    closeDeleteGameConfirmationDialog()
    const deleted = await deleteGameForever(props.gameId)
    if (deleted) {
      router.push('/')
    } else {
      router.push('/error?code=6969-' + props.gameId)
    }
  }
</script>

<template>
  <Transition name="fade" :duration="{ enter: 300, leave: 300 }">
    <div class="game-container" v-if="game">

      <DeleteGameConfirmationDialog
        :open="deletingGame"
        @approved="deleteGame"
        @denied="closeDeleteGameConfirmationDialog"
        @close="closeDeleteGameConfirmationDialog"
      />

      <ChangePasswordDialog
        :open="changingPassword"
        :gameId="props.gameId"
        @changed="closeChangePasswordDialog"
        @close="closeChangePasswordDialog"
      />

      <span id="name">{{ game.name }}</span>
      <span id="description">{{ game.description }}</span>
      <GameDetailsButtons :gameId="props.gameId" />

      <div class="table-view">
        <div class="table-header">
          <span>Details</span>
          <button v-if="!editMode" @click="openPasswordValidationDialog" class="secondary">
            Manage
            <IconEdit class="icon" color="var(--color-primary-dark)"/>
          </button>
        </div>
        <Transition name="fly-in-top" :duration="{ enter: 300, leave: 300 }">
          <div v-if="editMode" class="table-row">
            <span>Name</span>
            <input v-model="game.name" :disabled="!editMode" />
          </div>
        </Transition>
        <Transition name="fly-in-top" :duration="{ enter: 300, leave: 300 }">
          <div v-if="editMode" class="table-row">
            <span>Description</span>
            <textarea v-model="game.description" :disabled="!editMode"></textarea>
          </div>
        </Transition>
        <Transition name="fly-in-top" :duration="{ enter: 300, leave: 300 }">
          <div v-if="!editMode" class="table-row">
            <span>Created</span>
            <span class="ago">
              {{ timeAgo(game.createdAt) }}
              <IconClock class="clock" color="var(--color-foreground-darker)" />
            </span>
          </div>
        </Transition>
        <Transition name="fly-in-top" :duration="{ enter: 300, leave: 300 }">
          <div v-if="!editMode" class="table-row">
            <span>Last updated</span>
            <span class="ago">
              {{ timeAgo(game.updatedAt) }}
              <IconClock class="clock" color="var(--color-foreground-darker)" />
            </span>
          </div>
        </Transition>
        <div class="table-row">
          <span>Free space</span>
          <label class="switch">
            <input type="checkbox" v-model="game.hasFreeSpace" :disabled="!editMode" />
            <span class="slider round"></span>
          </label>
        </div>
        <Transition name="fly-in-top" :duration="{ enter: 300, leave: 300 }">
          <div v-if="game.hasFreeSpace" class="table-row">
            <span>Free space text</span>
            <input
              v-model="game.freeSpaceText"
              :disabled="!editMode"
              placeholder="(default) Free"
            />
          </div>
        </Transition>
        <div class="table-row">
          <span>Grid size</span>
          <select v-model="game.gridWidth" :disabled="!editMode">
            <option value="3">3 by 3 (9 fields)</option>
            <option value="5">5 by 5 (25 fields)</option>
          </select>
        </div>
        <Transition name="fly-in-top" :duration="{ enter: 300, leave: 300 }">
          <div v-if="editMode" class="table-row">
            <span></span>
            <button @click="changePassword" id="change-password">Change password...</button>
          </div>
        </Transition>
        <Transition name="fly-in-top" :duration="{ enter: 300, leave: 300 }">
          <div v-if="editMode" class="table-row">
            <div>
              <button class="primary remove" @click="askToDelete">
                <IconTrash class="icon" color="var(--color-foreground)" />
              </button>
            </div>
            <div class="buttons-container">
              <button @click="cancelChanges" class="secondary">
                <IconPlus class="icon" :style="{ transform: 'rotate(45deg)' }" color="var(--color-primary-dark)" />
                Cancel
              </button>
              <button @click="saveChanges" class="primary">
                <IconSave class="icon" color="var(--color-foreground)" />
                Save
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  .game-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);
  }
  #name {
    font-size: var(--font-size-huge);
    border-bottom: 2px solid var(--color-background-lightest);
    padding: var(--gap-small) 0;
  }
  #description {
    color: var(--color-foreground-darker);
    padding: var(--gap-small);
  }
  #change-password {
    color: var(--color-primary-dark);
  }
  .table-row {
    transition: all 200ms ease-in-out;
  }
  .table-row > *:nth-child(2) {
    max-width: 60%;
  }
  .table-row > textarea,
  .table-row > input {
    width: 60%;
    text-align: right;
    padding: var(--gap-small);
  }
  .ago {
    color: var(--color-foreground-darker);
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .ago .clock {
    height: var(--font-size-normal);
    padding-left: var(--gap-small);
  }
  .buttons-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--gap-small);
    max-width: 100% !important;
  }
</style>
