<template>
  <div class="area">
    <div class="location">
      <a-icon type="environment" style="font-size:30px;"/>
      <p>{{ city }}</p>
    </div>
    <a-divider></a-divider>
    <div class="serachField">
      <a-row :gutter="40" justify="space-between">
        <a-col :xs="20" :sm="14" :md="14" :lg="14" :xl="14">
          <div class="cityInput">
            <a-input  v-model="cityName" size="large" placeholder="输入城市名(支持中英文)">
              <a-icon @click="serachCityName" slot="addonAfter" type="search" style="font-size:21px;cursor: pointer;"/>
            </a-input>
          </div>
        </a-col>
        <a-col :xs="20" :sm="10" :md="10" :lg="10" :xl="10">
          <div class="updateTime">  
            <a-input  size="large" :placeholder="time">
              <a-icon slot="addonAfter" type="reload" style="font-size:21px;"/>
            </a-input>
          </div>
        </a-col>
      </a-row>
    </div>
    <a-divider>实时天气</a-divider>
    <nowCard :city="city" @update="timeUpdate"></nowCard>
    <a-divider>天气预报</a-divider>
    <a-row>
      <div style="display:flex;flex-wrap: wrap;width:100%;justify-content: space-between;">
        <a-col :xs="24" :sm="23" :md="8" :lg="8" :xl="8">
          <todayCard class="todayCard" :city="city"></todayCard>
        </a-col>
        <a-col :xs="24" :sm="23" :md="8" :lg="8" :xl="8">
          <tomorrowCard class="tomorrowCard" :city="city"></tomorrowCard>
        </a-col>
        <a-col :xs="24" :sm="23" :md="8" :lg="8" :xl="8">
          <afterTomoCard class="afterTomoCard" :city="city"></afterTomoCard>
        </a-col>
      </div> 
    </a-row>
  </div>
</template>

<script>
import ParamidaPay from '../paramidaPay'
import nowCard from './nowCard.vue'
import todayCard from './todayCard.vue'
import tomorrowCard from './tomorrowCard.vue'
import afterTomoCard from './afterTomoCard.vue'
require('../viewstyle/main.scss')

export default {
  data() {
    return {
      time: '',
      city: '深圳',
      cityName: ''
    }
  },
   methods: {
     // 更新时间
    timeUpdate(time) {
      this.time = time + ' 更新'
    },
    serachCityName() { 
      if(this.cityName == '') 
        this.city = '深圳'
      else this.city = this.cityName
    }
  },
  created() {
  },
  components: {
    nowCard,
    todayCard,
    tomorrowCard,
    afterTomoCard
  }
}
</script>

<style scoped>
</style>
