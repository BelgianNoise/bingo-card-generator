<script setup lang="ts">
  defineProps({
    color: {
      type: String,
      default: '#fff'
    }
  })
</script>

<template>
  <svg
    :style="{ stroke: color }"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="20px"
      cx="256" cy="256" r="246"
    ></circle>
    <polyline
      fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="20px"
      points="115.54 268.77 200.67 353.9 396.46 158.1"
    ></polyline>
  </svg>
</template>
  