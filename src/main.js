import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

//import firebase auth service
//即便重新渲染畫面，也會先觸發requireAuth，這樣就不會造成又回到welcomeView畫面
import {projectAuth} from "@/firebase/config";

let app
projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
            .use(router)
            .mount('#app')
    }
})

