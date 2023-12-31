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
        <label class="switch">
          <input type="checkbox" id="free-space" v-model="hasFreeSpace" />
          <span class="slider round"></span>
        </label>
      </div>
      <p class="input-description">
        Include a "free" space in the middle. If you are unsure about this
        setting, leave it turned off.
      </p>
    </div>

    <transition name="fly" :duration="{ enter: 300, leave: 300 }">
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
          If you just want it to say "free", leave this field empty.
        </p>
      </div>
    </transition>

    <div class="input-container">
      <div class="checkbox-container">
        <label for="grid-size">Grid size</label>
        <select id="grid-size" v-model="gridWidth">
          <option value="3">3 by 3 (9 fields)</option>
          <option value="5">5 by 5 (25 fields)</option>
        </select>
      </div>
    </div>

    <div class="input-container">
      <button type="submit" :disabled="!submitEnabled" class="primary">
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
  button {
    align-self: flex-end;
  }
  .sub {
    border-left: 2px solid var(--color-background-lightest);
    margin-left: var(--gap-normal);
    padding-left: var(--gap-normal);
  }
  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-small);
  }
  .checkbox-container label {
    padding-bottom: 0;
  }
  /* label that does not have class switch */
  .checkbox-container label:not(.switch) {
    flex: 1;
  }
  .sub .checkbox-container label {
    padding-left: 0;
  }

  .proceed-arrow {
    height: var(--font-size-small);
  }

  .fly-enter-from, .fly-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
</style>
