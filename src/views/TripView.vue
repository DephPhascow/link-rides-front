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
 export default defineComponent({
    name: 'TripView',
    components: {
        TripHistoryComponent
    },
    data() {
        return {
            items: [
                {
                    date: '24.08.24',
                    price: 8,
                    street_a: 'street of General Marshal',
                    street_b: 'street of President',
                    driver : 'Алексей',
                    car: 'Киа к5',
                    car_number: 'a132bc',
                    time: '12:42',
                },
                {
                    date: '24',
                    price: 10,
                    street_a: 'street of General Marshal',
                    street_b: 'street of President',
                    driver : 'Алексей',
                    car: 'Киа к5',
                    car_number: 'a132bc',
                    time: '12:42',
                },
                {
                    date: '24',
                    price: 10,
                    street_a: 'street of General Marshal',
                    street_b: 'street of President',
                    driver : 'Алексей',
                    car: 'Киа к5',
                    car_number: 'a132bc',
                    time: '12:42',
                },
                {
                    date: '24',
                    price: 19,
                    street_a: 'street of General Marshal',
                    street_b: 'street of President',
                    driver : 'Алексей',
                    car: 'Киа к5',
                    car_number: 'a132bc',
                    time: '12:42',
                }

            ] as ListItem[]
        }
    }

 })
</script>
