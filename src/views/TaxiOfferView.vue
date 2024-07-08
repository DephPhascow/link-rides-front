<script setup lang="ts">
import { defineComponent, type PropType } from 'vue';
</script>

<template>
  <div class="offer-container container">
 <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          :class="['ma-4', selectedClass]"
          color="grey-lighten-1"
          height="200"
          width="100"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center"
          v-for="(item,index) in items"
          :key="index">
          <div>text</div>
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                icon="mdi-close-circle-outline"
                size="48"
              >
              </v-icon>
              <div class="text">
                text text text
              </div>
            </v-scale-transition>
          <div>text</div>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
  </div>
</template>

<script lang="ts">

export interface CardItem {
  street_a: string;
  street_b: string;
  rating: number;
  comments: string;
}

export default {
  name: 'TaxiOfferView',
  props: {
    card: Array as PropType <CardItem[]>
  }
}

</script>

<style lang="scss">
.offer-container {
  padding-top: 40px
}

.text {
  color: black;
}
</style>