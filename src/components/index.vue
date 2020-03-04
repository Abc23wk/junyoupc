<template>
  <div id="app">
    <div class="main">
      <div class="chunk_1">
        <div class="top">
          <el-tabs v-model="activeName" @tab-click.capture="handleClick">
            <el-tab-pane label="全部职位" name="first">
              
              <div class="bottom">
                <div
                  class="job"
                  v-for="item in joblist.children"
                  :key="item.id"
                  
                >
                  <div class="pp">
                    <span class="work">{{item.title}}</span>
                    <span class="money">{{item.minmoney}}k-{{item.maxmoney}}k</span>
                  </div>
                  <div class="ask">
                    <span>{{item.site}}</span>|
                    <span>{{item.type}}</span>|
                    <span>{{item.mintime}}-{{item.maxtime}}年</span>|
                    <span>{{item.education}}</span>
                  </div>
                  <div class="pp">
                    <el-popover placement="bottom" width="240" trigger="hover">
                      <el-form ref="form" :model="form" label-width="80px">
                        <el-button @click="refresh">刷新</el-button>
                        <el-button @click="revocation">下线</el-button>
                        <el-button @click="wor">修改</el-button>
                      </el-form>
                      <el-button slot="reference" class="state" @click.stop="setcli">审核中</el-button>
                    </el-popover>
                    <span class="time">{{item.time}}</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="招聘中" name="second">
              <div class="hint" style=" display: none">
                <img src="../../static/timg.gif" alt />
                <span style="font-size:20px;color:#17a5a5;font-weight:600">暂无职位</span>
                <span>发布职位，可以获得精准人才</span>
                <el-button @click="toissue">
                  去发布职位
                  <i class="el-icon-right"></i>
                </el-button>
              </div>
              <div class="bottom">
                <div class="job" v-for="item in 7" :key="item" @click="toparticulars(item)">
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
            </el-tab-pane>

            <el-tab-pane label="未发布" name="fourth">
              <div class="bottom">
                <div class="job" v-for="item in 5" :key="item">
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
                        <el-button @click="issue">发布</el-button>
                        <el-button @click="wor">修改</el-button>
                        <el-button @click="dele">删除</el-button>
                      </el-form>
                      <el-button slot="reference" class="state">设置</el-button>
                    </el-popover>
                    <span class="time">4天前</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="审核中" name="third">
              <div class="bottom">
                <div class="job" v-for="item in 2" :key="item">
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
                        <el-button @click="dele">删除</el-button>
                      </el-form>
                      <el-button slot="reference" class="state">设置</el-button>
                    </el-popover>
                    <!-- <span class="state">审核中</span> -->
                    <span class="time">4天前</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="未过审" name="trial">
              <div class="bottom">
                <div class="job" v-for="item in 3" :key="item">
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
                        <el-button @click="wor">修改</el-button>
                        <el-button @click="dele">删除</el-button>
                      </el-form>
                      <el-button slot="reference" class="state">设置</el-button>
                    </el-popover>
                    <!-- <span class="state trial">未过审</span> -->
                    <span class="time">4天前</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="chunk_1">
        <div class="top1">
          <i class="el-icon-user-solid"></i>
          人才推荐
        </div>
        <div class="bottom">
          <div class="job" v-for="item in 7" :key="item">
            <router-link to="/resume?id=1" tag="li">
              <div class="pp">
                <span class="work">章鱼哥</span>
                <span>1小时前</span>
              </div>
              <div class="ask">
                <span>23岁</span>|
                <span>工作2年</span>|
                <span>8-11k</span>|
                <span>本科</span>
              </div>
              <div class="pp">
                <span class="left">在找 Java开发</span>
                <span class="site">惠州-惠城区</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
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
      phone: "",
      paswad: "",
      paswads: "",
      code: "",
      form: {},

      activeName: "second",
      joblist: {
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
      }
    };
  },
  updated() {},
  methods: {
    toissue(){
      this.$router.replace('/issue')
    },
    // 招聘中的职位详情
    toparticulars(e) {
      this.$router.push({
        name: "particulars",
        query: {
          id: e
        }
      });
    },
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
    issue() {
      this.$notify({
        title: "提示",
        message: "职位已发布",
        type: "success"
      });
    },
    dele() {
      this.$notify({
        title: "提示",
        message: "职位已删除",
        type: "success"
      });
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    wor() {
      this.$router.push({
        name: "issue",
        query: {
          id: 1
        }
      });
    },
    setcli() {
      console.log("00");
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
    .chunk_1 {
      margin-bottom: 20px;
      min-height: 220px;
      .top1 {
        background: #fff;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        padding: 20px 0;
      }
      .hint {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img,
        span {
          display: inline-block;
          width: 240px;
          margin: 7px 0;
        }
      }
      .bottom {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        .job {
          cursor: pointer;
          background: #fff;
          border-radius: 5px;
          padding: 20px;
          margin: 10px;
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
  }
}
</style>
