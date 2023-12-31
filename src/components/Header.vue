<script setup lang="ts">
  import IconGithub from '@/components/icons/IconGithub.vue'
</script>

<template>
  <header>
    <span id="bingo">BINGO</span>
    <div class="menu-container">
      <RouterLink to="/">
        Home
      </RouterLink>
      <RouterLink to="/pricing" class="hide-on-small-screen">
        Pricing
      </RouterLink>
      <RouterLink to="/create">
        Create New
      </RouterLink>
      <a href="https://github.com/BelgianNoise" class="hide-on-small-screen github">
        <IconGithub
          max-height="calc(var(--font-size-mega) - 10px)"
          color="var(--color-foreground)"
        />
      </a>
    </div>
  </header>
</template>

<style scoped>
  #bingo {
    font-family: 'Comfortaa', sans-serif;
    font-weight: 700;
    font-size: var(--font-size-mega);
    line-height: var(--font-size-mega);
    color: var(--color-primary);
    font-style: normal;
    cursor: default;
  }
  header {
    padding: var(--gap-small) var(--gap-normal);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: 0;
    background-color: var(--color-background);
  }
  header .menu-container {
    display: flex;
    flex-direction: row;
    gap: var(--gap-normal);
    justify-content: end;
    align-items: center;

    font-size: var(--font-size-normal);
    line-height: var(--font-size-normal);
  }
  header a {
    padding: var(--gap-small) var(--gap-normal);
    border-radius: var(--gap-small);
  }
  header a.router-link-active,
  header a.router-link-exact-active {
    color: var(--color-primary);
  }
  header a:hover {
    background-color: var(--color-background-light);
  }
  a.github {
    padding: 5px;
  }
  a.github:hover {
    background-color: transparent;
  }

  @media screen and (max-width: 600px) {
    .hide-on-small-screen {
      display: none;
    }
  }
</style>
