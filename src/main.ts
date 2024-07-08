import './assets/main.css'
import { createApp } from 'vue'
import { languages, defaultLocale } from "@/i18n/index";
import { createI18n, useI18n } from "vue-i18n";
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'
import 'maz-ui/styles' // or import 'maz-ui/css/main.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import App from './App.vue'
import router from './router'

const messages = Object.assign(languages);
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "RU",
  messages,
});

const app = createApp(App, {
    setup() {
        const { t } = useI18n();
        return { t };
      },
    });

const vuetify = createVuetify({
  components,
  directives,
})

app.use(createPinia())
app.use(router)
app.use(i18n);
app.use(vuetify);
app.use(createMetaManager())

await router.isReady()
app.mount('#app')

