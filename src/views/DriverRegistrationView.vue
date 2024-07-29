<script setup lang="ts">
import { defineComponent } from 'vue'
import { type MazDropzoneInstance, type MazDropzoneOptions,  } from 'maz-ui/components/MazDropzone'
import { useTaxi } from '@/stores/taxi';
</script>

<template>
    <div class="Driver__container container" v-if="state = State.PROCESS_REGISTRATION">
    <div class="driver__heading-block flex-column">
        <h1>Информация о Водителе</h1>
        <p>Привет, {{ tg.initDataUnsafe.user?.first_name || '' }} {{ tg.initDataUnsafe.user?.last_name || '' }}</p>
        <span>Пожалуйста заполните все формы</span>
    </div>
    <form class="driver__form flex-column" method="post">
        <ul class="driver__list-1 driver__list flex">
            <li class="driver__item flex-column">
                <label>Имя: <br/> <input class="driver__input" type="text" v-model="firstName" required></label>
                
            </li>
            <li class="driver__item flex-column">
                <label>Фамилия: <br/> <input class="driver__input" type="text" v-model="lastName" required></label>
            </li>
        </ul>

        <ul class="driver__list-3 driver__list flex">
            <li class="driver__item-3 driver__item flex-column">
                <label for="" class="driver__label-3 driver__label">
                    Марка Автомобиля: <br />
                    <input type="text" class="driver__input" v-model="carBrand" required>
                </label>
            </li>
            <li class="driver__item-3 driver__item flex-column">
                <label for="" class="driver__label-3 driver__label">
                    Модель Автомобиля: <br />
                    <input type="text" class="driver__input" v-model="carModel" required>
                </label>
            </li>
            <li class="driver__item-3 driver__item flex-column">
                <label for="" class="driver__label-3 driver__label">
                    Цвет Автомобиля: <br />
                    <select v-model="carColor" class="driver__input" required>
                        <option value="BLACK" default>Черный</option>
                    </select>
                </label>
            </li>
        </ul>
        <ul class="driver__list-4 driver__list flex">
            <li class="driver__item-4 driver__item flex-column">
                <label for="" class="driver__label-4 driver__label">
                    Гос.Номер: <br />
                    <input type="text" class="driver__input-4 driver__input" v-model="carNumber" required>
                </label>
            </li>
            <li class="driver__item-4 driver__item flex-column">
                <label for="" class="driver__label-4 driver__label">
                    Год выпуска: <br />
                    <input type="number" inputmode="numeric" class="driver__input-4 driver__input" v-model="year" required>
                </label>
            </li>
        </ul>
        <ul class="driver__list-2 driver__list flex">
            <li class="driver__item-2 driver__item flex-column">
                <label for="" class="driver__label-2 driver__label">
                    Серия и номер В/У: <br />
                    <input class="driver__input-2 driver__input" type="text" v-model="seriesLicense" required>
                </label>
            </li>
            <li class="driver__item-2 driver__item flex-column">
                <label for="" class="driver__label-2 driver__label">
                        Страна выдачи В/Y: <br />
                        <select v-model="countryLicense" class="driver__input-2 driver__input" required>
                        <option value="Узбекистан" default>Узбекистан</option>
                    </select>
                </label>
            </li>
            <li class="driver__item-2 driver__item flex-column">
                <label for="" class="driver__label-2 driver__label">
                    Дата выдачи В/Y: <br />
                    <input class="driver__input-2 driver__input" type="date" v-model="dateGetLicense" required>
                </label>
            </li>
            <li class="driver__item-2 driver__item flex-column">
                <label for="" class="driver__label-2 driver__label">
                    Действует до: <br />
                    <input class="driver__input-2 driver__input" type="date" v-model="licenseValidUntil" required>
                </label>
            </li>
        </ul>
        <div class="driver__image-block flex-column">
            <!-- <h2 class="driver__h2">
                Загрузите фото водительского удостоверения: <br/>
                <MazDropzone
                ref="mazDropzoneInstance"
                :options="dropzoneOptions"
                @error="error"
                @success="success"
                @sending="loading = true"
                @complete="loading = false"
                />
            </h2> -->
    <!-- 
            <p v-if="errorMessage" style="color: red; text-align: center;">
                {{ errorMessage }}
            </p>

            <MazBtn class="dropzone-btn" left-icon="arrow-up-tray" :loading="loading" @click="sendFiles">
                Send Files
            </MazBtn> -->
        </div>
    </form>
    <label class="driver__agree flex">
        <input class="driver__checkbox" type="checkbox" v-model="agree">
        <span>Я принимаю условия и даю согласие на обработку 
            персональных данных в соответсвии с законодательством,Политикой
            конфидициальности и оферты
        </span>
    </label>
    <button v-if="availableButtonRegister" class="driver__btn" @click="onCreate">Зарегестрироваться</button>
    </div>
    <div v-else-if="state == State.WAITING_FOR_APPROVAL">
        <h1>Регистрирую, ожидайте</h1>
    </div>
    <div v-else>
        <h1>Ваша заявка одобрена, теперь вы можете закрыть WebAPP и пользоваться ботом</h1>
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

export enum State {
    PROCESS_REGISTRATION = "PROCESS_REGISTRATION",
    WAITING_FOR_APPROVAL = "WAITING_FOR_APPROVAL",
    APPROVED = "APPROVED",
}

 export default defineComponent({
    name: 'DriverRegistrationView',
    data() {
        return {
            state: State.PROCESS_REGISTRATION,
            uTaxi: useTaxi(),
            firstName: "",
            lastName: "",
            carBrand: "",
            carModel: "",
            carColor: "",
            countryLicense: "Узбекистан",
            carNumber: "",
            year: 2024,
            seriesLicense: "",
            dateGetLicense: "",
            licenseValidUntil: "",
            // photo: "",

            agree: false,
            loading: false,
            tg: {} as any,
            tgId: "", // TODO del
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
        async onCreate() {
            this.state = State.WAITING_FOR_APPROVAL;
            try {
                await this.uTaxi.runCreateTaxiInfoData(
                    this.firstName,
                    this.lastName,
                    this.carBrand,
                    this.carModel,
                    this.carColor,
                    this.carNumber,
                    this.year,
                    this.seriesLicense,
                    this.countryLicense,
                    this.dateGetLicense,
                    this.licenseValidUntil,
                    // this.photo
                )
                this.state = State.APPROVED;
                this.closeWindow();
            }
            catch (error) {
                alert("Ошибка при регистрации: " + error)
            }
        },
        closeWindow() {
            // Проверяем, если окно было открыто из Telegram, закрываем его
            if ((window as any).Telegram.WebApp) {
                (window as any).Telegram.WebApp.close();
            } else {
                window.close();
            }
        },        
        error(file: any, message: string) {
            console.log('dropzone-error', { file, message })
            this.errorMessage = message
        },
        success(file: any, response: string) {
            // this.photo = file
            console.log(file)
            console.log('dropzone-success', { file, response })
        },
        sendFiles() {
            this.mazDropzoneInstance.processQueue()
        }
    },
    computed: {
        availableButtonRegister() {
            return this.firstName.length > 1 && this.lastName.length > 1 && this.carBrand.length > 1 && this.carModel.length > 1 && this.carColor.length > 1 && this.carNumber.length > 1 && this.year > 1 && this.seriesLicense.length > 1 && this.dateGetLicense.length > 1 && this.licenseValidUntil.length > 1 && this.agree
        }
    },
    watch: {
        "window": {
            handler() {
                this.tg = (window as any).Telegram.WebApp;
                if (this.tg.initDataUnsafe.user != undefined) {
                    this.firstName = this.tg.initDataUnsafe.user.first_name;
                    this.lastName = this.tg.initDataUnsafe.user.last_name;
                    this.uTaxi.tgId = this.tg.initDataUnsafe.user.id;
                }
                this.uTaxi.tgId = this.tgId;
            },
            immediate: true
        }
    }, 
    mounted() {
        this.closeWindow()
        alert("Для регистрации водителя, пожалуйста, заполните все поля")
    }
 })
</script>