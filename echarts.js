//左一数据从上往下
(function () {
  var app = {};
  var chartDom = document.querySelector('.bar .chart');
  var myChart = echarts.init(chartDom);
  var option;
  
  const categories = (function () {
    let now = new Date();
    let res = [];
    let len = 10;
    while (len--) {
      res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
      now = new Date(+now - 2000);
    }
    return res;
  })();
  const categories2 = (function () {
    let res = [];
    let len = 10;
    while (len--) {
      res.push(10 - len - 1);
    }
    return res;
  })();
  const data = (function () {
    let res = [];
    let len = 10;
    while (len--) {
      res.push(Math.round(Math.random() * 1000));
    }
    return res;
  })();
  const data2 = (function () {
    let res = [];
    let len = 0;
    while (len < 10) {
      res.push(+(Math.random() * 10 + 5).toFixed(1));
      len++;
    }
    return res;
  })();
  option = {

    grid:{
      top:'0',
      left:'0%',
      right: '0%',
      bottom: '10%',
    
    },
    color: ['#4992FF','#9FE080'],
    title: {
      text: ''
    },
    tooltip: {
      
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    legend: {},
    toolbox: {
      
      show: false,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: {
      
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        // show: false,
        type: 'category',
        boundaryGap: true,
        data: categories
      },
      {
        type: 'category',
        boundaryGap: true,
        data: categories2
      },
    ],
    yAxis: [
      {
         show: false,
        axisLine: {
          show: false
              },
         axisTick: {
         show: false
             },
        show: false,
        type: 'value',
        scale: true,
        name: 'Price',
        max: 30,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        name: 'Order',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
    ],
    series: [
      {
        barWidth: "40%",
        name: 'IT行业',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data,
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5,
        }
      },
      {
        name: '教育行业',
        type: 'line',
        data: data2
      },
    ],
  
  };
  app.count = 11;
  setInterval(function () {
    let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
    data.shift();
    data.push(Math.round(Math.random() * 1000));
    data2.shift();
    data2.push(+(Math.random() * 10 + 5).toFixed(1));
    categories.shift();
    categories.push(axisData);
    categories2.shift();
    categories2.push(app.count++);
    myChart.setOption({
      xAxis: [
        {
          data: categories
        },
        {
          data: categories2
        }
      ],
    
      series: [
        {
       
          data: data
        },
        {
          data: data2
        },

      ]
    });
  }, 2300);
  
  option && myChart.setOption(option);

  //图表跟随屏幕自适应
  window.addEventListener('resize', function() {
    myChart.resize();
  })
})();
//左二数据
(function () {
  var chartDom = document.querySelector('.line .chart');
  var myChart = echarts.init(chartDom);
  var option;
  option = {
 
    // legend: {
    //   bottom: '0'
    // },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        // dataView: { show: true, readOnly: false },
        // restore: { show: true },
        // saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 97],
        center: ['50%', '60%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 70, name: '英雄联盟' },
          { value: 58, name: '穿越火线' },
          // { value: 32, name: 'QQ飞车' },
          { value: 30, name: '地下城' },
          // { value: 28, name: '王者荣耀' },
          { value: 36, name: '部落冲突' },
          { value: 32, name: '王者荣耀' },
          { value: 48, name: '天天酷跑' }
        ]
      }
    ]
  };
  
  option && myChart.setOption(option);
   //图表跟随屏幕自适应
   window.addEventListener('resize', function() {
    myChart.resize();
  })
})();
//左三数据
(function () {

var chartDom = document.querySelector('.pie .chart');
var myChart = echarts.init(chartDom);
var option;
// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
const dataBJ = [
  [55, 9, 56, 0.46, 18, 6, 1],
  [25, 11, 21, 0.65, 34, 9, 2],
  [56, 7, 63, 0.3, 14, 5, 3],
  [33, 7, 29, 0.33, 16, 6, 4],
  [42, 24, 44, 0.76, 40, 16, 5],
  [82, 58, 90, 1.77, 68, 33, 6],
  [74, 49, 77, 1.46, 48, 27, 7],
  [78, 55, 80, 1.29, 59, 29, 8],
  [267, 216, 280, 4.8, 108, 64, 9],
  [185, 127, 216, 2.52, 61, 27, 10],
  [39, 19, 38, 0.57, 31, 15, 11],
  [41, 11, 40, 0.43, 21, 7, 12],
  [64, 38, 74, 1.04, 46, 22, 13],
  [108, 79, 120, 1.7, 75, 41, 14],
  [108, 63, 116, 1.48, 44, 26, 15],
  [33, 6, 29, 0.34, 13, 5, 16],
  [94, 66, 110, 1.54, 62, 31, 17],
  [186, 142, 192, 3.88, 93, 79, 18],
  [57, 31, 54, 0.96, 32, 14, 19],
  [22, 8, 17, 0.48, 23, 10, 20],
  [39, 15, 36, 0.61, 29, 13, 21],
  [94, 69, 114, 2.08, 73, 39, 22],
  [99, 73, 110, 2.43, 76, 48, 23],
  [31, 12, 30, 0.5, 32, 16, 24],
  [42, 27, 43, 1, 53, 22, 25],
  [154, 117, 157, 3.05, 92, 58, 26],
  [234, 185, 230, 4.09, 123, 69, 27],
  [160, 120, 186, 2.77, 91, 50, 28],
  [134, 96, 165, 2.76, 83, 41, 29],
  [52, 24, 60, 1.03, 50, 21, 30],
  [46, 5, 49, 0.28, 10, 6, 31]
];
const dataGZ = [
  [26, 37, 27, 1.163, 27, 13, 1],
  [85, 62, 71, 1.195, 60, 8, 2],
  [78, 38, 74, 1.363, 37, 7, 3],
  [21, 21, 36, 0.634, 40, 9, 4],
  [41, 42, 46, 0.915, 81, 13, 5],
  [56, 52, 69, 1.067, 92, 16, 6],
  [64, 30, 28, 0.924, 51, 2, 7],
  [55, 48, 74, 1.236, 75, 26, 8],
  [76, 85, 113, 1.237, 114, 27, 9],
  [91, 81, 104, 1.041, 56, 40, 10],
  [84, 39, 60, 0.964, 25, 11, 11],
  [64, 51, 101, 0.862, 58, 23, 12],
  [70, 69, 120, 1.198, 65, 36, 13],
  [77, 105, 178, 2.549, 64, 16, 14],
  [109, 68, 87, 0.996, 74, 29, 15],
  [73, 68, 97, 0.905, 51, 34, 16],
  [54, 27, 47, 0.592, 53, 12, 17],
  [51, 61, 97, 0.811, 65, 19, 18],
  [91, 71, 121, 1.374, 43, 18, 19],
  [73, 102, 182, 2.787, 44, 19, 20],
  [73, 50, 76, 0.717, 31, 20, 21],
  [84, 94, 140, 2.238, 68, 18, 22],
  [93, 77, 104, 1.165, 53, 7, 23],
  [99, 130, 227, 3.97, 55, 15, 24],
  [146, 84, 139, 1.094, 40, 17, 25],
  [113, 108, 137, 1.481, 48, 15, 26],
  [81, 48, 62, 1.619, 26, 3, 27],
  [56, 48, 68, 1.336, 37, 9, 28],
  [82, 92, 174, 3.29, 0, 13, 29],
  [106, 116, 188, 3.628, 101, 16, 30],
  [118, 50, 0, 1.383, 76, 11, 31]
];
const dataSH = [
  [91, 45, 125, 0.82, 34, 23, 1],
  [65, 27, 78, 0.86, 45, 29, 2],
  [83, 60, 84, 1.09, 73, 27, 3],
  [109, 81, 121, 1.28, 68, 51, 4],
  [106, 77, 114, 1.07, 55, 51, 5],
  [109, 81, 121, 1.28, 68, 51, 6],
  [106, 77, 114, 1.07, 55, 51, 7],
  [89, 65, 78, 0.86, 51, 26, 8],
  [53, 33, 47, 0.64, 50, 17, 9],
  [80, 55, 80, 1.01, 75, 24, 10],
  [117, 81, 124, 1.03, 45, 24, 11],
  [99, 71, 142, 1.1, 62, 42, 12],
  [95, 69, 130, 1.28, 74, 50, 13],
  [116, 87, 131, 1.47, 84, 40, 14],
  [108, 80, 121, 1.3, 85, 37, 15],
  [134, 83, 167, 1.16, 57, 43, 16],
  [79, 43, 107, 1.05, 59, 37, 17],
  [71, 46, 89, 0.86, 64, 25, 18],
  [97, 71, 113, 1.17, 88, 31, 19],
  [84, 57, 91, 0.85, 55, 31, 20],
  [87, 63, 101, 0.9, 56, 41, 21],
  [104, 77, 119, 1.09, 73, 48, 22],
  [87, 62, 100, 1, 72, 28, 23],
  [168, 128, 172, 1.49, 97, 56, 24],
  [65, 45, 51, 0.74, 39, 17, 25],
  [39, 24, 38, 0.61, 47, 17, 26],
  [39, 24, 39, 0.59, 50, 19, 27],
  [93, 68, 96, 1.05, 79, 29, 28],
  [188, 143, 197, 1.66, 99, 51, 29],
  [174, 131, 174, 1.55, 108, 50, 30],
  [187, 143, 201, 1.39, 89, 53, 31]
];
const lineStyle = {
  width: 1,
  opacity: 0.5
};
option = {

  // backgroundColor: '#fff',
  title: {
    text: '',
    left: 'center',
    textStyle: {
      color: '#eee'
    }
  },
  legend: {
    bottom: 0,
    data: ['北京', '深圳', '广州'],
    itemGap: 20,
    textStyle: {
      color: '#fff',
      fontSize: 12
    },
    selectedMode: 'single'
  },
  radar: {
    indicator: [
      { name: 'AQI', max: 300 },
      { name: 'PM2.5', max: 270 },
      { name: 'PM10', max: 300 },
      { name: 'CO', max: 5 },
      { name: 'NO2', max: 200 },
      { name: 'SO2', max: 100 }
    ],
    shape: 'circle',
    splitNumber: 5,
    axisName: {
      color: 'rgb(238, 197, 102)'
    },
    splitLine: {
      lineStyle: {
        color: [
          'rgba(238, 197, 102, 0.1)',
          'rgba(238, 197, 102, 0.2)',
          'rgba(238, 197, 102, 0.4)',
          'rgba(238, 197, 102, 0.6)',
          'rgba(238, 197, 102, 0.8)',
          'rgba(238, 197, 102, 1)'
        ].reverse()
      }
    },
    splitArea: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(238, 197, 102, 0.5)'
      }
    }
  },
  series: [
    {
      name: '北京',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataBJ,
      symbol: 'none',
      itemStyle: {
        color: '#F9713C'
      },
      areaStyle: {
        opacity: 0.1
      }
    },
    {
      name: '深圳',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataSH,
      symbol: 'none',
      itemStyle: {
        color: '#B3E4A1'
      },
      areaStyle: {
        opacity: 0.05
      }
    },
    {
      name: '广州',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataGZ,
      symbol: 'none',
      itemStyle: {
        color: 'rgb(238, 197, 102)'
      },
      areaStyle: {
        opacity: 0.05
      }
    }
  ]
};

option && myChart.setOption(option);
  //图表跟随屏幕自适应
  window.addEventListener('resize', function() {
    myChart.resize();
  })
})();
//右一
(function () {
  var chartDom = document.querySelector('.bar1 .chart');
var myChart = echarts.init(chartDom);
var option;

const data = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}
option = {
 
  grid: {
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    containLabel: true
  },
  xAxis: {
    max: 'dataMax',
    axisLabel: {
      color: "#BCBDC1",
       fontSize: "12"
        },
  },
  yAxis: {
    axisLabel: {
      color: "#BCBDC1",
       fontSize: "12"
      },
    type: 'category',
    data: ['水果', '青菜', '肉类'],
   
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 2 // only the largest 3 bars will be displayed
  },
  series: [
    {
      color:'#009AD0',
      barWidth: "30%",
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 7
      },
       barBorderRadius: 9,
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  //true 显示上边栏，false则是取消
  legend: {
    show: false,
  },
  animationDuration: 0,
  animationDurationUpdate: 7000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};
function run() {
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
  myChart.setOption({
    series: [
      {
        type: 'bar',
        data
      }
    ]
  });
}
setTimeout(function () {
  run();
}, 0);
setInterval(function () {
  run();
}, 1000);

option && myChart.setOption(option);
 //图表跟随屏幕自适应
 window.addEventListener('resize', function() {
  myChart.resize();
})
})();
//右二
(function () {
  var chartDom = document.querySelector('.line1 .chartq');
var myChart = echarts.init(chartDom);
var option;

option = {
  // backgroundColor: "#0E204A",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,0)", // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: "rgba(255,255,255,1)", // 100% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(255,255,255,0)", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  },
  grid: {
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "10%",
    // containLabel: true
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: true,
      axisLine: {
        //坐标轴轴线相关设置。数学上的x轴
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.4)",
        },
      },
      axisLabel: {
        //坐标轴刻度标签的相关设置
        textStyle: {
          color: "#d1e6eb",
          margin: 15,
        },
      },
      axisTick: {
        show: false,
      },
      data: ["2017", "2018", "2019", "2020", "2021", "2022"],
    },
  ],
  yAxis: [
    {
      type: "value",
      min: 0,
      // max: 140,
      splitNumber: 4,
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
        margin: 20,
        textStyle: {
          color: "#d1e6eb",
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "注册总量",
      type: "line",
      // smooth: true, //是否平滑曲线显示
      // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
      showAllSymbol: true,
      // symbol: 'image://./static/images/guang-circle.png',
      symbolSize: 8,
      lineStyle: {
        normal: {
          color: "#53fdfe", // 线条颜色
        },
        borderColor: "#f0f",
      },
      label: {
        show: true,
        position: "top",
        textStyle: {
          color: "#fff",
        },
      },
      itemStyle: {
        normal: {
          color: "rgba(255,255,255,1)",
        },
      },
      tooltip: {
        show: false,
      },
      areaStyle: {
        //区域填充样式
        normal: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0,150,239,0.3)",
              },
              {
                offset: 1,
                color: "rgba(0,253,252,0)",
              },
            ],
            false
          ),
          shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
          shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        },
      },
      data: [15000, 20000, 28000, 36000, 40000, 50000, 60000],
    },
  ],
};
option && myChart.setOption(option);
 //图表跟随屏幕自适应
 window.addEventListener('resize', function() {
  myChart.resize();
})
})();
//右三
(function () {
  var chartDom = document.querySelector('.pie1 .chart');
var myChart = echarts.init(chartDom);
option = {
  
  title: {
    text: ' '
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['ke', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    top:'-2%',
    left: '0%',
    right: '4%',
    bottom: '0%',
    containLabel: true, 
  },
  toolbox: {
    feature: {
      // saveAsImage: {}//显示是否下载数据按钮
    }
  },
  xAxis: {
    axisLabel: {
      color: "rgba(255,255,255,.6)",
      fontSize: "11"
    },
    type: 'category',
    boundaryGap: false,
    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  },
  yAxis: {

    axisLabel: {
      color: "rgba(255,255,255,.6)",
       fontSize: "12"
},
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
option && myChart.setOption(option);
window.addEventListener("resize", function() {
  myChart.resize();
});
})();
//中间地图
(function () {
  var myChart = echarts.init(document.querySelector('.map .chartt'))
 
var chinaGeoCoordMap = {
  '黑龙江': [127.9688, 45.368, 48209.4, 22321.2, 19598.7, 30213.2, 2521.2, 1343.5, 6321.6, 1842.1, 832.9, 90129.3],
  '内蒙古': [110.3467, 41.4899, 59371.6, 23395.9, 18461.6, 29101.3, 510.5, 779.0, 688.4, 897.4, 202.6, 101229.1],
  "吉林": [125.8154, 44.2584, 459391.2, 24591.4, 16846.6, 28589.4, 2296.9, 228.8, 1580.4, 259.8, 661.8, 500829.2],
  '北京市': [116.4551, 40.2539, 64368.7, 25737.1, 25712.1, 28573.9, 791.8, 817.1, 4888.7, 783.7, 60.2, 0],
  "辽宁": [123.1238, 42.1216, 48097.3, 19734.3, 16816.1, 28330.2, 1513.5, 278.1, 6055.0, 1414.1, 700.9, 84647.7],
  "河北": [114.4995, 38.1006, 40866.2, 17336.9, 16846.2, 28320.4, 840.3, 598.8, 1058.6, 330.5, 814.0, 75049.3],
  "天津": [117.4219, 39.4189, 30964.4, 14341.5, 13482.1, 28262.8, 1437.9, 721.5, 4372.5, 627.2, 767.2, 58788],
  "山西": [112.3352, 37.9413, 33211.8, 11435.8, 10818.7, 28256.7, 2109.7, 341.2, 5955.1, 1321.5, 402.3, 55466.3],
  "陕西": [109.1162, 34.2004, 35714.9, 10814.4, 10459.4, 28135.4, 1251.3, 1262.7, 2871.5, 1334.4, 442.1, 56988.7],
  "甘肃": [103.5901, 36.3043, 39459.1, 11358.6, 10410.8, 28123.4, 417.7, 1135.6, 172.1, 374.3, 415.8, 61228.5],
  "宁夏": [106.3586, 38.1775, 41869.0, 11961.8, 10586.4, 28068.3, 1120.6, 1267.5, 3768.9, 1750.2, 208.1, 64417.2],
  "青海": [101.4038, 36.8207, 48412.1, 14671.2, 13080.8, 28015.4, 2310.9, 982.4, 4577.3, 1709.5, 84.1, 76164.1],
  "新疆": [87.9236, 43.5883, 45938.4, 21869.1, 20580.3, 27942.3, 2105.6, 1217.5, 4485.3, 461.7, 115.6, 88387.8],
  "西藏": [91.11, 29.97, 43365.9, 23439.1, 22309.3, 27887.7, 2425.9, 905.6, 2855.7, 957.8, 410.0, 89114.3],
  "四川": [103.9526, 30.7617, 51939.6, 25734.6, 24733.1, 27864.5, 418.7, 775.7, 969.3, 1533.8, 285.6, 102407.3],
  "重庆": [108.3843, 30.4397, 48410.9, 24618.3, 22808.0, 27730.2, 82.3, 1117.8, 1573.9, 392.3, 122.6, 95837.2],
  "山东": [117.1582, 36.8701, 48096.1, 19309.1, 18306.3, 27592.8, 1044.9, 849.7, 2270.3, 918.8, 424.5, 85711.5],
  "河南": [113.4668, 34.6234, 45736.9, 19315.6, 17309.8, 27580.5, 1605.4, 136.6, 4704.7, 247.6, 142.2, 82362.3],
  "江苏": [118.8062, 31.9208, 53080.8, 22185.9, 21830.8, 27357.2, 628.1, 192.0, 5492.4, 1012.8, 728.3, 97097.5],
  "安徽": [117.29, 32.0581, 43080.6, 19308.0, 19081.0, 27230.3, 209.6, 968.5, 2151.5, 442.8, 60.1, 81469.6],
  "湖北": [114.3896, 30.6628, 48094.1, 21808.1, 20308.0, 26754.7, 355.6, 1318.8, 3087.1, 1167.9, 288.2, 90210.2],
  "浙江": [119.5313, 29.8773, 55821.3, 23698.1, 22337.0, 26471.4, 1955.7, 324.7, 2323.9, 592.2, 538.0, 101856.4],
  "福建": [119.4543, 25.9222, 53644.6, 24933.1, 23093.6, 26322.2, 1302.6, 863.1, 2475.2, 1585.8, 472.9, 101671.3],
  "江西": [116.0046, 28.6633, 49616.3, 21843.9, 20803.4, 25755.4, 640.8, 1038.6, 4206.9, 227.6, 212.2, 92263.6],
  "湖南": [113.0823, 28.2568, 51893.9, 21415.9, 20280.9, 25617.6, 2336.6, 543.0, 2940.5, 1412.1, 233.5, 93590.7],
  "贵州": [106.6992, 26.7682, 45866.2, 23435.6, 22308.1, 25416.8, 1755.2, 1307.7, 1401.5, 31.2, 251.7, 91609.9],
  "云南": [102.9199, 25.4663, 48099.1, 18664.1, 16130.8, 25255.3, 1796.4, 694.9, 3368.8, 1199.3, 402.2, 82894],
  "广东": [113.1224, 23.0095, 62143.3, 25593.9, 24893.4, 25249.2, 1840.5, 347.1, 237.2, 1490.7, 530.4, 112630.6],
  "广西": [108.479, 23.1152, 44618.5, 18684.3, 17808.1, 24761.5, 808.0, 374.1, 2422.5, 165.5, 500.7, 81110.9],
  "海南": [110.3893, 19.8516, 55823.9, 25583.7, 24686.8, 24559.2, 1614.0, 1208.0, 784.1, 1337.4, 25.0, 106094.4],
  '上海': [121.4648, 31.2891, 64643.5, 28096.4, 2718.3, 24524.4, 720.9, 1236.0, 4808.8, 393.2, 143.8, 95458.2],
  '台湾': [121.5651, 25.0377, 24643.5, 147348.6, 13080.8, 24419.3, 667.2, 1100.0, 4976.4, 820.2, 210.2, 185072.9],
  '香港': [114.1466, 22.2701, 46147.4, 24614.3, 24590.5, 24395.4, 406.2, 171.1, 5021.7, 1793.3, 580.2, 95352.2],
  '澳门': [113.5495, 22.1918, 43464.3, 24935.8, 22812.1, 23987.3, 2519.4, 1110.3, 2692.8, 889.1, 704.1, 91212.2]
};
var chinaDatas = [
  [{
      name: '黑龙江',
      value: 2
  }],
  [{
      name: '广东',
      value: 3
  }],
  [{
      name: '台湾',
      value: 1
  }],
  [{
      name: '内蒙古',
      value: 1
  }],
  [{
      name: '吉林',
      value: 2
  }],
  [{
      name: '辽宁',
      value: 2
  }],
  [{
      name: '河北',
      value: 3
  }],
  [{
      name: '天津',
      value: 2
  }],
  [{
      name: '山西',
      value: 2
  }],
  [{
      name: '陕西',
      value: 3
  }],
  [{
      name: '甘肃',
      value: 2
  }],
  [{
      name: '宁夏',
      value: 2
  }],
  [{
      name: '青海',
      value: 4
  }],
  [{
      name: '新疆',
      value: 2
  }],
  [{
      name: '西藏',
      value: 3
  }],
  [{
      name: '四川',
      value: 4
  }],
  [{
      name: '重庆',
      value: 5
  }],
  [{
      name: '山东',
      value: 2
  }],
  [{
      name: '河南',
      value: 3
  }],
  [{
      name: '江苏',
      value: 2
  }],
  [{
      name: '安徽',
      value: 4
  }],
  [{
      name: '湖北',
      value: 3
  }],
  [{
      name: '浙江',
      value: 4
  }],
  [{
      name: '福建',
      value: 4
  }],
  [{
      name: '江西',
      value: 5
  }],
  [{
      name: '湖南',
      value: 2
  }],
  [{
      name: '贵州',
      value: 1
  }],
  [{
      name: '广西',
      value: 4
  }],
  [{
      name: '海南',
      value: 5
  }],
  [{
      name: '上海',
      value: 5
  }],
  [{
      name: '澳门',
      value: 2
  }],
  [{
      name: '香港',
      value: 3
  }],
  [{
      name: '云南',
      value: 2
  }],
  [{
      name: '北京市',
      value: 2
  }]
];
//飞机标签
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';


var convertData = function(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = chinaGeoCoordMap[dataItem[0].name];
      var toCoord = [116.4551, 40.2539];
      if (fromCoord && toCoord) {
          res.push([{
              coord: fromCoord,
              value: dataItem[0].value
          }, {
              coord: toCoord,
          }]);
      }
  }
  return res;
};
var series = [];
[
  ['北京市', chinaDatas]
].forEach(function(item, i) {
  console.log(item)
  series.push({
          type: 'lines',
          zlevel: 2,
          effect: {
              show: true,
              period: 5, //箭头指向速度，值越小速度越快
              trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: planePath, //箭头图标
              symbolSize: 10, //图标大小
          },
          lineStyle: {
              normal: {
                  width: 1, //尾迹线条宽度
                  opacity: 0.5, //尾迹线条透明度
                  curveness: .3 //尾迹线条曲直度
              }
          },
          data: convertData(item[1])
      }, {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: { //涟漪特效
              period: 5, //动画时间，值越小速度越快
              brushType: 'stroke', //波纹绘制方式 stroke, fill
              scale: 3 //波纹圆环最大限制，值越大波纹越大
          },
          label: {
              normal: {
                  show: true,
                  position: 'right', //显示位置
                  offset: [5, 0], //偏移设置
                  formatter: function(params) { //圆环显示文字
                      return params.data.name;
                  },
                  fontSize: 13
              },
              emphasis: {
                  show: true
              }
          },
          symbol: 'circle',
          symbolSize: function(val) {
              return 10; //圆环大小
          },
          itemStyle: {
              normal: {
                  show: false,
                  color: '#f00'
              }
          },
          data: item[1].map(function(dataItem) {
              return {
                  name: dataItem[0].name,
                  value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
              };
          }),
      },
      //目的点
      {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 4
          },
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  //offset:[5, 0],
                  color: '#0f0',
                  formatter: '{b}',
                  textStyle: {
                      color: "#0f0"
                  }
              },
              emphasis: {
                  show: true,
                  color: "#f60"
              }
          },
          // symbol: 'pin', //坐标显示或不显示
          symbolSize: 0, //控制坐标大小
          data: [{
              name: item[0],
              value: chinaGeoCoordMap[item[0]].concat([95]),
          }],
      }
  );
});

option = {
  tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(166, 200, 76, 0.82)',
      borderColor: '#ffe7ae',
      showDelay: 0,
      hideDelay: 0,
      enterable: true,
      transitionDuration: 0,
      extraCssText: 'z-index:100',
      formatter: function(params, ticket, callback) {
          //根据业务自己拓展要显示的内容
          if (params.seriesType == "effectScatter") {
              return "地点：" + params.data.name + "，航班数：" + params.data.value[12] +
                  '<br/>' +
                  '<br/>机型：A380' +
                  '<br/>' +
                  '<br/>总成本：' + params.data.value[11] +
                  '<br/>' +
                  '<br/>变动成本:' + params.data.value[2] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp航油成本:' + params.data.value[5] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分摊机务成本:' + params.data.value[6] +
                  '<br/>' +
                  '<br/>固定成本:' + params.data.value[3] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分摊折旧费用:' + params.data.value[7] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分摊租赁费用:' + params.data.value[8] +
                  '<br/>' +
                  '<br/>期间成本:' + params.data.value[4] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分摊财务费用:' + params.data.value[9] + '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分摊管理费用:' + params.data.value[10];
          } else if (params.seriesType == "lines") {
              return "当前航线飞机数量：" + params.data.value;
          }
          var res = "";
          var name = params.name;
          var value = params.value[params.seriesIndex + 1];
          res = "<span style='color:#fff;'> 目的地:" + name + "</span><br/>接收的航班数:" + params.data.value;
          return res;
      }
  },
  title: {
      text: '',//标题
      left: '0%',
      top: '0%',
      textStyle: {
          color: '#000000'
      }
  },
  visualMap: { //图例值控制
      min: 0,
      max: 10,
      calculable: true,
      show: false,//true是显示控制列表图
      color: ['#f44336', '#fc9700', '#ffde00', '#38fc01', '#00eaff'],
      textStyle: {
          color: '#000000'
      }
  },
  geo: {
      map: 'china',
      zoom: 1.2,
      label: {
          emphasis: {
              show: false
          }
      },
      roam: false, //是否允许缩放
      itemStyle: {
          normal: {
            opacity:'0.4',
              color: 'rgba(46, 63, 81, 127)', //地图背景色
              borderColor: '#445973', //省市边界线00fcff 516a89
              borderWidth: 1
          },
          emphasis: {
              color: 'rgba(35, 41, 58, 127)' //悬浮背景
          }
      }
  },
  series: series
};

  option && myChart.setOption(option);
  window.addEventListener('resize', function() {
    myChart.resize();
  })
})();
