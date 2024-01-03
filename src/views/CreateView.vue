<script setup lang="ts">
  import { computed, ref } from 'vue';

  const name = ref('')
  const description = ref('')
  const password = ref('')
  const hasFreeSpace = ref(false)
  const isStandardSize = ref(false)
  const gridSize = ref('5x5')

  const submit = () => {
    console.log('submit')
  }
  const submitEnabled = computed(() => {
    return name.value && description.value && password.value
  })
</script>

<template>
  <form @submit.prevent="submit">
    <div class="input-container">
      <label for="name">Name your game</label>
      <input type="text" id="name" :value="name" placeholder="Boring weekly meeting 😴"/>
    </div>
  
    <div class="input-container">
      <label for="description">Description</label>
      <textarea type="text" id="description" :value="description"/>
      <p class="input-description">A short (or long 🤷) description of the bingo game you are making.</p>
    </div>
  
    <div class="input-container">
      <label for="password">Password</label>
      <input type="password" id="password" :value="password" placeholder="***"/>
      <p class="input-description">The password will be required* to make changes to the game. (see disclaimer at the bottom of the page)</p>
    </div>

    <div class="input-container">
      <div class="checkbox-container">
        <label>Include a "free" space</label>
        <input type="checkbox" id="free-space" :value="hasFreeSpace" />
      </div>
      <p class="input-description">
        Include a "free" space in the middle. If you are unsure about this
        setting, leave it turned off.
      </p>
    </div>

    <div v-show="hasFreeSpace" class="input-container">
      <label for="free-space-text">Free space text</label>
      <input type="text" id="free-space-text" placeholder="Free" />
      <p class="input-description">
        The text that will be displayed in the middle of the bingo card.
        If you just want it so day "free", leave this field empty.
      </p>
    </div>

    <div class="input-container">
      <div class="checkbox-container">
        <label>Standard size</label>
        <input type="checkbox" id="size" :value="isStandardSize" />
        <p class="input-description">A standard game will always generate 5 by 5 bingo cards.</p>
      </div>
    </div>

    <div v-show="!isStandardSize" class="input-container">
      <div class="checkbox-container">
        <label for="grid-size">Grid size</label>
        <select id="grid-size" :value="gridSize">
          <option value="3x3">3 by 3 (9 fields)</option>
          <option value="5x5">5 by 5 (25 fields)</option>
        </select>
      </div>
    </div>

    <div class="input-container">
      <button type="submit" :enabled="submitEnabled">Finish</button>
    </div>
  </form>

</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
  }
  .input-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);
  }
  .input-container label {
    padding-left: var(--gap-normal);
    padding-bottom: var(--gap-small);
  }
  .input-description {
    font-size: var(--font-size-small);
    color: var(--color-foreground-darkest);
    padding-left: var(--gap-normal);
  }
  button {
    padding: var(--gap-small) var(--gap-normal);
    border-radius: var(--border-radius-normal);
    background-color: var(--color-primary);
    color: var(--color-foreground);
    font-size: var(--font-size-normal);
    align-self: flex-end;
  }
</style>
