<script setup lang="ts">
import { defineComponent } from 'vue'
import MazDropzone, { type MazDropzoneInstance, type MazDropzoneOptions } from 'maz-ui/components/MazDropzone'
import MazBtn from 'maz-ui/components/MazBtn'
</script>

<template>
 <div class="profile-container container">
    <form class="profile__form flex-column" action="">
        <div class="profile__input-wrapper">
            <input class="profile__input" type="text" placeholder="Имя">
            <input class="profile__input" type="text" placeholder="Фамилия">
            <input class="profile__input" type="text" placeholder="Отчество">
        </div>

        <div class="driver__image-block flex-column">
            <h2 class="driver__h2">
                Загрузите фото потверждающюю личность
            </h2>
            <ClientOnly class="dropzone">
                <MazDropzone
                ref="mazDropzoneInstance"
                :options="dropzoneOptions"
                @error="error"
                @success="success"
                @sending="loading = true"
                @complete="loading = false"
                />
            </ClientOnly>

            <p v-if="errorMessage" style="color: red; text-align: center;">
                {{ errorMessage }}
            </p>

            <MazBtn class="dropzone-btn" left-icon="arrow-up-tray" :loading="loading" @click="sendFiles">
                Загрузить файл
            </MazBtn>
        </div>
        <label for="payment-select">
            <v-select
                class="select"
                v-model="value"
                :items="items"
                label="Способо Оплаты"
                chips
                multiple
            ></v-select>
        </label>
        <form action="../TaxiHistory">
            <button class="profile__btn">Перейти в Историю поездок</button>
        </form>
    </form>
 </div>
</template>

<style lang="scss">
.driver__image-block {
    max-width: 400px;
}

.driver__h2 {
    font-size: 20px;
    font-weight: 600;
    line-height: 110%;
}

.profile-container {
    padding: 20px 100px 40px 100px;
}

.profile__input-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.profile__form {
    align-items: center;
    gap: 20px;
}

.profile__input {
    padding: 5px 10px;
    background-color: rgb(196, 196, 196);
    border-radius: 10px;
}

.profile__input::placeholder {
    color: white;
}

.profile__btn {
    background-color: rgb(196, 196, 196);
    color: black;
    padding: 1rem 1.5rem;
    border-radius: 5px;
}

@media (max-width: 630px) {
    .profile-container {
        padding: 20px 70px;
    }
}

@media (max-width: 540px) {
    .profile-container {
        padding: 20px 40px;
    }
}

@media (max-width: 470px) {
    .driver__image-block {
        max-width: 360px;
    }

    .driver__h2 {
        font-size: 16px;
    }
}

@media (max-width: 395px) {
    .profile-container {
        padding: 20px 20px;
    }
}
</style>

<script lang="ts">

  export default defineComponent({
    data() {
        return {
            items: ['Наличка', 'Кошелек'],
            value: [] as string[],

            loading: false,
            mazDropzoneInstance: {} as MazDropzoneInstance,
            errorMessage: "",
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                headers: { 'My-Awesome-Header': 'header value' },
                acceptedFiles: 'image/jpeg,image/jpg,image/png',
                maxFilesize: 5,
                maxFiles: 1,
                maxThumbnailFilesize: 3,
                autoProcessQueue: false,
                autoRemoveOnError: true,

                dictDefaultMessage: 'Choose or drop a file',
                dictFilesDescriptions: `(PNG or JPG under 5 MB)`,
                dictFallbackMessage: 'Your browser is not supported',
                dictFileTooBig: `File(s) too big (max: 5 MB)`,
                dictInvalidFileType: `File(s) too big (max: 5 MB)`,
                dictRemoveFile: 'Remove',
                dictCancelUpload: 'Cancel upload',
                dictMaxFilesExceeded: `You can not upload any more files. (max: 1)`,
                dictUploadCanceled: 'Upload canceled',                
            } as MazDropzoneOptions,
        }
    },
    methods: {
        error(file: any, message: string) {
            console.log('dropzone-error', { file, message })
            this.errorMessage = message
        },
        success(file: any, response: string) {
            console.log('dropzone-success', { file, response })
        },
        sendFiles() {
            this.mazDropzoneInstance.processQueue()
        }
    }    
  })
</script>