<script lang="ts" setup>
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import MazBtn from 'maz-ui/components/MazBtn'
import { defineComponent } from 'vue';
import ButtonComponent from '@/components/elements/ButtonComponent.vue';
</script>

<template>
  <div class="container registration__container">
    <form class="reg__form flex-column" action="">
      <h1 class="reg__h1 flex">РЕГИСТРАЦИЯ</h1>
      <span class="reg__span flex">Пожалуйста заполните форму</span>
      <input class="reg__input" type="text" v-model="firstName" placeholder="Имя" required />
      <input class="reg__input" type="text" v-model="lastName" placeholder="Фамилия" required />
      <!-- <div class="reg__phone flex-column">
        <MazPhoneNumberInput
        v-model:country-code="countryCode"
        > 
        </MazPhoneNumberInput>
        <MazBtn> прислать код </MazBtn>
      </div> -->
      <ButtonComponent text="Подтвердить" class="button__primary"/>
    </form>
  </div>
</template>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
  }

  .reg__form {
    gap: 10px;
    padding: 20px;
    border-radius: 15px;
    color: white;
    background-color: var(--dark-blue);
  }

  .reg__h1,
  .reg__span {
    justify-content: center;
  }

  .reg__input {
    &::placeholder {
      color: var(--secondary-color);
    }
    padding: 10px;
    border-radius: 10px;
    border: 1px solid white;
    color: white;
  }

  .reg__phone {
    gap: 10px;
  }
</style>

<script lang="ts">
export default defineComponent({
  name: 'RegistrationView',
  data() {
    return {
      firstName: '',
      lastName: '',
      countryCode: 'UZ'
    }
  }
})
</script>