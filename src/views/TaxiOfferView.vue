<script setup lang="ts">
import DriverSetPriceComponent from '../components/elements/DriverSetPriceComponent.vue'
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
        class="v-slide"
        v-for="n in 15"
        :key="n"
        v-slot="{toggle, selectedClass }"
      >
        <v-card
          :class="['ma-4', selectedClass]"
          color="grey-lighten-1"
          height="200"
          width="100"
          @click="toggle"
        >
            <v-scale-transition>
              <DriverSetPriceComponent v-if="showPopup" @close="showPopup = false"/>
            </v-scale-transition>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
  </div>
</template>

<script lang="ts">


export default {
  name: 'TaxiOfferView',
  components: {
    DriverSetPriceComponent
  },
  data() {
    return {
      model: "",
      showPopup: true,
    }
  }
}
</script>

<style lang="scss">
</style>