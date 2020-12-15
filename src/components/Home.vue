<template>
  <div class="home-div">
    <el-container>
      <el-header>
        <header-com />
      </el-header>
      <el-container class="container-internal">
        <el-aside>
          <aside-com />
        </el-aside>
        <el-main>
          <el-collapse-transition>
            <div v-show="show3">
              <router-view />
            </div>
          </el-collapse-transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AsideCom from "./Aside";
import HeaderCom from "./Header";
export default {
  name: "Home",
  components: {
    AsideCom,
    HeaderCom,
  },
  data() {
    return {
      show3: true,
    };
  },
};
</script>
<style lang="less" scoped>
.home-div {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      padding: 0px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      height: 60px;
      position: fixed;
      width: 100%;
    }
    .container-internal {
      height: calc(100% - 60px);
      position: fixed;
      top: 60px;
      width: 100%;
      .el-aside {
        width: auto !important;
        background-color: rgb(84, 92, 100);
      }
    }
  }
}
</style>