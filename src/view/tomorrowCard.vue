<template>
  <div>
    <a-card class="todayCard">
      <div style="width:100%;height:100%">
        <div class="date">
          <p>{{ today }}</p>
          <p class="dateText">「明天」</p>
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
      tomWeatherObject: {},
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
      this.getTomorrowCard(val);
    }
  },
  methods: {
    getTomorrowCard(val) {
      ParamidaPay.ApiCaller.get(
        "/forecast",
        {
          location: val,
          key: this.$store.state.key
        },
        (response) => {
          if (response.HeWeather6[0].status == "ok") {
            this.tomWeatherObject = response.HeWeather6[0].daily_forecast[1];
            this.today = this.tomWeatherObject.date.substring(8) + "日";
            if (this.tomWeatherObject.tmp_min !== this.tomWeatherObject.tmp_max)
              this.temp =
                this.tomWeatherObject.tmp_min +
                "~" +
                this.tomWeatherObject.tmp_max +
                "℃";
            else this.temp = this.tomWeatherObject.tmp_min;
            if (
              this.tomWeatherObject.cond_txt_d !==
              this.tomWeatherObject.cond_txt_n
            )
              this.todayWeatherText =
                this.tomWeatherObject.cond_txt_d +
                "转" +
                this.tomWeatherObject.cond_txt_n;
            else this.todayWeatherText = this.tomWeatherObject.cond_txt_d;
            this.windPower = this.tomWeatherObject.wind_sc + "级";
            this.windDirection = this.tomWeatherObject.wind_dir;
            this.rainPossibility = this.tomWeatherObject.pop + "%";
            this.getTomorrowWeatherIcon();
          } else {
            this.$message.error("请求失效");
          }
        },
        () => {
          this.$message.error("请求失效");
        }
      );
    },
    getTomorrowWeatherIcon() {
      this.cond_txt_dIcon =
        "https://cdn.heweather.com/cond_icon/" +
        this.tomWeatherObject.cond_code_d +
        ".png";
      this.cond_txt_nIcon =
        "https://cdn.heweather.com/cond_icon/" +
        this.tomWeatherObject.cond_code_n +
        ".png";
    }
  },
  created() {
    this.getTomorrowCard("shenzhen");
  }
};
</script>

<style scoped></style>
