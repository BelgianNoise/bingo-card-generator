<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import GameDetails from '@/components/GameDetails.vue';
  import GameEntries from '@/components/GameEntries.vue';
  import GameCards from '@/components/GameCards.vue';
  import { ref } from 'vue';
  import PasswordValidationDialog from '@/components/PasswordValidationDialog.vue';

  const route = useRoute()

  const gameIdRouteParam = route.params.gameId
  let gameId: string
  if (typeof gameIdRouteParam === 'string') {
    gameId = gameIdRouteParam
  } else {
    gameId = gameIdRouteParam[0]
  }

  const validatingPassword = ref(false)
  const validatedPassword = ref(false)
  const openPasswordValidationDialog = () => validatingPassword.value = true
  const closePasswordValidationDialog = () => validatingPassword.value = false
  const passwordValidated = () => validatedPassword.value = true
</script>

<template>
  <div id="container">
    <GameDetails
      :gameId="gameId"
      :editMode="validatedPassword"
      @open-password-validation-dialog="openPasswordValidationDialog"
      @disable-edit-mode="validatedPassword = false"
    />
    <div class="entries-n-cards">
      <GameEntries
        :gameId="gameId"
        :editMode="validatedPassword"
        @open-password-validation-dialog="openPasswordValidationDialog"
      />
      <GameCards
        :gameId="gameId"
        :editMode="validatedPassword"
        @open-password-validation-dialog="openPasswordValidationDialog"
      />
    </div>

    <PasswordValidationDialog
      :open="validatingPassword"
      :gameId="gameId"
      @validated="passwordValidated"
      @close="closePasswordValidationDialog"
    />
  </div>
</template>

<style scoped>
  #container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
  }
  .entries-n-cards {
    display: flex;
    flex-direction: column-reverse;
    gap: var(--gap-normal);
  }
  @media screen and (min-width: 800px) {
    .entries-n-cards {
      display: flex;
      flex-direction: row;
      gap: var(--gap-normal);
    }
    .entries-n-cards > * {
      min-width: calc(50% - var(--gap-normal)/2);
      max-width: 100%;
    }
    .entries-n-cards > :first-child {
      flex: 1;
    }
  }
</style>
