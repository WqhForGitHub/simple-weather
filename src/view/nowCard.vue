<template>
  <div>
    <a-card class="nowCard">
      <div style="display:flex;justify-content: space-between;width: 90%;">
        <div class="todayStatus">
          <p>{{ date + "日" }}</p>
          <div class="cond">
            <p class="temp">{{ tmp }}℃</p>
            <p class="todayTemp">{{ cond_txt }}</p>
          </div>
          <div class="nowWindPower">
            <p>{{ windDirection }}</p>
            <p style="padding-left: 10px;">{{ windPower + "级" }}</p>
          </div>
          <div class="airQuaility">
            <p>空气质量</p>
            <p style="padding-left: 10px;">
              {{ airQuality }}「{{ evaluation }}」
            </p>
          </div>
        </div>
        <div class="todayWeatherIcon">
          <img :src="weatherIcon" style="width: 100%; height: 100%;" />
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import ParamidaPay from "../paramidaPay";
require("../viewstyle/nowCard.scss");

export default {
  props: ["city"],
  data() {
    return {
      tmp: 0,
      cond_txt: "",
      date: "",
      weatherIcon: "",
      windDirection: "",
      windPower: "",
      airQuality: "",
      evaluation: ""
    };
  },
  watch: {
    city(val) {
      this.getNowWeather(val);
    }
  },
  methods: {
    // 获取实况天气
    getNowWeather(val) {
      ParamidaPay.ApiCaller.get(
        "/now",
        {
          location: val,
          key: this.$store.state.key
        },
        (response) => {
          if (response.HeWeather6[0].status == "ok") {
            this.tmp = response.HeWeather6[0].now.tmp;
            this.cond_txt = response.HeWeather6[0].now.cond_txt;
            this.windDirection = response.HeWeather6[0].now.wind_dir;
            this.windPower = response.HeWeather6[0].now.wind_sc; // 风力
            this.date = response.HeWeather6[0].update.loc
              .substring(5, 10)
              .replace("-", "月");
            let updateTime = response.HeWeather6[0].update.loc.substring(11);
            this.$emit("update", updateTime);
            this.getNowWeatherIcon(response.HeWeather6[0].now.cond_code);
          } else {
            this.$message.error("请求失效");
          }
        },
        () => {
          this.$message.error("请求失效");
        }
      );
    },
    // 获取空气质量
    getAirQuality() {
      ParamidaPay.ApiCaller.getAirQuailty(
        "/now",
        {
          location: "shenzhen",
          key: this.$store.state.key
        },
        (response) => {
          if (response.HeWeather6[0].status == "ok") {
            this.airQuality = response.HeWeather6[0].air_now_city.aqi;
            this.evaluation = response.HeWeather6[0].air_now_city.qlty;
          } else {
            this.$message.error("请求失效");
          }
        },
        () => {
          this.$message.error("请求失效");
        }
      );
    },
    // 获取天气图标
    getNowWeatherIcon(code) {
      this.weatherIcon = "https://cdn.heweather.com/cond_icon/" + code + ".png";
    }
  },
  mounted() {
    this.getNowWeather("shenzhen");
    this.getAirQuality();
  }
};
</script>

<style scoped></style>
