<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<template>
 <div class="taxiSearch-container container">

  <div id="app">
   <div class="search__order-block" @click="toggleMenu" :class="{ active: isActive }">
    <div class="burger-menu">
      <div class="bar" :class="{ change: isActive }"></div>
      <div class="bar" :class="{ change: isActive }"></div>
      <div class="bar" :class="{ change: isActive }"></div>
    </div>
   <div class="search__burger" :class="{ change: isActive }">Заказать Такси</div>
      
   </div>
    <div class="header__nav" :class="{ open: isNavOpen }">
      <ul class="search__burger-list">
        <li>
         <input class="search__burger-input" placeholder="Откуда" type="text">
        </li>
        <li>
         <input class="search__burger-input" placeholder="Куда" type="text">
        </li>
        <li>
          <input class="search__burger-input" placeholder="Комментарий Водителю" type="text"> 
        </li>
        <li>
          <button class="search__burger-btn flex">
             <img class="search__burger-list-img" src="../assets/images/plus.svg" alt="plus"/>
             Добавить остановку
         </button> 
        </li>
        <li class="search__burger-item">
          <span class="search__burger-span">Общаюсь только текстом</span>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </li>
        <li class="search__burger-item">
          <span class="search__burger-span">Буду с инвалидным креслом</span>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </li>
        <li class="search__burger-item">
          <span class="search__burger-span">Не говорю,но слышу</span>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </li>
        <li class="search__burger-item">
          <span class="search__burger-span">Перевозка домашнего животного</span>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </li>
        <li class="search__burger-item-btn">
          <button class="search__burger-button">Заказать такси</button>
        </li>
      </ul>
    </div>
    <div v-if="isNavOpen" class="overlay" @click="toggleMenu"></div>
  </div>

   <iframe class="search__map"
   src="https://yandex.ru/map-widget/v1/?um=constructor%3A421d000928d1f509bffe51c3b72b879befeaa70857936fd40c0540234e5457ce&amp;source=constructor"
   width="100%" height="400" frameborder="0">
   </iframe>
 </div>
</template>

<style lang="scss">

.search__order-block {
   position: relative;
   display: flex;
   background-color: white;
}

.burger-menu {
  width: 30px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1001;
}

.search__burger {
   position: absolute;
   top: 7px;
   left: 60px;
   min-width: 160px;
   font-size: 24px;
   font-weight: 500;
   line-height: 120%;
   cursor: pointer;
}

.bar {
  width: 100%;
  height: 4px;
  background-color: black;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.bar.change:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.bar.change:nth-child(2) {
  opacity: 0;
}

.bar.change:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.bar.change {
  background-color: black;
}

.search__burger.change {
  position: fixed;
  background-color: black;
  opacity: 0;
}

.header__nav {
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  padding-top: 30px;
  background-color: white;
  color: white;
  transition: left 0.3s ease;
  z-index: 1000;
}

.header__nav.open {
  left: 0;
}

.search__burger-list {
  padding: 10px;
  padding-left: 5px;
}

.search__burger-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(104, 104, 104);
}

.search__burger-span {
  font-size: 14px;
  font-weight: 600;
  color: black;
}

.search__burger-button {
  max-width: 100%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: #2196F3;
}

.search__burger-input {
   width: 100%;
   padding-bottom: 15px;
   border-bottom: 1px solid rgb(104, 104, 104);
}

.search__burger-input:focus {
   outline: none;
   border-bottom: 1px solid rgb(170, 159, 0)
}

.search__burger-list-img {
   width: 30px;
   height: 30px;
}

.search__burger-btn {
   align-items: center;
   font-size: 18px;
   font-weight: 400;
}

.header__nav ul li {
  width: 100%;
  padding: 10px 0px 10px 5px;
  padding-right: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>

<script lang="ts">
 export default {
   name: 'TaxiSearchView',
   components: {

   },
   data() {
    return {
      isActive: false,
      isNavOpen: false
    };
   },
   methods: {
      toggleMenu() {
         this.isActive = !this.isActive;
         this.isNavOpen = !this.isNavOpen;
      }
   }
 }
</script>