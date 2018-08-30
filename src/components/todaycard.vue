<template>
  <div id="todayweather">
  <!--卡片：绘制今天天气信息-->
  <el-card class="box-card" id="TodayCard">
    <span id="mystyle"></span>
    <span id="today"></span>
    <span id="Temp"></span>
    <div  id="nowweatherpc" :class="{
        recentlydark:flagrecentlydark,
        recentlybigrain:flagrecentlybigrain,
        recentlybaoyu:flagrecentlybaoyu,
        recentlyleizhenyu:flagrecentlyleizhenyu,
        recentlymai:flagrecentlymai,
        recentlysunny:flagrecentlysunny,
        recentlywu:flagrecentlywu,
        recentlyzhenyu:flagrecentlyzhenyu,
        recentlymorecloudy:flagrecentlymorecloudy,
        recentlysmallrain:flagrecentlysmallrain,
        recentlysunnyandcouldy:flagrecentlysunnyandcouldy,
        recentlymiddlerain:flagrecentlymiddlerain,
        recentlyheavystrom:flagrecentlyheavystrom,
        recentlyseverestrom:flagrecentlyseverestrom,
        recentlylightsnow:flagrecentlylightsnow,
        recentlymiddlesnow:flagrecentlymiddlesnow,
        recentlyheavysnow:flagrecentlyheavysnow,
        recentlysleet:flagrecentlysleet,
        recentlysnowflurry:flagrecentlysnowflurry,
        recentlysnowstrom:flagrecentlysnowstrom
        }
        "></div>
    <div  id="nowweatherpctwo" :class="{
        recentlydark:flagseconddaydark,
        recentlybigrain:flagseconddaybigrain,
        recentlybaoyu:flagseconddaybaoyu,
        recentlyleizhenyu:flagseconddayleizhenyu,
        recentlymai:flagseconddaymai,
        recentlysunny:flagseconddaysunny,
        recentlywu:flagseconddaywu,
        recentlyzhenyu:flagseconddayzhenyu,
        recentlymorecloudy:flagseconddaymorecloudy,
        recentlysmallrain:flagseconddaysmallrain,
        recentlysunnyandcouldy:flagseconddaysunnyandcouldy,
        recentlymiddlerain:flagseconddaymiddlerain,
        recentlyheavystrom:flagseconddayheavystrom,
        recentlyseverestrom:flagseconddayseverestrom,
        recentlylightsnow:flagseconddaylightsnow,
        recentlymiddlesnow:flagseconddaymiddlesnow,
        recentlyheavysnow:flagseconddayheavysnow,
        recentlysleet:flagseconddaysleet,
        recentlysnowflurry:flagseconddaysnowflurry,
        recentlysnowstrom:flagseconddaysnowstrom
        }"></div>
    <span id="condTxt"></span>
    <span id="winddir"></span>
    <span id="windsc"></span>
    <span id="waterpop"></span>
  </el-card>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      flagrecentlydark: false,
      flagrecentlybigrain: false,
      flagrecentlybaoyu: false,
      flagrecentlyleizhenyu: false,
      flagrecentlymai: false,
      flagrecentlysunny: false,
      flagrecentlywu: false,
      flagrecentlyzhenyu: false,
      flagrecentlymorecloudy: false,
      flagrecentlysmallrain: false,
      flagrecentlysunnyandcouldy: false,
      flagrecentlymiddlerain: false,
      flagrecentlyheavystrom: false,
      flagrecentlyseverestrom: false,
      flagrecentlylightsnow: false,
      flagrecentlymiddlesnow: false,
      flagrecentlyheavysnow: false,
      flagrecentlysleet: false,
      flagrecentlysnowflurry: false,
      flagrecentlysnowstrom: false,
      flagseconddaydark: false,
      flagseconddaybigrain: false,
      flagseconddaybaoyu: false,
      flagseconddayleizhenyu: false,
      flagseconddaymai: false,
      flagseconddaysunny: false,
      flagseconddaywu: false,
      flagseconddayzhenyu: false,
      flagseconddaymorecloudy: false,
      flagseconddaysmallrain: false,
      flagseconddaysunnyandcouldy: false,
      flagseconddaymiddlerain: false,
      flagseconddayheavystrom: false,
      flagseconddayseverestrom: false,
      flagseconddaylightsnow: false,
      flagseconddaymiddlesnow: false,
      flagseconddayheavysnow: false,
      flagseconddaysleet: false,
      flagseconddaysnowflurry: false,
      flagseconddaysnowstrom: false
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
        document.getElementById('mystyle').innerHTML = data.HeWeather6[0].daily_forecast[0].date.slice(8, 10) + '日'// 日期
        document.getElementById('today').innerHTML = '今天'
        document.getElementById('Temp').innerHTML = data.HeWeather6[0].daily_forecast[0].tmp_min + '&nbsp;~&nbsp;' + data.HeWeather6[0].daily_forecast[0].tmp_max + '℃'
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === data.HeWeather6[0].daily_forecast[0].cond_txt_n) {
          document.getElementById('condTxt').innerHTML = data.HeWeather6[0].daily_forecast[0].cond_txt_d
        } else {
          document.getElementById('condTxt').innerHTML = data.HeWeather6[0].daily_forecast[0].cond_txt_d + '转' + data.HeWeather6[0].daily_forecast[0].cond_txt_n
        }
        document.getElementById('winddir').innerHTML = data.HeWeather6[0].daily_forecast[0].wind_dir
        document.getElementById('windsc').innerHTML = data.HeWeather6[0].daily_forecast[0].wind_sc + '级'
        document.getElementById('waterpop').innerHTML = '降水概率:&nbsp;&nbsp;' + data.HeWeather6[0].daily_forecast[0].pop + '％'
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '小雨') {
          _this.flagrecentlysmallrain = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '小雨') {
          _this.flagseconddaysmallrain = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '中雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '小到中雨') {
          _this.flagrecentlymiddlerain = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '中雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '小到中雨') {
          _this.flagseconddaymiddlerain = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '中到大雨') {
          _this.flagrecentlybigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '中到大雨') {
          _this.flagseconddaybigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '晴') {
          _this.flagrecentlysunny = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '晴') {
          _this.flagseconddaysunny = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '多云') {
          _this.flagrecentlymorecloudy = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '多云') {
          _this.flagseconddaymorecloudy = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '晴间多云') {
          _this.flagrecentlysunnyandcouldy = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '晴间多云') {
          _this.flagseconddaysunnyandcouldy = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '阴') {
          _this.flagrecentlydark = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '阴') {
          _this.flagseconddaydark = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大到暴雨') {
          _this.flagrecentlybigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大到暴雨') {
          _this.flagseconddaybigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '阵雨') {
          _this.flagrecentlyzhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '阵雨') {
          _this.flagseconddayzhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '雷阵雨') {
          _this.flagrecentlyleizhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '雷阵雨') {
          _this.flagseconddayleizhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '暴雨到大暴雨') {
          _this.flagrecentlyheavystrom = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '暴雨到大暴雨') {
          _this.flagseconddayheavystrom = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '特大暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大暴雨到特大暴雨') {
          _this.flagrecentlyseverestrom = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '特大暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大暴雨到特大暴雨') {
          _this.flagseconddayseverestrom = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '小雪') {
          _this.flagrecentlylightsnow = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '小雪') {
          _this.flagseconddaylightsnow = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '中雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '小到中雪') {
          _this.flagrecentlymiddlesnow = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '中雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '小到中雪') {
          _this.flagsecondddaymiddlesnow = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '暴雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大到暴雪') {
          _this.flagrecentlysnowstrom = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '暴雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大到暴雪') {
          _this.flagseconddaysnowstrom = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '中到大雪') {
          _this.flagrecentlyheavysnow = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '中到大雪') {
          _this.flagseconddayheavysnow = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '雨夹雪') {
          _this.flagrecentlysleet = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '雨夹雪') {
          _this.flagseconddaysleet = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '阵雪') {
          _this.flagrecentlysnowflurry = true
        }
        if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '阵雪') {
          _this.flagseconddaysnowflurry = true
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
          document.getElementById('mystyle').innerHTML = data.HeWeather6[0].daily_forecast[0].date.slice(8, 10) + '日'// 日期
          document.getElementById('today').innerHTML = '今天'
          document.getElementById('Temp').innerHTML = data.HeWeather6[0].daily_forecast[0].tmp_min + '&nbsp;~&nbsp;' + data.HeWeather6[0].daily_forecast[0].tmp_max + '℃'
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === data.HeWeather6[0].daily_forecast[0].cond_txt_n) {
            document.getElementById('condTxt').innerHTML = data.HeWeather6[0].daily_forecast[0].cond_txt_d
          } else {
            document.getElementById('condTxt').innerHTML = data.HeWeather6[0].daily_forecast[0].cond_txt_d + '转' + data.HeWeather6[0].daily_forecast[0].cond_txt_n
          }
          document.getElementById('winddir').innerHTML = data.HeWeather6[0].daily_forecast[0].wind_dir
          document.getElementById('windsc').innerHTML = data.HeWeather6[0].daily_forecast[0].wind_sc + '级'
          document.getElementById('waterpop').innerHTML = '降水概率:&nbsp;&nbsp;' + data.HeWeather6[0].daily_forecast[0].pop + '％'
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '小雨') {
            _this.flagrecentlysmallrain = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '小雨') {
            _this.flagseconddaysmallrain = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '中雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '小到中雨') {
            _this.flagrecentlymiddlerain = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '中雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '小到中雨') {
            _this.flagseconddaymiddlerain = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '中到大雨') {
            _this.flagrecentlybigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '中到大雨') {
            _this.flagseconddaybigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '晴') {
            _this.flagrecentlysunny = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '晴') {
            _this.flagseconddaysunny = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '多云') {
            _this.flagrecentlymorecloudy = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '多云') {
            _this.flagseconddaymorecloudy = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '晴间多云') {
            _this.flagrecentlysunnyandcouldy = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '晴间多云') {
            _this.flagseconddaysunnyandcouldy = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '阴') {
            _this.flagrecentlydark = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '阴') {
            _this.flagseconddaydark = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大到暴雨') {
            _this.flagrecentlybigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大到暴雨') {
            _this.flagseconddaybigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '阵雨') {
            _this.flagrecentlyzhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '阵雨') {
            _this.flagseconddayzhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '雷阵雨') {
            _this.flagrecentlyleizhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '雷阵雨') {
            _this.flagseconddayleizhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '暴雨到大暴雨') {
            _this.flagrecentlyheavystrom = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '暴雨到大暴雨') {
            _this.flagseconddayheavystrom = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '特大暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大暴雨到特大暴雨') {
            _this.flagrecentlyseverestrom = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '特大暴雨' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大暴雨到特大暴雨') {
            _this.flagseconddayseverestrom = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '小雪') {
            _this.flagrecentlylightsnow = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '小雪') {
            _this.flagseconddaylightsnow = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '中雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '小到中雪') {
            _this.flagrecentlymiddlesnow = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '中雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '小到中雪') {
            _this.flagsecondddaymiddlesnow = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '暴雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大到暴雪') {
            _this.flagrecentlysnowstrom = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '暴雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大到暴雪') {
            _this.flagseconddaysnowstrom = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '大雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_d === '中到大雪') {
            _this.flagrecentlyheavysnow = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '大雪' || data.HeWeather6[0].daily_forecast[0].cond_txt_n === '中到大雪') {
            _this.flagseconddayheavysnow = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '雨夹雪') {
            _this.flagrecentlysleet = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '雨夹雪') {
            _this.flagseconddaysleet = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_d === '阵雪') {
            _this.flagrecentlysnowflurry = true
          }
          if (data.HeWeather6[0].daily_forecast[0].cond_txt_n === '阵雪') {
            _this.flagseconddaysnowflurry = true
          }
        }
      }
      xmlhttp.open('GET', 'https://free-api.heweather.com/s6/weather/forecast?location=' + location + HeFengkey, true)
      xmlhttp.send()
    },
    initpc: function () {
      this.flagrecentlydark = false
      this.flagrecentlybigrain = false
      this.flagrecentlybaoyu = false
      this.flagrecentlyleizhenyu = false
      this.flagrecentlymai = false
      this.flagrecentlysunny = false
      this.flagrecentlywu = false
      this.flagrecentlyzhenyu = false
      this.flagrecentlymorecloudy = false
      this.flagrecentlysmallrain = false
      this.flagrecentlysunnyandcouldy = false
      this.flagrecentlymiddlerain = false
      this.flagrecentlyheavystrom = false
      this.flagrecentlyseverestrom = false
      this.flagrecentlylightsnow = false
      this.flagrecentlymiddlesnow = false
      this.flagrecentlyheavysnow = false
      this.flagrecentlysleet = false
      this.flagrecentlysnowflurry = false
      this.flagrecentlysnowstrom = false
      this.flagseconddaydark = false
      this.flagseconddaybigrain = false
      this.flagseconddaybaoyu = false
      this.flagseconddayleizhenyu = false
      this.flagseconddaymai = false
      this.flagseconddaysunny = false
      this.flagseconddaywu = false
      this.flagseconddayzhenyu = false
      this.flagseconddaymorecloudy = false
      this.flagseconddaysmallrain = false
      this.flagseconddaysunnyandcouldy = false
      this.flagseconddaymiddlerain = false
      this.flagseconddayheavystrom = false
      this.flagseconddayseverestrom = false
      this.flagseconddaylightsnow = false
      this.flagseconddaymiddlesnow = false
      this.flagseconddayheavysnow = false
      this.flagseconddaysleet = false
      this.flagseconddaysnowflurry = false
      this.flagseconddaysnowstrom = false
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
  #todayweather
  {
    width:200px;
    height:190px;
    float:left;
    position:absolute;
  }
  #TodayCard
  {
    width:200px;
    margin-top:10px;
    height:190px;
    float:left;
    position:absolute;
  }
  #mystyle
  {
    display:block;
    float:left;
    position:absolute;
  }
  #today
  {
    font-size:20px;
    font-weight:600;
    float:left;
    position:absolute;
  }
  #Temp
  {
    display:block;
    float:left;
    font-size:23px;
    margin-top:30px;
    position:absolute;
  }
  #condTxt
  {
    display:block;
    float:left;
    font-size:15px;
    margin-top:100px;
    position:absolute;
  }
  #winddir
  {
    display:block;
    float:left;
    margin-top:125px;
    font-size:15px;
    position:absolute;
  }
  #windsc
  {
    display:block;
    float:left;
    margin-top:125px;
    margin-left:100px;
    font-size:15px;
    position:absolute;
  }
  #waterpop
  {
    display:block;
    float:left;
    margin-top:150px;
    font-size:15px;
    position:absolute;
  }
  #nowweatherpc
  {
    width:50px;
    height:50px;
    margin-top:55px;
    position:absolute;
  }
  #nowweatherpctwo
  {
    width:50px;
    height:50px;
    margin-top:55px;
    margin-left:110px;
    position:absolute;
  }
</style>
