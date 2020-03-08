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
import ParamidaPay from "../paramidaPay";
require("../viewstyle/todayCard.scss");

export default {
  props: ["city"],
  data() {
    return {
      nowWeatherObject: {},
      today: "",
      temp: "",
      todayWeatherText: "",
      windPower: "",
      windDirection: "",
      rainPossibility: "",
      cond_txt_dIcon: "",
      cond_txt_nIcon: ""
    };
  },
  watch: {
    city(val) {
      this.getTodayWeatherInfo(val);
    }
  },
  methods: {
    getTodayWeatherInfo(val) {
      ParamidaPay.ApiCaller.get(
        "/forecast",
        {
          location: val,
          key: this.$store.state.key
        },
        (response) => {
          if (response.HeWeather6[0].status == "ok") {
            this.nowWeatherObject = response.HeWeather6[0].daily_forecast[0];
            this.today = this.nowWeatherObject.date.substring(8) + "日";
            if (this.nowWeatherObject.tmp_min !== this.nowWeatherObject.tmp_max)
              this.temp =
                this.nowWeatherObject.tmp_min +
                "~" +
                this.nowWeatherObject.tmp_max +
                "℃";
            else this.temp = this.nowWeatherObject.tmp_min;
            if (
              this.nowWeatherObject.cond_txt_d !==
              this.nowWeatherObject.cond_txt_n
            )
              this.todayWeatherText =
                this.nowWeatherObject.cond_txt_d +
                "转" +
                this.nowWeatherObject.cond_txt_n;
            else this.todayWeatherText = this.nowWeatherObject.cond_txt_d;
            this.windPower = this.nowWeatherObject.wind_sc + "级";
            this.windDirection = this.nowWeatherObject.wind_dir;
            this.rainPossibility = this.nowWeatherObject.pop + "%";
            this.getTodayWeatherIcon();
          } else {
            this.$message.error("请求失效");
          }
        },
        () => {
          this.$message.error("请求失效");
        }
      );
    },
    getTodayWeatherIcon() {
      this.cond_txt_dIcon =
        "https://cdn.heweather.com/cond_icon/" +
        this.nowWeatherObject.cond_code_d +
        ".png";
      this.cond_txt_nIcon =
        "https://cdn.heweather.com/cond_icon/" +
        this.nowWeatherObject.cond_code_n +
        ".png";
    }
  },
  created() {
    this.getTodayWeatherInfo("shenzhen");
  }
};
</script>

<style scoped></style>
