import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)


// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';
import Sites from './components/Sites.vue';
import Infos from './components/Infos.vue';

const routes = [
    { 
        path: '/',
        name: 'root', 
        component: Sites,  
    },
    { 
        path: '/infos/:id',
        name: 'infos', 
        component: Infos
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    routes
})


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
