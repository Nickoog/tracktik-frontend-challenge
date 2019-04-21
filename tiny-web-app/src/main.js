import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';
import Sites from './components/Sites.vue';

const routes = [
    { path: '/sites', component: Sites}
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
