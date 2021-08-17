<template>
  <div id="current-city-weather" @click="toDetail">
    <img :src="require(`../../public/weather_icon/${currentWeather.weather[0].icon}.png`)">
    <div class="detail">
      <span class="temp">{{Math.round(currentWeather.main.temp - 273.15)}}<sup>&#8451;</sup></span>
      <div class="desc">
        <p>{{currentWeather.weather[0].description | upperCase }}</p>
        <i class="iconfont icon-location"></i>
        <span>{{currentWeather.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentCityWeather',
  props: ['currentWeather'],
  data(){
    return {
      
    }
  },
  methods:{
    toDetail(){
      this.$router.push(`weather/${this.currentWeather.name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
#current-city-weather {
  width: 100%;
  height: px2rem(130);
  background-color: $bg-gray;
  border-radius: $br-20;
  @include center-b;
  padding: 0.5rem;
  box-shadow: $shadow1;

  img {
    width: px2rem(100);
  }
}

.detail {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .temp {
    font-size: 0.8rem;
    color: $f-white;
    font-weight: 700;
    text-align: right;
  }

  .desc {
    text-align: right;
    margin-top: px2rem(10);
    p {
      font-size: px2rem(16);
      color: $f-white;
      font-weight: 700;
      margin-bottom: px2rem(10);
    }

    i {
      margin-left: px2rem(10);
      margin-right: px2rem(5);
    }

    i, span {
      color: orange;
      margin-top: px2rem(10);
    }
  }
}
</style>