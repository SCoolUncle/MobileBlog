<template>
    <div class="topbar" >
        <ul>
            <router-link to="/home" tag="li" >热门</router-link>
            <router-link to="/guanzhu" tag="li" >关注</router-link>
            <router-link to="/column" tag="li" >栏目</router-link>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        display:{type:Boolean}
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
    .topbar{
        height: 44px;
        width:100%;
        position: fixed;
        top:0px;
        z-index: 5;
        background:#000;
    }
    .topbar ul{
        height:100%;
        width:100%;
        display: flex;
        justify-content:space-around;
        align-items: center;
        box-shadow: 0px 1px 4px 0px #00000010;
    }
    .topbar ul li{
        height:100%;
        flex:1;
        display:flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color:#666;
    }
    .router-link-active{
        color:#E2B659 !important;
        border-bottom:2px solid #E2B659;
    }
   
</style>