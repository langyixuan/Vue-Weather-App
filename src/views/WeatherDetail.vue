<template>
  <div id="weather-detail">
    <header>
      <i class="iconfont icon-fanhui" @click="backBtn"></i>
    </header>
    <div class="loading-img" v-if='loading'>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(34, 38, 43); display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" >
<g transform="rotate(0 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(30 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(60 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(90 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(120 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(150 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(180 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(210 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(240 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(270 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(300 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(330 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6495ed">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
  </rect>
</g>
    </svg>
    </div>
    <WeatherMainDetail :cityDetail="cityDetail" :cityName="cityname" class="main-detail" />
    <div class="bg-box" v-if="!loading"></div>
    <HourlyWeather :hourlyData="cityDetail.hourly.slice(0,24)"/>
    <WeekWeather :weekData="cityDetail.daily"/>
  </div>
</template>

<script>
import axios from 'axios'
import db from '../../firebase/firebaseinit.js'
import WeatherMainDetail from '../components/WeatherMainDetail'
import HourlyWeather from '../components/HourlyWeather'
import WeekWeather from '../components/WeekWeather'

export default {
  name: 'WeatherDetail',
  props: ['cityname'],
  components: { WeatherMainDetail, HourlyWeather, WeekWeather },
  data(){
    return {
      apiKeys: 'db5730996c0b394970b60595f72aa2b5',
      cityDetail: null,
      currentWeather: null,
      loading: true
    }
  },
  mounted(){
    this.getWeatherDeatail()
  },
  methods:{
    getWeatherDeatail(){
      db.collection('cities').where('city', '==', `${this.cityname}`)
      .get().then(docs => {
        docs.forEach(doc => {
          this.currentWeather = doc.data().currentWeather
          axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${doc.data().currentWeather.coord.lat}&lon=${doc.data().currentWeather.coord.lon}&exclude={current}&appid=${this.apiKeys}`)
          .then(res => this.cityDetail = res.data)
          .then(() => {this.loading = false})
        })
      })
    },
    backBtn(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
#weather-detail {
  .loading-img {
    height: 90vh;
    display: flex;
    align-items: center;
  }

  header {
    i {
      position: relative;
      font-size: px2rem(20);
      color: $f-white;
      margin-bottom: 10px;
      z-index: 10;
    }
  }

  .bg-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70vh;
    background-color: $bg-gray;
    z-index: 1;
  }

  .main-detail {
    position: relative;
    z-index: 10;
  }
}
</style>