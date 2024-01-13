<script setup lang="ts">
  const emit = defineEmits<{
    (e: 'tellThemTheyAreAMoron'): void
  }>()

  const tellThemTheyAreAMoron = () => emit('tellThemTheyAreAMoron')
</script>

<template>
  <div id="prices">

    <div class="price-container">
      <div>
        <h1>Free</h1>
        <ul>
          <li>Unlimited games</li>
          <li>Unlimited players</li>
          <li>Unlimited fun</li>
        </ul>
      </div>
      <div>
        <div class="monthly-container">
          <p class="monthly-price">
            <span></span>
            $0/mo
          </p>
          <span></span>
        </div>
        <RouterLink to="/">
          <button class="secondary order-button">
            Play Now!
          </button>
        </RouterLink>
      </div>
    </div>

    <div class="price-container most-popular">
      <span id="most-popular-text">Most Popular</span>
      <div>
        <h1>Pro</h1>
        <ul>
          <li>Unlimited games</li>
          <li>Unlimited players</li>
          <li>Unlimited fun</li>
          <li>Ad-Free games</li>
          <li>Custom themes</li>
          <li>Access to Beta features</li>
          <li>Rewards feature</li>
          <li>Less money in your wallet</li>
          <li>Platinum technical support</li>
          <li>Unlimited bandwidth</li>
        </ul>
      </div>
      <div>
        <div class="monthly-container">
          <p class="monthly-price">
            <span></span>
            $5/mo
          </p>
          <span></span>
        </div>
        <button class="primary order-button" @click="tellThemTheyAreAMoron">
          Choose this plan
        </button>
      </div>
    </div>

    <div class="price-container">
      <div>
        <h1>Enterprise</h1>
        <ul>
          <li>Everything included in the Pro tier</li>
          <li>BYOB: Bring Your Own Brand</li>
          <li>24/7 on-site support</li>
          <li>Priority feature request</li>
          <li>API & CRM Integration</li>
          <li>Dedicated account manager</li>
          <li>Virtual meeting integration</li>
          <li>Enhanced Analytics</li>
          <li>Military grade encryption</li>
          <li>More marketing talk</li>
        </ul>
      </div>
      <div>
        <div class="monthly-container">
          <p class="monthly-price">
            <span>starting at</span>
            $25/mo
          </p>
          <span>per seat</span>
        </div>
        <button class="primary order-button" @click="tellThemTheyAreAMoron">
          Contact us
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .price-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--gap-normal);
    padding: var(--gap-normal);
    border: 2px solid var(--color-background-lighter);
    background: var(--color-background-dark);
    border-radius: var(--border-radius-large);
  }
  .price-container > div {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
  }
  .price-container h1 {
    font-size: var(--font-size-mega);
    align-self: center;
  }
  ul {
    color: var(--color-foreground-darker);
  }
  #prices {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
  }
  .order-button {
    width: 100%;
  }
  .monthly-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: var(--font-size-mega);
    text-align: right;
  }
  .monthly-container span {
    font-size: var(--font-size-small);
  }
  .most-popular {
    position: relative;
    border-color: var(--color-primary-darker);
  }
  #most-popular-text {
    position: absolute;
    top: -15px;
    right: 10px;
    padding: var(--gap-small) var(--gap-normal);
    font-size: var(--font-size-normal);
    border-radius: calc((var(--font-size-normal) + 2*var(--gap-small))/2);
    background: var(--color-primary);
  }
  @media screen and (min-width: 1000px) {
    .price-container {
      padding: var(--gap-large);
    }
    .most-popular {
      transform: scale(1.08);
    } 
    #prices {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: var(--gap-large);
    }
  }
</style>
