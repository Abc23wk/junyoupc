<template>
  <div id="app">
    <div class="main">
      <el-page-header class="box-card form" @back="goBack" content="首页"></el-page-header>
      <el-form ref="form" :model="form" label-width="80px" class="form">
        <el-form-item label="职位名称" clearable>
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="职位介绍">
          <el-input type="textarea" v-model="form.introduce" clearable></el-input>
        </el-form-item>
        <el-form-item label="薪资待遇">
          <el-input v-model="form.treatment" clearable></el-input>
        </el-form-item>
        <el-form-item label="上班地址">
          <div class="block">
            <el-cascader
              clearable
              v-model="value"
              :options="options"
              :props="{ expandTrigger: 'hover' }"
              @change="handleChange"
            ></el-cascader>
          </div>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.site" clearable></el-input>
        </el-form-item>
        <el-form-item label="工作经验">
          <el-select v-model="form.experience" placeholder="请选择工作经验要求" clearable>
            <el-option label="无经验" value="shanghai"></el-option>
            <el-option label="1-3年" value="beijing"></el-option>
            <el-option label="3-5年" value="beijing"></el-option>
            <el-option label="5-10年" value="beijing"></el-option>
            <el-option label="10年以上" value="beijing"></el-option>
            <el-option label="不限" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学历要求">
          <el-select v-model="form.education" placeholder="请选择学历要求" clearable>
            <el-option label="初中及以下" value="shanghai"></el-option>
            <el-option label="高中/中技/中专" value="beijing"></el-option>
            <el-option label="大专" value="beijing"></el-option>
            <el-option label="本科" value="beijing"></el-option>
            <el-option label="硕士" value="beijing"></el-option>
            <el-option label="博士" value="beijing"></el-option>
            <el-option label="不限" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位类型">
          <el-select v-model="form.genre" placeholder="请选择职位类型" clearable>
            <el-option label="全职" value="shanghai"></el-option>
            <el-option label="兼职" value="beijing"></el-option>
            <el-option label="实习" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位亮点">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="五险一金" name="type"></el-checkbox>
            <el-checkbox label="包住宿" name="type"></el-checkbox>
            <el-checkbox label="弹性工作" name="type"></el-checkbox>
            <el-checkbox label="绩效奖金" name="type"></el-checkbox>
            <el-checkbox label="年终奖金" name="type"></el-checkbox>
            <el-checkbox label="定期体检" name="type"></el-checkbox>
            <el-checkbox label="节日福利" name="type"></el-checkbox>
            <el-checkbox label="员工旅游" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{id==1?'提交审核':'发布职位'}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import citys from '../utils/data.js'
export default {
  name: "App",
  data() {
    return {
      id: this.$route.query.id,
      form: {
        name: "", //职位名称
        experience: "", //经验
        type: [], //亮点
        introduce: "", //介绍
        treatment: "", //待遇
        site: "", //详细地址
        education: "", //学历
        genre: "" //职位类型
      },

      //   =====================================
      value: [], //地址
      options: citys//上班地址
    };
  },
  methods: {
    onSubmit() {
      if (!this.form.name) {
        this.$notify({
          title: "警告",
          message: "请输入职位名称",
          type: "warning"
        });
      } else if (!this.form.introduce) {
        this.$notify({
          title: "警告",
          message: "请输入职位介绍",
          type: "warning"
        });
      } else if (!this.form.site) {
        this.$notify({
          title: "警告",
          message: "请输入详细地址",
          type: "warning"
        });
      }else if (this.value=='') {
        this.$notify({
          title: "警告",
          message: "请选择上班地址",
          type: "warning"
        });
      }else{
        this.$notify({
          title: "提示",
          message: "职位已成功发布",
          type: "success"
        });
        this.$router.replace('/')
      }
    },
    handleChange(value) {
      console.log(value);
    },
    goBack() {
      this.$router.replace("/");
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
      .box-card {
        margin-bottom: 20px;
        padding-left: 20px;
      }
    }

    .form {
      width: 600px;
      margin: 0 auto;
    }
  }
}
</style>
