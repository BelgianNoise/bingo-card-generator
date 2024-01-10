<script setup lang="ts">
  import { db } from '@/firebase';
  import type { Card } from '@/models/card';
  import type { Game } from '@/models/game';
  import { NotificationLevel, createNotification } from '@/models/notification';
  import useNotificationsEventBus from '@/notificationsEventBus';
  import { doc, getDoc } from 'firebase/firestore';
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import DialogComponent from '@/components/DialogComponent.vue';
  import type { Entry } from '@/models/entry';
  import { deleteCardForever } from '@/utils/firestore';
  import TheActualGame from '@/components/TheActualGame.vue';

  const route = useRoute()
  const router = useRouter()
  const notificationsBus = useNotificationsEventBus()

  const gameIdRouteParam = route.params.gameId
  let gameId: string
  if (typeof gameIdRouteParam === 'string') {
    gameId = gameIdRouteParam
  } else {
    gameId = gameIdRouteParam[0]
  }
  const cardIdRouteParam = route.params.cardId
  let cardId: string
  if (typeof cardIdRouteParam === 'string') {
    cardId = cardIdRouteParam
  } else {
    cardId = cardIdRouteParam[0]
  }
  
  const cardOutdated = ref(false)
  const loading = ref(true)
  const forceCloseDialog = ref(false)
  
  let cardTitle = ''

  onMounted(async () => {
    // some initial checks to make sure all is good
    // could probably be implemented more efficiently
    const gameDoc = doc(db, 'games', gameId)
    const gameSnapshot = await getDoc(gameDoc)
    const game = gameSnapshot.data() as Game | undefined
    if (game && game.gridWidth) {
      const cardDoc = doc(db, 'cards', cardId)
      const cardSnapshot = await getDoc(cardDoc)
      const card = cardSnapshot.data() as Card | undefined
      if (card && card.gameId === gameId) {
        cardTitle = card.title
        for (const entryId of card.entryIds) {
          const entryDoc = doc(db, 'entries', entryId)
          const entrySnapshot = await getDoc(entryDoc)
          if (!entrySnapshot.exists()) {
            cardOutdated.value = true
          } else {
            const entry = entrySnapshot.data() as Entry | undefined
            if (!entry) {
              cardOutdated.value = true
            } else {
              if (entry.updatedAt > card.createdAt) {
                notificationsBus.emit(createNotification(
                  NotificationLevel.WARNING,
                  `The creator has updated the game, this made some changes to your card.
                  Feel free to delete this bingo card and create a new one if you prefer!`,
                  8000,
                ))
              }
            }
          }
        }
        loading.value = false
      } else {
        return cardNotFound()
      }
    } else {
      return gameNotFound()
    }
  })

  const gameNotFound = () => {
    router.push('/')
    notificationsBus.emit(createNotification(
      NotificationLevel.ERROR,
      `The bingo game you are trying to play does not exist (anymore) 😭.
      Make sure you have the correct link or contact the creator of the game!`,
      10000,
    ))
  }
  const cardNotFound = () => {
    router.push('/game/' + gameId)
    notificationsBus.emit(createNotification(
      NotificationLevel.ERROR,
      `The bingo card you are trying to play does not exist (anymore) 😭.
      Do you have the right link?`,
      10000,
    ))
  }

  const deleteOutdated = async () => {
    console.log('deleteOutdated')
    const res = await deleteCardForever(cardId)
    if (res) router.push(`/game/${gameId}/play/new?title=${cardTitle}`)
  }
  const partyPooper = () => {
    notificationsBus.emit(createNotification(
      NotificationLevel.INFO,
      `You are a real party pooper 😢.
      There is literally no game to play behind the popup.
      I am not letting you close it, enjoy looking at it 🖕 !`,
      10000,
    ))
  }

</script>

<template>
  <div>

    <DialogComponent
      :open="!loading && cardOutdated && !forceCloseDialog"
      :prevent-close="true"
    >
      <template #header>
        <h2>Sorry buddy...</h2>
      </template>
      <template #content>
        <p class="content-text">
          The bingo card you are trying to play is outdated 😭.
          Do you want to delete this card create a new one?
        </p>
      </template>
      <template #footer>
        <button @click="partyPooper" class="secondary">
          NO, I HATE FUN
        </button>
        <button @click="deleteOutdated" class="primary">
          YES PLEASE
        </button>
      </template>
    </DialogComponent>

    <TheActualGame :cardId="cardId" :gameId="gameId" />

  </div>
</template>

<style scoped>
  button + button {
    margin-left: var(--gap-normal);
  }
  .content-text {
    color: var(--color-foreground-darker);
  }
</style>
