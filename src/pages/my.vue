<template>
  <div class="box">
    <div class="head">
      <label>
        <input  type="file" />
        <img :src="user.icon" />
      </label>
      <p>{{user.nikename}}</p>
    </div>

    <div>
      <span>粉丝{{user.fans}}</span>
      <span>关注{{user.follow}}</span>
    </div>
    <div>
      <span>公开博文</span>
      <span>0</span>
    </div>
    <div>
      <span>私密博文</span>
      <span>0</span>
    </div>
    <div>
      <span>草稿箱</span>
      <span>0</span>
    </div>
    <div class="goout" @click="logout">退出</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    //1. 抓取localstorage的token
    let local = window.localStorage.getItem("user");
    //1.1 没抓到 跳转登录
    if (!local) {
      next("/login");
      return;
    }
    //1.2 抓到了
    //1.2.1 抓取用户信息（接口)
    axios({
      url: "/api/user"
    }).then(function(res) {
      if (res.data.err === 0) {
        // next(_this=>_this.user=res.data.data)
        // this.user = res.data.data;
        next(vm => {
          vm.user = res.data.data;
        });
      } else {
        next("/login");
      }
    });

    //1.2.2 抓取用户信息（本地)
  },
  mounted() {},
  methods: {
    logout() {
      window.localStorage.removeItem("user");
      this.$router.push("/login");
    },
    // uphead() {
    //   axios({
    //     url: "/api/reg",
    //     m
    //   }).then(function(res) {
    //     if (res.data.err === 0) {
    //       // next(_this=>_this.user=res.data.data)
    //       // this.user = res.data.data;
    //       next(vm => {
    //         vm.user = res.data.data;
    //       });
    //     } else {
    //       next("/login");
    //     }
    //   });
    // }
  }
};
</script>
<style scoped>
.box {
  height: 100%;
  padding: 0px 16px;
}
.box .head {
  height: auto;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
}
.box .head label {
  height: 60px;
  width: 60px;
}
.box .head input {
  display: none;
}
.box .head p {
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: rgb(221, 181, 2);
}
.box .head img {
  height: 60px;
  width: 60px;
  display: block;
  background: #ffffff;
  border-radius: 50%;
}
.box div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
  line-height: 40px;
  color: #fff;
  padding: 0px 10px;
  border-bottom: 1px solid #ccc;
  color: #000;
}
.box .goout {
  background: #000;
  color: #fff;
  text-align: center;
  line-height: 40px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
</style>