<template>
  <div id="app">
    <div class="main">
      <el-page-header class="box-card" @back="goBack" content="人才搜索"></el-page-header>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <i class="el-icon-user"></i>基本信息
          </span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">性别 男性</div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <i class="el-icon-document"></i>求职意向
          </span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">求职职位 PHP开发工程师</div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <i class="el-icon-document"></i>军旅荣誉
          </span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">2018/09 优秀义务兵</div>
      </el-card>
      <el-form ref="form" :model="form" label-width="80px" class="form" v-if="id==1">
        <!-- <el-form-item label="工作经验"> -->
        <el-select v-model="form.zhgiwei" placeholder="下载简历至职位" class="dow" clearable>
          <el-option label="php开发工程师" value="value1"></el-option>
          <el-option label="java开发工程师" value="value2"></el-option>
          <el-option label="Python开发工程师" value="value3"></el-option>
        </el-select>
        <!-- </el-form-item> -->
        <el-button type="primary" @click="onSubmit(1)">下载简历（本月剩余26次）</el-button>
      </el-form>
      <el-form ref="form" :model="form" label-width="80px" class="form" v-if="id==2">
        <el-select v-model="form.state" placeholder="当前状态：未审核" clearable>
          <el-option
            v-for="(item,index) in form.option"
            :key="index"
            :label="item.text"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select
          v-model="form.interviewer"
          placeholder="请选择面试官"
          clearable
          v-if="form.state=='mianyao'"
          style="margin-top:20px"
        >
          <el-option
            v-for="(item,index) in form.option1"
            :key="index"
            :label="item.text"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="primary" @click="onSubmit(2)" class="dow">审批</el-button>
      </el-form>

      <el-dialog :title="id==1?'下载成功':'审批成功'" :visible.sync="dialogVisible" width="30%">
        <span>{{id==1?'已下载的简历，在对应职位有意向板块':'简历已审批'}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog title="提示" :visible.sync="dialogVisible1" width="30%">
        <span>您还没有添加面试官，请前往添加</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
           <el-button type="primary" @click="addinterviewer">去添加</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      form: {
        state: "", //审核状态
        zhgiwei: "", //现有职位
        interviewer: "", //面试官
        option: [
          {
            text: "有意向",
            value: "yixian"
          },
          { text: "发面邀", value: "mianyao" },
          { text: "不合适", value: "buheshi" }
        ],
        option1: [
          {
            text: "庄先生",
            value: 1
          },
          { text: "汪总", value: 2 },
          { text: "刘总监", value:3}
        ]
      },
      id: this.$route.query.id,
      dialogVisible: false,
      dialogVisible1: false
    };
  },
  created() {
    console.log(this.id);
  },
  methods: {
    goBack() {
      this.$router.replace("/talents");
    },
    onSubmit(e) {
      if (e === 1) {
        if (this.form.zhgiwei == "") {
          this.$notify({
            title: "警告",
            message: "请选择岗位",
            type: "warning"
          });
        } else {
          this.dialogVisible = true;
        }
      } else if (e === 2) {
        if (this.form.state == "") {
          this.$notify({
            title: "警告",
            message: "请选择审批结果",
            type: "warning"
          });
        } else if (this.form.state == "mianyao" && !this.form.interviewer ) {
          if (this.form.option1.length &&!this.form.interviewer) {
            this.$notify({
            title: "警告",
            message: "请选择面试官",
            type: "warning"
          });
          }
          if (this.form.option1.length == 0) {
            this.dialogVisible1 = true;
          }
        } else {
          this.dialogVisible = true;
        }
      }
    },
    addinterviewer() {
      this.dialogVisible1=false
      this.$router.replace("/arrange");
    }
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
    width: 1200px;
    margin: 20px auto;
    background: #ffffff;
    padding: 40px 0;

    li {
      list-style: none;
    }
    .box-card {
      width: 600px;
      margin: 0 auto 10px;
    }
    .form {
      width: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      .dow {
        margin: 20px 0;
      }
    }
  }
}
</style>
