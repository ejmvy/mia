import LandingPage from './LandingPage.vue';
import Classes from './Classes.vue';
import Comissions from './Commissions.vue';
import Contact from './components/Contact.vue';

export const routes = [
    { path: '/', component: LandingPage },
    { path: '/classes', component: Classes },
    { path: '/commission', component: Comissions },
    { path: '/contact', component: Contact },

]