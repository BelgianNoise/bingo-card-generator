<script setup lang="ts">
  defineProps<{
    color?: string,
  }>();
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
        id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      ></path>
    </svg>
</template>
