<script setup lang="ts">
  import DialogComponent from '@/components/DialogComponent.vue';
  import { ref } from 'vue';
  import PricesComponent from '@/components/PricesComponent.vue';
  import ReviewsComponent from '@/components/ReviewsComponent.vue';

  const userIsAMoron = ref(false)
  const tellThemTheyAreAMoron = () => userIsAMoron.value = true
  const theyKnow = () => userIsAMoron.value = false
</script>

<template>
  <div class="container">

    <DialogComponent
      :open="userIsAMoron"
      @close="theyKnow"
      :max-width="'700px'"
    >
      <template #header>
        <h2>How do I say this...</h2>
      </template>
      <template #content>
        <p>
          Did you really expect this app to have any of these features?
          Some of them don't even mean anything. Just enjoy the game
          that's there. It's free. You're welcome.
        </p>
        <p :style="{ marginTop: 'var(--gap-small)' }">
          Please don't waste your money on a stupid bingo game lol.
          Idk, go buy yourself a coffee or something.
        </p>
      </template>
      <template #footer>
        <button class="secondary" @click="theyKnow">
          I'm sorry
        </button>
      </template>
    </DialogComponent>

    <div>
      <h1 class="scheef">Pricing</h1>
      <p id="intro">
        We believe in making
        every moment memorable, and our pricing reflects our commitment
        to bringing joy to your gatherings. Choose from our flexible
        pricing options that cater to all your unique needs. Whether
        you're planning a family game night, a corporate event, or a
        special celebration, our pricing ensures affordability without
        compromising on the quality of your custom bingo games. With
        transparent and straightforward rates, you can easily create the
        perfect bingo experience for any occasion.
      </p>
    </div>

    <PricesComponent @tell-them-they-are-a-moron="tellThemTheyAreAMoron" />

    <ReviewsComponent />

  </div>
</template>

<style scoped>
  #intro {
    font-size: var(--font-size-small);
    color: var(--color-foreground-darker);
    padding-left: var(--gap-normal);
    border-left: 1px solid var(--color-foreground-darkest);
    margin-top: var(--gap-normal);
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
  }
  @media screen and (min-width: 1000px) {
    .container {
      gap: var(--gap-huge);
    }
    #intro {
      font-size: var(--font-size-normal);
    }
  }
</style>
