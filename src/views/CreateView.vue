<script setup lang="ts">
  import { computed, ref } from 'vue';
  import IconCaret from '@/components/icons/IconCaret.vue'
  import { saveNewGame } from '@/utils/firestore';
  import type { GameNew } from '@/models/game';
  import type { PasswordNew } from '@/models/password';
  import { useRouter } from 'vue-router';

  const router = useRouter()

  const name = ref('')
  const description = ref('')
  const password = ref('')
  const hasFreeSpace = ref(false)
  const freeSpaceText = ref('')
  const isStandardSize = ref(true)
  const gridWidth = ref(5)

  const nameError = ref(false)
  const descriptionError = ref(false)
  const passwordError = ref(false)

  const handleValidation = (): boolean => {
    nameError.value = name.value.length < 3;
    descriptionError.value = description.value.length < 3;
    passwordError.value = password.value.length < 3;
    return !(nameError.value || descriptionError.value || passwordError.value);
  }
  const submit = async () => {
    const valid = handleValidation()
    if (valid) {
      const game: GameNew = {
        name: name.value,
        description: description.value,
        hasFreeSpace: hasFreeSpace.value,
        freeSpaceText: freeSpaceText.value,
        isStandardSize: isStandardSize.value,
        gridWidth: gridWidth.value,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      }
      const pw: PasswordNew = {
        gameId: '-', // Will be set later using the generated gameId
        value: password.value,
      }
      const newGameId = await saveNewGame(game, pw)
      // redirect to /game/:id
      router.push(`/game/${newGameId}`)
    }
  }
  const submitEnabled = computed((): boolean => {
    return !!(name.value && description.value && password.value)
  })
  const caretColor = computed((): string => {
    return submitEnabled.value ? 'var(--color-foreground)' : '#666666';
  })
</script>

<template>
  <form @submit.prevent="submit">
    <div class="input-container">
      <label for="bingo-name">Name your game</label>
      <input
        type="text"
        id="bingo-name"
        v-model="name" placeholder="Boring weekly meeting 😴"
        :class="{ 'error': nameError }"
      />
      <p v-show="nameError" class="input-description error">
        The name must be at least 3 characters long. I dont care what you say.
      </p>
    </div>
  
    <div class="input-container">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="description"
        :class="{ 'error': descriptionError }"
      />
      <p v-show="descriptionError" class="input-description error">
        Not even a single letter? Come on, you can do better than that! Give me at least 3.
      </p>
      <p class="input-description">
        (required) A short (or long 🤷) description of the bingo game you are making.
      </p>
    </div>
  
    <div class="input-container">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="***"
        :class="{ 'error': passwordError }"
      />
      <p v-show="passwordError" class="input-description error">
        The password must be at least 3 characters long. And, yes, "123" is a valid password.
      </p>
      <p class="input-description">
        (required) The password will be required* to make changes to the game. (see disclaimer at the bottom of the page)
      </p>
    </div>

    <div class="input-container">
      <div class="checkbox-container">
        <label for="free-space">Include a "free" space</label>
        <input type="checkbox" id="free-space" v-model="hasFreeSpace" />
      </div>
      <p class="input-description">
        Include a "free" space in the middle. If you are unsure about this
        setting, leave it turned off.
      </p>
    </div>

    <div v-show="hasFreeSpace" class="input-container sub">
      <label for="free-space-text">Free space text</label>
      <input
        v-model="freeSpaceText"
        type="text"
        id="free-space-text"
        placeholder="Free"
      />
      <p class="input-description">
        The text that will be displayed in the middle of the bingo card.
        If you just want it so day "free", leave this field empty.
      </p>
    </div>

    <div class="input-container">
      <div class="checkbox-container">
        <label for="size">Standard size</label>
        <input type="checkbox" id="size" v-model="isStandardSize" />
        <p class="input-description">A standard game will always generate 5 by 5 bingo cards.</p>
      </div>
    </div>

    <div v-show="!isStandardSize" class="input-container sub">
      <div class="checkbox-container">
        <label for="grid-size">Grid size</label>
        <select id="grid-size" v-model="gridWidth">
          <option value="3">3 by 3 (9 fields)</option>
          <option value="5">5 by 5 (25 fields)</option>
        </select>
      </div>
    </div>

    <div class="input-container">
      <button type="submit" :disabled="!submitEnabled">
        <span>Proceed</span>
        <IconCaret
          class="proceed-arrow"
          :color="caretColor"
        />
      </button>
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
  .sub {
    border-left: 2px solid var(--color-background-lightest);
    margin-left: var(--gap-normal);
    padding-left: var(--gap-normal);
  }
  .sub .checkbox-container label {
    padding-left: 0;
  }
  input.error {
    border: 1px solid var(--color-error-red);
  }
  p.error {
    color: var(--color-error-red);
  }

  button {
    display: flex;
    align-items: center;
    gap: var(--gap-small);
  }
  .proceed-arrow {
    height: var(--font-size-small);
  }
</style>
