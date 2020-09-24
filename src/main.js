import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App';
import LandingPage from './LandingPage.vue';
import Classes from './Classes.vue';
// import { routes } from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LandingPage },
        { path: '/classes', component: Classes },
        // { path: '/commission', component: Comissions },
        // { path: '/classes', component: Classes },
    ],
    // linkActiveClass: 'active'
})

const app = createApp(App);

app.use(router);


app.mount('#app')

