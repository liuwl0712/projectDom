import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import * as reqContract from "@/api/contract";
Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(NProgress);
var less = require("less");
Vue.prototype.$base_url = process.env.VUE_APP_BASEURL;
Vue.prototype.$reqContract = reqContract;

//登录权限
router.beforeEach(function(to, from, next) {
  if (to.meta.needLogin) {
    //页面是否登录
    if (sessionStorage.getItem("user")) {
      //本地存储中是否有token(uid)数据
      next(); //表示已经登录
    } else {
      //next可以传递一个路由对象作为参数 表示需要跳转到的页面
      next({
        name: "login",
      });
    }
  } else {
    //表示不需要登录
    next(); //继续往后走
  }
});

//全局进度条配置
NProgress.configure({
  showSpinner: true,
  parent: "body",
  easing: "ease",
  speed: "500",
});

/*
 * 全局前置路由 在路由进入前start进度条
 * */
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

/*
 * 全局后置路由 在路由完成时done进度条
 * */
router.afterEach(() => {
  NProgress.done();
});

new Vue({
  render: (h) => h(App),
  router,
  less,
}).$mount("#app");
