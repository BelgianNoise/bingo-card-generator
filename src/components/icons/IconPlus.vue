<script setup lang="ts">
  defineProps<{
    color?: string
  }>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
      <path
        :style="{
          stroke: color ?? '#fff',
        }"
        d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      ></path>
    </svg>
</template>
