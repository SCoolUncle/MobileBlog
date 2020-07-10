<template>
    <div class="back">
        <a @click="$router.go(-1)" >
            <img v-if="bgcolor==='w'" src="./assets/img/goback_w.png" alt="">
            <img v-else src="./assets/img/goback_b.png" alt="">
        </a>
        <a :style="{color:titlecolor}">{{info}}</a>
        <a></a>
    </div>
</template>
<script>
///////////////////////////////
// bg:如果值为w为白色图标，其他皆为黑色
//////////////////////////////
export default {
    props: {
        // src:{type:String,default:"./assets/img/goback_b.png"}
        bgcolor:{type:String,default:'b'},
        info:{type:String,default:'详情'},
        titlecolor:{type:String,default:'#fff'}
    },
    data () {
        return {
            
        }
    },
    methods: {
        
    },

}
</script>
<style scoped>
    .back{
        height: 44px;
        /* background:#000; */
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding:0px 16px;
        box-sizing: border-box;
    }
    .back a{
        display: block;
        width:44px;
        height:44px;
        display: flex;
        /* justify-content: flex-start; */
        /* justify-content: center; */
        align-items: center;
    }
    .back a:nth-of-type(2){
        font-size: 14px;
        text-align: center;
    }
    .back a img{
        display: block;
        height:16px;
        width:16px;
    }
</style>