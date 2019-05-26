<template>
  <div>
    <a-card class="todayCard">
      <div style="width:100%;height:100%">
        <div class="date">
          <p>{{ today }}</p>
          <p class="dateText">「今天」</p>
        </div>
        <p class="tempDistance">{{ temp }}</p>
        <div class="tempIcon">
          <div class="firstIcon">
            <img :src="cond_txt_dIcon" style="width: 100%; height: 100%;" />
          </div>
          <div class="firstIcon">
            <img :src="cond_txt_nIcon" style="width: 100%; height: 100%;" />
          </div>
        </div>
        <div class="todayWeatherText">
          {{ todayWeatherText }}
        </div>
        <div class="windInfo">
          <p>{{ windDirection }}&nbsp;&nbsp;{{ windPower }}</p>
        </div>
        <div class="rainfall">
          <p>降水概率: {{ rainPossibility }}</p>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import ParamidaPay from '../paramidaPay'
require('../viewstyle/todayCard.scss')

export default {
  props: ['city'],
  data() {
    return {
      nowWeatherObject: {},
      today: '',
      temp: '',
      todayWeatherText: '',
      windPower: '',
      windDirection: '',
      rainPossibility: '',
      cond_txt_dIcon: '',
      cond_txt_nIcon: ''
    }
  },
  watch: {
    city(val) {
      this.getTodayWeatherInfo(val)
    }
  },
  methods: {
    getTodayWeatherInfo(val) {
      ParamidaPay.ApiCaller.get('/forecast', {
        location: val,
        key: this.$store.state.key
      }, response => {
        if(response.HeWeather6[0].status == 'ok') {
          this.nowWeatherObject = response.HeWeather6[0].daily_forecast[0]
          this.today = this.nowWeatherObject.date.substring(8) + '日'
          if(this.nowWeatherObject.tmp_min !== this.nowWeatherObject.tmp_max)
          this.temp = this.nowWeatherObject.tmp_min + '~' + this.nowWeatherObject.tmp_max + '℃'
          else this.temp = this.nowWeatherObject.tmp_min
          if(this.nowWeatherObject.cond_txt_d !== this.nowWeatherObject.cond_txt_n)
            this.todayWeatherText = this.nowWeatherObject.cond_txt_d + '转' + this.nowWeatherObject.cond_txt_n
          else this.todayWeatherText = this.nowWeatherObject.cond_txt_d
          this.windPower = this.nowWeatherObject.wind_sc + '级'
          this.windDirection = this.nowWeatherObject.wind_dir
          this.rainPossibility = this.nowWeatherObject.pop + '%'
          this.getTodayWeatherIcon()
        } else {
          this.$message.error('请求失效')
        }
      }, response => {
        this.$message.error('请求失效')
      })
    },
    getTodayWeatherIcon() {
      if(this.nowWeatherObject.cond_txt_d == '晴' || this.nowWeatherObject.cond_txt_n ==  '晴') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/100.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/100.png'
      } else if(this.nowWeatherObject.cond_txt_d == '多云' || this.nowWeatherObject.cond_txt_n ==  '多云') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/101.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/101.png'
      } else if(this.nowWeatherObject.cond_txt_d == '少云' || this.nowWeatherObject.cond_txt_n == '少云') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/102.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/102.png'
      } else if(this.nowWeatherObject.cond_txt_d == '晴间多云' || this.nowWeatherObject.cond_txt_n == '晴间多云') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/103.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/103.png'
      } else if(this.nowWeatherObject.cond_txt_d == '阴' || this.nowWeatherObject.cond_txt_n == '阴') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/104.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/104.png'
      } else if(this.nowWeatherObject.cond_txt_d == '有风' || this.nowWeatherObject.cond_txt_n == '有风') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/200.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/200.png'
      } else if(this.nowWeatherObject.cond_txt_d == '平静' || this.nowWeatherObject.cond_txt_n == '平静') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/201.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/201.png'
      } else if(this.nowWeatherObject.cond_txt_d == '微风' || this.nowWeatherObject.cond_txt_n == '微风') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/202.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/202.png'
      } else if(this.nowWeatherObject.cond_txt_d == '和风' || this.nowWeatherObject.cond_txt_n == '和风') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/203.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/203.png'
      } else if(this.nowWeatherObject.cond_txt_d == '清风' || this.nowWeatherObject.cond_txt_n == '清风') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/204.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/204.png'
      } else if(this.nowWeatherObject.cond_txt_d == '强风/劲风' || this.nowWeatherObject.cond_txt_n == '强风/劲风') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/205.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/205.png'
      } else if(this.nowWeatherObject.cond_txt_d == '疾风' || this.nowWeatherObject.cond_txt_n == '疾风') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/206.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/206.png'
      } else if(this.nowWeatherObject.cond_txt_d == '大风' || this.nowWeatherObject.cond_txt_n == '大风') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/207.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/207.png'
      } else if(this.nowWeatherObject.cond_txt_d == '烈风' || this.nowWeatherObject.cond_txt_n == '烈风') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/208.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/208.png'
      } else if(this.nowWeatherObject.cond_txt_d == '风暴' || this.nowWeatherObject.cond_txt_n == '风暴') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/209.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/209.png'
      } else if(this.nowWeatherObject.cond_txt_d == '狂爆风' || this.nowWeatherObject.cond_txt_n == '狂暴风') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/210.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/210.png'
      } else if(this.nowWeatherObject.cond_txt_d == '飓风' || this.nowWeatherObject.cond_txt_n == '飓风') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/211.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/211.png'
      } else if(this.nowWeatherObject.cond_txt_d == '龙卷风' || this.nowWeatherObject.cond_txt_n == '龙卷风') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/212.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/212.png'
      } else if(this.nowWeatherObject.cond_txt_d == '热带风暴' || this.nowWeatherObject.cond_txt_n == '热带风暴') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/213.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/213.png'
      } else if(this.nowWeatherObject.cond_txt_d == '阵雨' || this.nowWeatherObject.cond_txt_n == '阵雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/300.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/300.png'
      } else if(this.nowWeatherObject.cond_txt_d == '强阵雨' || this.nowWeatherObject.cond_txt_n == '强阵雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/301.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/301.png'
      } else if(this.nowWeatherObject.cond_txt_d == '雷阵雨' || this.nowWeatherObject.cond_txt_n == '雷阵雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/302.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/302.png'
      } else if(this.nowWeatherObject.cond_txt_d == '强雷阵雨' || this.nowWeatherObject.cond_txt_n == '强雷阵雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/303.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/303.png'
      } else if(this.nowWeatherObject.cond_txt_d == '雷阵雨伴有冰雹' || this.nowWeatherObject.cond_txt_n == '雷阵雨伴有冰雹') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/304.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/304.png'
      } else if(this.nowWeatherObject.cond_txt_d == '小雨' || this.nowWeatherObject.cond_txt_n == '小雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/305.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/305.png'
      } else if(this.nowWeatherObject.cond_txt_d == '中雨' || this.nowWeatherObject.cond_txt_n == '中雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/306.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/306.png'
      } else if(this.nowWeatherObject.cond_txt_d == '大雨' || this.nowWeatherObject.cond_txt_n == '大雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/307.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/307.png'
      } else if(this.nowWeatherObject.cond_txt_d == '极端降雨' || this.nowWeatherObject.cond_txt_n == '极端降雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/308.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/308.png'
      } else if(this.nowWeatherObject.cond_txt_d == '毛毛雨/细雨' || this.nowWeatherObject.cond_txt_n == '毛毛雨/细雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/309.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/309.png'
      } else if(this.nowWeatherObject.cond_txt_d == '暴雨' || this.nowWeatherObject.cond_txt_n == '暴雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/310.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/310.png'
      } else if(this.nowWeatherObject.cond_txt_d == '大暴雨' || this.nowWeatherObject.cond_txt_n == '大暴雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/311.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/311.png'
      } else if(this.nowWeatherObject.cond_txt_d == '特大暴雨' || this.nowWeatherObject.cond_txt_n == '特大暴雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/312.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/312.png'
      } else if(this.nowWeatherObject.cond_txt_d == '冻雨' || this.nowWeatherObject.cond_txt_n == '冻雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/313.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/313.png'
      } else if(this.nowWeatherObject.cond_txt_d == '小到中雨' || this.nowWeatherObject.cond_txt_n == '小到中雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/314.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/314.png'
      } else if(this.nowWeatherObject.cond_txt_d == '中到大雨' || this.nowWeatherObject.cond_txt_n == '中到大雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/315.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/315.png'
      } else if(this.nowWeatherObject.cond_txt_d == '大到暴雨' || this.nowWeatherObject.cond_txt_n == '大到暴雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/316.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/316.png'
      } else if(this.nowWeatherObject.cond_txt_d == '暴雨到大暴雨' || this.nowWeatherObject.cond_txt_n == '暴雨到大暴雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/317.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/317.png'
      } else if(this.nowWeatherObject.cond_txt_d == '大暴雨到特大暴雨' || this.nowWeatherObject.cond_txt_n == '大暴雨到特大暴雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/318.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/318.png'
      } else if(this.nowWeatherObject.cond_txt_d == '雨' || this.nowWeatherObject.cond_txt_n == '雨') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/399.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/399.png'
      } else if(this.nowWeatherObject.cond_txt_d == '小雪' || this.nowWeatherObject.cond_txt_n == '小雪') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/400.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/400.png'
      } else if(this.nowWeatherObject.cond_txt_d == '中雪' || this.nowWeatherObject.cond_txt_n == '中雪') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/401.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/401.png'
      } else if(this.nowWeatherObject.cond_txt_d == '大雪' || this.nowWeatherObject.cond_txt_n == '大雪') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/402.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/402.png'
      } else if(this.nowWeatherObject.cond_txt_d == '暴雪' || this.nowWeatherObject.cond_txt_n == '暴雪') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/403.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/403.png'
      } else if(this.nowWeatherObject.cond_txt_d == '雨夹雪' || this.nowWeatherObject.cond_txt_n == '雨夹雪') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/404.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/404.png'
      } else if(this.nowWeatherObject.cond_txt_d == '雨雪天气' || this.nowWeatherObject.cond_txt_n == '雨雪天气') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/405.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/405.png'
      } else if(this.nowWeatherObject.cond_txt_d == '阵雨夹雪' || this.nowWeatherObject.cond_txt_n == '阵雨夹雪') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/406.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/406.png'
      } else if(this.nowWeatherObject.cond_txt_d == '阵雪' || this.nowWeatherObject.cond_txt_n == '阵雪') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/407.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/407.png'
      } else if(this.nowWeatherObject.cond_txt_d == '小到中雪' || this.nowWeatherObject.cond_txt_n == '小到中雪') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/408.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/408.png'
      } else if(this.nowWeatherObject.cond_txt_d == '中到大雪' || this.nowWeatherObject.cond_txt_n == '中到大雪') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/409.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/409.png'
      } else if(this.nowWeatherObject.cond_txt_d == '大到暴雪' || this.nowWeatherObject.cond_txt_n == '大到暴雪') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/410.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/410.png'
      } else if(this.nowWeatherObject.cond_txt_d == '雪' || this.nowWeatherObject.cond_txt_n == '雪') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/499.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/499.png'
      } else if(this.nowWeatherObject.cond_txt_d == '薄雾' || this.nowWeatherObject.cond_txt_n == '薄雾') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/500.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/500.png'
      } else if(this.nowWeatherObject.cond_txt_d == '雾' || this.nowWeatherObject.cond_txt_n == '雾') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/501.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/501.png'
      } else if(this.nowWeatherObject.cond_txt_d == '霾' || this.nowWeatherObject.cond_txt_n == '霾') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/502.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/502.png'
      } else if(this.nowWeatherObject.cond_txt_d == '扬沙' || this.nowWeatherObject.cond_txt_n == '扬沙') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/503.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/503.png'
      } else if(this.nowWeatherObject.cond_txt_d == '浮尘' || this.nowWeatherObject.cond_txt_n == '浮尘') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/504.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/504.png'
      } else if(this.nowWeatherObject.cond_txt_d == '沙尘暴' || this.nowWeatherObject.cond_txt_n == '沙尘暴') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/507.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/507.png'
      } else if(this.nowWeatherObject.cond_txt_d == '强沙尘暴' || this.nowWeatherObject.cond_txt_n == '强沙尘暴') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/508.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/508.png'
      } else if(this.nowWeatherObject.cond_txt_d == '浓雾' || this.nowWeatherObject.cond_txt_n == '浓雾') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/509.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/509.png'
      } else if(this.nowWeatherObject.cond_txt_d == '强浓雾' || this.nowWeatherObject.cond_txt_n == '强浓雾') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/510.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/510.png'
      } else if(this.nowWeatherObject.cond_txt_d == '中度霾' || this.nowWeatherObject.cond_txt_n == '中度霾') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/511.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/511.png'
      } else if(this.nowWeatherObject.cond_txt_d == '重度霾' || this.nowWeatherObject.cond_txt_n == '重度霾') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/512.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/512.png'
      } else if(this.nowWeatherObject.cond_txt_d == '严重霾' || this.nowWeatherObject.cond_txt_n == '严重霾') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/513.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/513.png'
      } else if(this.nowWeatherObject.cond_txt_d == '大雾' || this.nowWeatherObject.cond_txt_n == '大雾') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/514.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/514.png'
      } else if(this.nowWeatherObject.cond_txt_d == '特强浓雾' || this.nowWeatherObject.cond_txt_n == '特强浓雾') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/515.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/515.png'
      } else if(this.nowWeatherObject.cond_txt_d == '热' || this.nowWeatherObject.cond_txt_n == '热') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/900.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/900.png'
      } else if(this.nowWeatherObject.cond_txt_d == '冷' || this.nowWeatherObject.cond_txt_n == '冷') {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/901.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/901.png'
      } else {
        this.cond_txt_dIcon = 'https://cdn.heweather.com/cond_icon/999.png'
        this.cond_txt_nIcon = 'https://cdn.heweather.com/cond_icon/999.png'
      }
    }
  },
  created() {
    this.getTodayWeatherInfo('shenzhen')
  }
}
</script>

<style scoped>

</style>


