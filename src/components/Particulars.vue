<template>
  <div id="app">
    <!-- <input v-focus />自定义指令 -->
    <!-- {{guoluvqi | toint}}过滤器 -->
    <div class="main">
      <div style="color:#17a5a5;font-size:20px;font-weight: 600;margin-bottom:20px">职位详情</div>
      <div class="right">
        <div class="head">
          <div class="r-top">
            <el-card class="card" shadow="hover">
              <span>21</span>
              <span>待处理</span>
            </el-card>
            <el-card class="card" shadow="hover">
              <span>11</span>
              <span>有意向</span>
            </el-card>
            <el-card class="card" shadow="hover">
              <span>8</span>
              <span>发面邀</span>
            </el-card>
            <el-card class="card" shadow="hover">
              <span>2</span>
              <span>不合适</span>
            </el-card>
          </div>
          <div class="rjob">
            <div class="job" v-for="item in 1" :key="item" @click="toparticulars(item)">
              <div class="pp">
                <span class="work">Java开发工程师</span>
                <span class="money">8k-12k</span>
              </div>
              <div class="ask">
                <span>惠州-惠城区</span>|
                <span>全职</span>|
                <span>2-3年</span>|
                <span>本科</span>
              </div>
              <div class="pp">
                <el-popover placement="bottom" width="240" trigger="hover">
                  <el-form ref="form" :model="form" label-width="80px">
                    <el-button @click="refresh">刷新</el-button>
                    <el-button @click="revocation">下线</el-button>
                    <el-button @click="wor">修改</el-button>
                  </el-form>
                  <el-button slot="reference" class="state">设置</el-button>
                </el-popover>
                <span class="time">4天前</span>
              </div>
            </div>
          </div>
        </div>
        <div class="r-bottom">
          <div class="title">待处理</div>
          <div class="all">
            <div class="list" @click="gotoMenu" v-for="item in 8" :key="item">
              <div class="name">
                <span>章鱼哥 php开发工程师</span>
                <span>10分钟前</span>
              </div>
              <div class="phone">联系：13192846492</div>
              <div class="ask">
                <span>3年</span>|
                <span>本科</span>|
                <span>惠州市</span>|
                <span>6-8k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000" class="pagination"></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import vheader from "./Header";
import api from "../common/passport_api";
export default {
  name: "App",
  components: {
    vheader
  },
  data() {
    return {
      code: "",
      // guoluvqi: 32.63,
      form: {},

      activeName: "second",
      //   ceshi: {
      //     a: 1,
      //     b: "xia",
      //     c: {
      //       yi: "第一个",
      //       san: "123"
      //     }
      //   },
      joblist: {
        // {
        //   value: "all",
        //   label: "全部",
        children: [
          {
            id: 1,
            title: "Java开发工程师",
            minmoney: 6,
            maxmoney: 10,
            site: "惠州-惠城",
            type: "全职",
            mintime: 1,
            maxtime: 3,
            education: "本科",
            time: "4天前"
          },
          {
            id: 2,
            title: "PHP开发工程师",
            minmoney: 4,
            maxmoney: 8,
            site: "惠州-惠城",
            type: "全职",
            mintime: 0,
            maxtime: 2,
            education: "大专",
            time: "1天前"
          },
          {
            id: 3,
            title: "go开发工程师",
            minmoney: 8,
            maxmoney: 12,
            site: "惠州-惠城",
            type: "全职",
            mintime: 1,
            maxtime: 3,
            education: "本科",
            time: "2天前"
          },
          {
            id: 4,
            title: "node开发工程师",
            minmoney: 8,
            maxmoney: 12,
            site: "惠州-惠阳区",
            type: "全职",
            mintime: 1,
            maxtime: 3,
            education: "本科",
            time: "14天前"
          },
          {
            id: 5,
            title: "JavaScript开发工程师",
            minmoney: 6,
            maxmoney: 10,
            site: "惠州-惠城",
            type: "全职",
            mintime: 1,
            maxtime: 3,
            education: "本科",
            time: "1天前"
          },
          {
            id: 6,
            title: "Python开发工程师",
            minmoney: 10,
            maxmoney: 20,
            site: "惠州-惠城",
            type: "全职",
            mintime: 1,
            maxtime: 3,
            education: "本科",
            time: "41天前"
          },
          {
            id: 7,
            title: "c++开发工程师",
            minmoney: 10,
            maxmoney: 30,
            site: "惠州-惠城",
            type: "全职",
            mintime: 2,
            maxtime: 3,
            education: "本科",
            time: "4天前"
          },
          {
            id: 8,
            title: "vue开发工程师",
            minmoney: 8,
            maxmoney: 16,
            site: "惠州-惠城",
            type: "全职",
            mintime: 1,
            maxtime: 3,
            education: "本科",
            time: "10天前"
          }
        ]
        // }
      }
      //   {},
      //   {},
      //   {}
      // ]
    };
  },
  // 过滤器
  // filters: {
  //   // 过滤器 处理方法
  //   toint(value) {
  //     return parseInt(value);
  //   }
  // },

  // computed: {
  //   ...mapState(["box"]),
  //   ...mapGetters(["getbox2"])
  // },

  // created() {
  //   let kk = this.$store.state.userinfo;
  //   console.log(JSON.stringify(kk));
  // },
  updated() {},
  methods: {
    refresh() {
      this.$notify({
        title: "提示",
        message: "职位已刷新",
        type: "success"
      });
    },
    revocation() {
      this.$notify({
        title: "提示",
        message: "职位已下线",
        type: "success"
      });
    },
    // ...mapActions(["getbox"]),
    // ...mapMutations(["somemutation"]),

    // async confirmLogin() {
    //   let params = {
    //     keywords:"海阔天空"
    //   };
    //   let data = await api.login(params);
    //   console.log(data);
    // },

    // confirmLogin() {
    //   // 存vuex
    //   // this.$store.commit("somemutation",this.ceshi)
    //   this.$router.replace("/search");
    // },

    // btn() {
    //   // 22就是要传的数据
    //   this.somemutation(22);
    //   // this.getbox();
    // },
    wor() {
      this.$router.push({
        name: "issue",
        query: {
          id: 1
        }
      });
    },
    // 招聘中的职位详情
    toparticulars(e) {
      this.$router.push({
        name: "particulars",
        query: {
          id: e
        }
      });
      console.log(e);
    },
    gotoMenu() {
      this.$router.push({
        path: "resume",
        query: {
          id: 2
        }
      });
      // this.$router.replace("/resume");
    }
  },
  mounted() {
    // this.getbox("0000")
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #eeeeee;
  .main {
    li {
      list-style: none;
    }
    width: 1200px;
    margin: 0 auto;
    .pagination {
      margin: 40px 0;
    }
    .right {
      .head {
        display: flex;
        justify-content: space-between;
        .r-top {
          width: 300px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #fff;
          .card {
            margin: 10px;
            cursor: pointer;
            background: #eeeeee;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            &:hover {
              color: #409eff;
            }
            span {
              display: block;
              &:nth-child(1) {
                font-size: 40px;
                font-weight: 600;
              }
              &:nth-child(2) {
                font-size: 16px;
              }
            }
          }
        }
        .rjob {
          width: 73%;

          .job {
            cursor: pointer;
            background: #fff;
            border-radius: 5px;
            padding: 20px;
            // margin: 10px;
            height: 220px;
            .ask {
              text-align: left;
              margin: 10px 0;
              span {
                display: inline-block;
                margin-right: 5px;
                font-size: 16px;
              }
            }
            .pp {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: row;
              .el-form {
                display: flex;
                justify-content: center;
                border: 1px solid red;
              }
              .work {
                font-size: 20px;
                font-weight: 600;
              }
              .money {
                color: #fc8551;
                font-size: 20px;
              }
              span {
                display: inline-block;
              }
              .state {
                background: #47bb58;
                height: 30px;
                font-size: 14px;
                line-height: 30px;
                padding: 0 10px;
                border-radius: 15px;
                color: #fff;
                &.pass {
                  background: #3b7ff5;
                }
                &.trial {
                  background: red;
                }
              }
            }
          }
        }
      }

      .r-bottom {
        .title {
          margin: 30px 0 10px 0;
          font-size: 20px;
          font-weight: 600;
          color: #409eff;
        }
        .all {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          .list {
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 20px;
            cursor: pointer;
            .name {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              span {
                display: block;
                &:nth-child(1) {
                  font-weight: 600;
                  font-size: 18px;
                }
              }
            }
            .phone {
              margin: 10px 0;
            }
            .ask {
              span {
                margin: 0 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
