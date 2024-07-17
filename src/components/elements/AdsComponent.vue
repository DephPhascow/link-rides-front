<script setup lang="ts">
import { defineComponent } from "vue";
</script>

<template>
    <div class="Ad container">
        <div class="home__ads">
            <a class="home__ad" href="#" alt="ads">Ad 1</a>
            <a class="home__ad" href="#" alt="ads">Ad 2</a>
        </div>
    </div>
</template>

<style lang="scss">
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
</style>

<script lang="ts">
export default defineComponent({
  name: "AdComponent",
})
</script>