<script setup lang="ts">
import { defineComponent, type PropType } from 'vue';
import ButtonComponent from '@/components/elements/ButtonComponent.vue';
import { RouterLink } from 'vue-router';
import { ImagePosition } from './TextImageComponent.vue';
</script>

<template>
    <RouterLink :to="{
        name: to,
        params: params
    }" class="link">
        <ButtonComponent :text="text" :class="btnStyle" :image="image" :imagePosition="imagePosition"/>
    </RouterLink>
</template>

<script lang="ts">
export default defineComponent({
    name: 'LinkComponent',
    components: {
        ButtonComponent,
    },
    props: {
        text: String!,
        btnStyle: {
            type: String,
            default: 'button__primary'
        },
        to: String!,
        image: String,
        params: Object,
        imagePosition: {
            type: String as PropType<ImagePosition>,
            default: ImagePosition.LEFT,
        }
    }
});
</script>
