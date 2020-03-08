<template>
  <div>
    <a-card class="todayCard">
      <div style="width:100%;height:100%">
        <div class="date">
          <p>{{ today }}</p>
          <p class="dateText">「后天」</p>
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
      afterTomWeatherObject: {},
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
      this.getAfterTomoWeather(val);
    }
  },
  methods: {
    getAfterTomoWeather(val) {
      ParamidaPay.ApiCaller.get(
        "/forecast",
        {
          location: val,
          key: this.$store.state.key
        },
        (response) => {
          if (response.HeWeather6[0].status == "ok") {
            this.afterTomWeatherObject =
              response.HeWeather6[0].daily_forecast[2];
            this.today = this.afterTomWeatherObject.date.substring(8) + "日";
            if (
              this.afterTomWeatherObject.tmp_min !==
              this.afterTomWeatherObject.tmp_max
            )
              this.temp =
                this.afterTomWeatherObject.tmp_min +
                "~" +
                this.afterTomWeatherObject.tmp_max +
                "℃";
            else this.temp = this.afterTomWeatherObject.tmp_min;
            if (
              this.afterTomWeatherObject.cond_txt_d !==
              this.afterTomWeatherObject.cond_txt_n
            )
              this.todayWeatherText =
                this.afterTomWeatherObject.cond_txt_d +
                "转" +
                this.afterTomWeatherObject.cond_txt_n;
            else this.todayWeatherText = this.afterTomWeatherObject.cond_txt_d;
            this.windPower = this.afterTomWeatherObject.wind_sc + "级";
            this.windDirection = this.afterTomWeatherObject.wind_dir;
            this.rainPossibility = this.afterTomWeatherObject.pop + "%";
            this.getAfterTomoIcon();
          } else {
            this.$message.error("请求失效");
          }
        },
        () => {
          this.$message.error("请求失效");
        }
      );
    },
    getAfterTomoIcon() {
      this.cond_txt_dIcon =
        "https://cdn.heweather.com/cond_icon/" +
        this.afterTomWeatherObject.cond_code_d +
        ".png";
      this.cond_txt_nIcon =
        "https://cdn.heweather.com/cond_icon/" +
        this.afterTomWeatherObject.cond_code_n +
        ".png";
    }
  },
  created() {
    this.getAfterTomoWeather("shenzhen");
  }
};
</script>

<style scoped></style>
