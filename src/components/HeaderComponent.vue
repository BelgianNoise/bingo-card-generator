<script setup lang="ts">
  import IconGithub from '@/components/icons/IconGithub.vue'
  import IconHome from '@/components/icons/IconHome.vue'
  import IconMenu from '@/components/icons/IconMenu.vue'
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  router.afterEach((to, from) => {
    if (to.fullPath !== from.fullPath) showMobileSlideIn.value = false;
  });

  let showMobileSlideIn = ref(false)
</script>

<template>
  <header :class="{ mobileSlideOutVisible: showMobileSlideIn }">
    <div class="bar">
      <span id="bingo">BINGO</span>

      <div class="mobile-menu-container">
        <RouterLink to="/">
          <IconHome color="var(--color-foreground)" class="icon" />
        </RouterLink>
        <button @click="showMobileSlideIn = !showMobileSlideIn">
          <IconMenu color="var(--color-foreground)" class="icon" />
        </button>
      </div>

      <div class="menu-container">
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/pricing">
          Pricing
        </RouterLink>
        <RouterLink to="/create">
          Create New
        </RouterLink>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/BelgianNoise"
          class="github"
        >
          <IconGithub class="icon" color="var(--color-foreground)" />
        </a>
      </div>
    </div>

    <Transition name="slide">
      <div v-show="showMobileSlideIn" class="mobile-menu-slide-in">
        <RouterLink to="/">
          Home
        </RouterLink>
        <hr>
        <RouterLink to="/pricing">
          Pricing
        </RouterLink>
        <hr>
        <RouterLink to="/create">
          Create New
        </RouterLink>
      </div>
    </Transition>

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
    text-shadow:
      1px 1px 5px var(--color-primary-dark),
      -1px -1px 5px var(--color-primary-dark);
  }
  header {
    position: sticky;
    top: 0;
    background-color: var(--color-background);
    z-index: 10;

    box-shadow: 1px 1px 5px var(--color-background-dark);
  }
  header .bar {
    padding: var(--gap-normal);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  header .menu-container {
    display: flex;
    flex-direction: row;
    gap: var(--gap-normal);
    justify-content: end;
    align-items: center;

    font-size: var(--font-size-normal);
    line-height: var(--font-size-normal);

    display: none;
  }
  .mobile-menu-container {
    display: flex;
    flex-direction: row;
    gap: var(--gap-large);
    justify-content: end;
    align-items: center;
  }
  header a.router-link-active,
  header a.router-link-exact-active {
    color: var(--color-primary);
  }
  .mobile-menu-slide-in {
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;

    font-size: var(--font-size-normal);
    line-height: var(--font-size-normal);
  }
  .mobile-menu-slide-in hr {
    width: 100%;
    border-color: var(--color-background-dark);
  }
  .mobile-menu-slide-in > a {
    padding: var(--gap-normal);
    width: 100%;
    text-align: end;
  }
  .mobile-menu-slide-in > a:hover {
    background-color: var(--color-background-light);
  }
  .icon {
    width: var(--font-size-mega);
    height: var(--font-size-mega);
  }
  .icon:hover {
    background-color: transparent;
  }

  /* ANIMATIONS */
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease-in-out;
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(-120%);
    opacity: 0;
  }

  header {
    transition: max-height 0.3s ease-in-out;
    max-height: calc(
      var(--font-size-mega) +
      2 * var(--gap-normal)
    );
  }
  header.mobileSlideOutVisible {
    max-height: calc(
      var(--font-size-mega) +
      2 * var(--gap-normal) +
      3 * (1px + var(--font-size-normal) + 2 * var(--gap-normal))
    );
  }

  /* END ANIMATIONS */

  @media screen and (min-width: 600px) {
    header .mobile-menu-container {
      display: none;
    }
    header .menu-container {
      display: flex;
    }
    header a {
      padding: var(--gap-small) var(--gap-normal);
      border-radius: var(--gap-small);
    }
    header a:hover {
      background-color: var(--color-background-light);
    }
    a.github {
      padding: 0;
    }
  }
</style>
