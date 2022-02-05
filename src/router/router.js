import { createRouter, createWebHistory } from "vue-router"
// components
import Authorization from "@/pages/Authorization"

const routes = [{
    path: "/",
    component: Authorization
}]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router