<template>
  <div class="buttommenu">
    <ul>
      <router-link to="/home" tag="li">
        <img v-if="this.$root.homedisplay===true" src="../assets/images/home_s.png" alt />
        <img v-else src="../assets/images/home_d.png" alt />
        <span>首页</span>
      </router-link>
      <router-link to tag="li">
        <img src="../assets/images/add.png" alt />
      </router-link>
      <router-link to="/my" tag="li">
        <img v-if="this.$root.mydisplay===true" src="../assets/images/my_s.png" alt />
        <img v-else src="../assets/images/my_d.png" alt />
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
  
    
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.buttommenu {
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 8;
  background: #fff;
}
.buttommenu ul {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content:space-around;
  box-shadow: 0px -1px 4px 0px #00000010;
  background: #fff;

}
.buttommenu ul li {
  flex: 1;
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.buttommenu ul li img {
  height: 24px;
  width: 24px;
}
.buttommenu ul li:nth-of-type(2) img {
  position: absolute;
  height: 50px;
  width: 50px;
  top: -10px;
}
</style>