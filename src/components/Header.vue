<template>
  <div>
    <div class="avatar">
      <i class="el-icon-monitor"></i>
      <span>后台管理系统</span>
    </div>
    <div class="right">
      <el-tooltip class="item"
        effect="dark"
        content="全局设置页面"
        placement="bottom">
        <p multiBtn
          rotate><i class="el-icon-more"></i></p>
      </el-tooltip>
      <el-popover placement="top-start"
        title="通知"
        width="200"
        trigger="click">
        <el-divider></el-divider>
        <div>
          <p><i class="el-icon-success"
              sColor></i><a href="#">这是第一条通知</a></p>
          <p><i class="el-icon-warning"
              wColor></i>这是第一条警告通知</p>
        </div>
        <el-divider></el-divider>
        <div class="btn-ground">
          <el-button type="primary"
            size="mini">全部已读</el-button>
          <el-button type="danger"
            size="mini">清空</el-button>
        </div>
        <p slot="reference"
          multiBtn
          @click="MQBox">
          <el-tooltip class="item"
            effect="dark"
            content="系统通知"
            placement="bottom">
            <i class="el-icon-message-solid badge"></i>
          </el-tooltip>
        </p>
      </el-popover>
      <el-tooltip class="item"
        effect="dark"
        content="刷新页面"
        placement="bottom">
        <p multiBtn
          @click="$router.go(0)"><i class="el-icon-refresh"></i></p>
      </el-tooltip>
      <el-dropdown trigger="hover"
        placement="bottom"
        @command="handleCommand">
        <p class="el-dropdown-link"
          multiBtn>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </p>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="profile">个人信息</el-dropdown-item>
          <el-dropdown-item command="updatePass">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    MQBox() {},
    //个人信息按钮
    handleCommand(command) {
      if (command === "profile") {
        this.$router.push({
          path: "/mineInfo",
        });
      } else if (command === "updatePass") {
        this.$router.push({
          path: "/updatePassword",
        });
      } else if (command == "logout") {
        this.$router.push({
          path: "/login",
        });
      }
    },
  },
};
</script>
<style scoped>
.avatar {
  font-size: 20px;
  color: #c0c4cc;
  height: 60px;
  line-height: 60px;
  text-align: center;
  width: 200px;
  position: absolute;
  background-color: #545c64;
}
.el-icon-monitor {
  margin: 20px 20px 20px 10px;
}
.right {
  position: absolute;
  right: 50px;
  height: 60px;
  line-height: 60px;
}
p[multiBtn] {
  width: 38px;
  max-width: 38px;
  height: 38px;
  max-height: 38px;
  font-size: 18px;
  border-radius: 38px;
  margin: 2px;
  cursor: pointer;
  display: inline-flex;
  vertical-align: middle;
}

[multiBtn] i {
  line-height: 38px;
  margin: 0 auto;
}

[multiBtn]:hover {
  box-shadow: 0 0 6px #b3b3b3 inset;
  transition: all 0.5s ease;
}

[rotate] i {
  transform: rotate(90deg);
}

[sColor] {
  color: #67c23a;
  margin-right: 2px;
}

[wColor] {
  color: #e6a23c;
  margin-right: 2px;
}

[float="left"] {
  position: absolute;
  left: 0;
  cursor: pointer;
}

[float="right"] {
  position: absolute;
  right: 20px;
  cursor: pointer;
}

.badge:after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  /*margin-top: 0px;*/
  background-color: #e60000;
  border-radius: 10px;
}
</style>