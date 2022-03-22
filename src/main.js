import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FontAwesome from "./assets/fontawesome";
const app = createApp(App)
app.use(store)
app.use(router)

app.component('font-awesome', FontAwesome)


app.mount("#app")
