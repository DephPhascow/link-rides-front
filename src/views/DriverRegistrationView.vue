<script setup lang="ts">
import { defineComponent } from 'vue'
import MazDropzone, { type MazDropzoneInstance, type MazDropzoneOptions } from 'maz-ui/components/MazDropzone'
import MazBtn from 'maz-ui/components/MazBtn'
</script>

<template>
 <div class="Driver__container container">
    <div class="driver__heading-block flex-column">
        <h1>Информация о Водителе</h1>
        <span>Пожалуйста заполните все формы</span>
    </div>
    <form class="driver__form flex-column" action="">
        <ul class="driver__list-1 driver__list flex">
            <li class="driver__item flex-column">
                <label for="">Имя</label>
                <input class="driver__input" type="text" required>
            </li>
            <li class="driver__item flex-column">
                <label for="">Фамилия</label>
                <input class="driver__input" type="text" required>
            </li>
        </ul>
    
        <ul class="driver__list-3 driver__list flex">
            <li class="driver__item-3 driver__item flex-column">
                <label for="" class="driver__label-3 driver__label">
                    Марка Автомобиля
                </label>
                <input type="text" class="driver__input" required>
            </li>
            <li class="driver__item-3 driver__item flex-column">
                <label for="" class="driver__label-3 driver__label">
                    Модель Автомобиля
                </label>
                <input type="text" class="driver__input" required>
            </li>
            <li class="driver__item-3 driver__item flex-column">
                <label for="" class="driver__label-3 driver__label">
                    Цвет Автомобиля
                </label>
                <input type="text" class="driver__input" required>
            </li>
        </ul>
        <ul class="driver__list-4 driver__list flex">
            <li class="driver__item-4 driver__item flex-column">
                <label for="" class="driver__label-4 driver__label">
                    Гос.Номер
                </label>
                <input type="text" class="driver__input-4 driver__input" required>
            </li>
            <li class="driver__item-4 driver__item flex-column">
                <label for="" class="driver__label-4 driver__label">
                    Год выпуска
                </label>
                <input type="text" class="driver__input-4 driver__input" required>
            </li>
        </ul>
        <ul class="driver__list-2 driver__list flex">
            <li class="driver__item-2 driver__item flex-column">
                <label for="" class="driver__label-2 driver__label">
                    Серия и номер В/У
                </label>
                <input class="driver__input-2 driver__input" type="text" required>
            </li>
            <li class="driver__item-2 driver__item flex-column">
                <label for="" class="driver__label-2 driver__label">
                    Страна Выдачи В/Y
                </label>
                <select class="driver__select" name="Выбрать" id="">
                    <option value="Узбекистан">Узбекистан</option>
                    <option value="Казахстан">Казахстан</option>
                    <option value="Россия">Россия</option>
                </select>
            </li>
            <li class="driver__item-2 driver__item flex-column">
                <label for="" class="driver__label-2 driver__label">
                    Дата выдачи В/Y
                </label>
                <input class="driver__input-2 driver__input" type="date" required>
            </li>
            <li class="driver__item-2 driver__item flex-column">
                <label for="" class="driver__label-2 driver__label">
                    Действует до 
                </label>
                <input class="driver__input-2 driver__input" type="date" required>
            </li>
        </ul>
        <div class="driver__image-block flex-column">
            <h2 class="driver__h2">
                Загрузите фото водительского удостоверения
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
                Send Files
            </MazBtn>
        </div>
    </form>
    <div class="driver__agree flex">
        <input class="driver__checkbox" type="checkbox">
        <span>Я принимаю условия и даю согласие на обработку 
            персональных данных в соответсвии с законодательством,Политикой
            конфидициальности и оферты
        </span>
    </div>
    <button class="driver__btn">Зарегестрироваться</button>
 </div>
</template>

<style lang="scss">

.Driver__container {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.driver__heading-block {
    justify-content: center;
    align-items: center;
}

.driver__form {
    gap: 40px;
    padding: 0 20px;
}

.driver__list {
    flex-wrap: wrap;
    gap: 20px
}

.driver__item {
    gap: 5px
}

.driver__input,
.driver__select {
    padding: 8px 20px;
    border-radius: 10px;
    border: 1px solid var(--grey-color);
    background-color: var(--grey-color);

}

.driver__input:focus {
    border: 1px solid #80bdff;
    background-color: var(--white-color)
}

.driver__input:active {
    border: 1px solid #80bdff;
    background-color: var(--white-color)
}

.driver__image-block {
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.dropzone {
    width: 80%;
    border: 1px solid black;
    border-radius: 10px
}

.driver__agree {
    position: relative;
    align-items: center;
    max-width: 80%;
}

.driver__checkbox {
    position: absolute;
    top: 3px;
    left: -15px;
}

.dropzone-btn {
    width: 80%;
}

.driver__btn {
    padding: 15px 50px;
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
    border-radius: 47px;
    background: linear-gradient(180deg,#FFDA1A,#D6AD00 100%);
}

@media (max-width: 515px) {
    .driver__h2 {
        font-size: 20px;
        font-weight: 500;
    }
}

@media (max-width: 426px) {
    .driver__h2 {
        font-size: 16px;
        font-weight: 400;
    }
}
</style>

<script lang="ts">
 export default defineComponent({
    name: 'DriverRegistrationView',
    data() {
        return {
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