<template>
  <!-- 首页 -->
  <div class="home">
    <ajBanner :data="bannerlist" @bclick="banClick"></ajBanner>
    <div class="content">
      <aj-cell :userlist="userlist" @attent="guanZhu" @tolink="tolink"></aj-cell>
    </div>
  </div>
</template>
<script>
import ajBanner from "../components/ajBanner/ajBanner.vue";
import ajCell from "../components/ajCell/ajCell.vue";
import Header from "../layouts/header.vue";
export default {
  components: {
    ajBanner,
    ajCell,
    Header
  },
  data() {
    return {
      bannerlist: [  ],
      userlist: [  ]
    };
  },
  beforeCreate() {
    
  },
  mounted() {
    
    this.$axios({
      url: "/api/goods/home",
      params: {
        _limit: 10
      }
    }).then(res => {
      if (res.data.err === 0) {
        this.userlist = res.data.data;
      } else {
        console.log("首页信息获取失败");
      }
    });
    this.$axios({
      url: "/api/goods/banner",
      params: {
        _limit: 3
      }
    }).then(res => {
      if (res.data.err === 0) {
        this.bannerlist = res.data.data;
      } else {
        console.log("首页信息获取失败");
      }
    });
  },
  methods: {
    banClick() {
      console.log("点击轮播");
    },
    guanZhu(a, b) {
      console.log(a, b, "这是关注");
    },
    tolink(a, b) {
      console.log(a, b, "这是详情信息跳转");
      this.$router.push('/detial?id='+a+'&url='+'home');

    }
  }
};
</script>
<style scope>
.home {
  margin-top: 45px;
  overflow: auto;
}
.home .content{
    padding:0px 16px;
    box-sizing: border-box;
}
</style>