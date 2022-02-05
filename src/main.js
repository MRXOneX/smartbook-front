import { createApp } from 'vue'
// components UI
import components from "@/components/UI"
//
import App from './App.vue'
//
import store from './store'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})


app.use(store).mount('#app')