import * as echarts from 'echarts';
class Graph {
    init(){
        this.myChart.setOption(this.option, true);
    }
    updated(obj,index=0){
        let keys = Object.keys(obj)
        keys.forEach(key=>{
            this.option.series[index][key] = obj[key]
        })
        this.myChart.setOption(this.option, true);
    }
}
export class Pie extends Graph{
    constructor(data= [],elm){
        super()
        this.myChart = echarts.init(elm)
        this.option = {
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: '设备状态',
                    type: 'pie',
                    radius: '60%',
                    data: data,
                }
            ]
        };
        this.init()
    }
}
export class Gauge extends Graph{
    constructor(data= [],elm){
        super()
        this.myChart = echarts.init(elm)
        this.option = {
            series: [{
                type: 'gauge',
                axisLine: {
                    lineStyle: {
                        width: 10,
                        color: [
                            [0.3, '#67e0e3'],
                            [0.7, '#37a2da'],
                            [1, '#fd666d']
                        ]
                    }
                },
                pointer: {
                    itemStyle: {
                        color: 'auto'
                    }
                },
                axisTick: {
                    distance: 0,
                    length: 5,
                    lineStyle: {
                        color: '#fff',
                        width: 2
                    }
                },
                splitLine: {
                    distance: -20,
                    length: 0,
                    lineStyle: {
                        color: '#fff',
                        width: 4
                    }
                },
                axisLabel: {
                    color: 'auto',
                    distance: 40,
                    fontSize: 12
                },
                detail: {
                    valueAnimation: true,
                    formatter: '开机率',
                    color: '#fff',
                    fontSize: 16 ,
                    
                },
                data:data
            }]
        };
        this.init()
    }
}
export class Bar extends Graph{
    constructor(data,elm){
        super()
        console.log(data)
        this.myChart = echarts.init(elm)
        this.option = {
            xAxis: {
                max: 'dataMax',
            },
            yAxis: {
                type: 'category',
                data: ['当日能耗', '周能耗', '月能耗', '当前产品能耗', '当前任务能耗','累计能耗']
            },
            grid: {
                left: '3%',
                right: '10%',
                bottom: '3%',
                top:'10%',
                containLabel: true
            },
            series: [{
                // realtimeSort: true,
                // name: 'X',
                type: 'bar',
                data: data,
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                }
            }],
            legend: {
                show: true
            },
        };
        this.init()
    }
}
export class BarLine extends Graph{
    constructor(data,elm){
        super()
        this.myChart = echarts.init(elm)
        this.option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            legend: {
                data: ['收入', '占比']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '收入',
                    min: 0,
                    max: 500,
                    interval: 100,
                },
                {
                    type: 'value',
                    name: '合格率',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value} %'
                    }
                }
            ],
            series: [
                {
                    name: '收入',
                    type: 'bar',
                    data: data[0],
                    itemStyle:{
                        color:'#26c6f0',
                        borderRadius: [10, 10, 0, 0]
                    }
                },
                {
                    name: '占比',
                    type: 'line',
                    yAxisIndex: 1,
                    lineStyle:{
                        color:'yellow'
                    },
                    data: [60, 50, 80, 30, 70, 10, 60, 65, 90, 95, 80, 66]
                }
            ]
        }
        this.init()
    }
}