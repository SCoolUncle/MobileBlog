<template>
  <div id="app">
    <Loading v-show="$root.loadingShow"></Loading>
    <!-- <login></login> -->
    <!--顶部菜单 -->
    <Header v-show="$root.bNav"></Header>
    <router-view v-show="!$root.loadingShow"></router-view>
    <!-- 首页 -->
    <!-- <home></home> -->
    <!-- 登录页面 -->

    <!-- 详情 -->
    <!-- <detial></detial> -->
    <!-- footer -->
    <Footer v-show="$root.bFoot"></Footer>
    <!--  -->
    <!-- 详情页面 -->
  </div>
</template>
<script>
import login from "./pages/login.vue";
import home from "./pages/home.vue";
import detial from "./pages/detial.vue";
import Footer from "./layouts/footer.vue";
import Loading from "./components/ajLoading/ajLoading.vue";
import Header from "./layouts/header.vue";
import Column from "./pages/column.vue";
import Guanzhu from "./pages/guanzhu.vue";
import My from "./pages/my.vue";
import Login from "./pages/login.vue"
export default {
  name: "App",
  data() {
    return {
      display: true
    };
  },
  beforeCreate() {
    // this.change();
  },
  updated() {
    // this.change();
  },
  mounted() {
    // this.change();
  },
  components: {
    login,
    home,
    detial,
    Footer,
    Loading,
    Header,
    Column,
    Guanzhu,
    My,
    Login
  },
  methods: {
    hd() {
      this.display = false;
      console.log(this.display);
    },
    change() {
      let path = this.$route.path;
      if (/home|follow|column/.test(path)) {
        this.$root.bNav = this.$root.bFoot = true;
        this.$root.homedisplay = true;
        this.$root.mydisplay = false;
      }
      if (/reg|login|detial/.test(path)) {
        this.$root.bNav = this.$root.bFoot = false;
        console.log(this.$root.bNav, this.$root.bFoot);
      }
      if (/my/.test(path)) {
        this.$root.homedisplay = false;
        this.$root.mydisplay = true;
        this.$root.bNav = false;
        this.$root.bFoot = true;
      }
    }
  },
  watch: {
    $route:{
      handler(to){
        let path = to.path;
        if(/home|follow|column/.test(path)){
          this.$root.bNav = this.$root.bFoot = true;
          this.$root.homedisplay = true;
          this.$root.mydisplay = false;
        };
        if(/reg|login|detial/.test(path)){
          this.$root.bNav = this.$root.bFoot = false;
          console.log(this.$root.bNav ,this.$root.bFoot);
        };
        if(/my/.test(path)){
          this.$root.homedisplay = false;
          this.$root.mydisplay = true;
          this.$root.bNav =false;
          this.$root.bFoot = true;
        };
      }
    }
  }
};
</script>
<style scoped>
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
