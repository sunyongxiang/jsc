<template>
  <div id="app">
    <div class="header">
      <div class="left_underline"></div>
      <div class="title">数据可视化</div>
      <div class="right_underline"></div>
    </div>
    <div class="container">
      <div class="container_left">
        <box title="单台设备状态">
          <div class="eachart_box" id="box-1"></div>
        </box>
        <box>
          <div class="eachart_box" id="box-2" @click="update"></div>
        </box>
        <box>
          <div class="eachart_box" id="box-3"></div>
        </box>
      </div>
      <div class="container_center">
        <div class="container_center_top"></div>
        <div class="container_center_bottom" id="barline"></div>
      </div>
      <div class="container_right">
        <box title="产量">
          <div class="eachart_box" id="box-4"></div>
        </box>
        <box>
          <div class="eachart_box" id="box-5"></div>
        </box>
        <box>
          <div class="eachart_box" id="box-6"></div>
        </box>
      </div>
    </div>
    <!-- <box>
      <span style="color:red">213131</span>
    </box> -->
  </div>
</template>

<script>
import {Pie,Gauge,Bar,BarLine} from './util/draw.js'
export default {
  name: 'App',
  data(){
    return{
      gauge:null,
      pie:null,
      bar:null
    }
  },
  methods:{
    drawPie(){
      let pieData = [
        {value: 1048, name: '待机'},
        {value: 735, name: '故障'},
        {value: 580, name: '运行中'},
        {value: 484, name: '关机'}
      ]
      this.pie= new Pie(pieData,document.getElementById('box-1'))
    },
    drawGauge(){
      let gaugeData = [{
        value:70
      }]
      this.gauge = new Gauge(gaugeData,document.getElementById('box-2'))
    },
    drawBar(){
      var data = [];
      for (let i = 0; i < 6; ++i) {
          data.push(Math.round(Math.random() * 200));
      }
      this.bar = new Bar(data,document.getElementById('box-5'))
    },
    drawBarLine(){
      this.barLine = new BarLine([],document.getElementById('barline'))
    },
    update(){
      this.gauge.updated({
        data:[{
          value:parseInt(Math.random()*100)
        }]
      })
      this.pie.updated({
        data:[
          {value: 1048, name: '待机'},
          {value: parseInt(Math.random()*1000), name: '故障'},
          {value: 580, name: '运行中'},
          {value: 484, name: '关机'}
        ]
      })
    }
  },
  mounted(){
    this.drawPie()
    this.drawGauge()
    this.drawBar()
    this.drawBarLine()
  }
}
</script>

<style>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('./assets/img/bg.jpg') no-repeat;
  background-size: cover;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.header{
  display: flex;
  height: 50px;
  flex-shrink: 0;
  overflow: hidden;
}
.title{
  width: 350px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  line-height: 70px;
}
.left_underline{
  flex: 1;
  border-bottom: 1px solid #26c6f0;
  margin-left: 40px;
}
.right_underline{
  flex: 1;
  border-bottom: 1px solid #26c6f0;
  margin-right: 40px;
}
.container{
  display: flex;
  flex: 1;
  margin-bottom: 10px;
}
.container_left{
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container_center{
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container_center_top{
  flex: 1;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background: red;
}
.container_center_bottom{
  flex: 1;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.container_right{
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container .box{
  margin-top: 25px;
  flex: 1;
}
.eachart_box{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
