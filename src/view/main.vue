<template>
  <div class="area">
    <div class="location">
      <a-icon type="environment" style="font-size:30px;"/>
      <p>{{ city }}</p>
    </div>
    <a-divider></a-divider>
    <div class="serachField">
      <a-input v-model="cityName" size="large" style="width:65%" placeholder="请输入要查询的城市名(支持中英文)">
        <a-icon @click="serachCityName" slot="addonAfter" type="search" style="font-size:21px;cursor: pointer;"/>
      </a-input>
      <a-input size="large" style="width:45%;margin-left:35px;" :placeholder="time">
        <a-icon slot="addonAfter" type="reload" style="font-size:21px;"/>
      </a-input>
    </div>
    <a-divider>实时天气</a-divider>
    <nowCard :city="city" @update="timeUpdate"></nowCard>
    <a-divider>天气预报</a-divider>
    <div style="display:flex;width:100%;justify-content: space-between;">
      <todayCard :city="city" style="width:32%;"></todayCard>
      <tomorrowCard :city="city" style="width:32%;"></tomorrowCard>
      <afterTomoCard :city="city" style="width:32%;"></afterTomoCard>
    </div>
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
