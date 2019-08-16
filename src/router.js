import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import lunbo from "./views/lunbo.vue"
import sport from "./components/sport.vue"
import curriculum from "./components/curriculum.vue"
import food from "./components/food.vue" 
import enroll from "./components/enroll.vue"
import knowledge from "./components/knowledge.vue"   
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Home},
    {path:"/lunbo", component:lunbo},
    {path:"/sport", component:sport},
    {path:"/curriculum", component:curriculum},
    {path:"/food", component:food},
    {path:"/enroll", component:enroll},
    {path:"/knowledge", component:knowledge}
  ]
})
