import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css' // style rest
import Element from 'element-ui'
import store from './store'
import router from './router'
import './styles/element-variables.scss'
import * as filters from './filters' // global filters

Vue.config.productionTip = false

Vue.use(Element)
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
