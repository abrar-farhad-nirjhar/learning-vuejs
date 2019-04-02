import Vue from 'vue'
import App from './App.vue'
import newApp from './components/newApp.vue'
Vue.config.productionTip = false

new Vue({
  render: t => t(App),
}).$mount('#app')


new Vue({
render:t=>t(newApp)
}).$mount('#app2')
