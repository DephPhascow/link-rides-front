<script setup lang="ts"> 
import { defineComponent } from "vue";
</script>

<template>
    <div class="History container">
        <div class="home__history-block">
          <h3 class="home__h3">
              History
          </h3>
          <div class="home__history-1 home__history">
            <div class="home__completed">
                <img class="svg" src="../../assets/road.svg" alt="road">
                Completed
            </div>
            3
          </div>
          <div class="home__history-2 home__history">
            <div class="home__cancelled">
                <img class="svg" src="../../assets/cancel.svg" alt="cancel">
                Cancelled
            </div>
            1
          </div>
        </div>
    </div>
</template>

<style lang="scss">
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
</style>