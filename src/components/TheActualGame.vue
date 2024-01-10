<script setup lang="ts">
  import { db } from '@/firebase';
  import type { Card } from '@/models/card';
  import type { Game } from '@/models/game';
  import { NotificationLevel, createNotification } from '@/models/notification';
  import useNotificationsEventBus from '@/notificationsEventBus';
  import { useFirestore } from '@vueuse/firebase';
  import { doc } from 'firebase/firestore';
  import { computed, ref, watch, type Ref } from 'vue';
  import IconShare from '@/components/icons/IconShare.vue';
  import { deleteCardForever, saveChangesCard } from '@/utils/firestore';
  import GameInfo from '@/components/GameInfo.vue';
  import IconTrash from '@/components/icons/IconTrash.vue';
  import DeleteConfirmationDialog from './DeleteConfirmationDialog.vue';
  import router from '@/router';
  import SquareText from './SquareText.vue';

  const props = defineProps<{
    cardId: string;
    gameId: string;
  }>()

  const notificationsBus = useNotificationsEventBus()

  // In this component we can expect to receive an existing cardId and gameId

  const cardDoc = doc(db, 'cards', props.cardId)
  const card = useFirestore(cardDoc, undefined, { autoDispose: false }) as Ref<Card | undefined>
  
  const gameDoc = doc(db, 'games', props.gameId)
  const game = useFirestore(gameDoc, undefined, { autoDispose: false }) as Ref<Game | undefined>
  
  const entryIds = computed(() => {
    if (card.value) {
      if (card.value.hasFreeSpace) {
        // insert text in middle of array
        const middleIndex = Math.floor(card.value.entryIds.length / 2)
        const newArray = [...card.value.entryIds]
        newArray.splice(middleIndex, 0, card.value.freeSpaceText ?? 'FREE')
        return newArray
      } else {
        return card.value.entryIds
      }
    } else {
      return []
    }
  })

  const askingForDeleteConfirmation = ref(false)
  const openDeleteConfirmation = () => askingForDeleteConfirmation.value = true
  const closeDeleteConfirmation = () => askingForDeleteConfirmation.value = false

  const shareClick = () => {
    navigator.clipboard.writeText(window.location.href)
    notificationsBus.emit(createNotification(
      NotificationLevel.INFO,
      'The link to this bingo card has been copied to your clipboard.',
    ))
  }
  const clickSquare = (entryId: string) => {
    if (card.value) {
      const newArr = [ ...card.value.chckedEntryIds ]
      const index = newArr.indexOf(entryId)
      if (index > -1) {
        newArr.splice(index, 1)
      } else {
        newArr.push(entryId)
      }
      saveChangesCard({
        ...card.value,
        id: props.cardId,
        chckedEntryIds: newArr,
      })
    }
  }
  const pleaseDeleteMeDaddy = async () => {
    const weGood = await deleteCardForever(props.cardId)
    if (weGood) router.push(`/game/${props.gameId}`)
  }

  watch([entryIds, card], ([entryIds, card]) => {
    // TODO calculate bingo
  })
</script>

<template>
  <div v-if="card && game" class="container">
    <div class="header">
      <h1 class="card-title">{{ card.title }}</h1>
      <button class="share secondary" @click="shareClick">
        <IconShare class="icon" color="var(--color-foreground)" />
      </button>
    </div>
    <div class="flexy-boi">

      <div
        class="grid"
        :style="{
          gridTemplateColumns: `repeat(${game.gridWidth}, 1fr)`,
        }"
      >
        <div v-for="entryId in entryIds" :key="entryId" class="square">
          <button
            @click="() => clickSquare(entryId)"
          >
            <SquareText :entryId="entryId" :isFree="entryId === card.freeSpaceText"/>
            <Transition name="fade">
              <img
                v-if="card.chckedEntryIds.includes(entryId)"
                class="field-marker"
                src="/field-marker.png"
                alt="field marker"
              />
            </Transition>
          </button>
        </div>
      </div>

      <div class="sidebar">
        <div class="info-container">
          <p class="section-heading">You are currently playing:</p>
          <GameInfo :game="game" :gameId="gameId" :maxDescriptionLength="300" />
        </div>
    
        <div class="info-container">
          <p class="section-heading">Danger zone:</p>
          <div>
            <DeleteConfirmationDialog
              :open="askingForDeleteConfirmation"
              @close="closeDeleteConfirmation"
              @denied="closeDeleteConfirmation"
              @approved="pleaseDeleteMeDaddy"
            >
              <template #content>
                <p>
                  Are you sure you want to delete this bingo card?
                  It will be gone forever and you will not be able to recover it.
                </p>
              </template>
            </DeleteConfirmationDialog>
    
            <button @click="openDeleteConfirmation" class="primary remove" :style="{ margin: '0 auto' }">
              <IconTrash class="icon" color="var(--color-foreground)" />
              Delete my bingo card
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
  }
  .flexy-boi {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
    align-items: center;
  }
  @media screen and (min-width: 900px) {
    .flexy-boi {
      /* reverse items order */
      flex-direction: row-reverse;
      align-items: flex-start;
    }
    .flexy-boi .grid {
      min-width: 58%;
    }
    .grid .square button:hover {
      background: var(--color-background-light);
    }
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
  }
  .grid {
    display: grid;
    gap: 3px;
    padding: 3px;
    /* max-height: calc(100% - 180px);
    max-height: calc(100% - 180px); */
    max-width: calc(100vh - 180px);
    max-width: calc(100svh - 180px);
    background: var(--color-background-lightest);
  }
  .grid .square {
    background: var(--color-background);
    overflow: hidden;
    color: var(--color-foreground);
    aspect-ratio: 1;
  }
  .grid .square button {
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .square .field-marker {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }

  .header {
    width: 100%;
    border-bottom: 1px solid var(--color-foreground-darker);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--gap-tiny) var(--gap-small);
  }
  .card-title {
    /* elipsis */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .share .icon {
    height: var(--font-size-huge);
  }
  .share {
    border: none;
    padding: var(--gap-small);
  }
  .section-heading {
    font-style: italic;
    text-decoration: underline;
    margin-bottom: var(--gap-small);
  }
  .info-container {
    width: 100%;
  }
  .info-container > div {
    padding: var(--gap-normal);
    background: var(--color-background);
    border-radius: var(--border-radius-normal);
  }
  .game-name {
    font-size: var(--font-size-huge);
    color: var(--color-foreground);
    border-bottom: 1px solid var(--color-foreground-darker);
    padding: var(--gap-tiny);
    /* elipsis */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .game-description {
    font-size: var(--font-size-normal);
    color: var(--color-foreground-darker);
    padding: var(--gap-tiny);
    text-align: center;
  }
</style>
