<template>
  <div id="hourly-weather">
    <ul class="container">
      <li v-for="hdata in hourlyData" :key="hdata.dt">
        <i>{{new Date(hdata.dt * 1000).toLocaleString('en-us', {hour: 'numeric'})}}</i>
        <img :src="require(`../../public/weather_icon/${hdata.weather[0].icon}.png`)">
        <span class="temp">{{Math.round(hdata.temp - 273.15)}}<sup>&#8451;</sup></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HourlyWeather',
  props:['hourlyData'],
  data(){
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#hourly-weather {
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 100;
  font-weight: 700;
}

.container {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
  margin-top: 20px;
  li {
    height: 130px;
    border-radius: 10px;
    margin-right: px2rem(8);
    padding: 10px px2rem(3);
    color: $f-white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    i {
      width: px2rem(50);
    }
    img {
      width: px2rem(30);
    }
  }
}
</style>