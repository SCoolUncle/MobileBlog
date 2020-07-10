<template>
    <div class="iptbox" :style="{border:border, borderRadius:borderRadius}">
        <div class="title" :style="{color:fontcolor,background:background,borderRight:titleBorder}">{{iptName}}</div>
        <input :type="type" :placeholder="placeholder" @input="$emit('input',$event.target.value)">
    </div>
</template>
<script>
///////////////////////
// iptName :输入框标题
// type:输入框类型
// placeholder：提示文字
// fontcolor：标题字体颜色
// background：标题背景
//  border：输入框边框
//  borderRadius：输入框圆角
//  titleBorder:标题边框
export default {
    props:{
        iptName:{type:String},
        type:{type:String,default:'text'},
        placeholder:{type:String,default:'请输入内容'},
        fontcolor:{type:String,default:'#000'},
        background:{type:String,default:'#ffffff00'},
        border:{type:String,default:'1px #333 solid'},
        borderRadius:{type:String,default:'4px'},
        titleBorder:{type:String,default:'1px #333 solid'}
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
    .iptbox{
        width:100%;
        height: 42px;
        display: flex;
        box-sizing: border-box;
    }
    .iptbox .title{
        width:auto;
        height:100%;
        padding:0px 10px;
        line-height: 42px;
        font-size:14px;
    }
    .iptbox input{
        flex: 1;
        height:100%;
        padding:0px 5px;
        box-sizing: border-box;
        line-height: 42px;
        font-size: 14px;
        border: none;
    }
</style>