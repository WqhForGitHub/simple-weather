<template>
  <!--绘制未来一天天气信息-->
  <div id="tomorrowcard">
  <el-card class="box-card" id="TheSecondCard">
    <span id="TheSecondmystyle"></span>
    <span id="TheSecondtoday"></span>
    <span id="TheSecondTemp"></span>
    <div  id="thesecondweatherpc" :class="{
        recentlydark:flagTomdark,
        recentlybigrain:flagTombigrain,
        recentlybaoyu:flagTombaoyu,
        recentlyleizhenyu:flagTomleizhenyu,
        recentlymai:flagTommai,
        recentlysunny:flagTomsunny,
        recentlywu:flagTomwu,
        recentlyzhenyu:flagTomzhenyu,
        recentlymorecloudy:flagTommorecloudy,
        recentlysmallrain:flagTomsmallrain,
        recentlysunnyandcouldy:flagTomsunnyandcouldy,
        recentlymiddlerain:flagTommiddlerain,
        recentlyheavystrom:flagTomheavystrom,
        recentlyseverestrom:flagTomseverestrom,
        recentlylightsnow:flagTomlightsnow,
        recentlymiddlesnow:flagTommiddlesnow,
        recentlyheavysnow:flagTomheavysnow,
        recentlysleet:flagTomsleet,
        recentlysnowflurry:flagTomsnowflurry,
        recentlysnowstrom:flagTomsnowstrom
        }"></div>
    <div  id="thesecondweatherpctwo" :class="{
        recentlydark:flagTomseconddaydark,
        recentlybigrain:flagTomseconddaybigrain,
        recentlybaoyu:flagTomseconddaybaoyu,
        recentlyleizhenyu:flagTomseconddayleizhenyu,
        recentlymai:flagTomseconddaymai,
        recentlysunny:flagTomseconddaysunny,
        recentlywu:flagTomseconddaywu,
        recentlyzhenyu:flagTomseconddayzhenyu,
        recentlymorecloudy:flagTomseconddaymorecloudy,
        recentlysmallrain:flagTomseconddaysmallrain,
        recentlysunnyandcouldy:flagTomseconddaysunnyandcouldy,
        recentlymiddlerain:flagTomseconddaymiddlerain,
        recentlyheavystrom:flagTomseconddayheavystrom,
        recentlyseverestrom:flagTomseconddayseverestrom,
        recentlylightsnow:flagTomseconddaylightsnow,
        recentlymiddlesnow:flagTomseconddaymiddlesnow,
        recentlyheavysnow:flagTomseconddayheavysnow,
        recentlysleet:flagTomseconddaysleet,
        recentlysnowflurry:flagTomseconddaysnowflurry,
        recentlysnowstrom:flagTomseconddaysnowstrom
        }"></div>
    <span id="TheSecondcondTxt"></span>
    <span id="TheSecondwinddir"></span>
    <span id="TheSecondwindsc"></span>
    <span id="TheSecondwaterpop"></span>
  </el-card>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      flagTomdark: false,
      flagTombigrain: false,
      flagTombaoyu: false,
      flagTomleizhenyu: false,
      flagTommai: false,
      flagTomsunny: false,
      flagTomwu: false,
      flagTomzhenyu: false,
      flagTommorecloudy: false,
      flagTomsmallrain: false,
      flagTomsunnyandcouldy: false,
      flagTommiddlerain: false,
      flagTomheavystrom: false,
      flagTomseverestrom: false,
      flagTomlightsnow: false,
      flagTommiddlesnow: false,
      flagTomheavysnow: false,
      flagTomsleet: false,
      flagTomsnowflurry: false,
      flagTomsnowstrom: false,
      flagTomseconddaydark: false,
      flagTomseconddaybigrain: false,
      flagTomseconddaybaoyu: false,
      flagTomseconddayleizhenyu: false,
      flagTomseconddaymai: false,
      flagTomseconddaysunny: false,
      flagTomseconddaywu: false,
      flagTomseconddayzhenyu: false,
      flagTomseconddaymorecloudy: false,
      flagTomseconddaysmallrain: false,
      flagTomseconddaysunnyandcouldy: false,
      flagTomseconddaymiddlerain: false,
      flagTomseconddayheavystrom: false,
      flagTomseconddayseverestrom: false,
      flagTomseconddaylightsnow: false,
      flagTomseconddaymiddlesnow: false,
      flagTomseconddayheavysnow: false,
      flagTomseconddaysleet: false,
      flagTomseconddaysnowflurry: false,
      flagTomseconddaysnowstrom: false
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
        document.getElementById('TheSecondmystyle').innerHTML = data.HeWeather6[0].daily_forecast[1].date.slice(8, 10) + '日'// 日期
        document.getElementById('TheSecondtoday').innerHTML = '明天'
        document.getElementById('TheSecondTemp').innerHTML = data.HeWeather6[0].daily_forecast[1].tmp_min + '&nbsp;~&nbsp;' + data.HeWeather6[0].daily_forecast[1].tmp_max + '℃'
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === data.HeWeather6[0].daily_forecast[1].cond_txt_n) {
          document.getElementById('TheSecondcondTxt').innerHTML = data.HeWeather6[0].daily_forecast[1].cond_txt_d
        } else {
          document.getElementById('TheSecondcondTxt').innerHTML = data.HeWeather6[0].daily_forecast[1].cond_txt_d + '转' + data.HeWeather6[0].daily_forecast[1].cond_txt_n
        }
        document.getElementById('TheSecondwinddir').innerHTML = data.HeWeather6[0].daily_forecast[1].wind_dir
        document.getElementById('TheSecondwindsc').innerHTML = data.HeWeather6[0].daily_forecast[1].wind_sc + '级'
        document.getElementById('TheSecondwaterpop').innerHTML = '降水概率:&nbsp;&nbsp;' + data.HeWeather6[0].daily_forecast[1].pop + '％'
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '小雨') {
          _this.flagTomsmallrain = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '小雨') {
          _this.flagTomseconddaysmallrain = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '中雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '小到中雨') {
          _this.flagTommiddlerain = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '中雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '小到中雨') {
          _this.flagTomseconddaymiddlerain = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '大雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '中到大雨') {
          _this.flagTombigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '大雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '中到大雨') {
          _this.flagTomseconddaybigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '晴') {
          _this.flagTomsunny = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '晴') {
          _this.flagTomseconddaysunny = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '多云') {
          _this.flagTommorecloudy = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '多云') {
          _this.flagTomseconddaymorecloudy = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '晴间多云') {
          _this.flagTomsunnyandcouldy = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '晴间多云') {
          _this.flagTomseconddaysunnyandcouldy = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '阴') {
          _this.flagTomdark = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '阴') {
          _this.flagTomseconddaydark = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '大到暴雨') {
          _this.flagTombigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '大到暴雨') {
          _this.flagTomseconddaybigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '大暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '暴雨到大暴雨') {
          _this.flagTombigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '大暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '暴雨到大暴雨') {
          _this.flagTomseconddaybigrain = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '阵雨') {
          _this.flagTomzhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '阵雨') {
          _this.flagTomseconddayzhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '雷阵雨') {
          _this.flagTomleizhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '雷阵雨') {
          _this.flagTomseconddayleizhenyu = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '特大暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '大暴雨到特大暴雨') {
          _this.flagTomseverestrom = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '特大暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '大暴雨到特大暴雨') {
          _this.flagTomseconddayseverestrom = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '小雪') {
          _this.flagTomlightsnow = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '小雪') {
          _this.flagTomseconddaylightsnow = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '中雪' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '小到中雪') {
          _this.flagTommiddlesnow = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '中雪' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '小到中雪') {
          _this.flagTomseconddaymiddlesnow = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '暴雪' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '大到暴雪') {
          _this.flagTomsnowstrom = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '暴雪' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '大到暴雪') {
          _this.flagTomseconddaysnowstrom = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '雨夹雪') {
          _this.flagTomsleet = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '雨夹雪') {
          _this.flagTomseconddaysleet = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '阵雪') {
          _this.flagTomsnowflurry = true
        }
        if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '阵雪') {
          _this.flagTomseconddaysnowflurry = true
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
          document.getElementById('TheSecondmystyle').innerHTML = data.HeWeather6[0].daily_forecast[1].date.slice(8, 10) + '日'// 日期
          document.getElementById('TheSecondtoday').innerHTML = '明天'
          document.getElementById('TheSecondTemp').innerHTML = data.HeWeather6[0].daily_forecast[1].tmp_min + '&nbsp;~&nbsp;' + data.HeWeather6[0].daily_forecast[1].tmp_max + '℃'
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === data.HeWeather6[0].daily_forecast[1].cond_txt_n) {
            document.getElementById('TheSecondcondTxt').innerHTML = data.HeWeather6[0].daily_forecast[1].cond_txt_d
          } else {
            document.getElementById('TheSecondcondTxt').innerHTML = data.HeWeather6[0].daily_forecast[1].cond_txt_d + '转' + data.HeWeather6[0].daily_forecast[1].cond_txt_n
          }
          document.getElementById('TheSecondwinddir').innerHTML = data.HeWeather6[0].daily_forecast[1].wind_dir
          document.getElementById('TheSecondwindsc').innerHTML = data.HeWeather6[0].daily_forecast[1].wind_sc + '级'
          document.getElementById('TheSecondwaterpop').innerHTML = '降水概率:&nbsp;&nbsp;' + data.HeWeather6[0].daily_forecast[1].pop + '％'
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '小雨') {
            _this.flagTomsmallrain = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '小雨') {
            _this.flagTomseconddaysmallrain = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '中雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '小到中雨') {
            _this.flagTommiddlerain = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '中雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '小到中雨') {
            _this.flagTomseconddaymiddlerain = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '大雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '中到大雨') {
            _this.flagTombigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '大雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '中到大雨') {
            _this.flagTomseconddaybigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '晴') {
            _this.flagTomsunny = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '晴') {
            _this.flagTomseconddaysunny = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '多云') {
            _this.flagTommorecloudy = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '多云') {
            _this.flagTomseconddaymorecloudy = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '晴间多云') {
            _this.flagTomsunnyandcouldy = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '晴间多云') {
            _this.flagTomseconddaysunnyandcouldy = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '阴') {
            _this.flagTomdark = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '阴') {
            _this.flagTomseconddaydark = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '大到暴雨') {
            _this.flagTombigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '大到暴雨') {
            _this.flagTomseconddaybigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '大暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '暴雨到大暴雨') {
            _this.flagTombigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '大暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '暴雨到大暴雨') {
            _this.flagTomseconddaybigrain = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '阵雨') {
            _this.flagTomzhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '阵雨') {
            _this.flagTomseconddayzhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '雷阵雨') {
            _this.flagTomleizhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '雷阵雨') {
            _this.flagTomseconddayleizhenyu = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '特大暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '大暴雨到特大暴雨') {
            _this.flagTomseverestrom = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '特大暴雨' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '大暴雨到特大暴雨') {
            _this.flagTomseconddayseverestrom = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '小雪') {
            _this.flagTomlightsnow = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '小雪') {
            _this.flagTomseconddaylightsnow = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '中雪' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '小到中雪') {
            _this.flagTommiddlesnow = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '中雪' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '小到中雪') {
            _this.flagTomseconddaymiddlesnow = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '暴雪' || data.HeWeather6[0].daily_forecast[1].cond_txt_d === '大到暴雪') {
            _this.flagTomsnowstrom = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '暴雪' || data.HeWeather6[0].daily_forecast[1].cond_txt_n === '大到暴雪') {
            _this.flagTomseconddaysnowstrom = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '雨夹雪') {
            _this.flagTomsleet = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '雨夹雪') {
            _this.flagTomseconddaysleet = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_d === '阵雪') {
            _this.flagTomsnowflurry = true
          }
          if (data.HeWeather6[0].daily_forecast[1].cond_txt_n === '阵雪') {
            _this.flagTomseconddaysnowflurry = true
          }
        }
      }
      xmlhttp.open('GET', 'https://free-api.heweather.com/s6/weather/forecast?location=' + location + HeFengkey, true)
      xmlhttp.send()
    },
    initpc: function () {
      this.flagTomdark = false
      this.flagTombigrain = false
      this.flagTombaoyu = false
      this.flagTomleizhenyu = false
      this.flagTommai = false
      this.flagTomsunny = false
      this.flagTomwu = false
      this.flagTomzhenyu = false
      this.flagTommorecloudy = false
      this.flagTomsmallrain = false
      this.flagTomsunnyandcouldy = false
      this.flagTommiddlerain = false
      this.flagTomseconddaydark = false
      this.flagTomseconddaybigrain = false
      this.flagTomseconddaybaoyu = false
      this.flagTomseconddayleizhenyu = false
      this.flagTomseconddaymai = false
      this.flagTomseconddaysunny = false
      this.flagTomseconddaywu = false
      this.flagTomseconddayzhenyu = false
      this.flagTomseconddaymorecloudy = false
      this.flagTomseconddaysmallrain = false
      this.flagTomseconddaysunnyandcouldy = false
      this.flagTomseconddaymiddlerain = false
      this.flagTomseconddayheavystrom = false
      this.flagTomseconddayseverestrom = false
      this.flagTomseconddaylightsnow = false
      this.flagTomseconddaymiddlesnow = false
      this.flagTomseconddayheavysnow = false
      this.flagTomseconddaysleet = false
      this.flagTomseconddaysnowflurry = false
      this.flagTomseconddaysnowstrom = false
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
  #tomorrowcard
  {
    width:200px;
    height:190px;
    position:absolute;
  }
  #TheSecondCard
  {
    width:200px;
    margin-top:10px;
    margin-left:245px;
    height:190px;
    position:absolute;
  }
  #TheSecondmystyle
  {
    display:block;
    float:left;
    position: absolute;
  }
  #TheSecondtoday
  {
    font-weight:600;
    font-size:20px;
    margin-left:80px;
    display:block;
    float:left;
    position:absolute;
  }
  #TheSecondTemp
  {
    font-size:23px;
    margin-top:30px;
    display:block;
    float:left;
    position:absolute;
  }
  #TheSecondcondTxt
  {
    margin-top:100px;
    font-size:15px;
    display:block;
    float:left;
    position:absolute;
  }
  #TheSecondwinddir
  {
    margin-top:125px;
    font-size:15px;
    display:block;
    float:left;
    position:absolute;
  }
  #TheSecondwindsc
  {
    margin-top:125px;
    margin-left:100px;
    font-size:15px;
    display:block;
    float:left;
    position:absolute;
  }
  #TheSecondwaterpop
  {
    margin-top:150px;
    font-size:15px;
    display:block;
    float:left;
    position:absolute;
  }
  #thesecondweatherpc
  {
    width:50px;
    height:50px;
    margin-top:55px;
    position:absolute;
  }
  #thesecondweatherpctwo
  {
    width:50px;
    height:50px;
    margin-top:55px;
    margin-left:110px;
    position:absolute;
  }
</style>
