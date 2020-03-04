<template>
  <div id="app">
    <vheader v-if="$route.meta.header"/>
    <router-view class="Router" />
    <vfooter v-if="$route.meta.footer"></vfooter>
  </div>
</template>

<script>
import vheader from "@/components/Header";
import vfooter from "@/components/Footer";
export default {
  name: "App",
  components: {
    vfooter,
    // lodinheader,
    vheader
  },
  data() {
    return {
      transitionName: ""
    };
  },
  // 监听路由变化
  watch: {
    $route() {
      var isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else if (this.$router.isBack != null) {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  },
  mounted() {
    //路由切换返回顶部
    this.$router.afterEach((to, from) => {
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style lang="less" >
* {
  margin: 0;
  padding: 0;
}
#app {
  a,
  button,
  input,
  textarea {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0;);
  }
  input,
  button,
  textarea {
    -webkit-appearance: none;
  }
  width: 100%;
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  background: #eeeeee;
  .Router {
    transition: all ease 500ms;
  }
  .slide-left-enter,
  .slide-right-leave-active {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
}
</style>
