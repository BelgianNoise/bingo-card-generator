<script setup lang="ts">
  import IconGithub from '@/components/icons/IconGithub.vue'
  import IconDiscord from '@/components/icons/IconDiscord.vue'
</script>

<template>
  <footer>
    <hr/>
    <p class="disclaimer">
      Since you do not require an account to use this app,
      all data is public in some way or another. Please do not keep any
      sensitive data in your games, and do not try to circumvent the makeshift security
      and ruin the fun for others.
    </p>

    <p>
      made by <span class="name">Arthur Joppart</span> using
      <a class="vue-green" href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js</a>
    </p>

    <div class="socials">
      <a href="https://github.com/BelgianNoise" target="_blank" rel="noreferrer">
        <IconGithub />
      </a>
      <a href="https://www.linkedin.com/in/arthur-joppart-728a7817a/" target="_blank" rel="noreferrer">
        <img src="/linkedin.png" alt="linkedin" />
      </a>
      <a href="https://discordapp.com/users/125339040613531648" target="_blank" rel="noreferrer">
        <IconDiscord color="var(--color-foreground-light)" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    color: var(--color-foreground-darkest);
    font-size: var(--font-size-tiny);
    text-align: center;
    padding: var(--gap-normal);

    display: flex;
    flex-direction: column;
    gap: var(--gap-small);
  }
  hr {
    border-color: var(--color-foreground-darkest);
  }
  .disclaimer {
    padding: 0 var(--gap-normal);
    font-size: var(--font-size-mini);
  }
  .name {
    color: var(--color-foreground);
  }
  .vue-green {
    color: var(--color-primary);
  }
  .socials a > * {
    width: 15px;
  }
  .socials {
    display: flex;
    flex-direction: row;
    gap: var(--gap-small);
    justify-content: center;
    align-items: center;
  }
</style>
