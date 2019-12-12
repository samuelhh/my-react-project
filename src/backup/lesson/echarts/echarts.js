import React from 'react';
import echarts from 'echarts';
import '../../css/bootstrap.min.css';
import '../../css/echarts.min.css';

class Echarts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // chartColumn: null,
            // doughnut: null,
            // chartPie: null,
            // chartLine: null
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div id="j-chart-column" className="chart-column"></div>
                <div className="row">
                    <div className="col-sm">
                        <div id="j-chart-doughnut" className="chart-doughnut"></div>
                    </div>
                    <div className="col-sm">
                        <div id="j-pie-chart" className="chart-doughnut"></div>
                    </div>
                    <div className="col-sm">
                        <div id="j-chart-line" className="chart-doughnut"></div>
                    </div>
                </div>
            </div>
        );
    }
    //画柱状图
    drawColumnChart() {
        this.chartColumn = echarts.init(document.getElementById('j-chart-column'));
        this.chartColumn.setOption({
            color: ['#3398DB'],
            title: { text: '年销售概览' },
            tooltip: {},
            xAxis: {
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 60, 80, 16, 5, 16, 19]
            }]
        });
    }
    //画环形图
    drawDoughnut() {
        this.doughnut = echarts.init(document.getElementById('j-chart-doughnut'));
        this.doughnut.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                }
            ]
        });
    }
    //画饼形图
    drawPieChart() {
        this.chartPie = echarts.init(document.getElementById('j-pie-chart'));
        this.chartPie.setOption({
            title: {
                text: 'Pie Chart',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }
    //画折线图
    drawLineChart() {
        this.chartLine = echarts.init(document.getElementById('j-chart-line'));
        this.chartLine.setOption({
            title: {
                text: 'Line Chart'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        });
    }

    //画出所有图表
    drawCharts() {
        this.drawColumnChart();
        this.drawDoughnut();
        this.drawPieChart();
        this.drawLineChart();
    }
    //生命周期函数
    componentDidMount() {
        this.drawCharts();
    }
}
export default Echarts;