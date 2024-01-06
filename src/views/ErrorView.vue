<script setup lang="ts">
  import { ref } from 'vue';
import { useRoute } from 'vue-router';

  const route = useRoute()
  const code = ref(route.query.code)
</script>

<template>
  <h1>Error</h1>
  <h2>{{ code }}</h2>
</template>
