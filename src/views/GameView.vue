<script setup lang="ts">
  import { db } from '@/firebase';
  import { useFirestore } from '@vueuse/firebase/useFirestore';
  import { collection, orderBy, query, doc, where } from 'firebase/firestore';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute()

  let gameId = route.params.id
  if (typeof gameId !== 'string') {
    const router = useRouter()
    router.push('/error?code=77845')
  }
  // This type check is necessary cause the code doesn't know
  // that a redirect happened if the type is not a string
  const d = doc(db, 'games', typeof gameId === 'string' ? gameId : 'ey-im-walkin-ere')
  const game = useFirestore(d, undefined, { autoDispose: false })
  const q = query(collection(db, 'entries'), where('gameId', '==', gameId), orderBy('updatedAt', 'desc'))
  const entries = useFirestore(q, undefined, { autoDispose: false })
</script>

<template>
  <div v-if="game">
    <h2>{{ game.id }}</h2>
    <p>{{ game.description }}</p>
    <p>{{ game.name }}</p>
    <p>{{ game.updatedAt }}</p>
    <div v-for="entry in entries" :key="entry.id">
      <h2>{{ entry.id }}</h2>
      <p>{{ entry.value }}</p>
      <p>{{ entry.updatedAt }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
