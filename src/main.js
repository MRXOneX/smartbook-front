import { createApp } from 'vue'
// vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//
import router from "@/router/router"
// components UI
import components from "@/components/UI"
//
import App from './App.vue'
//
import store from './store'


const app = createApp(App)

// -----

library.add(faSortDown)

app.component('font-awesome-icon', FontAwesomeIcon)


// -----

components.forEach(component => {
    app.component(component.name, component)
})



app.use(router).use(store).mount('#app')