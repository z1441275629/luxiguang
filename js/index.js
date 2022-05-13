// 语言
var LANGUAGE = "zh-cn";
var ZH_CN = {};
var EN_US = {};

// 翻译语言
function $t(path) {
  return LANGUAGE === "zh-cn" ? ZH_CN[path] : EN_US[path] || "";
}

var chartDom = document.getElementById("echarts");
var myChart = echarts.init(chartDom);
var option;

option = {
  legend: {
    show: false,
    top: 'center',
    left: 'right',
  },
  tooltip: {
    trigger: "item",
    // formatter: "{a} <br/>{b} : {c} ({d}%)",
    formatter: "{b}",
  },
  toolbox: {
    show: false,
  },
  label: {
    show: false,
  },
  series: [
    {
      // name: 'Nightingale Chart',
      type: "pie",
      radius: [50, 200],
      center: ["50%", "50%"],
      roseType: "radius", // radius area
      itemStyle: {
        borderRadius: 8,
      },
      label: {
        show: false
      },
      // emphasis: {
      //   label: {
      //     show: false,
      //   }
      // },
      data: [
        { value: 35, name: "ES应用预留 35%" },
        { value: 20, name: "预售 20%" },
        { value: 10, name: "私人轮 10%" },
        { value: 3, name: "应用维护 3%" },
        { value: 12, name: "上所预留 12%" },
        { value: 15, name: "流动性 15%" },
        { value: 5, name: "公共关系 5%" },
        { value: 2, name: "每笔交易税 2%" },
      ],
    },
  ],
};

// option = {
//   // title: {
//   //   text: 'Nightingale Chart',
//   //   subtext: 'Fake Data',
//   //   left: 'center'
//   // },
//   tooltip: {
//     trigger: 'item',
//     formatter: '{a} <br/>{b} : {c} ({d}%)'
//   },
//   // legend: {
//   //   left: 'center',
//   //   top: 'bottom',
//   //   data: [
//   //     'rose1',
//   //     'rose2',
//   //     'rose3',
//   //     'rose4',
//   //     'rose5',
//   //     'rose6',
//   //     'rose7',
//   //     'rose8'
//   //   ]
//   // },
//   toolbox: {
//     show: true,
//     // feature: {
//     //   mark: { show: true },
//     //   dataView: { show: true, readOnly: false },
//     //   restore: { show: true },
//     //   saveAsImage: { show: true }
//     // }
//   },
//   series: [
//     {
//       name: 'Radius Mode',
//       type: 'pie',
//       radius: [20, 140],
//       center: ['25%', '50%'],
//       roseType: 'radius',
//       itemStyle: {
//         borderRadius: 5
//       },
//       label: {
//         show: false
//       },
//       emphasis: {
//         label: {
//           show: true
//         }
//       },
//       data: [
//         { value: 40, name: 'rose 1' },
//         { value: 33, name: 'rose 2' },
//         { value: 28, name: 'rose 3' },
//         { value: 22, name: 'rose 4' },
//         { value: 20, name: 'rose 5' },
//         { value: 15, name: 'rose 6' },
//         { value: 12, name: 'rose 7' },
//         { value: 10, name: 'rose 8' }
//       ]
//     },
//     // {
//     //   name: 'Area Mode',
//     //   type: 'pie',
//     //   radius: [20, 140],
//     //   center: ['75%', '50%'],
//     //   roseType: 'area',
//     //   itemStyle: {
//     //     borderRadius: 5
//     //   },
//     //   data: [
//     //     { value: 30, name: 'rose 1' },
//     //     { value: 28, name: 'rose 2' },
//     //     { value: 26, name: 'rose 3' },
//     //     { value: 24, name: 'rose 4' },
//     //     { value: 22, name: 'rose 5' },
//     //     { value: 20, name: 'rose 6' },
//     //     { value: 18, name: 'rose 7' },
//     //     { value: 16, name: 'rose 8' }
//     //   ]
//     // }
//   ]
// };

option && myChart.setOption(option);
