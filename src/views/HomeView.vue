<script setup lang="ts">
import { defineComponent } from 'vue';
</script>

<template>
<div class="home container">
        <div class="home__heading-block">
            <h1 class="home__header-1">Link Rides</h1>
            <h1 class="home__header-2">P2P
              <img class="home__header-svg" src="../assets/taxi.svg" alt="taxi">
               Market
            </h1>
        </div>
        <div class="home__link-block">
            <a class="home__link home__link-1" href="#">Find Taxi</a>
            <a class="home__link home__link-2" href="#">Statistics</a>
        </div>
        <div class="home__profile-block">
            <img src="../assets/user.svg" alt="user">
            My Profile
            <button class="home__profile-btn">
                <img class="home__car-svg" src="../assets/car.svg" alt="taxi">
                Start/Stop Driving
            </button>
        </div>
        <div class="home__ads">
            <a class="home__ad" href="#" alt="ads">Ad 1</a>
            <a class="home__ad" href="#" alt="ads">Ad 2</a>
        </div>
        <h3 class="home__h3">
            History
        </h3>
        <div class="home__history-block">
          <div class="home__history-1 home__history">
            <div class="home__completed">
                <img class="svg" src="../assets/road.svg" alt="road">
                Completed
            </div>
            3
          </div>
          <div class="home__history-2 home__history">
            <div class="home__cancelled">
                <img class="svg" src="../assets/cancel.svg" alt="cancel">
                Cancelled
            </div>
            1
          </div>
        </div>
        <div class="home__faq-block">
          <div class="home__notifications">
            <img class="svg" src="../assets/bells.svg" alt="bells">
            Notifications
          </div>
          <div class="home__faq">
            <img class="svg" src="../assets/question.svg" alt="question">
            FAQ
          </div>
        </div>
        <button class="home__btn">
          Main Action
        </button>
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

  .home__header-1 {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
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

  .home__profile-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding: 20px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    background-color: rgb(180, 180, 180);
  }

  .home__profile-btn {
    max-width: 400px;
    padding: 8px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 10px;
    background-color: rgb(35, 56, 177);
  }

  .home__car-svg {
    width: 20px;
    background-color: white;
  }

  .home__ads {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(180, 180, 180);
  }

  .home__ad {
    display: flex;
    justify-content: center;
    max-width: 200px;
    width: 100%;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: rgba(150, 149, 149, 0.911);
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

  .home__btn {
    display: flex;
    justify-content: center;
    max-width: 100%;
    padding: 20px 30px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: rgb(35, 56, 177);
  }
</style>

<script lang="ts">

  export default defineComponent({
    name: 'HomeView',
    components: {
  }
  })
</script> 
