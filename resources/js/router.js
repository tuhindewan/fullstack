import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import FirstPage from './components/pages/FirstPage.vue'
import SecondPage from './components/pages/SecondPage.vue'

let routes = [
    { path: '/first-page', component: FirstPage },
    { path: '/second-page', component: SecondPage }
]

export default new Router({
    mode: 'history',
    routes
})
