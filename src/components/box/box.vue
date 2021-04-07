<template>
    <div class="box">
        <i class="topL"></i>
        <i class="topR"></i>
        <i class="bottomL"></i>
        <i class="bottomR"></i>
        <div class="box_title" v-if="title">
            {{title}}
        </div>
        <div class="box_container">
            <slot class="slot"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'box',
    props:{
        title:{
            default:'',
            type:String
        }
    }
}
</script>
<style scoped>
    @import url('./index.css');
    .box{
        min-height: 260px;
        position: relative;
        border: 2px solid #032d60;
        box-shadow: inset 0 0 30px #07417a;
        display: flex;
        flex-direction: column;
    }
    .box_title{
        height:20px;
        line-height: 40px;
        color: #fff;
        text-align: center;
        font-size: 20px;
    }
    .box_container{
        flex:1;
        display: flex;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
    }
    .box_container .slot{
        height: 100%;
        width: 100%;
    }
</style>