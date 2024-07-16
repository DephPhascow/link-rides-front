<script lang="ts" setup>
    import { defineComponent, type PropType } from 'vue';
    import PopupComponent from '../elements/PopupComponent.vue'
</script>

<template>
 <div>
    <PopupComponent class="Popup" @click="close">
        <template #content>
            <div class="offer-container">
              <ul class="offer__list">
                <li class="offer__list-item d-flex fill-height align-center justify-center flex-column"
                v-for="(item,index) in items"
                :key="index">
                  <div class="offer__list-div">
                      <span class="offer__list-span offer__list-span-1">Пункт А: </span>
                      <span class="offer__list-span offer__list-span-2">{{item.punkt_a}}</span>
                  </div>
                  <div class="offer__list-div">
                      <span class="offer__list-span offer__list-span-1">Пункт Б: </span>
                      <span class="offer__list-span offer__list-span-2">{{item.punkt_b}}</span>
                  </div>
                  <div class="offer__list-div">
                      <span class="offer__list-span offer__list-span-1">Комментарий: </span>
                      <span class="offer__list-span offer__list-span-2">{{item.comment}}</span>
                  </div>
                  <div class="offer__list-div offer__list-div-5">
                    <iframe class="offer__map"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A421d000928d1f509bffe51c3b72b879befeaa70857936fd40c0540234e5457ce&amp;source=constructor"
                    width="100%" height="400" frameborder="0">
                    </iframe>
                  </div>
                  <div class="offer__list-div-7 flex-column">
                    <div class="big-price" v-if="timeToShow > 0">Цена: {{setPrice}} сум</div>
                    <!-- При изменении ползунка изменить фонт сайз -->
                    <div class="offer__list-wrapper">
                      <span class="offer__list-span">
                        Min 5.000
                      </span>
                      <v-slider
                      v-model="setPrice" 
                      :max="maxPrice"
                      :min="minPrice"
                      step="100"
                      hide-details
                      class="align-center"
                      >
                      </v-slider>
                      <span class="offer__list-span">
                        Max 100.000
                      </span>
                    </div>
                  </div>
                  <div class="offer__list-div offer__list-div-6">
                      <button class="DriverSet__list-btn">Принять Заявку</button>
                      <button class="DriverSet__list-btn DriverSet__list-btn-2">Отказаться</button>
                  </div>
                </li>
              </ul> 
            </div>
        </template>
    </PopupComponent>
 </div>
</template>

<style lang="scss">

.big-price {
  font-size: 24px;
}

.offer-container {
  padding: 20px;
}

.text {
  color: black;
}

.offer__list-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.offer__list-wrapper {
  min-width: 100px;
  max-width: 400px;
  width: 300px;
  display: flex;
  gap: 10px;
}

.offer__list-div-5 {
  max-height: 200px;
}

.offer__map {
  max-height: 200px;
}

.offer__list-div-6 {
  justify-content: space-between;
}

.offer__list {
  width: 100%;
}

.offer__list-item {
  justify-content: space-between;
  max-width: 100%;
  gap: 12px;
  padding: 0 5px;
}

.offer__list-span-1 {
  font-size: 16px;
  font-weight: 700;
  line-height: 120%;
}

.DriverSet__list-btn {
    max-width: 128px;
    width: 100%;
    padding: 10px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    background-color: rgb(1, 82, 8);
    border: 1px solid black;
    border-radius: 10px;
}

.DriverSet__list-btn-2 {
    background-color: rgb(128, 2, 2);
}

.offer__list-span-2 {
  font-size: 14px;
  font-weight: 400;
  line-height: 110%;
}

.v-card {
  display: flex;
  justify-content: center;
  width: 100% !important;
  margin: 0 !important;
  border-radius: 30px;
  
}

.v-slide-group__content {
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.mx-auto {
  width: 95%;
}

.v-slide {
  max-width: 10px;
}
</style>

<script lang="ts">
export interface CardItem {
  street_a: string;
  street_b: string;
  rating: number;
  comments: string;
}

 export default defineComponent({
  name: 'DriverSetPriceComponent',
  components: {
      PopupComponent
  },
  props: {
      card: Array as PropType <CardItem[]>
  },
  data() {
    return {
      minPrice : 5000,
      maxPrice: 100000,
      slider: 40,
      timeToShow: 5,
      setPrice: 5,
      oldPrice: 0,
      items: [
        {
          punkt_a: 'Улица Суворова',
          punkt_b: 'Улица Амира Тимура',
          rating: '4.3',
          comment: 'Включите кондиционер',
        }
      ],
    }
  },
  watch: {
    setPrice() {
      this.oldPrice = this.setPrice
      this.timeToShow = 5
    } 
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
 })
</script>