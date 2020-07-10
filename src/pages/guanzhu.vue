<template>
  <div class="guanzhu">
    <aj-cell :userlist="userlist" @attent="guanZhu" @tolink="tolink"></aj-cell>
  </div>
</template>
<script>
import ajCell from "../components/ajCell/ajCell.vue";
export default {
  components: {
    ajCell
  },
  data() {
    return {
      userlist: []
    };
  },
  mounted() {
    this.$axios({
      url: "/api/goods/follow",
      params: {
        _limit: 10
      }
    }).then(res => {
      if (res.data.err === 0) {
        this.userlist = res.data.data;
      } else {
        console.log("栏目信息获取成功");
      }
    });
  },
  methods: {
    guanZhu(){},
    tolink(a,b) {
        this.$router.push('/guanzhu?id='+a);
    }
  }
};
</script>
<style  scoped>
.guanzhu{
    padding:44px 16px;
}
</style>