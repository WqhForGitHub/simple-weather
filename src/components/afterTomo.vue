<template>
    <div id="afterTomo">
      <!--绘制未来两天天气信息-->
      <el-card class="box-card" id="TheThirdCard">
        <span id="TheThirdmystyle"></span>
        <span id="TheThirdtoday"></span>
        <span id="TheThirdTemp"></span>
        <div  id="thethirdweatherpc" :class="{
        recentlydark:flagafterTomdark,
        recentlybigrain:flagafterTombigrain,
        recentlybaoyu:flagafterTombaoyu,
        recentlyleizhenyu:flagafterTomleizhenyu,
        recentlymai:flagafterTommai,
        recentlysunny:flagafterTomsunny,
        recentlywu:flagafterTomwu,
        recentlyzhenyu:flagafterTomzhenyu,
        recentlymorecloudy:flagafterTommorecloudy,
        recentlysmallrain:flagafterTomsmallrain,
        recentlysunnyandcouldy:flagafterTomsunnyandcouldy,
        recentlymiddlerain:flagafterTommiddlerain,
        recentlyheavystrom:flagafterTomheavystrom,
        recentlyseverestrom:flagafterTomseverestrom,
        recentlylightsnow:flagafterTomlightsnow,
        recentlymiddlesnow:flagafterTommiddlesnow,
        recentlyheavysnow:flagafterTomheavysnow,
        recentlysleet:flagafterTomsleet,
        recentlysnowflurry:flagafterTomsnowflurry,
        recentlysnowstrom:flagafterTomsnowstrom
        }"></div>
        <div  id="thethirdweatherpctwo" :class="{
        recentlydark:flagafterTomseconddaydark,
        recentlybigrain:flagafterTomseconddaybigrain,
        recentlybaoyu:flagafterTomseconddaybaoyu,
        recentlyleizhenyu:flagafterTomseconddayleizhenyu,
        recentlymai:flagafterTomseconddaymai,
        recentlysunny:flagafterTomseconddaysunny,
        recentlywu:flagafterTomseconddaywu,
        recentlyzhenyu:flagafterTomseconddayzhenyu,
        recentlymorecloudy:flagafterTomseconddaymorecloudy,
        recentlysmallrain:flagafterTomseconddaysmallrain,
        recentlysunnyandcouldy:flagafterTomseconddaysunnyandcouldy,
        recentlymiddlerainone:flagafterTomseconddaymiddlerain,
        recentlyheavystrom:flagafterTomseconddayheavystrom,
        recentlyseverestrom:flagafterTomseconddayseverestrom,
        recentlylightsnow:flagafterTomseconddaylightsnow,
        recentlymiddlesnow:flagafterTomseconddaymiddlesnow,
        recentlyheavysnow:flagafterTomseconddayheavysnow,
        recentlysleet:flagafterTomseconddaysleet,
        recentlysnowflurry:flagafterTomseconddaysnowflurry,
        recentlysnowstrom:flagafterTomseconddaysnowstrom
        }"></div>
        <span id="TheThirdcondTxt"></span>
        <span id="TheThirdwinddir"></span>
        <span id="TheThirdwindsc"></span>
        <span id="TheThirdwaterpop"></span>
      </el-card>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      flagafterTomdark: false,
      flagafterTombigrain: false,
      flagafterTombaoyu: false,
      flagafterTomleizhenyu: false,
      flagafterTommai: false,
      flagafterTomsunny: false,
      flagafterTomwu: false,
      flagafterTomzhenyu: false,
      flagafterTommorecloudy: false,
      flagafterTomsmallrain: false,
      flagafterTomsunnyandcouldy: false,
      flagafterTommiddlerain: false,
      flagafterTomheavystrom: false,
      flagafterTomseverestrom: false,
      flagafterTomlightsnow: false,
      flagafterTommiddlesnow: false,
      flagafterTomheavysnow: false,
      flagafterTomsleet: false,
      flagafterTomsnowflurry: false,
      flagafterTomsnowstrom: false,
      flagafterTomseconddaydark: false,
      flagafterTomseconddaybigrain: false,
      flagafterTomseconddaybaoyu: false,
      flagafterTomseconddayleizhenyu: false,
      flagafterTomseconddaymai: false,
      flagafterTomseconddaysunny: false,
      flagafterTomseconddaywu: false,
      flagafterTomseconddayzhenyu: false,
      flagafterTomseconddaymorecloudy: false,
      flagafterTomseconddaysmallrain: false,
      flagafterTomseconddaysunnyandcouldy: false,
      flagafterTomseconddaymiddlerain: false,
      flagafterTomseconddayheavystrom: false,
      flagafterTomseconddayseverestrom: false,
      flagafterTomseconddaylightsnow: false,
      flagafterTomseconddaymiddlesnow: false,
      flagafterTomseconddayheavysnow: false,
      flagafterTomseconddaysleet: false,
      flagafterTomseconddaysnowflurry: false,
      flagafterTomseconddaysnowstrom: false
    }
  },
  mounted: function () {
    var xmlhttp
    var HeFengkey = '&' + 'key' + '=' + 'dad99f28d0e344ecb45765e293f075c6'
    var _this = this
    xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var data = JSON.parse(xmlhttp.responseText)
        document.getElementById('TheThirdmystyle').innerHTML = data.HeWeather6[0].daily_forecast[2].date.slice(8, 10) + '日'
        document.getElementById('TheThirdtoday').innerHTML = '后天'
        document.getElementById('TheThirdTemp').innerHTML = data.HeWeather6[0].daily_forecast[2].tmp_min + '&nbsp;~&nbsp;' + data.HeWeather6[0].daily_forecast[2].tmp_max + '℃'
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === data.HeWeather6[0].daily_forecast[2].cond_txt_n) {
          document.getElementById('TheThirdcondTxt').innerHTML = data.HeWeather6[0].daily_forecast[2].cond_txt_d
        } else {
          document.getElementById('TheThirdcondTxt').innerHTML = data.HeWeather6[0].daily_forecast[2].cond_txt_d + '转' + data.HeWeather6[0].daily_forecast[2].cond_txt_n
        }
        document.getElementById('TheThirdwinddir').innerHTML = data.HeWeather6[0].daily_forecast[2].wind_dir
        document.getElementById('TheThirdwindsc').innerHTML = data.HeWeather6[0].daily_forecast[2].wind_sc + '级'
        document.getElementById('TheThirdwaterpop').innerHTML = '降水概率:&nbsp;&nbsp;' + data.HeWeather6[0].daily_forecast[2].pop + '％'
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '小雨') {
          _this.flagafterTomsmallrain = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '小雨') {
          _this.flagafterTomseconddaysmallrain = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '中雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '小到中雨') {
          _this.flagafterTommiddlerain = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '中雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '小到中雨') {
          _this.flagafterTomseconddaymiddlerain = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '中到大雨') {
          _this.flagafterTombigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '中到大雨') {
          _this.flagafterTomseconddaybigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '晴') {
          _this.flagafterTomsunny = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '晴') {
          _this.flagafterTomseconddaysunny = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '多云') {
          _this.flagafterTommorecloudy = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '多云') {
          _this.flagafterTomseconddaymorecloudy = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '晴间多云') {
          _this.flagafterTomsunnyandcouldy = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '晴间多云') {
          _this.flagafterTomseconddaysunnyandcouldy = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '阴') {
          _this.flagafterTomdark = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '阴') {
          _this.flagafterTomseconddaydark = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大到暴雨') {
          _this.flagafterTombigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大到暴雨') {
          _this.flagafterTomseconddaybigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '暴雨到大暴雨') {
          _this.flagafterTombigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '暴雨到大暴雨') {
          _this.flagafterTomseconddaybigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '阵雨') {
          _this.flagafterTomzhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '阵雨') {
          _this.flagafterTomseconddayzhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '雷阵雨') {
          _this.flagafterTomleizhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '雷阵雨') {
          _this.flagafterTomseconddayleizhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '特大暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大暴雨到特大暴雨') {
          _this.flagafterTomseverestrom = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '特大暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大暴雨到特大暴雨') {
          _this.flagafterTomseconddayseverestrom = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '小雪') {
          _this.flagafterTomlightsnow = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '小雪') {
          _this.flagafterTomseconddaylightsnow = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '中雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '小到中雪') {
          _this.flagafterTommiddlesnow = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '中雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '小到中雪') {
          _this.flagafterTomseconddaymiddlesnow = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '暴雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大到暴雪') {
          _this.flagafterTomsnowstrom = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '暴雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大到暴雪') {
          _this.flagafterTomseconddaysnowstrom = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '中到大雪') {
          _this.flagafterTomheavysnow = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '中到大雪') {
          _this.flagafterTomseconddayheavysnow = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '雨夹雪') {
          _this.flagafterTomsleet = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '雨夹雪') {
          _this.flagafterTomseconddaysleet = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '阵雪') {
          _this.flagafterTomsnowflurry = true
        }
        if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '阵雪') {
          _this.flagafterTomseconddaysnowflurry = true
        }
      }
    }
    xmlhttp.open('GET', 'https://free-api.heweather.com/s6/weather/forecast?location=shenzhen' + HeFengkey, true)
    xmlhttp.send()
  },
  methods: {
    getcityweather: function () {
      var location = document.getElementById('cityname').value
      var xmlhttp
      var HeFengkey = '&' + 'key' + '=' + 'dad99f28d0e344ecb45765e293f075c6'
      var _this = this
      _this.initpc()
      xmlhttp = new XMLHttpRequest()
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          var data = JSON.parse(xmlhttp.responseText)
          document.getElementById('TheThirdmystyle').innerHTML = data.HeWeather6[0].daily_forecast[2].date.slice(8, 10) + '日'
          document.getElementById('TheThirdtoday').innerHTML = '后天'
          document.getElementById('TheThirdTemp').innerHTML = data.HeWeather6[0].daily_forecast[2].tmp_min + '&nbsp;~&nbsp;' + data.HeWeather6[0].daily_forecast[2].tmp_max + '℃'
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === data.HeWeather6[0].daily_forecast[2].cond_txt_n) {
            document.getElementById('TheThirdcondTxt').innerHTML = data.HeWeather6[0].daily_forecast[2].cond_txt_d
          } else {
            document.getElementById('TheThirdcondTxt').innerHTML = data.HeWeather6[0].daily_forecast[2].cond_txt_d + '转' + data.HeWeather6[0].daily_forecast[2].cond_txt_n
          }
          document.getElementById('TheThirdwinddir').innerHTML = data.HeWeather6[0].daily_forecast[2].wind_dir
          document.getElementById('TheThirdwindsc').innerHTML = data.HeWeather6[0].daily_forecast[2].wind_sc + '级'
          document.getElementById('TheThirdwaterpop').innerHTML = '降水概率:&nbsp;&nbsp;' + data.HeWeather6[0].daily_forecast[2].pop + '％'
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '小雨') {
            _this.flagafterTomsmallrain = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '小雨') {
            _this.flagafterTomseconddaysmallrain = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '中雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '小到中雨') {
            _this.flagafterTommiddlerain = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '中雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '小到中雨') {
            _this.flagafterTomseconddaymiddlerain = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '中到大雨') {
            _this.flagafterTombigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '中到大雨') {
            _this.flagafterTomseconddaybigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '晴') {
            _this.flagafterTomsunny = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '晴') {
            _this.flagafterTomseconddaysunny = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '多云') {
            _this.flagafterTommorecloudy = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '多云') {
            _this.flagafterTomseconddaymorecloudy = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '晴间多云') {
            _this.flagafterTomsunnyandcouldy = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '晴间多云') {
            _this.flagafterTomseconddaysunnyandcouldy = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '阴') {
            _this.flagafterTomdark = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '阴') {
            _this.flagafterTomseconddaydark = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大到暴雨') {
            _this.flagafterTombigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大到暴雨') {
            _this.flagafterTomseconddaybigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '暴雨到大暴雨') {
            _this.flagafterTombigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '暴雨到大暴雨') {
            _this.flagafterTomseconddaybigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '阵雨') {
            _this.flagafterTomzhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '阵雨') {
            _this.flagafterTomseconddayzhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '雷阵雨') {
            _this.flagafterTomleizhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '雷阵雨') {
            _this.flagafterTomseconddayleizhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '特大暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大暴雨到特大暴雨') {
            _this.flagafterTomseverestrom = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '特大暴雨' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大暴雨到特大暴雨') {
            _this.flagafterTomseconddayseverestrom = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '小雪') {
            _this.flagafterTomlightsnow = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '小雪') {
            _this.flagafterTomseconddaylightsnow = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '中雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '小到中雪') {
            _this.flagafterTommiddlesnow = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '中雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '小到中雪') {
            _this.flagafterTomseconddaymiddlesnow = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '暴雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大到暴雪') {
            _this.flagafterTomsnowstrom = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '暴雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大到暴雪') {
            _this.flagafterTomseconddaysnowstrom = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '大雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_d === '中到大雪') {
            _this.flagafterTomheavysnow = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '大雪' || data.HeWeather6[0].daily_forecast[2].cond_txt_n === '中到大雪') {
            _this.flagafterTomseconddayheavysnow = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '雨夹雪') {
            _this.flagafterTomsleet = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '雨夹雪') {
            _this.flagafterTomseconddaysleet = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_d === '阵雪') {
            _this.flagafterTomsnowflurry = true
          }
          if (data.HeWeather6[0].daily_forecast[2].cond_txt_n === '阵雪') {
            _this.flagafterTomseconddaysnowflurry = true
          }
        }
      }
      xmlhttp.open('GET', 'https://free-api.heweather.com/s6/weather/forecast?location=' + location + HeFengkey, true)
      xmlhttp.send()
    },
    initpc: function () {
      this.flagafterTomdark = false
      this.flagafterTombigrain = false
      this.flagafterTombaoyu = false
      this.flagafterTomleizhenyu = false
      this.flagafterTommai = false
      this.flagafterTomsunny = false
      this.flagafterTomwu = false
      this.flagafterTomzhenyu = false
      this.flagafterTommorecloudy = false
      this.flagafterTomsmallrain = false
      this.flagafterTomsunnyandcouldy = false
      this.flagafterTommiddlerain = false
      this.flagafterTomheavystrom = false
      this.flagafterTomseverestrom = false
      this.flagafterTomlightsnow = false
      this.flagafterTommiddlesnow = false
      this.flagafterTomheavysnow = false
      this.flagafterTomsleet = false
      this.flagafterTomsnowflurry = false
      this.flagafterTomsnowstrom = false
      this.flagafterTomseconddaydark = false
      this.flagafterTomseconddaybigrain = false
      this.flagafterTomseconddaybaoyu = false
      this.flagafterTomseconddayleizhenyu = false
      this.flagafterTomseconddaymai = false
      this.flagafterTomseconddaysunny = false
      this.flagafterTomseconddaywu = false
      this.flagafterTomseconddayzhenyu = false
      this.flagafterTomseconddaymorecloudy = false
      this.flagafterTomseconddaysmallrain = false
      this.flagafterTomseconddaysunnyandcouldy = false
      this.flagafterTomseconddaymiddlerain = false
      this.flagafterTomseconddayheavystrom = false
      this.flagafterTomseconddayseverestrom = false
      this.flagafterTomseconddaylightsnow = false
      this.flagafterTomseconddaymiddlesnow = false
      this.flagafterTomseconddayheavysnow = false
      this.flagafterTomseconddaysleet = false
      this.flagafterTomseconddaysnowflurry = false
      this.flagafterTomseconddaysnowstrom = false
    }
  }
}
</script>

<style scoped>
  .recentlydark
  {
    background-image:url("../img/dark.png");
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlybigrain
  {
    background-image:url(../img/bigrain.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlybaoyu
  {
    background-image:url(../img/baoyu.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlyleizhenyu
  {
    background-image:url(../img/leizhenyu.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlymai
  {
    background-image:url(../img/mai.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlysunny
  {
    background-image:url(../img/sunny.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlywu
  {
    background-image:url(../img/wu.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlyzhenyu
  {
    background-image:url(../img/zhenyu.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlymorecloudy
  {
    background-image:url(../img/morecloudy.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlysmallrain
  {
    background-image:url(../img/smallrain.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlysunnyandcouldy
  {
    background-image:url(../img/sunnyandcloudy.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlymiddlerain
  {
    background-image:url(../img/middlerain.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlyheavystrom
  {
    background-image:url(../img/heavystorm.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlyseverestrom
  {
    background-image:url(../img/severestrom.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlylightsnow
  {
    background-image:url(../img/lightsnow.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlymiddlesnow
  {
    background-image:url(../img/middlesnow.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlyheavysnow
  {
    background-image:url(../img/heavysnow.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlysleet
  {
    background-image:url(../img/sleet.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlysnowflurry
  {
    background-image:url(../img/snowflurry.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  .recentlysnowstorm
  {
    background-image:url(../img/snowstorm.png);
    background-repeat:no-repeat;
    background-size:50px 50px;
  }
  #afterTomo
  {
    width:200px;
    height:190px;
    position:absolute;
  }
  #TheThirdCard
  {
    width:200px;
    margin-top:10px;
    margin-left:479px;
    height:190px;
    position:absolute;
  }
  #TheThirdmystyle
  {
    display:block;
    float:left;
    position:absolute;
  }
  #TheThirdtoday
  {
    font-weight:600;
    font-size:20px;
    margin-left:50px;
    margin-left:80px;
    display:block;
    float:left;
    position:absolute;
  }
  #TheThirdTemp
  {
    font-size:23px;
    margin-top:30px;
    display:block;
    float:left;
    position:absolute;
  }
  #TheThirdcondTxt
  {
    margin-top:100px;
    font-size:15px;
    display:block;
    float:left;
    position:absolute;
  }
  #TheThirdwinddir
  {
    margin-top:125px;
    font-size:15px;
    display:block;
    float:left;
    position:absolute;
  }
  #TheThirdwindsc
  {
    margin-top:125px;
    margin-left:100px;
    font-size:15px;
    display:block;
    float:left;
    position:absolute;
  }
  #TheThirdwaterpop
  {
    margin-top:150px;
    font-size:15px;
    display:block;
    float:left;
    position:absolute;
  }
  #thethirdweatherpc
  {
    width:50px;
    height:50px;
    margin-top:55px;
    position:absolute;
  }
  #thethirdweatherpctwo
  {
    width:50px;
    height:50px;
    margin-top:55px;
    margin-left:110px;
    position:absolute;
  }
</style>
