<template>
  <div>
    <a-card class="nowCard">
      <div style="display:flex;justify-content: space-between;width: 90%;">
        <div class="todayStatus">
          <p>{{ date + '日' }}</p>
          <div class="cond">
            <p class="temp">{{ tmp }}℃</p>
            <p class="todayTemp">{{ cond_txt }}</p>
          </div>
          <div class="nowWindPower">
            <p>{{ windDirection }}</p>
            <p style="padding-left: 10px;">{{ windPower + '级' }}</p>
          </div>
          <div class="airQuaility">
            <p>空气质量</p>
             <p style="padding-left: 10px;">{{ airQuality }}「{{ evaluation }}」</p>
          </div>
        </div>
        <div class="todayWeatherIcon">
          <img :src="weatherIcon" style="width: 100%; height: 100%;"/>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import ParamidaPay from '../paramidaPay'
require('../viewstyle/nowCard.scss')

export default {
  props: ['city'],
  data() {
    return {
      tmp: 0,
      cond_txt: '',
      date: '',
      weatherIcon: '',
      windDirection: '',
      windPower: '',
      airQuality: '',
      evaluation: ''
    }
  },
  watch: {
    city(val) {
      this.getNowWeather(val)
    }
  },
  methods: {
    // 获取实况天气
    getNowWeather(val) {
      ParamidaPay.ApiCaller.get('/now', {
        location: val,
        key: this.$store.state.key
      }, response => {
        if(response.HeWeather6[0].status == 'ok') {
          this.tmp = response.HeWeather6[0].now.tmp
          this.cond_txt = response.HeWeather6[0].now.cond_txt
          this.windDirection = response.HeWeather6[0].now.wind_dir
          this.windPower = response.HeWeather6[0].now.wind_sc // 风力
          this.date = response.HeWeather6[0].update.loc.substring(5, 10).replace('-', '月')
          let updateTime = response.HeWeather6[0].update.loc.substring(11)
          this.$emit('update', updateTime)
          this.getNowWeatherIcon()
        } else {
          this.$message.error('请求失效')
        }
      }, response => {
        this.$message.error('请求失效')
      })
    },
    // 获取空气质量
    getAirQuality() {
      ParamidaPay.ApiCaller.getAirQuailty('/now', {
        location: 'shenzhen',
        key: this.$store.state.key
      }, response => {
        if(response.HeWeather6[0].status == 'ok') {
          this.airQuality = response.HeWeather6[0].air_now_city.aqi
          this.evaluation = response.HeWeather6[0].air_now_city.qlty
        } else {
          this.$message.error('请求失效')
        }
      }, response => {
        this.$message.error('请求失效')
      })
    },
    // 获取天气图标
    getNowWeatherIcon() {
      if(this.cond_txt == '晴') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/100.png'
      } else if(this.cond_txt == '多云') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/101.png'
      } else if(this.cond_txt == '少云') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/102.png'
      } else if(this.cond_txt == '晴间多云 ') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/103.png'
      } else if(this.cond_txt == '阴') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/104.png'
      } else if(this.cond_txt == '有风') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/200.png'
      } else if(this.cond_txt == '平静') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/201.png'
      } else if(this.cond_txt == '微风') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/202.png'
      } else if(this.cond_txt == '和风') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/203.png'
      } else if(this.cond_txt == '清风') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/204.png'
      } else if(this.cond_txt == '强风/劲风') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/205.png'
      } else if(this.cond_txt == '疾风') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/206.png'
      } else if(this.cond_txt == '大风') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/207.png'
      } else if(this.cond_txt == '烈风') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/208.png'
      } else if(this.cond_txt == '风暴') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/209.png'
      } else if(this.cond_txt == '狂爆风') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/210.png'
      } else if(this.cond_txt == '飓风') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/211.png'
      } else if(this.cond_txt == '龙卷风') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/212.png'
      } else if(this.cond_txt == '热带风暴') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/213.png'
      } else if(this.cond_txt == '阵雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/300.png'
      } else if(this.cond_txt == '强阵雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/301.png'
      } else if(this.cond_txt == '雷阵雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/302.png'
      } else if(this.cond_txt == '强雷阵雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/303.png'
      } else if(this.cond_txt == '雷阵雨伴有冰雹') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/304.png'
      } else if(this.cond_txt == '小雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/305.png'
      } else if(this.cond_txt == '中雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/306.png'
      } else if(this.cond_txt == '大雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/307.png'
      } else if(this.cond_txt == '极端降雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/308.png'
      } else if(this.cond_txt == '毛毛雨/细雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/309.png'
      } else if(this.cond_txt == '暴雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/310.png'
      } else if(this.cond_txt == '大暴雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/311.png'
      } else if(this.cond_txt == '特大暴雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/312.png'
      } else if(this.cond_txt == '冻雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/313.png'
      } else if(this.cond_txt == '小到中雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/314.png'
      } else if(this.cond_txt == '中到大雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/315.png'
      } else if(this.cond_txt == '大到暴雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/316.png'
      } else if(this.cond_txt == '暴雨到大暴雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/317.png'
      } else if(this.cond_txt == '大暴雨到特大暴雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/318.png'
      } else if(this.cond_txt == '雨') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/399.png'
      } else if(this.cond_txt == '小雪') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/400.png'
      } else if(this.cond_txt == '中雪') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/401.png'
      } else if(this.cond_txt == '大雪') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/402.png'
      } else if(this.cond_txt == '暴雪') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/403.png'
      } else if(this.cond_txt == '雨夹雪') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/404.png'
      } else if(this.cond_txt == '雨雪天气') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/405.png'
      } else if(this.cond_txt == '阵雨夹雪') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/406.png'
      } else if(this.cond_txt == '阵雪') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/407.png'
      } else if(this.cond_txt == '小到中雪') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/408.png'
      } else if(this.cond_txt == '中到大雪') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/409.png'
      } else if(this.cond_txt == '大到暴雪') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/410.png'
      } else if(this.cond_txt == '雪') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/499.png'
      } else if(this.cond_txt == '薄雾') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/500.png'
      } else if(this.cond_txt == '雾') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/501.png'
      } else if(this.cond_txt == '霾') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/502.png'
      } else if(this.cond_txt == '扬沙') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/503.png'
      } else if(this.cond_txt == '浮尘') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/504.png'
      } else if(this.cond_txt == '沙尘暴') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/507.png'
      } else if(this.cond_txt == '强沙尘暴') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/508.png'
      } else if(this.cond_txt == '浓雾') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/509.png'
      } else if(this.cond_txt == '强浓雾') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/510.png'
      } else if(this.cond_txt == '中度霾') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/511.png'
      } else if(this.cond_txt == '重度霾') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/512.png'
      } else if(this.cond_txt == '严重霾') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/513.png'
      } else if(this.cond_txt == '大雾') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/514.png'
      } else if(this.cond_txt == '特强浓雾') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/515.png'
      } else if(this.cond_txt == '热') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/900.png'
      } else if(this.cond_txt == '冷') {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/901.png'
      } else {
        this.weatherIcon = 'https://cdn.heweather.com/cond_icon/999.png'
      }
    }
  },
  mounted() {
    this.getNowWeather('shenzhen')
    this.getAirQuality()
  }
}
</script>

<style scoped>

</style>


