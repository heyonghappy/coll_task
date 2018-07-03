import Vue from 'vue'
import App from './components/app'
import Router from 'vue-router'

Vue.use(Router)
let router = new VueRouter({

    routes: [
        {
            path: '/',
            component: Goods
        }]
}) 

Vue.config.productionTip = false;


const app = new Vue({
    el: '#app',
    components: { App }
    // render: h = h(App),

})


