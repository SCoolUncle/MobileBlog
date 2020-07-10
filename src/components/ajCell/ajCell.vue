<template>
  <div class="attention">
    <ul>
      <li
        v-active
        v-for="(item,key) in userlist"
        @click="$emit('tolink',item._id,key)"
        :style="{border:boxborder,boxShadow:boxshow,borderRadius:borderradius}"
        :key="item._id"
        :class="{active:flag}"
      >
        <img :src="item.detail.auth_icon" alt />
        <div class="info">
          <h3>{{item.detail.auth}}</h3>
          <p>{{item.detail.content}}</p>
        </div>
        <div class="btn" @click.stop="$emit('attent',item._id,key)">关注</div>
      </li>
    </ul>
  </div>
</template>
<script>
/////////////////////////////////
// userlist 列表内容
// boxborder 边框
// boxshow：阴影
// borderradius:是否圆角
// attent：自定义方法，携带id和当前索引下标
// tolink:自定义方法，携带id和当前索引下标，用来进行用户信息跳转
export default {
  props: {
    userlist: { type: Array },
    boxborder: { type: String, default: "none" },
    boxshow: { type: String, default: "0px 0px 4px 0px #00000010" },
    borderradius: { type: String, default: "4px" }
  },
  data() {
    return {
      flag: false
    };
  },
  methods: {
    tolink() {}
  },
  directives: {
    active(el) {
      el.onmousedown = function() {
        this.flag = true;
      };
      el.onmouseup = function() {
        this.flag = false;
      };
    }
  }
};
</script>
<style scoped>
.attention {
}
.attention ul {
}
.attention ul li {
  display: flex;
  height: 94px;
  align-items: center;
  /* box-shadow: 0px 0px 4px 0px #00000010;
        border-radius: 4px;
        border:none; */
  margin-top: 10px;
  padding: 0px 5px;
  box-sizing: border-box;
}
.attention ul .active {
  background: #f5f5f5;
}
.attention ul li img {
  border-radius: 4px;
  background: #ccc;
  display: block;
  height: 45px;
  width: 45px;
}
.attention ul li .info {
  padding: 0px 10px;
  flex: 1;
}
.attention ul li .info h3 {
  font-size: 14px;
  color: #333;
  font-weight: 600;
}
.attention ul li .info p {
  font-size: 12px;
  color: #666;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.attention ul li .btn {
  width: 60px;
  height: 30px;
  background: #333;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  line-height: 30px;
}
</style>