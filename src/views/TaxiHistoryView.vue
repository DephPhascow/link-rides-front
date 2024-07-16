<script setup lang="ts">
import {defineComponent, type PropType } from 'vue';
</script>

<template>
 <div class="history-container container">
    <ul class="history__list flex-column">
        <li v-for="(item, index) in items" :key="index" class="history__item flex-column">
          
            <div class="history__date history__div">
                <span class="history__span">
                    Дата поездки:
                </span>  
                <span class="history__span-2 history__span">
                  {{item.date}} 
                </span>
            </div>

            
            <div class="history__price history__div">
                <span class="history__span">
                    Цена поездки:
                </span>  
                <span class="history__span-2 history__span">
                    {{item.price}} 
                </span>
            </div>
            
            <div class="history__punkt-a history__div">
                <span class="history__span">
                    Пункт А:
                </span>
                <span class="history__span-2 history__span">
                    {{item.punkt_a}} 
                </span>
            </div>

            
            <div class="history__punkt-a history__div">
                <span class="history__span">
                    Пункт Б:
                </span>
                <span class="history__span-2 history__span">
                 {{item.punkt_b}} 
                </span>
            </div>

        </li>
    </ul>
 </div>
</template>


<style lang="scss">
    .history-container {
        padding: 20px 20px;
        background-color: rgb(160, 92, 92);
    }

    .history__list {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    .history__item {
        gap: 5px;
        max-width: 100%;
        min-width: 300px;
        width: 100%;
        padding: 20px;
        font-size: 18px;
        font-weight: 500;
        line-height: 120%;
        border-radius: 10px;
        box-shadow: 1px 1px 20px #000;
        background-color: white;
    }

    .history__div {
        display: flex;
        justify-content: space-between;
    }
    
    .history__span-2 {
        font-size: 16px;
        font-weight: 400;
    }

    @media (min-width: 400px) {
        .history__item {
            font-size: 14px;
            font-weight: 600;
            line-height: 90%;
        }

        .history__span-2 {
            font-size: 12px;
        }
    }

    @media (min-width: 480px) {
        .history__item {
            font-size: 16px;
            font-weight: 500;
            line-height: 100%;
        }

        .history__span-2 {
            font-size: 14px;
        }
    }

    @media (min-width: 530px) {
        .history__item {
            font-size: 18px;
            font-weight: 600;
            line-height: 100%;
        }

        .history__span-2 {
            font-size: 16px;
        }
    }

</style>

<script lang="ts">

 export interface ListItem {
    date: number;
    price: number;
    street_a: string;
    street_b: string;
    driver: string;
    car: string;
    car_number: number;
    time: number;
 }

 export default {
    name: 'TripView',
    props: {
        items: Array as PropType <ListItem[]>
    },
    data() {
        return {
            items: [
                {
                    date: '24.08.24',
                    price: '8$',
                    punkt_a: 'street of General Marshal',
                    punkt_b: 'street of President',
                },
                {
                    date: '24',
                    price: '10',
                    punkt_a: 'street of General Marshal',
                    punkt_b: 'street of President',
                },
                {
                    date: '24',
                    price: '10',
                    punkt_a: 'street of General Marshal',
                    punkt_b: 'street of President',
                },
                {
                    date: '24',
                    price: '10',
                    punkt_a: 'street of General Marshal',
                    punkt_b: 'street of President'
                }

            ]
        }
    }

 }
</script>
