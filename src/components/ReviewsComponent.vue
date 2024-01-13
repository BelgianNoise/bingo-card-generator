<sript setup lang="ts">

</sript>

<template>
  <div class="container">
    <h2 class="scheef">What our customers say</h2>

    <div id="reviews">

      <div class="review-container">
        <img loading="lazy" src="https://pretsedatel.mk/wp-content/uploads/2022/06/StevoPendarovskiPortrait.jpg" alt="A person that does not exist">
        <div class="review">
          <p class="scheef">
            "This game has helped me connect with my family
            in ways I never thought possible."
          </p>
          <div class="reviewer">
            <span>- Jovan Blobfish</span>
            <span class="site-link">CEO, UFC</span>
          </div>
        </div>
      </div>
  
      <div class="review-container">
        <img loading="lazy" src="https://as1.ftcdn.net/v2/jpg/00/72/40/18/1000_F_72401811_Qig00w4rgyV5JjX1oNJkqtGTSeWtMD0d.jpg" alt="A person that does not exist">
        <div class="review">
          <p class="scheef">
            "Our team's dynamic has taken such a jump ever since
            we started playing this game. I like asians."
          </p>
          <div class="reviewer">
            <span>- Kyle Princess</span>
            <span class="site-link">HR consultant, KK Korp</span>
          </div>
        </div>
      </div>

      <div class="review-container">
        <img loading="lazy" src="https://uploads-ssl.webflow.com/5d7e8885cad5174a2fcb98d7/64933f98a477f02e36a282d1_5eddd950e5cf1ec1fa5c2d83_virtual-influencer-john-pork.jpeg" alt="A person that does not exist">
        <div class="review">
          <p class="scheef">
            "I think I peed a little."
          </p>
          <div class="reviewer">
            <span>- Pat Oinker</span>
            <span class="site-link">Pirate, Ocean Gate</span>
          </div>
        </div>
      </div>

      <div class="review-container">
        <img loading="lazy" src="https://image.cnbcfm.com/api/v1/image/107337834-17006588112022-06-16t133851z_1494715199_rc2zsu9kywrx_rtrmadp_0_fintech-crypto-binance.jpeg?v=1701119982&w=929&h=523&vtcrop=y" alt="A person that does not exist">
        <div class="review">
          <p class="scheef">
            "This site's a banger i swear on god.
            Rizzy skibedi toilet 🥵 bussin tiktok gyat."
          </p>
          <div class="reviewer">
            <span>- Chang Bugles</span>
            <span class="site-link">Dean, Princeton</span>
          </div>
        </div>
      </div>

      <div class="review-container">
        <img loading="lazy" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ad0d9df-97bf-4c57-97f2-74fc3c429039/dgbk3zi-937fb14d-8ff5-4f95-8703-3cab3d81d164.jpg/v1/fill/w_894,h_894,q_70,strp/super_mario_chef_2023_03___ai_by_adriglace_dgbk3zi-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzNhZDBkOWRmLTk3YmYtNGM1Ny05N2YyLTc0ZmMzYzQyOTAzOVwvZGdiazN6aS05MzdmYjE0ZC04ZmY1LTRmOTUtODcwMy0zY2FiM2Q4MWQxNjQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Fh4FUpm3IcV5goSgJZVISEAFP4dd_ppdr6xHplK8HtM" alt="A person that does not exist">
        <div class="review">
          <p class="scheef">
            "Why issa thisa website not ina Italiano?"
          </p>
          <div class="reviewer">
            <span>- Rocky Pops</span>
            <span class="site-link">Head Chef, Mama Mia</span>
          </div>
        </div>
      </div>

      <div class="review-container">
        <img loading="lazy" src="https://images0.persgroep.net/rcs/LeAMXfxLSxkmWNPHQrbrVHbuWpo/diocontent/35864077/_fitwidth/1240?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.9" alt="A person that does not exist">
        <div class="review">
          <p class="scheef">
            "I'm in waste management. Everyone immediately
            assumes you're mobbed up. It's a stereotype."
          </p>
          <div class="reviewer">
            <span>- Tony Soprano</span>
            <span class="site-link">COO, Waste MGMT inc.</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal) !important;
  }
  #reviews {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
  }
  .review-container {
    display: flex;
    flex-direction: row;
    gap: var(--gap-normal);
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--gap-normal);
    border: 2px solid var(--color-background-lightest);
    border-radius: var(--border-radius-large);
    background: var(--color-background-lighter);
    font-size: var(--font-size-normal);
  }
  .review-container img {
    object-fit: cover;
    height: 80px;
    width: 80px;
    aspect-ratio: 1;
    border-radius: 50%;
  }
  .review {
    display: flex;
    flex-direction: column;
    gap: var(--gap-tiny);
    justify-content: space-between;
    height: 100%;
  }
  .reviewer {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: var(--gap-tiny);
    align-items: flex-end;
    text-align: right;
  }
  .site-link {
    color: var(--color-primary);
  }
  @media screen and (min-width: 800px) {
    #reviews {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--gap-large);
    }
    .review-container {
      max-width: 500px;
    }
  }
  @media screen and (min-width: 1000px) {
    .review-container {
      max-width: 600px;
      font-size: var(--font-size-large);
      padding: var(--gap-large);
    }
    .review-container img {
      height: 120px;
      width: 120px;
    }
  }
  @media screen and (min-width: 1400px) {
    #reviews {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
