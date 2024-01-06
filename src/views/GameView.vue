<script setup lang="ts">
  import { db } from '@/firebase';
  import { useFirestore } from '@vueuse/firebase/useFirestore';
  import { collection, orderBy, query, where } from 'firebase/firestore';
  import { useRoute, useRouter } from 'vue-router';
  import GameDetails from '@/components/GameDetails.vue';

  const route = useRoute()
  const router = useRouter()

  const gameIdRouteParam = route.params.id
  let gameId: string
  if (typeof gameIdRouteParam === 'string') {
    gameId = gameIdRouteParam
  } else {
    gameId = gameIdRouteParam[0]
  }

  const q = query(collection(db, 'entries'), where('gameId', '==', gameId), orderBy('updatedAt', 'desc'))
  const entries = useFirestore(q, undefined, { autoDispose: false })
  if (!entries) router.push('/error?code=5562-' + gameId)
</script>

<template>
  <div>
    <GameDetails :gameId="gameId" />
  
    <div v-if="entries">
      <div v-for="entry in entries" :key="entry.id">
        <h2>{{ entry.id }}</h2>
        <p>{{ entry.value }}</p>
        <p>{{ entry.updatedAt }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
