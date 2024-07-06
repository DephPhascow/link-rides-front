<script setup lang="ts">
import { defineComponent } from 'vue';
import TripHistoryComponent, { type ListItem } from "../components/elements/TripHistoryComponent.vue";
</script>

<template>
 <div>
    <TripHistoryComponent :items="items"/>
 </div>
</template>

<style lang="scss">

</style>

<script lang="ts">
 export default {
    name: 'TripView',
    components: {
        TripHistoryComponent
    },
    data() {
        return {
            items: [
                {
                    date: '24.08.24',
                    price: '8$',
                    punkt_a: 'street of General Marshal',
                    punkt_b: 'street of President',
                    driver : 'Алексей',
                    car: 'Киа к5',
                    car_number: 'a132bc',
                    time: '12:42',
                },
                {
                    date: '24',
                    price: '10',
                    punkt_a: 'street of General Marshal',
                    punkt_b: 'street of President',
                    driver : 'Алексей',
                    car: 'Киа к5',
                    car_number: 'a132bc',
                    time: '12:42',
                },
                {
                    date: '24',
                    price: '10',
                    punkt_a: 'street of General Marshal',
                    punkt_b: 'street of President',
                    driver : 'Алексей',
                    car: 'Киа к5',
                    car_number: 'a132bc',
                    time: '12:42',
                },
                {
                    date: '24',
                    price: '10',
                    punkt_a: 'street of General Marshal',
                    punkt_b: 'street of President',
                    driver : 'Алексей',
                    car: 'Киа к5',
                    car_number: 'a132bc',
                    time: '12:42',
                }

            ]
        }
    }

 }
</script>
