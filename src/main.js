import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App';
import { routes } from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    // scrollBehavior() {
    //     return { x: 0, y: 0 }
    // }
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
    // linkActiveClass: 'active'
})

const app = createApp(App);

app.use(router);


app.mount('#app')

