<script setup lang="ts">
import defineComponent from 'vue'
</script>

<template>
    <div class="Profile container">
        <div class="home__profile-block">
            <img src="../../assets/user.svg" alt="user">
            My Profile
            <button class="home__profile-btn">
                <img class="home__car-svg" src="../../assets/car.svg" alt="taxi">
                Start/Stop Driving
            </button>
        </div>
    </div>
</template>

<style lang="scss">
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

</style>

<script lang="ts">
export default {
    name: 'ProfileComponent'
}
</script>