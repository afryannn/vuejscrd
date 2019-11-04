require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
window.Vue = require('vue');

Vue.use(VueRouter)

//Vue-Router
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

//Import Components
import Index from './components/Index.vue';
import Create from './components/Create.vue';
import Read from './components/Read.vue';
import Update from './components/Update.vue';

//Name-Component
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('Create', require('./components/Create.vue').default);
Vue.component('Read', require('./components/Create.vue').default);


const routes = [
    { path: '/', component: Index },
    { path: '/Create', component: Create },
    { path: '/Read/:id', component: Read, name:'readpost' },
    { path: '/:id/edit', component: Update, name:'editpost' }
  ]
const router = new VueRouter({
    routes,
})

  const app = new Vue({
    router
  }).$mount('#app')
