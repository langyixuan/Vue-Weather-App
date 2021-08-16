<template>
  <div id="weather-main-detail" v-if="cityDetail">
    <span class="time">{{getCurrentTime}}</span>
    <h1>{{cityName | upperCase}}</h1>
    <img :src="require(`../../public/weather_icon/${cityDetail.current.weather[0].icon}.png`)">
    <span class="temp">{{Math.round(cityDetail.current.temp - 273.15)}}<sup>&#8451;</sup></span>
    <span class="desc">{{cityDetail.current.weather[0].description | upperCase}}</span>
    <ul class="detail">
      <li>
        <i class="iconfont icon-humidity1"></i>
        <span>{{cityDetail.current.humidity}}%</span>
      </li>
      <li>
        <i class="iconfont icon-ziwaixian"></i>
        <span>{{cityDetail.current.uvi}}</span>
      </li>
      <li>
        <i class="iconfont icon-fengsu"></i>
        <span>{{cityDetail.current.wind_speed}}m/s</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WeatherMainDetail',
  props: ['cityDetail', 'cityName'],
  computed:{
    getCurrentTime(){
      return new Date().toLocaleString('en-us', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      })    
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#weather-main-detail {
  padding: 10px 0;
  font-weight: 700;
  h1 {
    font-size: 18px;
    color: $f-white;
    margin-top: 10px;
  }

  img {
    margin: 0 auto;
    width: 150px;
    margin-top: 10px;
  }

  .time {
    height: 30px;
    font-size: 14px;
    color: $f-blue;
  }

  .temp {
    display: block;
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    color: $f-white;
    margin-top: 20px;
  }

  .desc {
    display: block;
    color: $bg-gray;
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
  }

  .detail {
    width: 75%;
    margin: 0 auto;
    padding: 6px 15px;
    background-color: $bg-gray;
    @include center-b;
    border-radius: 100px;
    color: $f-white;
    margin-top: 20px;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba(104, 112, 228, 0.1);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    i {
      font-size: 14px;
      margin-right: 5px;
    }
    span {
      font-size: 14px;
    }
  }
}
</style>