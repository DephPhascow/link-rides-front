<script setup lang="ts">
import { defineComponent } from 'vue';
import ProfileComponent from '../components/elements/ProfileComponent.vue';
import AdsComponent from '../components/elements/AdsComponent.vue';
import ActionButtonComponent from '../components/elements/ActionButtonComponent.vue';
import LinkComponent from '../components/elements/LinkComponent.vue';
</script>

<template>
<div class="home container">
        <div class="home__heading-block">
            <h1 class="home__header-2">P2P
              <img class="home__header-svg" src="@/assets/images/taxi.svg" alt="taxi">
               Market
            </h1>
        </div>
        <div class="home__link-block">
          <LinkComponent :text="$t('home.findTaxi')" to="TaxiSearch" />
          <LinkComponent :text="$t('home.statistics')" to="TaxiSearch" />
        </div>
        <div>
          <ProfileComponent/>
          <AdsComponent/>
        </div>
        <div>
          <!-- <HistoryComponent/> -->
        </div>
        <div class="home__faq-block">
          <div class="home__notifications">
            <img class="svg" src="@/assets/images/bells.svg" alt="bells">
            Notifications
          </div>
          <div class="home__faq">
            <img class="svg" src="@/assets/images/question.svg" alt="question">
            FAQ
          </div>
        </div>
        <div >
          <ActionButtonComponent/>
        </div>
    </div>
</template>

<style lang="scss">
  body {
    height: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    max-width: 100%;
    margin: 0 auto;
  }

  .home__heading-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }

  .home__header-2 {
    font-size: 32px;
    font-weight: 700;
  }

  .home__link-block {
    display: flex;
    gap: 20px;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .home__link {
    padding: 10px 15px;
    border-radius: 10px;
    color: white;
    background-color: rgb(35, 56, 177);
  }

  .home__link-1 {
    padding: 30px 40px;
  }

  .home__link-2 {
    max-height: 40px;
  }

  
  
  .home__h3 {
    font-size: 24px;
    font-weight: 500;
  }

  .home__history-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 40px;
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 10px;
    background-color: rgb(180, 180, 180); 
  }

  .svg {
    width: 20px;
  }

  .home__header-svg {
    width: 32px;
  }

  .home__completed {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .home__cancelled {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .home__history {
    display: flex;
    justify-content: space-between;
  }

  .home__faq-block {
    display: flex;
    justify-content: space-between; 
    margin-bottom: 30px;
  }

  .home__notifications {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .home__faq {
    display: flex;
    align-items: center;
    gap: 4px;
  }

</style>

<script lang="ts">

  export default defineComponent({
    name: 'HomeView',
    components: {
      ProfileComponent,
      AdsComponent,
      // HistoryComponent,
      ActionButtonComponent,
      LinkComponent,
  }
  })
</script> 
