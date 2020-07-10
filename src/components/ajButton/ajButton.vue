
<template>
    <div class="btn">
        <button @click="$emit('loginbtn')" :style="{background:background}">{{btnval}}</button>
    </div>
</template>
<script>
///////////////////////////
// 参数说明               
// btnval:按钮名称        
// loginbtn:按钮点击方法  
// background:背景颜色
///////////////////////////
export default {
    props:{
        btnval:{type:String,required:true},
        background:{type:String,default:'#333'}
    },
    data () {
        return {
            
        }
    },
    methods: {
        
    },

}
</script>
<style  scoped>
    .btn{
        width:100%;
        height:42px;
    }
    .btn button{
        height:100%;
        width:100%;
        background:#333;
        color:#fff;
        border:none;
        outline: none;
        border-radius: 4px;
        letter-spacing: 5px;
    }
    .btn button:active{
        background:#000;
    }
</style>