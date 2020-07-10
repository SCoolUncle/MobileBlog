<template>
  <div class="detial">
    <div class="ajnav">
      <aj-nav :bgcolor="bgcolor" :info="title" :titlecolor="titlecolor"></aj-nav>
    </div>

    <div class="xiangqing">
      <div class="head">
        <img :src="list.detail.auth_icon" alt />
        <span>{{list.detail.auth}}</span>
      </div>
      <p class="title">{{list.title}}</p>
      <hr />
      <p class="time">{{list.time}}</p>
      <p class="content">{{list.detail.content}}</p>
    </div>
    <div class="ajtoolbar">
      <aj-toolbar></aj-toolbar>
    </div>
  </div>
</template>
<script>
import ajToolbar from "../components/ajToolbar/ajToolbar.vue";
import ajNav from "../components/ajNav/ajNav.vue";
export default {
  components: {
    ajToolbar,
    ajNav
  },
  data() {
    return {
      bgcolor: "w",
      title: "详情",
      titlecolor: "#fff",
      list:[]
    };
  },
  mounted() {
    // console.log(this.$route.query.id);
    this.$axios({
      url: "/api/goods/"+this.$route.query.url,
      params: {
        _id: this.$route.query.id
      }
    }).then(res => {
      if (res.data.err === 0) {
        this.list = res.data.data;
        console.log(this.list);
      } else {
        console.log("栏目信息获取失败");
      }
    });
    console.log(this.$route.query.id);
  },
  methods: {}
};
</script>
<style scoped>
.detial {
  height: 100%;
  background: #fff;
  z-index: 8;
}
.xiangqing {
  height: 100%;
}
.ajnav {
  background: #000;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0px;
  z-index: 6;
  overflow: auto;
}
.ajtoolbar {
  width: 100%;
  position: fixed;
  bottom: 0px;
}
.xiangqing {
  overflow: auto;
  padding: 44px 16px;
  box-sizing: border-box;
}
.xiangqing .head {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.xiangqing .head img {
  border-radius: 50%;
  background: #000;
  height: 55px;
  width: 55px;
  margin-right: 10px;
}
.xiangqing .head span {
  font-size: 14px;
  color: #000;
  font-weight: 600;
}
.xiangqing .title {
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}
.xiangqing .time {
  font-size: 12px;
  margin-top: 10px;
}
.xiangqing .content {
  font-size: 13px;
  margin-top: 15px;
  text-decoration: underline;
  line-height: 20px;
}
</style>