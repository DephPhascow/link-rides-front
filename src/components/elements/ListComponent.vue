<script setup lang="ts">
import { defineComponent } from 'vue';

</script>

<template>
    <div class="updates">
        <img class="updates__img" src="src/assets/user.svg" alt="user">
        <div class="updates__right-side" >
            Мои объявления
            <small class="small" >
                Настройки объявлений и платежей
            </small>
        </div>
    </div>    
</template>

<style lang="scss"> 
        .updates {
            display: flex;
            flex-direction: row;
            gap: 20px;
            max-width: 350px;
            padding: 20px;
            font-size: 20px;
            font-weight: 700;
            color: white;
            border-radius: 20px;
            background-color: rgb(24, 17, 17);
        }

        .updates__right-side {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .updates__img {
            height: 55px;
        }

        .small {
            color: rgba(218, 218, 218, 0.582);
        }
</style> 

<script lang="ts">
export default defineComponent({
  name: 'ListItemComponent',
  components: {

},
});
</script>
