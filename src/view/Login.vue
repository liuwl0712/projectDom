<template>
  <div class="loginBox"
    id="loginBox">
    <div class="login"
      login>
      <el-card shadow="always">
        <el-avatar :size="80"
          avatar></el-avatar>
        <div class="form"
          form>
          <el-form :model="loginForm"
            :rules="rules"
            ref="login"
            label-width="70px"
            label-position="left">
            <el-form-item label="用户名"
              prop="username">
              <el-input v-model="loginForm.username"
                @focus="showUnTip=true"
                autofocus></el-input>
              <div tip
                v-if="showUnTip == true && this.loginForm.username == '' ">
                <p>
                  1、用户名可以是中文、英文、数字或组合
                </p>
                <p>
                  2、用户名的长度为2~8
                </p>
                <p>
                  3、不能包含特殊字符
                </p>
              </div>
            </el-form-item>
            <el-form-item label="密 码"
              prop="password">
              <el-input show-password
                v-model="loginForm.password"
                @focus="showPsTip=true"></el-input>
              <div tip
                v-if="showPsTip == true && this.loginForm.password == '' ">
                <p>
                  1、密码可以是中文、英文、数字或组合
                </p>
                <p>
                  2、密码的长度为6~16
                </p>
                <p>
                  3、不能包含特殊字符
                </p>
              </div>
            </el-form-item>
            <el-form-item label="确认密码"
              prop="verifyPass">
              <el-input show-password
                v-model="loginForm.verifyPass"></el-input>
            </el-form-item>
            <el-form-item marginBottom>
              <el-checkbox v-model="autoLogin">自动登录</el-checkbox>
              <el-checkbox v-model="remPs">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                :style="{width: '100%'}"
                @click="login('login')">登 录</el-button>
            </el-form-item>
          </el-form>
          <div register="true">
            <a href="javascript:;"
              @click="toRegister">快速注册</a>
            <a href="#">忘记密码？</a>
          </div>
        </div>
      </el-card>
    </div>
    <div class="userAndPass">
      <span>账号：test</span><br>
      <span>密码：test123</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    let username = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!/^[\u4e00-\u9fa5A-Za-z0-9]{2,16}$/.test(value)) {
        callback(new Error("用户名只能输入中文、英文、数字组合，且长度为2-8"));
      } else {
        this.showUnTip = false;
        callback();
      }
    };
    let password = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!/^[A-Za-z0-9]{6,16}$/.test(value)) {
        callback(new Error("密码可以是数字、英文，且长度为6-16"));
      } else {
        this.showPsTip = false;
        callback();
      }
    };
    let verifyPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入确认密码"));
      } else if (value != this.loginForm.password) {
        callback(new Error("两次密码不一致，请重新输入"));
      } else {
        callback();
      }
    };
    return {
      showUnTip: false, //是否显示用户名输入提示
      showPsTip: false, //是否显示密码输入提示
      autoLogin: false, //是否勾选自动登录功能
      remPs: false, //是否勾选记住密码
      height: "",
      loginForm: {
        username: "",
        password: "",
        verifyPass: "",
      },
      rules: {
        username: [{ validator: username, trigger: "blur" }],
        password: [
          {
            validator: password,
            trigger: "blur",
          },
        ],
        verifyPass: [{ validator: verifyPass, trigger: "blur" }],
      },
    };
  },
  methods: {
    login(form) {
      this.$refs[form].validate((state) => {
        if (state) {
          //测试账号
          if (
            this.loginForm.username === "test" &&
            this.loginForm.password === "test123" &&
            this.loginForm.verifyPass === "test123"
          ) {
            /*把登录成功的个人信息存入session域中*/
            let profile = new Object();
            profile.username = this.loginForm.username;
            profile.password = this.loginForm.password;
            sessionStorage.setItem(
              "profile",
              JSON.stringify({
                username: profile.username,
                token: "liuwl",
              })
            );
            this.$message({
              type: "success",
              message: "登录成功",
              duration: 2000,
            });
            //登录成功 跳转到首页
            this.$router.push({
              path: "/home",
            });
          } else {
            //登录失败继续登录
            this.$message.error("登录失败，用户名或密码错误，请重新登录");
            this.$router.push({
              path: "/login",
            });
          }
        }
      });
    },
    toRegister() {
      this.$router.push({
        path: "/register",
      });
    },
  },
};
</script>

<style scoped>
#loginBox {
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.login[login] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 400px;
  height: 500px;
}

.login [avatar] {
  position: absolute;
  top: -40px;
  left: 40%;
}

.login .form[form] {
  margin-top: 40px;
}

.login .form [tip] > p {
  line-height: 1.5em;
  margin: 0;
  padding: 0;
  color: #c0c4cc;
  animation: tip 0.8s ease;
}

@keyframes tip {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

[marginBottom] {
  margin-bottom: 0;
}

[register="true"] a {
  float: right;
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: 10px;
  text-decoration: none;
  color: #606266;
}

[register="true"] a:nth-child(1):hover {
  color: #409eff;
}

[register="true"] a:nth-child(2):hover {
  color: #e6a23c;
}
.userAndPass {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
</style>