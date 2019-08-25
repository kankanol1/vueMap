<!---
    Created by kankan on 2019/8/16.
    email: lidainzhong@gl-data.com
-->

<template>
  <div class="hello">
    <h3>主页面</h3>

<!--    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>-->

    <router-link to="/map1"><Button>map1</Button></router-link>
    <router-link to="/map2"><Button>map2</Button></router-link>
    <router-link to="/map3"><Button>map3</Button></router-link>
    <button @click="request">请求</button>
    <router-view></router-view>
    <!--<div id="content">
      <div id="pic"></div>
      <div id="pic1"></div>
      <div id="pic2"></div>
      <div id="pic3"></div>
      <div id="pic4"></div>
    </div>-->
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        cytoscape: require('cytoscape'),
        jquery: require('jquery'),
        echarts: require('echarts'),

      }
    },
    mounted() {
      // this.drawing();
      // this.drawing1();
      this.drawing2();

    },
    methods: {
      request(){
        this.Axios.get('./data/data.json')
          .then(function(response){
            console.log(response);
          })
          .catch(function(error){
            console.log(error);
          });
      },
      drawing() {
        require('echarts/map/js/china');
        let geoCoordMap = {
          "海门": [121.15, 31.89],
          "鄂尔多斯": [109.781327, 39.608266],
          "招远": [120.38, 37.35],
          "舟山": [122.207216, 29.985295],
          "齐齐哈尔": [123.97, 47.33],
          "盐城": [120.13, 33.38],
          "赤峰": [118.87, 42.28],
          "青岛": [120.33, 36.07],
          "乳山": [121.52, 36.89],
          "金昌": [102.188043, 38.520089],
          "泉州": [118.58, 24.93],
          "莱西": [120.53, 36.86],
          "日照": [119.46, 35.42],
          "胶南": [119.97, 35.88],
          "南通": [121.05, 32.08],
          "拉萨": [91.11, 29.97],
          "云浮": [112.02, 22.93],
          "梅州": [116.1, 24.55],
          "文登": [122.05, 37.2],
          "上海": [121.48, 31.22],
          "攀枝花": [101.718637, 26.582347],
          "威海": [122.1, 37.5],
          "承德": [117.93, 40.97],
          "厦门": [118.1, 24.46],
          "汕尾": [115.375279, 22.786211],
          "潮州": [116.63, 23.68],
          "丹东": [124.37, 40.13],
          "太仓": [121.1, 31.45],
          "曲靖": [103.79, 25.51],
          "烟台": [121.39, 37.52],
          "福州": [119.3, 26.08],
          "瓦房店": [121.979603, 39.627114],
          "即墨": [120.45, 36.38],
          "抚顺": [123.97, 41.97],
          "玉溪": [102.52, 24.35],
          "张家口": [114.87, 40.82],
          "阳泉": [113.57, 37.85],
          "莱州": [119.942327, 37.177017],
          "湖州": [120.1, 30.86],
          "汕头": [116.69, 23.39],
          "昆山": [120.95, 31.39],
          "宁波": [121.56, 29.86],
          "湛江": [110.359377, 21.270708],
          "揭阳": [116.35, 23.55],
          "荣成": [122.41, 37.16],
          "连云港": [119.16, 34.59],
          "葫芦岛": [120.836932, 40.711052],
          "常熟": [120.74, 31.64],
          "东莞": [113.75, 23.04],
          "河源": [114.68, 23.73],
          "淮安": [119.15, 33.5],
          "泰州": [119.9, 32.49],
          "南宁": [108.33, 22.84],
          "营口": [122.18, 40.65],
          "惠州": [114.4, 23.09],
          "江阴": [120.26, 31.91],
          "蓬莱": [120.75, 37.8],
          "韶关": [113.62, 24.84],
          "嘉峪关": [98.289152, 39.77313],
          "广州": [113.23, 23.16],
          "延安": [109.47, 36.6],
          "太原": [112.53, 37.87],
          "清远": [113.01, 23.7],
          "中山": [113.38, 22.52],
          "昆明": [102.73, 25.04],
          "寿光": [118.73, 36.86],
          "盘锦": [122.070714, 41.119997],
          "长治": [113.08, 36.18],
          "深圳": [114.07, 22.62],
          "珠海": [113.52, 22.3],
          "宿迁": [118.3, 33.96],
          "咸阳": [108.72, 34.36],
          "铜川": [109.11, 35.09],
          "平度": [119.97, 36.77],
          "佛山": [113.11, 23.05],
          "海口": [110.35, 20.02],
          "江门": [113.06, 22.61],
          "章丘": [117.53, 36.72],
          "肇庆": [112.44, 23.05],
          "大连": [121.62, 38.92],
          "临汾": [111.5, 36.08],
          "吴江": [120.63, 31.16],
          "石嘴山": [106.39, 39.04],
          "沈阳": [123.38, 41.8],
          "苏州": [120.62, 31.32],
          "茂名": [110.88, 21.68],
          "嘉兴": [120.76, 30.77],
          "长春": [125.35, 43.88],
          "胶州": [120.03336, 36.264622],
          "银川": [106.27, 38.47],
          "张家港": [120.555821, 31.875428],
          "三门峡": [111.19, 34.76],
          "锦州": [121.15, 41.13],
          "南昌": [115.89, 28.68],
          "柳州": [109.4, 24.33],
          "三亚": [109.511909, 18.252847],
          "自贡": [104.778442, 29.33903],
          "吉林": [126.57, 43.87],
          "阳江": [111.95, 21.85],
          "泸州": [105.39, 28.91],
          "西宁": [101.74, 36.56],
          "宜宾": [104.56, 29.77],
          "呼和浩特": [111.65, 40.82],
          "成都": [104.06, 30.67],
          "大同": [113.3, 40.12],
          "镇江": [119.44, 32.2],
          "桂林": [110.28, 25.29],
          "张家界": [110.479191, 29.117096],
          "宜兴": [119.82, 31.36],
          "北海": [109.12, 21.49],
          "西安": [108.95, 34.27],
          "金坛": [119.56, 31.74],
          "东营": [118.49, 37.46],
          "牡丹江": [129.58, 44.6],
          "遵义": [106.9, 27.7],
          "绍兴": [120.58, 30.01],
          "扬州": [119.42, 32.39],
          "常州": [119.95, 31.79],
          "潍坊": [119.1, 36.62],
          "重庆": [106.54, 29.59],
          "台州": [121.420757, 28.656386],
          "南京": [118.78, 32.04],
          "滨州": [118.03, 37.36],
          "贵阳": [106.71, 26.57],
          "无锡": [120.29, 31.59],
          "本溪": [123.73, 41.3],
          "克拉玛依": [84.77, 45.59],
          "渭南": [109.5, 34.52],
          "马鞍山": [118.48, 31.56],
          "宝鸡": [107.15, 34.38],
          "焦作": [113.21, 35.24],
          "句容": [119.16, 31.95],
          "北京": [116.46, 39.92],
          "徐州": [117.2, 34.26],
          "衡水": [115.72, 37.72],
          "包头": [110, 40.58],
          "绵阳": [104.73, 31.48],
          "乌鲁木齐": [87.68, 43.77],
          "枣庄": [117.57, 34.86],
          "杭州": [120.19, 30.26],
          "淄博": [118.05, 36.78],
          "鞍山": [122.85, 41.12],
          "溧阳": [119.48, 31.43],
          "库尔勒": [86.06, 41.68],
          "安阳": [114.35, 36.1],
          "开封": [114.35, 34.79],
          "济南": [117, 36.65],
          "德阳": [104.37, 31.13],
          "温州": [120.65, 28.01],
          "九江": [115.97, 29.71],
          "邯郸": [114.47, 36.6],
          "临安": [119.72, 30.23],
          "兰州": [103.73, 36.03],
          "沧州": [116.83, 38.33],
          "临沂": [118.35, 35.05],
          "南充": [106.110698, 30.837793],
          "天津": [117.2, 39.13],
          "富阳": [119.95, 30.07],
          "泰安": [117.13, 36.18],
          "诸暨": [120.23, 29.71],
          "郑州": [113.65, 34.76],
          "哈尔滨": [126.63, 45.75],
          "聊城": [115.97, 36.45],
          "芜湖": [118.38, 31.33],
          "唐山": [118.02, 39.63],
          "平顶山": [113.29, 33.75],
          "邢台": [114.48, 37.05],
          "德州": [116.29, 37.45],
          "济宁": [116.59, 35.38],
          "荆州": [112.239741, 30.335165],
          "宜昌": [111.3, 30.7],
          "义乌": [120.06, 29.32],
          "丽水": [119.92, 28.45],
          "洛阳": [112.44, 34.7],
          "秦皇岛": [119.57, 39.95],
          "株洲": [113.16, 27.83],
          "石家庄": [114.48, 38.03],
          "莱芜": [117.67, 36.19],
          "常德": [111.69, 29.05],
          "保定": [115.48, 38.85],
          "湘潭": [112.91, 27.87],
          "金华": [119.64, 29.12],
          "岳阳": [113.09, 29.37],
          "长沙": [113, 28.21],
          "衢州": [118.88, 28.97],
          "廊坊": [116.7, 39.53],
          "菏泽": [115.480656, 35.23375],
          "合肥": [117.27, 31.86],
          "武汉": [114.31, 30.52],
          "大庆": [125.03, 46.58]
        };

        let convertData = function (data) {
          let res = [];
          for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }

          return res;
        };

        let option = {
          backgroundColor: '#404a59',
          title: {
            text: '手机归属地统计',
            x: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              return params.name + ' : ' + params.value[2];
            }
          },
          legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['游客数量'],
            textStyle: {
              color: '#fff'
            }
          },
          visualMap: {
            min: 0,
            max: 200,
            calculable: true,
            inRange: {
              color: ['#50a3ba', '#eac736', '#d94e5d']
            },
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'china',
            label: {
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: '#111'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            }
          },
          series: [
            {
              name: '游客数量',
              type: 'map',
              coordinateSystem: 'geo',
              data: convertData([
                {name: "海门", value: 9},
                {name: "鄂尔多斯", value: 12},
                {name: "招远", value: 12},
                {name: "舟山", value: 12},
                {name: "齐齐哈尔", value: 14},
                {name: "盐城", value: 15},
                {name: "赤峰", value: 16},
                {name: "青岛", value: 18},
                {name: "乳山", value: 18},
                {name: "金昌", value: 19},
                {name: "泉州", value: 21},
                {name: "莱西", value: 21},
                {name: "日照", value: 21},
                {name: "胶南", value: 22},
                {name: "南通", value: 23},
                {name: "拉萨", value: 24},
                {name: "云浮", value: 24},
                {name: "梅州", value: 25},
                {name: "文登", value: 25},
                {name: "上海", value: 25},
                {name: "攀枝花", value: 25},
                {name: "威海", value: 25},
                {name: "承德", value: 25},
                {name: "厦门", value: 26},
                {name: "汕尾", value: 26},
                {name: "潮州", value: 26},
                {name: "丹东", value: 27},
                {name: "太仓", value: 27},
                {name: "曲靖", value: 27},
                {name: "烟台", value: 28},
                {name: "福州", value: 29},
                {name: "瓦房店", value: 30},
                {name: "即墨", value: 30},
                {name: "抚顺", value: 31},
                {name: "玉溪", value: 31},
                {name: "张家口", value: 31},
                {name: "阳泉", value: 31},
                {name: "莱州", value: 32},
                {name: "湖州", value: 32},
                {name: "汕头", value: 32},
                {name: "昆山", value: 33},
                {name: "宁波", value: 33},
                {name: "湛江", value: 33},
                {name: "揭阳", value: 34},
                {name: "荣成", value: 34},
                {name: "连云港", value: 35},
                {name: "葫芦岛", value: 35},
                {name: "常熟", value: 36},
                {name: "东莞", value: 36},
                {name: "河源", value: 36},
                {name: "淮安", value: 36},
                {name: "泰州", value: 36},
                {name: "南宁", value: 37},
                {name: "营口", value: 37},
                {name: "惠州", value: 37},
                {name: "江阴", value: 37},
                {name: "蓬莱", value: 37},
                {name: "韶关", value: 38},
                {name: "嘉峪关", value: 38},
                {name: "广州", value: 38},
                {name: "延安", value: 38},
                {name: "太原", value: 39},
                {name: "清远", value: 39},
                {name: "中山", value: 39},
                {name: "昆明", value: 39},
                {name: "寿光", value: 40},
                {name: "盘锦", value: 40},
                {name: "长治", value: 41},
                {name: "深圳", value: 41},
                {name: "珠海", value: 42},
                {name: "宿迁", value: 43},
                {name: "咸阳", value: 43},
                {name: "铜川", value: 44},
                {name: "平度", value: 44},
                {name: "佛山", value: 44},
                {name: "海口", value: 44},
                {name: "江门", value: 45},
                {name: "章丘", value: 45},
                {name: "肇庆", value: 46},
                {name: "大连", value: 47},
                {name: "临汾", value: 47},
                {name: "吴江", value: 47},
                {name: "石嘴山", value: 49},
                {name: "沈阳", value: 50},
                {name: "苏州", value: 50},
                {name: "茂名", value: 50},
                {name: "嘉兴", value: 51},
                {name: "长春", value: 51},
                {name: "胶州", value: 52},
                {name: "银川", value: 52},
                {name: "张家港", value: 52},
                {name: "三门峡", value: 53},
                {name: "锦州", value: 54},
                {name: "南昌", value: 54},
                {name: "柳州", value: 54},
                {name: "三亚", value: 54},
                {name: "自贡", value: 56},
                {name: "吉林", value: 56},
                {name: "阳江", value: 57},
                {name: "泸州", value: 57},
                {name: "西宁", value: 57},
                {name: "宜宾", value: 58},
                {name: "呼和浩特", value: 58},
                {name: "成都", value: 58},
                {name: "大同", value: 58},
                {name: "镇江", value: 59},
                {name: "桂林", value: 59},
                {name: "张家界", value: 59},
                {name: "宜兴", value: 59},
                {name: "北海", value: 60},
                {name: "西安", value: 61},
                {name: "金坛", value: 62},
                {name: "东营", value: 62},
                {name: "牡丹江", value: 63},
                {name: "遵义", value: 63},
                {name: "绍兴", value: 63},
                {name: "扬州", value: 64},
                {name: "常州", value: 64},
                {name: "潍坊", value: 65},
                {name: "重庆", value: 66},
                {name: "台州", value: 67},
                {name: "南京", value: 67},
                {name: "滨州", value: 70},
                {name: "贵阳", value: 71},
                {name: "无锡", value: 71},
                {name: "本溪", value: 71},
                {name: "克拉玛依", value: 72},
                {name: "渭南", value: 72},
                {name: "马鞍山", value: 72},
                {name: "宝鸡", value: 72},
                {name: "焦作", value: 75},
                {name: "句容", value: 75},
                {name: "北京", value: 79},
                {name: "徐州", value: 79},
                {name: "衡水", value: 80},
                {name: "包头", value: 80},
                {name: "绵阳", value: 80},
                {name: "乌鲁木齐", value: 84},
                {name: "枣庄", value: 84},
                {name: "杭州", value: 84},
                {name: "淄博", value: 85},
                {name: "鞍山", value: 86},
                {name: "溧阳", value: 86},
                {name: "库尔勒", value: 86},
                {name: "安阳", value: 90},
                {name: "开封", value: 90},
                {name: "济南", value: 92},
                {name: "德阳", value: 93},
                {name: "温州", value: 95},
                {name: "九江", value: 96},
                {name: "邯郸", value: 98},
                {name: "临安", value: 99},
                {name: "兰州", value: 99},
                {name: "沧州", value: 100},
                {name: "临沂", value: 103},
                {name: "南充", value: 104},
                {name: "天津", value: 105},
                {name: "富阳", value: 106},
                {name: "泰安", value: 112},
                {name: "诸暨", value: 112},
                {name: "郑州", value: 113},
                {name: "哈尔滨", value: 114},
                {name: "聊城", value: 116},
                {name: "芜湖", value: 117},
                {name: "唐山", value: 119},
                {name: "平顶山", value: 119},
                {name: "邢台", value: 119},
                {name: "德州", value: 120},
                {name: "济宁", value: 120},
                {name: "荆州", value: 127},
                {name: "宜昌", value: 130},
                {name: "义乌", value: 132},
                {name: "丽水", value: 133},
                {name: "洛阳", value: 134},
                {name: "秦皇岛", value: 136},
                {name: "株洲", value: 143},
                {name: "石家庄", value: 147},
                {name: "莱芜", value: 148},
                {name: "常德", value: 152},
                {name: "保定", value: 153},
                {name: "湘潭", value: 154},
                {name: "金华", value: 157},
                {name: "岳阳", value: 169},
                {name: "长沙", value: 175},
                {name: "衢州", value: 177},
                {name: "廊坊", value: 193},
                {name: "菏泽", value: 194},
                {name: "合肥", value: 229},
                {name: "武汉", value: 273},
                {name: "大庆", value: 279}
              ]),
              symbolSize: 12,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                emphasis: {
                  borderColor: '#fff',
                  borderWidth: 1
                }
              }
            }
          ]
        };
        let show = this.echarts.init(document.getElementById('pic'));
        show.setOption(option);
      },
      drawing1() {
        const echarts = require('echarts/lib/echarts');
        require('echarts/map/js/china');
        let geoCoordMap = {
          '上海': [121.4648, 31.2891],
          '东莞': [113.8953, 22.901],
          '东营': [118.7073, 37.5513],
          '中山': [113.4229, 22.478],
          '临汾': [111.4783, 36.1615],
          '临沂': [118.3118, 35.2936],
          '丹东': [124.541, 40.4242],
          '丽水': [119.5642, 28.1854],
          '新疆': [86.9236, 41.5883],
          '佛山': [112.8955, 23.1097],
          '保定': [115.0488, 39.0948],
          '甘肃': [103.9901, 36.3043],
          '北京': [116.4551, 40.4539],
          '北海': [109.314, 21.6211],
          '江苏': [120.2062, 32.9208],
          '广西': [108.479, 24.1152],
          '江西': [116.0046, 28.6633],
          '南通': [121.1023, 32.1625],
          '厦门': [118.1689, 24.6478],
          '台州': [121.1353, 28.6688],
          '安徽': [117.29, 32.0581],
          '内蒙古': [111.4124, 41.4901],
          '咸阳': [108.4131, 34.8706],
          '黑龙江': [127.9688, 46.868],
          '唐山': [118.4766, 39.6826],
          '嘉兴': [120.9155, 30.6354],
          '大同': [113.7854, 39.8035],
          '天津': [117.4219, 39.4189],
          '山西': [112.3352, 37.9413],
          '威海': [121.9482, 37.1393],
          '宁波': [121.5967, 29.6466],
          '宝鸡': [107.1826, 34.3433],
          '宿迁': [118.5535, 33.7775],
          // '江苏': [119.3000,31.5582],
          '广东': [114.5107, 23.8196],
          '廊坊': [116.521, 39.0509],
          '延安': [109.1052, 36.4252],
          '张家口': [115.1477, 40.8527],
          '徐州': [117.5208, 34.3268],
          '德州': [116.6858, 37.2107],
          '惠州': [114.6204, 23.1647],
          '四川': [103.9526, 30.7617],
          '扬州': [119.4653, 32.8162],
          '承德': [117.5757, 41.4075],
          '西藏': [91.1865, 30.1465],
          '无锡': [120.3442, 31.5527],
          '日照': [119.2786, 35.5023],
          '云南': [101.9199, 25.0663],
          '浙江': [119.5313, 29.8773],
          '枣庄': [117.323, 34.8926],
          '柳州': [109.3799, 24.9774],
          '株洲': [113.5327, 27.0319],
          '湖北': [113.0896, 31.3628],
          '汕头': [117.1692, 23.3405],
          '江门': [112.6318, 22.1484],
          '辽宁': [123.1238, 42.1216],
          '沧州': [116.8286, 38.2104],
          '河源': [114.917, 23.9722],
          '泉州': [118.3228, 25.1147],
          '泰安': [117.0264, 36.0516],
          '泰州': [120.0586, 32.5525],
          '山东': [117.1582, 36.8701],
          '济宁': [116.8286, 35.3375],
          '海口': [110.3893, 19.8516],
          '淄博': [118.0371, 36.6064],
          '淮安': [118.927, 33.4039],
          '深圳': [114.5435, 22.5439],
          '清远': [112.9175, 24.3292],
          '温州': [120.498, 27.8119],
          '渭南': [109.7864, 35.0299],
          '湖州': [119.8608, 30.7782],
          '湘潭': [112.5439, 27.7075],
          '滨州': [117.8174, 37.4963],
          '潍坊': [119.0918, 36.524],
          '烟台': [120.7397, 37.5128],
          '玉溪': [101.9312, 23.8898],
          '珠海': [113.7305, 22.1155],
          '盐城': [120.2234, 33.5577],
          '盘锦': [121.9482, 41.0449],
          '河北': [115.4995, 38.6006],
          '福建': [118.0543, 26.5222],
          '秦皇岛': [119.2126, 40.0232],
          '绍兴': [120.564, 29.7565],
          '聊城': [115.9167, 36.4032],
          '肇庆': [112.1265, 23.5822],
          '舟山': [122.2559, 30.2234],
          '苏州': [120.6519, 31.3989],
          '莱芜': [117.6526, 36.2714],
          '菏泽': [115.6201, 35.2057],
          '营口': [122.4316, 40.4297],
          '葫芦岛': [120.1575, 40.578],
          '衡水': [115.8838, 37.7161],
          '衢州': [118.6853, 28.8666],
          '青海': [97.4038, 35.8207],
          '陕西': [109.1162, 34.2004],
          '贵州': [106.6992, 26.7682],
          '连云港': [119.1248, 34.552],
          '邢台': [114.8071, 37.2821],
          '邯郸': [114.4775, 36.535],
          '河南': [113.4668, 34.6234],
          '鄂尔多斯': [108.9734, 39.2487],
          '重庆': [107.7539, 30.1904],
          '金华': [120.0037, 29.1028],
          '铜川': [109.0393, 35.1947],
          '宁夏': [106.3586, 38.1775],
          '镇江': [119.4763, 31.9702],
          '吉林': [125.8154, 44.2584],
          '湖南': [111.8823, 28.2568],
          '长治': [112.8625, 36.4746],
          '阳泉': [113.4778, 38.0951],
          '青岛': [120.4651, 36.3373],
          '韶关': [113.7964, 24.7028],
          '海南': [109.8500, 19.7028],
          '台湾': [120.7964, 24.1528],
        };
        let BJData = [
          [{
            name: '海南'
          }],
          [{
            name: '台湾'
          }],
          [{
            name: '河北'
          }],
          [{
            name: '青海'
          }],
          [{
            name: '西藏'
          }],
          [{
            name: '山东'
          }],
          [{
            name: '宁夏'
          }],
          [{
            name: '山西'
          }],
          [{
            name: '陕西'
          }],
          [{
            name: '安徽'
          }],
          [{
            name: '江西'
          }],
          [{
            name: '广东'
          }],
          [{
            name: '黑龙江'
          }],
          [{
            name: '吉林'
          }],
          [{
            name: '辽宁'
          }],
          [{
            name: '湖北'
          }],
          [{
            name: '浙江'
          }],
          [{
            name: '福建'
          }],
          [{
            name: '重庆'
          }],
          [{
            name: '宁夏'
          }],
          [{
            name: '贵州'
          }],
          [{
            name: '湖南'
          }],
          [{
            name: '甘肃'
          }],
          [{
            name: '四川'
          }],
          [{
            name: '云南'
          }],
          [{
            name: '江苏'
          }],

          [{
            name: '北京',
            value: randomData()
          }, {
            name: '上海'
          }],
          [{
            name: '新疆',
            value: randomData()
          }, {
            name: '浙江'
          }],
          [{
            name: '新疆',
            value: randomData()
          }, {
            name: '安徽'
          }],
          [{
            name: '新疆',
            value: randomData()
          }, {
            name: '青海'
          }],
          [{
            name: '河南',
            value: randomData()
          }, {
            name: '江苏'
          }],

          [{
            name: '上海',
            value: randomData()
          }, {
            name: '江西'
          }],
          [{
            name: '上海',
            value: randomData()
          }, {
            name: '四川'
          }],
          [{
            name: '北京',
            value: randomData()
          }, {
            name: '广东'
          }],
          [{
            name: '上海',
            value: randomData()
          }, {
            name: '江苏'
          }],
          [{
            name: '广西',
            value: randomData()
          }, {
            name: '上海'
          }],

          [{
            name: '北京',
            value: randomData()
          }, {
            name: '四川'
          }],
          [{
            name: '内蒙古',
            value: randomData()
          }, {
            name: '江苏'
          }]
        ];

        function randomData() {
          return Math.round(Math.random() * 300);
        }

        let series = [{
          name: '接通率',
          type: "map",
          map: "china",
          zoom: 1.152,
          // top: '30',
          zlevel: 1,
          left: 'center',
          align: 'right',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            },
          },
          itemStyle: {
            normal: {
              borderColor: "#112b3b", //省市边界线
              borderColor: "#a7e4e6", //省市边界线
              shadowColor: 'rgba(166, 230, 236, 0.6)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 120
            },
            emphasis: {
              areaColor: "#4aafde",
              borderColor: "red"
            },
          },
          data: [{
            name: "北京",
            value: 400,
          },
            {
              name: "上海",
              value: 350
            }, {
              name: "天津",
              value: 300
            }, {
              name: "重庆",
              value: 200
            }, {
              name: "广东",
              value: 300
            }, {
              name: "广西",
              value: 10
            }, {
              name: "湖南",
              value: 200
            }, {
              name: "湖北",
              value: 300
            }, {
              name: "河南",
              value: 129
            }, {
              name: "河北",
              value: 390
            }, {
              name: "山东",
              value: 200
            }, {
              name: "山西",
              value: 60
            }, {
              name: "黑龙江",
              value: 400
            }, {
              name: "吉林",
              value: 201
            }, {
              name: "辽宁",
              value: 30
            }, {
              name: "内蒙古",
              value: 490
            }, {
              name: "新疆",
              value: 200
            }, {
              name: "西藏",
              value: 30
            }, {
              name: "宁夏",
              value: 50
            }, {
              name: "甘肃",
              value: 30
            }, {
              name: "云南",
              value: 30
            }, {
              name: "陕西",
              value: 30
            }, {
              name: "青海",
              value: 30
            }, {
              name: "贵州",
              value: 30
            }, {
              name: "福建",
              value: 220
            }, {
              name: "江西",
              value: 30
            }, {
              name: "四川",
              value: 210
            }, {
              name: "江苏",
              value: 140
            }, {
              name: "安徽",
              value: 30
            }, {
              name: "浙江",
              value: 333
            }, {
              name: "海南",
              value: 500
            }, {
              name: "台湾",
              value: 30
            }, {
              name: "南海诸岛",
              value: 0
            },
          ]
        }];
        BJData.forEach(function (item, i) {
          if (item.length === 1) {
            series.push({
              type: "effectScatter",
              coordinateSystem: "geo",
              zlevel: 2,
              label: {
                normal: {
                  show: true,
                  position: "bottom", //显示位置
                  offset: [0, 0], //偏移设置
                  color: "#fff",
                  formatter: "{b}", //圆环显示文字
                  fontWeight: "lighter",
                  fontSize: 10
                },
                emphasis: {
                  show: true
                },
              },
              symbol: "circle",
              symbolSize: function (val) {
                return 0.0001 //圆环大小
              },
              itemStyle: {
                normal: {
                  color: "#fff",
                  show: false,

                },
                emphasis: {
                  show: false,

                }
              },
              data: [{
                name: item[0].name,
                value: geoCoordMap[item[0].name]
              }]
            })
          } else {
            series.push({
                name: '上海-广州',
                type: "lines",
                zlevel: 2,
                animationDuration: function (idx) {
                  // 越往后的数据延迟越大
                  return idx * 400;
                },
                animationDelay: function (idx) {
                  // 越往后的数据延迟越大
                  return idx * 100;
                },
                effect: {
                  show: true,
                  color: "#fff",
                  period: 2, //箭头指向速度，值越小速度越快
                  trailLength: 0.5, //特效尾迹长度[0,1]值越大，尾迹越长重
                  symbol: "circle", //箭头图标
                  symbolSize: 2, //图标大小
                  loop: true, //是否循环
                  delay: function (idx) {
                    console.log(idx)
                    return Math.round(Math.random() * 3000);
                  }
                },
                lineStyle: {
                  normal: {
                    color: 'red',
                    width: 0, //尾迹线条宽度
                    opacity: 0, //尾迹线条透明度
                    curveness: 0.4 //尾迹线条曲直度
                  }
                },
                data: [
                  [{
                    coord: geoCoordMap[item[0].name],
                    value: item[0].value
                  },
                    {
                      coord: geoCoordMap[item[1].name]
                    }
                  ]
                ]
              }, {
                type: "effectScatter",
                coordinateSystem: "geo",
                name: item[0].name,
                zlevel: 5,
                rippleEffect: {
                  //涟漪特效
                  period: 4, //动画时间，值越小速度越快
                  brushType: "stroke", //波纹绘制方式 stroke, fill
                  scale: 4 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                  normal: {
                    show: true,
                    position: "bottom", //显示位置
                    offset: [0, 4], //偏移设置
                    fontWeight: "lighter",
                    fontSize: 10,
                    color: "#fff",
                    formatter: "{b}" //圆环显示文字
                  },
                  emphasis: {
                    show: false
                  },
                },
                symbol: "circle",
                symbolSize: function (val) {
                  return 6 + val[2] / 2000; //圆环大小
                },
                itemStyle: {
                  normal: {
                    color: "#f00",
                    show: true,

                  },
                  emphasis: {
                    show: true,

                  }
                },
                data: [{
                  name: item[0].name,
                  value: geoCoordMap[item[0].name].concat([item[0].value])
                }]
              },
            );
          }

        });
        let option = {
          title: {
            text: '智能语音机器人实时数据',
            subtext: '数据纯属虚构',
            left: 'center',
            top: '40px',
            textStyle: {
              color: '#fff'
            }
          },
          backgroundColor: '#0e2832',

          visualMap: {
            //图例值控制
            show: true,
            type: 'piecewise',
            seriesIndex: 0,
            pieces: [{
              min: 401
            }, // 不指定 max，表示 max 为无限大（Infinity）。
              {
                min: 301,
                max: 400
              },
              {
                min: 201,
                max: 300
              },
              {
                min: 101,
                max: 200
              },
              {
                max: 100
              }
            ],

            showLabel: false,
            calculable: true,
          },
          geo: {
            map: "china",
            show: false,
            roam: false, //是否允许缩放
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: "120%",
            itemStyle: {
              normal: {
                show: 'true',
                color: "#0e2832", //地图背景色
                borderWidth: 2,
                borderColor: "#a7e4e6", //省市边界线
                shadowColor: 'rgba(166, 230, 236, 0.6)',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 120
              },
              emphasis: {
                show: 'true',
                color: "rgba(255, 43, 61, .9)" //悬浮背景
              }
            }
          },
          // legend: {
          //     orient: 'vertical',
          //     top: '30',
          //     left: 'center',
          //     align: 'right',
          //     data: [
          //     ],
          //     textStyle: {
          //         color: '#fff',
          //         fontSize: 20,
          //     },
          //     itemWidth: 50,
          //     itemHeight: 30,
          //     selectedMode: 'multiple'
          // },
          series: series
        };
        let show = echarts.init(document.getElementById('pic1'));
        show.setOption(option);
      },
      drawing2() {
        const echarts = require('echarts/lib/echarts.js');
        require('echarts/map/js/china.js');;
        let mapName = 'china';
        let data = [
          {name: "北京", value: 199},
          {name: "天津", value: 42},
          {name: "河北", value: 102},
          {name: "山西", value: 81},
          {name: "内蒙古", value: 47},
          {name: "辽宁", value: 67},
          {name: "吉林", value: 82},
          {name: "黑龙江", value: 123},
          {name: "上海", value: 24},
          {name: "江苏", value: 92},
          {name: "浙江", value: 114},
          {name: "安徽", value: 109},
          {name: "福建", value: 116},
          {name: "江西", value: 91},
          {name: "山东", value: 119},
          {name: "河南", value: 137},
          {name: "湖北", value: 116},
          {name: "湖南", value: 114},
          {name: "重庆", value: 91},
          {name: "四川", value: 125},
          {name: "贵州", value: 62},
          {name: "云南", value: 83},
          {name: "西藏", value: 9},
          {name: "陕西", value: 80},
          {name: "甘肃", value: 56},
          {name: "青海", value: 10},
          {name: "宁夏", value: 18},
          {name: "新疆", value: 180},
          {name: "广东", value: 123},
          {name: "广西", value: 59},
          {name: "海南", value: 14},
        ];

        let geoCoordMap = {};
        let toolTipData = [
          {name: "北京", value: [{name: "科技人才总数", value: 95}, {name: "理科", value: 82}]},
          {name: "天津", value: [{name: "文科", value: 22}, {name: "理科", value: 20}]},
          {name: "河北", value: [{name: "文科", value: 60}, {name: "理科", value: 42}]},
          {name: "山西", value: [{name: "文科", value: 40}, {name: "理科", value: 41}]},
          {name: "内蒙古", value: [{name: "文科", value: 23}, {name: "理科", value: 24}]},
          {name: "辽宁", value: [{name: "文科", value: 39}, {name: "理科", value: 28}]},
          {name: "吉林", value: [{name: "文科", value: 41}, {name: "理科", value: 41}]},
          {name: "黑龙江", value: [{name: "文科", value: 35}, {name: "理科", value: 31}]},
          {name: "上海", value: [{name: "文科", value: 12}, {name: "理科", value: 12}]},
          {name: "江苏", value: [{name: "文科", value: 47}, {name: "理科", value: 45}]},
          {name: "浙江", value: [{name: "文科", value: 57}, {name: "理科", value: 57}]},
          {name: "安徽", value: [{name: "文科", value: 57}, {name: "理科", value: 52}]},
          {name: "福建", value: [{name: "文科", value: 59}, {name: "理科", value: 57}]},
          {name: "江西", value: [{name: "文科", value: 49}, {name: "理科", value: 42}]},
          {name: "山东", value: [{name: "文科", value: 67}, {name: "理科", value: 52}]},
          {name: "河南", value: [{name: "文科", value: 69}, {name: "理科", value: 68}]},
          {name: "湖北", value: [{name: "文科", value: 60}, {name: "理科", value: 56}]},
          {name: "湖南", value: [{name: "文科", value: 62}, {name: "理科", value: 52}]},
          {name: "重庆", value: [{name: "文科", value: 47}, {name: "理科", value: 44}]},
          {name: "四川", value: [{name: "文科", value: 65}, {name: "理科", value: 60}]},
          {name: "贵州", value: [{name: "文科", value: 32}, {name: "理科", value: 30}]},
          {name: "云南", value: [{name: "文科", value: 42}, {name: "理科", value: 41}]},
          {name: "西藏", value: [{name: "文科", value: 5}, {name: "理科", value: 4}]},
          {name: "陕西", value: [{name: "文科", value: 38}, {name: "理科", value: 42}]},
          {name: "甘肃", value: [{name: "文科", value: 28}, {name: "理科", value: 28}]},
          {name: "青海", value: [{name: "文科", value: 5}, {name: "理科", value: 5}]},
          {name: "宁夏", value: [{name: "文科", value: 10}, {name: "理科", value: 8}]},
          {name: "新疆", value: [{name: "文科", value: 36}, {name: "理科", value: 31}]},
          {name: "广东", value: [{name: "文科", value: 63}, {name: "理科", value: 60}]},
          {name: "广西", value: [{name: "文科", value: 29}, {name: "理科", value: 30}]},
          {name: "海南", value: [{name: "文科", value: 8}, {name: "理科", value: 6}]},
        ];
        let myChart = this.echarts.init(document.getElementById('pic2'));

        /*获取地图数据*/
        myChart.showLoading();
        let mapFeatures = this.echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        mapFeatures.forEach(function (v) {
          // 地区名称
          let name = v.properties.name;
          // 地区经纬度
          geoCoordMap[name] = v.properties.cp;

        });
        let convertData = function (data) {
          let res = [];
          for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
              });
            }
          }
          return res;
        };
        let option = {
          tooltip: {
            padding: 0,
            enterable: true,
            transitionDuration: 1,
            textStyle: {
              color: '#000',
              decoration: 'none',
            },
            // position: function (point, params, dom, rect, size) {
            //   return [point[0], point[1]];
            // },
            formatter: function (params) {
              // console.log(params)
              let tipHtml = '';
              tipHtml = '<div style="width:280px;height:180px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">'
                + '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">' + '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' + '</i>'
                + '<span style="margin-left:10px;color:#fff;font-size:16px;">' + params.name + '</span>' + '</div>'
                + '<div style="padding:20px">'
                + '<p style="color:#fff;font-size:12px;">' + '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' + '</i>'
                + '单位总数：' + '<span style="color:#11ee7d;margin:0 6px;">' + toolTipData.length + '</span>' + '个' + '</p>'
                + '<p style="color:#fff;font-size:12px;">' + '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' + '</i>'
                + '总人数：' + '<span style="color:#f48225;margin:0 6px;">' + toolTipData.length + '</span>' + '个' + '</p>'
                + '<p style="color:#fff;font-size:12px;">' + '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' + '</i>'
                + '总人数：' + '<span style="color:#f4e925;margin:0 6px;">' + toolTipData.length + '</span>' + '个' + '</p>'
                + '<p style="color:#fff;font-size:12px;">' + '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' + '</i>'
                + '总人数：' + '<span style="color:#25f4f2;margin:0 6px;">' + toolTipData.length + '</span>' + '个' + '</p>'
                + '</div>' + '</div>';
              setTimeout(function () {
                tooltipCharts(params.name);
              }, 10);
              return tipHtml;
            }

          },

          visualMap: {
            show: true,
            min: 0,
            max: 200,
            left: '10%',
            top: 'bottom',
            calculable: true,
            seriesIndex: [1],
            inRange: {
              color: ['#04387b', '#467bc0'] // 蓝绿
            }
          },
          geo: {
            show: true,
            map: mapName,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
              }
            },
            roam: false,
            itemStyle: {
              normal: {
                areaColor: '#023677',
                borderColor: '#1180c7',
              },
              emphasis: {
                areaColor: '#4499d0',
              }
            }
          },
          series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#fff'
              }
            }
          },
            {
              type: 'map',
              map: mapName,
              geoIndex: 0,
              aspectScale: 0.75, //长宽比
              showLegendSymbol: false, // 存在legend时显示
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: false,
                  textStyle: {
                    color: '#fff'
                  }
                }
              },
              roam: true,
              itemStyle: {
                normal: {
                  areaColor: '#031525',
                  borderColor: '#3B5077',
                },
                emphasis: {
                  areaColor: '#2B91B7'
                }
              },
              animation: false,
              data: data
            },
            {
              name: '点',
              type: 'scatter',
              coordinateSystem: 'geo',
              zlevel: 6,
            },
            {
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
              }).slice(0, 10)),
              symbolSize: function (val) {
                return val[2] / 10;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'left',
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  color: 'yellow',
                  shadowBlur: 10,
                  shadowColor: 'yellow'
                }
              },
              zlevel: 1
            },

          ]
        };
        myChart.setOption(option);
      }
    }
  }
</script>

<style scoped lang="less">
  #cy,
  #pic4,
  #pic3,
  #pic2,
  #pic1,
  #pic
  {
    height: 500px;
  }
  .hello{
    background-color: #2c3e50;
  }
</style>



