<script lang="ts" setup>
import defineComponent from 'vue'
</script>

<template>
 <div class="popup-container container">
    <div class="popup-content">
        <slot name="content">
        </slot>
    </div>
 </div>
</template>

<style lang="scss">

.popup-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: gray;
}

.popup-content {
    min-width: 300px;
    max-width: 80%;
    border-radius: 20px;
    background-color: white;
}
</style>

<script lang="ts">
 export default {
    name: 'PopupComponent'
 }
</script>