<template>
  <div id="app">
    <div class="login">
      <div class="login_con">
        <div class="left" @click="confirmLogin">欢迎进入军优会创就业平台</div>
        <div class="right">
          <el-popover placement="bottom" width="80" trigger="click">
            <div class="set">
              <div style="text-align: center;border:1px solid #999;margin:4px 0;cursor: pointer;">
                <el-popover placement="left" width="240" trigger="hover">
                  <el-input
                    class="ipt"
                    style="width:240px;"
                    placeholder="原手机号码"
                    prefix-icon="el-icon-user"
                    clearable
                    v-model="phone.raw"
                  ></el-input>
                  <el-input
                    class="ipt"
                    placeholder="验证码"
                    prefix-icon="el-icon-house"
                    clearable
                    v-model="phone.code"
                  >
                    <el-button
                      slot="append"
                      class="btncode"
                      :disabled="isDisabled"
                      @click="sendMsg"
                    >{{buttonName}}</el-button>
                  </el-input>
                  <el-input
                    class="ipt"
                    placeholder="新手机号码"
                    prefix-icon="el-icon-user"
                    clearable
                    v-model="phone.news"
                  ></el-input>
                  <el-button type="primary" class="button" style="width:100%" @click="phoneclk">保存</el-button>
                  <el-button slot="reference" style="border:0;width:100%">手机号码</el-button>
                </el-popover>
              </div>
              <div style="text-align: center;border:1px solid #999;margin:4px 0;cursor: pointer;">
                <el-popover placement="left" width="240" trigger="hover">
                  <el-input
                    class="ipt"
                    style="width:240px;"
                    placeholder="手机号码"
                    prefix-icon="el-icon-user"
                    clearable
                    v-model="set.phone"
                  ></el-input>
                  <el-input
                    class="ipt"
                    placeholder="验证码"
                    prefix-icon="el-icon-house"
                    clearable
                    v-model="set.code"
                  >
                    <el-button
                      slot="append"
                      class="btncode"
                      :disabled="isDisabled"
                      @click="sendMsg"
                    >{{buttonName}}</el-button>
                  </el-input>
                  <el-input
                    class="ipt"
                    placeholder="设置密码"
                    prefix-icon="el-icon-user"
                    clearable
                    v-model="set.psw"
                  ></el-input>
                  <el-input
                    class="ipt"
                    placeholder="确认密码"
                    prefix-icon="el-icon-user"
                    clearable
                    v-model="set.newpsw"
                  ></el-input>
                  <el-button type="primary" class="button" style="width:100%" @click="setclk">保存</el-button>
                  <el-button slot="reference" style="border:0;width:100%">设置密码</el-button>
                </el-popover>
              </div>
              <div style="text-align: center;border:1px solid #999;margin:4px 0;cursor: pointer;">
                <el-popover placement="left" width="240" trigger="hover" @hide="hide">
                  <el-input
                    class="ipt"
                    style="width:240px;"
                    placeholder="旧密码"
                    prefix-icon="el-icon-user"
                    clearable
                    v-model="chang.old"
                  ></el-input>
                  <el-input
                    class="ipt"
                    placeholder="新密码"
                    prefix-icon="el-icon-house"
                    clearable
                    v-model="chang.new"
                  ></el-input>
                  <el-input
                    class="ipt"
                    placeholder="确认密码"
                    prefix-icon="el-icon-user"
                    clearable
                    v-model="chang.news"
                  ></el-input>
                  <el-button type="primary" class="button" style="width:100%" @click="changclk">保存</el-button>
                  <el-button slot="reference" style="border:0;width:100%">修改密码</el-button>
                </el-popover>
              </div>
              <div
                style="text-align: center;padding:10px 0;border:1px solid #999;margin:4px 0;cursor: pointer;"
                @click="open"
              >退出登录</div>
            </div>
            <span class="el-icon-setting" slot="reference"></span>
          </el-popover>
          <span
            style="display: inline-block;height: 50px;width: 50px;border-radius: 50%;overflow: hidden;"
            @click="tofirm"
          >
            <img src="../../src/assets/images/loginbg.png" alt style="height: 50px;width: 50px;" />
          </span>
          <span @click="gologin">登录</span>
          <span @click="goregister">注册</span>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="nav_con">
        <div>
          <img src="../../src/assets/logo.png" @click="toindex" class="logo" alt />
        </div>
        <div class="el-menu-demo" mode="horizontal">
          <router-link to="/index" tag="div" class="tab_item">
            <span class="tab_span">首页</span>
          </router-link>
          <router-link to="/talents" tag="div" class="tab_item">
            <span index="2" class="tab_span">人才搜索</span>
          </router-link>
          <router-link to="/issue" tag="div" class="tab_item">
            <span index="3" class="tab_span">发布职位</span>
          </router-link>
          <router-link to="/firm" tag="div" class="tab_item">
            <span index="4" class="tab_span">我的企业</span>
          </router-link>
          <router-link to="/arrange" tag="div" class="tab_item">
            <span index="5" class="tab_span">面试安排</span>
          </router-link>
          <router-link to="/Particulars" tag="div" class="tab_item">
            <span index="6" class="tab_span">职位详情</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="search">
      <el-input placeholder="请输入职位关键词搜索人才" v-model="values" class="input-with-select" clearable>
        <el-cascader
          style="width:200px;padding: 0px;"
          slot="prepend"
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          placeholder="请选择地址"
        ></el-cascader>
        <el-button slot="append" icon="el-icon-search" style="cursor: pointer;" @click="btnsearch"></el-button>
      </el-input>
      <p class="host">
        <i>搜索历史：</i>
        <span v-for="item in label" :key="item.value" @click="btnsearch1(item.value)">{{item.text}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import api from "../common/passport_api";
import citys from "../utils/data.js";
export default {
  data() {
    return {
      buttonName: "发送短信",
      isDisabled: false,
      time: 9,
      label: [
        { text: "php开发工程师", value: 1 },
        { text: "UI设计师", value: 2 },
        { text: "运营推广", value: 3 },
        { text: "web前端开发工程师", value: 4 },
        { text: "文案/策划", value: 5 },
        { text: "架构师", value: 6 }
      ],
      phone: {
        raw: "",
        news: "",
        code: ""
      },
      set: {
        phone: "",
        code: "",
        psw: "",
        newpsw: ""
      },
      chang: {
        old: "",
        new: "",
        news: ""
      },
      values: "",
      value: [],
      options: citys
    };
  },
  methods: {
    async confirmLogin() {
      let params = {
        page: 1,
        count: 10
      };
      let data = await api.login(params);
    },
    //弹出层隐藏时
    hide() {
      console.log("xianshi ");
    },
    // 跳转页面方法
    gologin() {
      this.$router.replace("/login");
    },
    goregister() {
      this.$router.replace("/register");
    },
    toindex() {
      this.$router.replace("/");
    },
    tofirm() {
      this.$router.replace("/firm");
    },
    btnsearch() {
      if (this.values == "") {
        console.log("2113");
        this.$notify({
          title: "警告",
          message: "请输入要搜索的职位",
          type: "warning"
        });
      } else {
        this.$router.push("/talents");
      }
    },
    btnsearch1(item) {
      this.$router.push("/talents");
      console.log(item);
    },
    sendMsg() {
      let _that = this;
      _that.isDisabled = true;
      let interval = window.setInterval(function() {
        _that.buttonName = _that.time + "s";
        --_that.time;
        if (_that.time < 0) {
          _that.buttonName = "重新发送";
          _that.time = 9;
          _that.isDisabled = false;
          window.clearInterval(interval);
        }
      }, 1000);
    },
    phoneclk() {
      if (this.phone.news == "") {
        this.$notify({
          title: "警告",
          message: "请输入手机验证码",
          type: "warning"
        });
      } else if (this.phone.code == "") {
        this.$notify({
          title: "警告",
          message: "请填写新手机号码",
          type: "warning"
        });
      } else {
        this.$notify({
          title: "提示",
          message: "保存成功！",
          type: "success"
        });
      }
    },
    setclk() {
      if (this.set.psw == "") {
        this.$notify({
          title: "警告",
          message: "请输入密码",
          type: "warning"
        });
      } else if (this.set.newpsw == "") {
        this.$notify({
          title: "警告",
          message: "请确认密码",
          type: "warning"
        });
      } else if (this.set.newpsw !== this.set.psw) {
        this.$notify({
          title: "警告",
          message: "两次密码不一致，请重新输入！",
          type: "warning"
        });
      } else {
        this.$notify({
          title: "提示",
          message: "保存成功！",
          type: "success"
        });
      }
    },
    changclk() {
      if (this.chang.old == "") {
        this.$notify({
          title: "警告",
          message: "请输入旧密码",
          type: "warning"
        });
      } else if (this.chang.new == "") {
        this.$notify({
          title: "警告",
          message: "请填写新密码",
          type: "warning"
        });
      } else if (this.chang.news == "") {
        this.$notify({
          title: "警告",
          message: "请确认新密码",
          type: "warning"
        });
      } else if (this.chang.news !== this.chang.new) {
        this.$notify({
          title: "警告",
          message: "两次密码不一致，请重新输入！",
          type: "warning"
        });
      } else {
        this.$notify({
          title: "提示",
          message: "保存成功！",
          type: "success"
        });
      }
    },
    open() {
      this.$confirm("您将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          this.$router.replace("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  }
};
</script>
<style lang="less" scoped>
#app {
  width: 100%;
  .login {
    width: 100%;
    background: #282828;
    .login_con {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      width: 1200px;
      margin: 0 auto;
      .left {
        color: #17a5a5;
      }
      .right {
        color: #ffffff;
        span {
          margin: 0 10px;
          cursor: pointer;
        }
      }
    }
  }
  .nav {
    background: #ffffff;
    .nav_con {
      .el-menu-demo {
        line-height: 65px;
        display: flex;
        justify-content: start;
        flex-direction: row;
        cursor: pointer;
        span {
          margin-right: 20px;
        }
        .tab_item {
          // 路由样式切换
          &.router-link-active {
            .tab_span {
              color: #17a5a5;
              font-weight: 600;
              font-size: 20px;
            }
          }
        }
      }
      display: flex;
      flex-direction: row;
      width: 1200px;
      margin: 0 auto;
      .logo {
        height: 60px;
        width: 120px;
        cursor: pointer;
      }
    }
  }
  .search {
    width: 600px;
    margin: 0 auto;
    padding: 20px 0;
    .host {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      margin-top: 5px;
      text-align: left;
      color: #999;
      font-size: 14px;
      span {
        margin-right: 8px;
        cursor: pointer;
      }
      span:hover{
        color: #17a5a5;
        font-size: 18px;
      }
    }
  }
}
.el-menu.el-menu--horizontal {
  border: 0;
}
</style>
