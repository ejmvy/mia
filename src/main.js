import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App';
import { routes } from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    // linkActiveClass: 'active'
})

const app = createApp(App);

app.use(router);


app.mount('#app')

