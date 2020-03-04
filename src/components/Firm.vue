<template>
  <div id="app">
    
    <div class="main">
      <div class="firm">
        <el-page-header class="box-card" @back="goBack" content="首页"></el-page-header>

        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="公司名称">
            <el-input v-model="form.name" clearable></el-input>
          </el-form-item>
          <el-form-item label="公司介绍">
            <el-input type="textarea" v-model="form.presentation"></el-input>
          </el-form-item>
          <el-form-item label="公司规模">
            <el-select v-model="form.scale" placeholder="请选择" clearable>
              <el-option label="少于50人" value="shanghai"></el-option>
              <el-option label="50-150人" value="beijing"></el-option>
              <el-option label="150-500人" value="beijing"></el-option>
              <el-option label="500-1000人" value="beijing"></el-option>
              <el-option label="1000-5000人" value="beijing"></el-option>
              <el-option label="5000-10000人" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公司性质">
            <el-select v-model="form.nature" placeholder="请选择" clearable>
              <el-option label="国企" value="shanghai"></el-option>
              <el-option label="外资（欧美）" value="beijing"></el-option>
              <el-option label="外资（非欧美）" value="beijing"></el-option>
              <el-option label="上市公司" value="beijing"></el-option>
              <el-option label="合资" value="beijing"></el-option>
              <el-option label="民营公司" value="beijing"></el-option>
              <el-option label="外企代表处" value="beijing"></el-option>
              <el-option label="政府机关" value="beijing"></el-option>
              <el-option label="事业单位" value="beijing"></el-option>
              <el-option label="非营利组织" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公司行业">
            <div class="block">
              <el-cascader
                clearable
                v-model="form.industry"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"
              ></el-cascader>
            </div>
          </el-form-item>
          <el-form-item label="所在地">
            <div class="block">
              <el-cascader
                clearable
                v-model="form.location"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"
              ></el-cascader>
            </div>
          </el-form-item>
          <el-form-item label="详细地址">
            <el-input v-model="form.site" placeholder="请输入详细地址" clearable></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.phone" placeholder="请输入联系电话" clearable></el-input>
          </el-form-item>
          <el-form-item label="营业执照">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
            >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="Submit">提交信息并认证</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// 组件懒加载
import citys from "../utils/data.js";
export default {
  name: "App",
  data() {
    return {
      value: [],
      form: {
        name: "",
        presentation: "",
        scale: "",
        nature: "",
        site: "",
        phone: "",
        location: "",
        industry: ""
      },
      imageUrl: "",

      options: citys
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    goBack() {
      this.$router.replace("/");
      console.log("go back");
    },
    Submit() {
      if (!this.form.name) {
        this.$notify({
          title: "警告",
          message: "请输入公司名称",
          type: "warning"
        });
      } else if (!this.form.presentation) {
        this.$notify({
          title: "警告",
          message: "请输入公司介绍",
          type: "warning"
        });
      }
      else if (!this.form.scale) {
        this.$notify({
          title: "警告",
          message: "请选择公司规模",
          type: "warning"
        });
      }
      else if (!this.form.nature) {
        this.$notify({
          title: "警告",
          message: "请选择公司性质",
          type: "warning"
        });
      }else if (!this.form.industry) {
        this.$notify({
          title: "警告",
          message: "请选择公司行业",
          type: "warning"
        });
      }else if (!this.form.location) {
        this.$notify({
          title: "警告",
          message: "请选择公司所在地",
          type: "warning"
        });
      }else if (!this.form.site) {
        this.$notify({
          title: "警告",
          message: "请输入公司详细地址",
          type: "warning"
        });
      }else if (!this.form.phone) {
        this.$notify({
          title: "警告",
          message: "请输入公司联系电话",
          type: "warning"
        });
      }else{
        this.$notify({
          title: "提示",
          message: "信息提交成功，请等待审核！",
          type: "success"
        });
      }
    },
    dispose() {
      console.log("处理");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
    .firm {
      width: 600px;
      margin: 0 auto;
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px solid #999;
    border-radius: 10px;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
    border-radius: 10px;
  }
}
</style>
