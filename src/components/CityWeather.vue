<template>
  <div class="city-weather">
    <img :src="require(`../../public/weather_icon/${weatherObj.currentWeather.weather[0].icon}.png`)">
    <div class="weather-desc">
      <span>{{weatherObj.city}}</span>
      <i>{{weatherObj.currentWeather.weather[0].description}}</i>
    </div>
    <span>{{Math.round(weatherObj.currentWeather.main.temp) / 10}}&deg</span>
    
      <!-- <img :src="require(`../../public/conditions/${weatherObj.currentWeather.weather[0].icon}.svg`)"> -->    
  </div>
</template>

<script>
export default {
  name: 'CityWeather',
  props: ['weatherObj'],
  created(){
    console.log(this.weatherObj)
  }

}
</script>

<style lang="scss" scoped>
.city-weather {
  // background: rgba(255,255,255, 0.15);
  // box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  // backdrop-filter: blur( 4px );
  // -webkit-backdrop-filter: blur( 4px );
  // border-radius: 10px;
  // border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 70px;
  }

  span {
    color: #fff;
    font-size: 1.5rem;

  }
}

.weather-desc {
  width: 130px;
  display: flex;
  flex-direction: column;

  span {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
  }
  i {
    font-size: 14px;
    font-weight: 700;
  }
}

</style>