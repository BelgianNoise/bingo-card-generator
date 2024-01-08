<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import DialogComponent from '@/components/DialogComponent.vue';
  import IconCaret from '@/components/icons/IconCaret.vue';
  import { onMounted, ref } from 'vue';
  import { QuerySnapshot, collection, doc, getDoc, getDocs, query, where, type DocumentData } from 'firebase/firestore';
  import { db } from '@/firebase';
  import type { Game } from '@/models/game';
  import type { NewCard } from '@/models/card';
  import useNotificationsEventBus from '@/notificationsEventBus';
  import { NotificationLevel, createNotification } from '@/models/notification';
  import { saveNewCard } from '@/utils/firestore';
  import IconInfo from '@/components/icons/IconInfo.vue';

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

  const maxWidth = ref('700px')
  const loading = ref(true)

  const gameName = ref('')
  const gameNameError = ref(false)

  // we don't use refs here because:
  // 1. we don't need to reactively update the game
  // 2. I wanted to try it like this lol
  let game: Game | undefined
  let entries: QuerySnapshot<DocumentData, DocumentData>
  let requiredNumberOfEntries: number
  onMounted(async () => {
    if (route.query.title) {
      gameName.value = route.query.title as string
    }
    const dGame = doc(db, 'games', gameId)
    game = (await getDoc(dGame)).data() as Game | undefined
    if (game && game.gridWidth) {
      const q = query(collection(db, 'entries'), where('gameId', '==', gameId))
      entries = await getDocs(q)
      const totalFields = game.gridWidth**2
      requiredNumberOfEntries = totalFields - (game.hasFreeSpace ? 1 : 0)
      if (requiredNumberOfEntries < entries.size) {
        loading.value = false
      } else {
        return gameNotReady()
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
  const gameNotReady = () => {
    router.push('/game/' + gameId)
    notificationsBus.emit(createNotification(
      NotificationLevel.WARNING,
      `This bingo game is not ready yet 😭.
      If you are the creator or administrator of this game, please add more possible field values!`,
      10000,
    ))
  }

  const doCreateAndSaveCard = async () => {
    gameNameError.value = gameName.value.length < 3
    if (gameNameError.value) return
    // Needed for type checks
    if (!game) return gameNotFound()
    if (!entries) return gameNotReady()

    // Create a new card using the entry ids from the game
    const newCard: NewCard = {
      gameId: gameId,
      title: gameName.value,
      gridWidth: game.gridWidth,
      hasFreeSpace: game.hasFreeSpace,
      freeSpaceText: game.freeSpaceText,
      createdAt: new Date().getTime(),
      entryIds: [],
    }

    const avIds = entries.docs.map(entry => entry.id)

    for (let i = 0; i < requiredNumberOfEntries; i++) {
      const rand = Math.floor(Math.random() * avIds.length)
      newCard.entryIds.push(avIds[rand])
      avIds.splice(rand, 1)
    }

    const newId = await saveNewCard(newCard)
    router.push(`/game/${gameId}/play/${newId}`)
  }

  const goToGamePage = () => {
    router.push(`/game/${gameId}`)
  }
</script>

<template>

  <DialogComponent
    :open="!loading"
    :preventClose="true"
    :maxWidth="maxWidth"
  >
    <template #header>
      <h2>Start playing!</h2>
    </template>
    <template #content>
      <div v-if="game" class="game-info-container">
        <h2>{{ game.name }}</h2>
        <p>
          {{ game.description.substring(0, 100) }}
          {{ game.description.length > 100 ? '...' : '' }}
        </p>
        <button @click="goToGamePage" class="secondary">
          <IconInfo class="icon" color="var(--color-primary)" />
          More info
        </button>
      </div>
      <div class="input-container">
        <label for="card-name">Name your bingo card</label>
        <input
          id="card-name"
          type="text"
          @keyup.enter="doCreateAndSaveCard"
          v-model="gameName"
          placeholder="Colton's Bingo Card"
          :class="{ error: gameNameError }"
        />
        <p v-if="gameNameError" class="input-description error">
          Damn you lazy like that? 3 characters minimum!
        </p>
        <p class="input-description">
          This is used to identify your bingo card in the future.
          If you decide to take a break you can always come back
          and find your card again 👍
        </p>
      </div>
    </template>
    <template #footer>
      <button
        class="primary"
        @click="doCreateAndSaveCard"
      >
        Start
        <IconCaret class="icon" color="var(--color-foreground)" />
      </button>
    </template>
  </DialogComponent>

</template>

<style scoped>
  #card-name {
    padding: var(--gap-normal);
    background: var(--color-background-lightest);
    border-radius: var(--border-radius-normal);
  }
  .icon {
    height: var(--font-size-normal);
  }
  .game-info-container {
    text-align: center;
    padding: var(--gap-normal);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-small);
    background: var(--color-background-dark);
    border-radius: var(--border-radius-normal);
    margin-bottom: var(--gap-normal);
  }
  .game-info-container h2 {
    padding: 0 var(--gap-normal);
    padding-bottom: var(--gap-small);
    border-bottom: 1px solid var(--color-foreground);
  }
  .game-info-container p {
    color: var(--color-foreground-darker);
  }
</style>
