<script setup lang="ts">
import { defineComponent } from 'vue';

</script>

<template>
    <button class="button-buy">
        <img class="button__svg" src="src/assets/buy.svg" alt="Купить">
        Купить
        <!-- <img class="button__svg" src="src/assets/money.svg" alt="money"> -->
        <!-- Продать -->
    </button>
</template>

<style lang="scss"> 
    .button-buy {
            display: flex;
            min-width: 130px;
            padding: 10px 20px;
            padding-right: 40px;
            font-size: 20px;
            font-weight: 700;
            color: white;
            border-radius: 10px;
            border: none;
            background-color: rgb(53, 49, 49);
    }

    .button__svg {
        width: 25px;
        margin-right: 10px;
        background-color: white;
    }
</style>

<script lang="ts">
export default defineComponent({
  name: 'ButtonComponent',
  components: {
    
},
});
</script>
