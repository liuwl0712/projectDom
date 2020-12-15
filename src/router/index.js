import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const login = () => import("@/view/Login");
const home = () => import("@/components/Home");
const welcome = () => import("../view/Welcome");
const personalFile = () => import("../view/personalFile");
const mineInfo = () => import("../view/MineInfo");
const updatePassword = () => import("../view/HomeUpdatePass");
const quillEditor = () => import("../view/QuillEditor");
const articleManager = () => import("../view/ArticleManager");
const mail = () => import("../view/Mail");
const uploadFile = () => import("../view/base/UploadFile");
const notPath = () => import("../view/error/NotPath_404");

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    meta: {
      title: "登录页面",
    },
    component: login,
  },
  {
    path: "/home",
    redirect: "/welcome",
    component: home,
    children: [
      {
        //首页
        path: "/welcome",
        meta: {
          title: "首页",
        },
        component: welcome,
      },
      {
        //个人档案
        path: "/personalFile",
        meta: {
          title: "个人档案",
        },
        component: personalFile,
      },
      {
        //设置个人信息
        path: "/mineInfo",
        meta: {
          title: "设置个人信息",
        },
        component: mineInfo,
      },
      {
        //修改密码
        path: "/updatePassword",
        meta: {
          title: "修改密码",
        },
        component: updatePassword,
      },
      {
        //编辑文章（富文本）
        path: "/quillEditor",
        meta: {
          title: "编辑文章（富文本）",
        },
        component: quillEditor,
      },
      {
        //文章管理
        path: "/articleManager",
        meta: {
          title: "文章管理",
        },
        component: articleManager,
      },
      {
        //留言管理
        path: "/mail",
        meta: {
          title: "留言管理",
        },
        component: mail,
      },
      {
        //文件上传
        path: "/uploadFile",
        meta: {
          title: "文件上传",
        },
        component: uploadFile,
      },
      {
        //卡片列表
        path: "/cardList",
        meta: {
          title: "卡片列表",
        },
        component: () => import("../view/base/CardList"),
      },
      {
        //图片瀑布屏
        path: "/waterfall",
        meta: {
          title: "图片瀑布屏",
        },
        component: () => import("../view/base/WaterFall"),
      },
      {
        //图片瀑布屏
        path: "/waterfall",
        meta: {
          title: "图片瀑布屏",
        },
        component: () => import("../view/base/WaterFall"),
      },
      {
        path: "/404",
        meta: {
          title: "错误页面-404",
        },
        component: notPath,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/*
 * 全局前置路由
 * */
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.matched.length === 0) {
    next("/404");
  }
  //校验是否登录，防止不登录，直接进入其他页面
  if (
    (to.path == "/login" && from.path === "/") ||
    (to.path == "/welcome" && from.path === "/login")
  ) {
    next();
  } else {
    if (sessionStorage.getItem("profile") === null) {
      next("/login");
    } else {
      next();
    }
  }
});

//重写路由的push方法
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

export default router;
