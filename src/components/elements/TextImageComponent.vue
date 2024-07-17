<template>
    <div class="text-image" :class="{
        'text-image__top': imagePosition === ImagePosition.TOP,
        'text-image__left': imagePosition === ImagePosition.LEFT,
    }">
        <img class="text-image__image" :src="loadFile(image)" :alt="text" :width="width" :height="height" v-if="image" />
        <p v-if="text" class="text-imate__text">{{ text }}</p>
    </div>
</template>

<style lang="scss" scoped>
.text-image {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-column-gap: 10px;
    width: fit-content;
    &__image {
        object-fit: cover;
        object-position: center;
    }
    &__text {
        grid-area: text;
    }
    &__top {
        flex-direction: column;
    }
    &__left {
        flex-direction: row;
    }
}
</style>
<script lang="ts">

import { defineComponent, type PropType } from 'vue'
import { loadFile } from '../../utils/loaders'

export enum ImagePosition {
    TOP = 'top',
    LEFT = 'left',
}

export default defineComponent({
    name: "TextImageComponent",
    props: {
        text: String,
        image: String,
        width: String,
        height: String,
        imagePosition: {
            type: String as PropType<ImagePosition>,
            default: ImagePosition.LEFT,
        },
    },
    data() {
        return {
            loadFile,
            ImagePosition,
        }
    }
})
</script>