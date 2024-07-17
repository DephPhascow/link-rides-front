<script setup lang="ts">
import { defineComponent } from 'vue';
import LinkComponent from './LinkComponent.vue';
import { ImagePosition } from './TextImageComponent.vue'
</script>

<template>
    <div class="Profile container">
        <div class="home__profile-block">
            <LinkComponent text="My Profile" to="me-profile" btnStyle="button__transparent button__border-no" image="images/user.svg" :imagePosition="ImagePosition.TOP" />
            <LinkComponent text="Start/Stop Driving" to="TaxiSearch" image="images/car.svg" />
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

</style>

<script lang="ts">
export default defineComponent({
  name: 'ProfileComponent',
  components: {
      LinkComponent
  }
})
</script>