<template>
  <div class="box">
    <div class="tab">
      <p class="btns">
        <span @click="change">登录</span>|
        <span @click="change">注册</span>
      </p>
      <div class="login" v-show="panduan">
        <p>
          <ajInput :iptName="iptName" v-model="iptval"></ajInput>
        </p>
        <p>
          <ajInput :iptName="pwdName" :type="type" v-model="iptpwd"></ajInput>
        </p>
        <p>
          <ajButton :btnval="btnname" @loginbtn="login()"></ajButton>
        </p>
      </div>
      <div class="reg" v-show="!panduan">
        <p>
          <ajInput :iptName="iptName" v-model="regiptval"></ajInput>
        </p>
        <p>
          <ajInput :iptName="pwdName" :type="type" v-model="regiptpwd"></ajInput>
        </p>
        <p>
          <ajButton :btnval="regbtnname" @loginbtn="reg()"></ajButton>
        </p>
      </div>
      <p>{{errorinfo}}</p>
    </div>
    <!-- 输入框可以直接通过v-model来进行数据的绑定 -->
  </div>
</template>
<script>
import ajButton from "../components/ajButton/ajButton.vue";
import ajInput from "../components/ajInput/ajInput.vue";
export default {
  data() {
    return {
      btnname: "登录",
      iptName: "账号",
      pwdName: "密码",
      regbtnname: "注册",
      type: "password",
      iptval: "",
      iptpwd: "",
      regiptval: "",
      regiptpwd: "",
      panduan: true,
      errorinfo: ""
    };
  },

  components: {
    ajButton,
    ajInput
  },

  methods: {
    login() {
      this.$axios({
        url: "/api/login",
         method:'post',
        data: {
          username: this.iptval,
          password: this.iptpwd
        }
      }).then(res => {
        if (res.data.err === 0) {
          window.localStorage.setItem("user", JSON.stringify(res.data));
          this.$router.replace('/home')
          console.log("登录成功");
        } else {
          this.errorinfo = "账号或密码有误";
          console.log("账号或密码有误");
        }
      });
    },
    reg() {
      this.$axios({
        url: "/api/reg",
         method:'post',
        data: {
          username: this.regiptval,
          password: this.regiptpwd
        }
      }).then(res => {
        if (res.data.err === 0) {
          // window.localStorage.setItem("user", JSON.stringify(res.data));
          // this.$router.replace('/login')
          this.panduan = true;
          console.log("注册成功");
        } else {
          this.errorinfo = "账号注册失败";
          console.log("账号注册失败");
        }
      });
    },
    change() {
      this.panduan = !this.panduan;
    }
  }
};
</script>
<style scoped>
.box {
  height: 100%;
  width: 100%;
  padding: 40px 16px;
  box-sizing: border-box;
}
.box .tab {
  width: 100%;
  height: 48px;
}
.box .tab .btns {
  text-align: center;
  line-height: 40px;
}
.box .tab .btns span {
  margin: 10px;
  font-size: 16px;
}
.box .tab p {
  margin: 10px;
}
</style>