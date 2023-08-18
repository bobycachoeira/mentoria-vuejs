import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import ContactsView from '../modules/contact-list/Contacts.vue';
import HomeView from '../modules/home/Home.vue'


const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/contacts',
        name: 'ContactsView',
        component: ContactsView,
    }
]


const roteador = createRouter({
    history: createWebHistory(),
    routes: rotas
})

export default roteador;