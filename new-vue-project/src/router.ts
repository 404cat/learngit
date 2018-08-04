import Vue from "vue";
import Router from "vue-router";
import login from './views/login.vue';
import backend from './views/back-end.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: 'backend',
      name: 'backend',
      component: backend
    }
   
  ]
});
/* 这里是路由配置文件 */
