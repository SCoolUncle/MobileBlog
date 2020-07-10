<template>
    <div class="toolbar">
        <ul>
            <li>
                <img v-if="status.length > 0" src="./assets/img/pinglun_s.png" alt="">
                <img v-else src="./assets/img/pinglun_d.png"  alt="">
                <span>0</span>
            </li>
            <li>
                <img v-if="status.length > 0" src="./assets/img/zan_s.png" alt="">
                <img v-else src="./assets/img/zan_d.png"  alt="">
                <span>0</span>
            </li>
            <li>
                <img v-if="status.length > 0" src="./assets/img/shoucang_s.png" alt="">
                <img v-else src="./assets/img/shoucang_d.png"  alt="">
                <span>0</span>
            </li>
            <li>
                <img v-if="status.length > 0" src="./assets/img/zhuanfa_s.png" alt="">
                <img v-else src="./assets/img/zhuanfa_d.png"  alt="">
                <span>0</span>
            </li>
        </ul>
    </div>
</template>
<script>
//////////////////////////
// status:评论点赞转发信息数组
// 
export default {
    props: {
        status:{type:Array,default:[]}
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
    .toolbar{
        height:60px;
        width:100%;
    }
    .toolbar ul{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        box-shadow: 0px -1px 4px 0px #00000010;
    }
    .toolbar ul li{
        height:100%;
        flex: 1;
        text-align: center;
        line-height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .toolbar ul li img{
        height:26px;
        width:26px;
    }
    .toolbar ul li  span{
        color:#dbdbdb;
        padding-top:10px;
    }
</style>