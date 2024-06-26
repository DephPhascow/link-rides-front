<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<template>
    <button class="action-btn">
          Main Action
    </button>
</template>

<style lang="scss">
    .action-btn {
    display: flex;
    justify-content: center;
    max-width: 100%;
    width: 100%;
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
export default {
    name: 'ActionButtonComponent',
    components: {

    }
}
</script>