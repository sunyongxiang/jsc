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
        <div class="container_center_top">
          <ul class="list">
            <li class="list_item" v-for="item in lists" :key=" item.title">
              <p>{{item.title}}</p>
              <div>{{item.number}}台</div>
            </li>
          </ul>
          <div class="gride_box">
            <ul class="gride" v-for="i in 3" :key="i">
              <li class="gride_item" v-for="item in lists2.slice((i-1)*6,(i-1)*6+6)" :key=" item.title">
                <span class="gride_title">{{item.title}}</span>
                <span class="gride_con">{{item.number}}</span>
              </li>
            </ul>
          </div> 
        </div>
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
      bar:null,
      lists:[{
        title:'运行时间',
        number:'188'
      },{
        title:'运行时间1',
        number:'188'
      },{
        title:'运行时间2',
        number:'188'
      },{
        title:'运行时间3',
        number:'188'
      }],
      lists2:[{
        title:'运行时间4',
        number:'188'
      },{
        title:'运行时间5',
        number:'188'
      },{
        title:'运行时间6',
        number:'188'
      },{
        title:'运行时间7',
        number:'188'
      },{
        title:'运行时间8',
        number:'188'
      },{
        title:'运行时间9',
        number:'188'
      },{
        title:'运行时间10',
        number:'188'
      },{
        title:'运行时间11',
        number:'188'
      },{
        title:'运行时间12',
        number:'188'
      },{
        title:'运行时间13',
        number:'188'
      },{
        title:'运行时间14',
        number:'188'
      },{
        title:'运行时间15',
        number:'188'
      },{
        title:'运行时间16',
        number:'188'
      },{
        title:'运行时间17',
        number:'188'
      },{
        title:'运行时间18',
        number:'188'
      },{
        title:'运行时间19',
        number:'188'
      },{
        title:'运行时间20',
        number:'188'
      },{
        title:'运行时间21',
        number:'188'
      }]
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
      let data =[[200,356, 266, 432, 223, 334, 324, 444,343, 422, 462, 450]]
      this.barLine = new BarLine(data,document.getElementById('barline'))
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
  background:url('./assets/img/bg1.png') no-repeat;
  background-size: contain;
  padding-top: 35px;
  padding-left: 20px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
}
.container_center_top .list{
  display: flex;
}
.container_center_top .list_item{
  height: 80px;
  background: url('./assets/img/bg2.png') no-repeat;
  background-size: 100% 100%;
  flex:1;
  margin: 0 5px;
}
.list_item p{
  text-align: center;
  margin-top: 20px;
  color: #fff;
}
.list_item div{
  font-size: 18px;
  color: yellow;
  margin-top: 10px;
  text-align: center;
}
.gride_box{
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px 0px 40px;
}
.gride{
  display: flex;
  flex: 1;
}
.gride .gride_item{
  display: flex;
  align-items: center;
  background: darkcyan;
  flex: 1;
  margin: 0 5px;
  margin-top: 10px;
  border-radius: 5px;
  justify-content: center;
}
.gride_item .gride_title{
  color: #999;
}
.gride_item .gride_con{
  font-size: 20px;
  padding-left: 5px;
  color: rgb(70, 203, 236);
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
