<template>
  <div>
    <el-menu
      :default-active="defaultActive"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="welcome">
        <i class="el-icon-reading"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">基础设置</span>
        </template>
        <el-menu-item-group>
          <span slot="title">个人档案</span>
          <el-menu-item index="personalFile">个人档案</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">个人编辑</span>
          <el-menu-item index="mineInfo">设置个人信息</el-menu-item>
          <el-menu-item index="updatePassword">修改密码</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">文章分类</span>
        </template>
        <el-menu-item index="quillEditor">
          <span slot="title">富文本编辑器</span>
        </el-menu-item>
        <el-menu-item index="articleManager">
          <span slot="title">文章管理</span>
        </el-menu-item>
        <el-menu-item index="mail">
          <span slot="title">留言管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-c-scale-to-original"></i>
          <span slot="title">基础演示</span>
        </template>
        <el-menu-item index="uploadFile">
          <span slot="title">文件上传</span>
        </el-menu-item>
        <el-menu-item index="cardList">
          <span slot="title">卡片列表</span>
        </el-menu-item>
        <el-menu-item index="waterfall">
          <span slot="title">图片瀑布屏</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="404">
        <i class="el-icon-setting"></i>
        <span slot="title">错误页面</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Aside",
  computed: {
    defaultActive: function () {
      return this.$route.path.replace("/", "");
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>