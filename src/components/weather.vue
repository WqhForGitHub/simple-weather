<template>
    <!--天气预报-->
    <div id="weather">
      <!--位置信息-->
      <div class="location">
        <!--位置图标-->
        <span class="el-icon-location" id="iconlocation"></span>
        <!--地址位置具体信息-->
        <span id="locationtext"></span>
      </div>
      <hr>
      <!--查询区域包括输入地址和IP查询-->
      <div id="search">
        <div id="searchinput">
          <el-input placeholder="请输入要查询的城市(支持拼音和中文)" class="input-with-select" id="cityname">
            <el-button slot="append" icon="el-icon-search" id="citysearch" v-on:click="getcityweather"></el-button>
          </el-input>
        </div>
        <div id="IPsearch">
          <el-input placeholder="请输入已知的IP地址" class="input-with-select" id="ipname">
            <el-button :style="refresh" slot="append" icon="el-icon-refresh" id="IPSerach" v-on:click="IPaddressgetlocation"></el-button>
          </el-input>
        </div>
      </div>
      <!--分隔线-->
      <hr id="hrstyletwo">
      <hr id="hrstyle">
      <span id="nowweathertext">实时天气</span>
      <!--卡片：绘制实时天气信息-->
      <el-card class="box-card" id="NowWeatherCard">
        <div id="todayandtemp">
        <!--今天日期-->
        <span :style="Today" id="Today"></span>
        <!--温度-->
        <span id="temp"></span>
        </div>
        <!--相应的天气实况图片-->
        <div id="WeatherPC" :class="{
        dark:flagdark,
        bigrain:flagbigrain,
        baoyu:flagbaoyu,
        leizhenyu:flagleizhenyu,
        mai:flagmai,
        sunny:flagsunny,
        wu:flagwu,
        zhenyu:flagzhenyu,
        morecloudy:flagmorecloudy,
        smallrain:flagsmallrain,
        sunnyandcouldy:flagsunnyandcouldy,
        middlerain:flagmiddlerain,
        heavystrom:flagheavystrom,
        severestrom:flagseverestrom,
        lightsnow:flaglightsnow,
        middlesnow:flagmiddlesnow,
        heavysnow:flagheavysnow,
        sleet:flagsleet,
        snowflurry:flagsnowflurry,
        snowstrom:flagsnowstrom
        }
        ">
        </div>
        <!--实况天气状况描述-->
        <span id="condtxt">多云</span>
        <!--体感温度-->
        <span id="bodyTemp">体感</span>
        <!--湿度-->
        <span id="humidity">湿度</span>
        <!--风向-->
        <span id="WindyDirection">风向</span>
        <!--风力-->
        <span id="WindyPower">风力</span>
        <!--大气压强-->
        <span id="AtmospherePressure">大气压强:</span>
        <!--体感温度值-->
        <span id="bodyTempValue">30</span>
        <!--湿度值-->
        <span id="humidityValue">20</span>
        <!--风向值-->
        <span id="WindyDirectionValue">2</span>
        <!--风力值-->
        <span id="WindyPowerValue">2</span>
        <!--大气压强值-->
        <span id="AtmospherePressureValue">2</span>
        <!--实时更新时间-->
        <span id="updatetime">02:50发布</span>
      </el-card>
      <!--分隔线近三天天气信息-->
      <hr id="hrstylethree">
      <hr id="hrstylefour">
      <br/>
      <span id="recentlythreeWeathertext">近三天天气预报</span>
      <todaycard ref="COMC"></todaycard>
      <tomorrowcard ref="COMA"></tomorrowcard>
      <afterTomo ref="COMB"></afterTomo>
  </div>
</template>

<script>
import $ from 'jquery'
import todaycard from './todaycard'
import tomorrowcard from './tomorrowcard'
import afterTomo from './afterTomo'
export default {
  components: {todaycard, tomorrowcard, afterTomo},
  data: function () {
    return {
      flagdark: false,
      flagbigrain: false,
      flagbaoyu: false,
      flagleizhenyu: false,
      flagmai: false,
      flagsunny: false,
      flagwu: false,
      flagzhenyu: false,
      flagmorecloudy: false,
      flagsmallrain: false,
      flagmiddlerain: false,
      flagheavystrom: false,
      flagseverestrom: false,
      flaglightsnow: false,
      flagmiddlesnow: false,
      flagheavysnow: false,
      flagsleet: false,
      flagsnowflurry: false,
      flagsnowstrom: false
    }
  },
  mounted: function () {
    var xmlHttp// 获得实况天气
    var HeFengkey = '&' + 'key' + '=' + 'dad99f28d0e344ecb45765e293f075c6'
    var _this = this
    xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () { // 一旦readyState值改变，将会调用该函数，回调函数
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        var data = JSON.parse(xmlHttp.responseText)// data为json对象
        /* 应用样式图片 */
        if (data.HeWeather6[0].now.cond_txt === '晴') {
          _this.flagsunny = true
        }
        if (data.HeWeather6[0].now.cond_txt === '晴间多云') {
          _this.flagsunnyandcouldy = true
        }
        if (data.HeWeather6[0].now.cond_txt === '多云') {
          _this.flagmorecloudy = true
        }
        if (data.HeWeather6[0].now.cond_txt === '阴') {
          _this.flagdark = true
        }
        if (data.HeWeather6[0].now.cond_txt === '小雨') {
          _this.flagsmallrain = true
        }
        if (data.HeWeather6[0].now.cond_txt === '中雨' || data.HeWeather6[0].now.cond_txt === '小到中雨') {
          _this.flagmiddlerain = true
        }
        if (data.HeWeather6[0].now.cond_txt === '大雨' || data.HeWeather6[0].now.cond_txt === '中到大雨') {
          _this.flagbigrain = true
        }
        if (data.HeWeather6[0].now.cond_txt === '阵雨') {
          _this.flagzhenyu = true
        }
        if (data.HeWeather6[0].now.cond_txt === '大暴雨' || data.HeWeather6[0].now.cond_txt === '暴雨到大暴雨') {
          _this.flagheavystrom = true
        }
        if (data.HeWeather6[0].now.cond_txt === '特大暴雨' || data.HeWeather6[0].now.cond_txt === '大暴雨到特大暴雨') {
          _this.flagseverestrom = true
        }
        if (data.HeWeather6[0].now.cond_txt === '小雪') {
          _this.flaglightsnow = true
        }
        if (data.HeWeather6[0].now.cond_txt === '中雪' || data.HeWeather6[0].now.cond_txt === '小到中雪') {
          _this.flagmiddlesnow = true
        }
        if (data.HeWeather6[0].now.cond_txt === '大雪' || data.HeWeather6[0].now.cond_txt === '中到大雪') {
          _this.flagheavysnow = true
        }
        if (data.HeWeather6[0].now.cond_txt === '暴雪' || data.HeWeather6[0].now.cond_txt === '大到暴雪') {
          _this.flagsnowstrom = true
        }
        if (data.HeWeather6[0].now.cond_txt === '雨夹雪') {
          _this.flagsleet = true
        }
        if (data.HeWeather6[0].now.cond_txt === '阵雪') {
          _this.flagsnowflurry = true
        }
        var Time = data.HeWeather6[0].update.loc// 当地时间
        var month = Time.slice(5, 7)// 获取到月份
        var day = Time.slice(8, 10)// 获取到具体日期
        /* 将地理位置显示在页面上 */
        var $location = $('#locationtext')
        $location.html(data.HeWeather6[0].basic.location)
        /* 将日期显示在页面上 */
        var $Today = $('#Today')
        $Today.html(month + '月' + day + '号')
        /* 获得实时温度值数据显示在页面上 */
        var $temp = $('#temp')
        $temp.html(data.HeWeather6[0].now.tmp + '℃')
        /* 获得具体天气情况显示在页面上 */
        var $condtxt = $('#condtxt')
        $condtxt.html(data.HeWeather6[0].now.cond_txt)
        /* 获得体感温度数据显示在页面上 */
        var $bodyTempValue = $('#bodyTempValue')
        $bodyTempValue.html(data.HeWeather6[0].now.fl + '℃')
        /* 获得湿度值数据显示在页面上 */
        var $humidityValue = $('#humidityValue')
        $humidityValue.html(data.HeWeather6[0].now.hum)
        /* 获得风向值数据显示在页面上 */
        var $WindyDirectionValue = $('#WindyDirectionValue')
        $WindyDirectionValue.html(data.HeWeather6[0].now.wind_dir)
        /* 获得风力值数据显示在页面上 */
        var $WindyPowerValue = $('#WindyPowerValue')
        $WindyPowerValue.html(data.HeWeather6[0].now.wind_sc)
        /* 获得大气压强值数据显示在页面上 */
        var $AtmospherePressureValue = $('#AtmospherePressureValue')
        $AtmospherePressureValue.html(data.HeWeather6[0].now.pres)
        document.getElementById('updatetime').innerHTML = data.HeWeather6[0].update.loc.slice(11, 16) + '发布'
      }
    }
    xmlHttp.open('GET', 'https://free-api.heweather.com/s6/weather/now?location=shenzhen' + HeFengkey, true)
    xmlHttp.send()// 发送请求
  },
  methods: {
    getcityweather: function () {
      this.$refs.COMA.getcityweather()
      this.$refs.COMB.getcityweather()
      this.$refs.COMC.getcityweather()
      var location = document.getElementById('cityname').value
      var xmlHttp// 获得实况天气
      var xmlHttpgetforecast// 获得3天天气预报
      var HeFengkey = '&' + 'key' + '=' + 'dad99f28d0e344ecb45765e293f075c6'
      var _this = this
      _this.initpc()
      xmlHttp = new XMLHttpRequest()
      xmlHttpgetforecast = new XMLHttpRequest()
      xmlHttpgetforecast.onreadystatechange = function () {
        if (xmlHttpgetforecast.readyState === 4 && xmlHttpgetforecast.status === 200) {
          var data = JSON.parse(xmlHttpgetforecast.responseText)
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
        }
      }
      xmlHttp.onreadystatechange = function () { // 一旦readyState值改变，将会调用该函数，回调函数
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          var data = JSON.parse(xmlHttp.responseText)// data为json对象
          /* 应用样式图片 */
          if (data.HeWeather6[0].now.cond_txt === '晴') {
            _this.flagsunny = true
          }
          if (data.HeWeather6[0].now.cond_txt === '晴间多云') {
            _this.flagsunnyandcouldy = true
          }
          if (data.HeWeather6[0].now.cond_txt === '多云') {
            _this.flagmorecloudy = true
          }
          if (data.HeWeather6[0].now.cond_txt === '阴') {
            _this.flagdark = true
          }
          if (data.HeWeather6[0].now.cond_txt === '小雨') {
            _this.flagsmallrain = true
          }
          if (data.HeWeather6[0].now.cond_txt === '中雨' || data.HeWeather6[0].now.cond_txt === '小到中雨') {
            _this.flagmiddlerain = true
          }
          if (data.HeWeather6[0].now.cond_txt === '大雨' || data.HeWeather6[0].now.cond_txt === '中到大雨') {
            _this.flagbigrain = true
          }
          if (data.HeWeather6[0].now.cond_txt === '阵雨') {
            _this.flagzhenyu = true
          }
          if (data.HeWeather6[0].now.cond_txt === '大暴雨' || data.HeWeather6[0].now.cond_txt === '暴雨到大暴雨') {
            _this.flagheavystrom = true
          }
          if (data.HeWeather6[0].now.cond_txt === '特大暴雨' || data.HeWeather6[0].now.cond_txt === '大暴雨到特大暴雨') {
            _this.flagseverestrom = true
          }
          if (data.HeWeather6[0].now.cond_txt === '小雪') {
            _this.flaglightsnow = true
          }
          if (data.HeWeather6[0].now.cond_txt === '中雪' || data.HeWeather6[0].now.cond_txt === '小到中雪') {
            _this.flagmiddlesnow = true
          }
          if (data.HeWeather6[0].now.cond_txt === '大雪' || data.HeWeather6[0].now.cond_txt === '中到大雪') {
            _this.flagheavysnow = true
          }
          if (data.HeWeather6[0].now.cond_txt === '暴雪' || data.HeWeather6[0].now.cond_txt === '大到暴雪') {
            _this.flagsnowstrom = true
          }
          if (data.HeWeather6[0].now.cond_txt === '雨夹雪') {
            _this.flagsleet = true
          }
          if (data.HeWeather6[0].now.cond_txt === '阵雪') {
            _this.flagsnowflurry = true
          }
          var Time = data.HeWeather6[0].update.loc// 当地时间
          var month = Time.slice(5, 7)// 获取到月份
          var day = Time.slice(8, 10)// 获取到具体日期
          /* 将地理位置显示在页面上 */
          var $location = $('#locationtext')
          $location.html(data.HeWeather6[0].basic.location)
          /* 将日期显示在页面上 */
          var $Today = $('#Today')
          $Today.html(month + '月' + day + '号')
          /* 获得实时温度值数据显示在页面上 */
          var $temp = $('#temp')
          $temp.html(data.HeWeather6[0].now.tmp + '℃')
          /* 获得具体天气情况显示在页面上 */
          var $condtxt = $('#condtxt')
          $condtxt.html(data.HeWeather6[0].now.cond_txt)
          /* 获得体感温度数据显示在页面上 */
          var $bodyTempValue = $('#bodyTempValue')
          $bodyTempValue.html(data.HeWeather6[0].now.fl + '℃')
          /* 获得湿度值数据显示在页面上 */
          var $humidityValue = $('#humidityValue')
          $humidityValue.html(data.HeWeather6[0].now.hum)
          /* 获得风向值数据显示在页面上 */
          var $WindyDirectionValue = $('#WindyDirectionValue')
          $WindyDirectionValue.html(data.HeWeather6[0].now.wind_dir)
          /* 获得风力值数据显示在页面上 */
          var $WindyPowerValue = $('#WindyPowerValue')
          $WindyPowerValue.html(data.HeWeather6[0].now.wind_sc)
          /* 获得大气压强值数据显示在页面上 */
          var $AtmospherePressureValue = $('#AtmospherePressureValue')
          $AtmospherePressureValue.html(data.HeWeather6[0].now.pres)
          document.getElementById('updatetime').innerHTML = data.HeWeather6[0].update.loc.slice(11, 16) + '发布'
        }
      }
      xmlHttp.open('GET', 'https://free-api.heweather.com/s6/weather/now?location=' + location + HeFengkey, true)
      xmlHttpgetforecast.open('GET', 'https://free-api.heweather.com/s6/weather/forecast?location=' + location + HeFengkey, true)
      xmlHttp.send()// 发送请求
      xmlHttpgetforecast.send()
    },
    initpc: function () {
      this.flagdark = false
      this.flagbigrain = false
      this.flagbaoyu = false
      this.flagleizhenyu = false
      this.flagmai = false
      this.flagsunny = false
      this.flagwu = false
      this.flagzhenyu = false
      this.flagmorecloudy = false
      this.flagsmallrain = false
      this.flagmiddlerain = false
      this.flagheavystrom = false
      this.flagseverestrom = false
      this.flaglightsnow = false
      this.flagmiddlesnow = false
      this.flagheavysnow = false
      this.flagsleet = false
      this.flagsnowflurry = false
      this.flagsnowstrom = false
    },
    IPaddressgetlocation: function () {
      var xmlHttp
      var $ipname = $('#ipname')
      var $cityname = $('#cityname')
      xmlHttp = new XMLHttpRequest()
      xmlHttp.onreadystatechange = function () {
        var data = JSON.parse(xmlHttp.responseText)
        $cityname.val(data.city)
      }
      var IP = $ipname.val() + ''
      var IPkey = '&key=' + '55a28100b9c28237604d88655f545317'
      xmlHttp.open('GET', 'https://restapi.amap.com/v3/ip?ip=' + IP + IPkey, true)
      xmlHttp.send()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dark
{
  background-image:url("../img/dark.png");
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.bigrain
{
  background-image:url(../img/bigrain.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.baoyu
{
  background-image:url(../img/baoyu.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.leizhenyu
{
  background-image:url(../img/leizhenyu.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.mai
{
  background-image:url(../img/mai.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.sunny
{
  background-image:url(../img/sunny.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.wu
{
  background-image:url(../img/wu.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.zhenyu
{
  background-image:url(../img/zhenyu.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.morecloudy
{
  background-image:url(../img/morecloudy.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.smallrain
{
  background-image:url(../img/smallrain.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.sunnyandcouldy
{
  background-image:url(../img/sunnyandcloudy.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.middlerain
{
  background-image:url(../img/middlerain.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.heavystrom
{
  background-image:url(../img/heavystorm.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.severestrom
{
  background-image:url(../img/severestrom.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.lightsnow
{
  background-image:url(../img/lightsnow.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.middlesnow
{
  background-image:url(../img/middlesnow.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.heavysnow
{
  background-image:url(../img/heavysnow.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.sleet
{
  background-image:url(../img/sleet.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.snowflurry
{
  background-image:url(../img/snowflurry.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
.snowstorm
{
  background-image:url(../img/snowstorm.png);
  background-repeat:no-repeat;
  background-size:120px 120px;
}
#weather
{
  margin-left:350px;
  width:680px;
  height:600px;
}
.location
{
    width:680px;
    height:40px;
}
#iconlocation
{
  display:block;
  margin-left:300px;
  margin-top:5px;
  font-size:40px;
  position: absolute;
}
#locationtext
{
  display:block;
  margin-left:340px;
  font-size:25px;
  margin-top:10px;
  position:absolute;
}
#search
{
  width:680px;
  height:50px;
  margin-top:18px;
}
#searchinput
{
  width:340px;
  position:absolute;
}
#IPsearch
{
  width:320px;
  margin-left:360px;
  position:absolute;
}
#hrstyle
{
  width:280px;
  margin-top:10px;
  position:absolute;
}
#nowweathertext
{
  text-align:center;
  position:relative;
}

#hrstyletwo
{
  margin-left:395px;
  width:280px;
  position:absolute;
}
#NowWeatherCard
{
  width:680px;
  height:210px;
  margin-top:10px;
}
#todayandtemp
{
  width:170px;
  height:180px;
  position:absolute;
}
/*日期靠左显示*/
#Today
{
  font-size:20px;
  display:block;
  float:left;
  position:absolute;
}
/*温度靠左显示*/
  #temp
  {
    font-size:60px;
    margin-top:50px;
    margin-left:10px;
    display:block;
    float:left;
    position:absolute;
  }
  #condtxt
  {
    font-size:25px;
    margin-top:140px;
    margin-left:90px;
    display:block;
    float:left;
    position:absolute;
  }
  #WeatherPC
  {
    width:150px;
    height:150px;
    margin-left:180px;
    margin-top:30px;
    position:absolute;
  }
  #bodyTemp
  {
    font-size:20px;
    margin-top:30px;
    margin-left:80px;
    position:absolute;
  }
  #humidity
  {
    font-size:20px;
    margin-top:30px;
    margin-left:180px;
    position:absolute;
  }
  #WindyDirection
  {
    font-size:20px;
    margin-top:110px;
    margin-left:185px;
    position:absolute;
  }
  #WindyPower
  {
    font-size:20px;
    margin-top:110px;
    margin-left:80px;
    position:absolute;
  }
  #AtmospherePressure
  {
    font-size:20px;
    margin-top:160px;
    margin-left:80px;
    position: absolute;
  }
  #bodyTempValue
  {
    font-size:20px;
    font-weight:600;
    margin-top:2px;
    margin-left:85px;
    position:absolute;
  }
  #humidityValue
  {
    font-size:20px;
    font-weight:600;
    margin-top:2px;
    margin-left:185px;
    position:absolute;
  }
  #WindyDirectionValue
  {
    font-size:20px;
    font-weight:600;
    margin-top:80px;
    margin-left:185px;
    position:absolute;
  }
  #WindyPowerValue
  {
    font-size:20px;
    font-weight:600;
    margin-left:85px;
    margin-top:80px;
    position:absolute;
  }
  #AtmospherePressureValue
  {
    font-size:20px;
    font-weight:600;
    margin-left:185px;
    margin-top:160px;
    position:absolute;
  }
  #updatetime
  {
    font-size:16px;
    margin-left:260px;
    margin-top:170px;
    position:absolute;
  }
  #hrstylethree
  {
    width:250px;
    margin-top:30px;
    position:absolute;
  }
#recentlythreeWeathertext
  {
    position:relative;
  }
#hrstylefour
{
  margin-left:425px;
  width:253px;
  margin-top:30px;
  position:absolute;
}
</style>
