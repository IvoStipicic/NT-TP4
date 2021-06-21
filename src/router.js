import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioAv from './componentes/Formulario/index.vue'
import Http from './componentes/Http.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/formulario' },
        { path: '/formulario', component: FormularioAv },
        { path: '/http', component: Http },
    ]
})