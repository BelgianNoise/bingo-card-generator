<script setup lang="ts">
  import IconCaret from '@/components/icons/IconCaret.vue';
  import IconPlus from '@/components/icons/IconPlus.vue';

  // Define emits to get type checking and auto completion
  const emit = defineEmits<{
    (e: 'scroll-to-games'): void,
    (e: 'example', id: string): void,
  }>();

  // Equivalent to calling '$emit('scroll-to-games')' on the element
  const scrollToGames = () => {
    emit('scroll-to-games');
  }
  const example = (id: string) => {
    return emit('example', id);
  }
</script>

<template>
  <div class="intro">
    <h1>
      <span>Create and play.</span><br/>
      Fun custom bingo games!
    </h1>
    <p class="intro-text">
      A lot of boring meetings or simply want to make an event
      more fun? Create your own bingo game and share it with your friends
      and colleagues!
    </p>
    <div class="button-container">
      <RouterLink to="/create" class="start-new-button">
        <IconPlus color="var(--color-foreground-light)" class="plus"/>
        <span>Create a new game</span>
      </RouterLink>
      <button class="demo" @click="$emit('scroll-to-games')">
        <IconCaret color="var(--color-primary-dark)" class="arrow-down"/>
        <p>check out existing games below</p>
        <IconCaret color="var(--color-primary-dark)" class="arrow-down"/>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .intro {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: var(--gap-large);
    padding: var(--gap-large) 0;
  }
  .intro h1 {
    color: var(--color-primary);
    font-size: var(--font-size-huge);
  }
  .intro h1 span {
    color: var(--color-foreground-dark);
  }
  .intro-text {
    font-weight: 300;
    color: var(--color-foreground-dark);
    padding: var(--gap-small) var(--gap-normal);
    font-size: var(--font-size-normal);
    line-height: var(--font-size-large);
  }
  .button-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
    align-items: center;
    padding: 0 var(--gap-small);
  }
  .button-container > * {
    width: 100%;
  }
  .start-new-button {
    background-color: var(--color-primary);
    color: var(--color-foreground-light);
    padding: var(--gap-normal);
    border-radius: var(--border-radius-large);
    font-size: var(--font-size-large);
    text-align: center;
    transition: background-color 0.2s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap-small);
  }
  .start-new-button:hover {
    background-color: var(--color-primary-dark);
  }
  .start-new-button .plus {
    height: var(--font-size-large);
  }
  .demo {
    padding: var(--gap-normal) var(--gap-normal);
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap-normal);
    font-size: var(--font-size-normal);
    color: var(--color-foreground-dark);

    border: 1px solid var(--color-primary-dark);
    border-radius: var(--border-radius-large);
  }
  .demo:hover {
    background-color: var(--color-background-light);
  }
  .demo .arrow-down {
    transform: rotate(90deg);
    height: var(--font-size-large);
  }
  @media screen and (min-width: 430px) {
    .button-container > * {
      width: 90%;
    }
  }
  @media screen and (min-width: 630px) {
    .button-container > * {
      width: 70%;
    }
    .intro-text {
      font-size: var(--font-size-large);
      line-height: var(--font-size-huge);
    }
    .intro h1 {
      font-size: var(--font-size-mega);
    }
  }
  @media screen and (min-width: 850px) {
    .button-container {
      flex-direction: row;
      justify-content: center;
      gap: var(--gap-large);
    }
    .intro-text, .intro h1 {
      padding-left: var(--gap-huge);
      padding-right: var(--gap-huge);
    }
    .button-container > * {
      width: 45%;
      max-width: 400px;
    }
  }
  @media screen and (min-width: 1000px) {
    .intro-text, .intro h1 {
      padding-left: 20%;
      padding-right: 20%;
    }
  }
</style>
