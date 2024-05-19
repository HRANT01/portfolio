import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTelegram, faTwitter, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'
import { MotionPlugin } from '@vueuse/motion'



library.add(faTelegram, faTwitter, faWhatsapp, faGithub)


createApp(App).use(router).use(MotionPlugin).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


