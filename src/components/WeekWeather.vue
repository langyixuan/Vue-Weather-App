<template>
  <div id="week-weather">
    <h1>This Week</h1>
    <ul class="box">
      <li v-for="wdata in weekDatas" :key="wdata.dt">
        <i>{{new Date(wdata.dt * 1000).toLocaleString('en-us', {day: 'numeric'})}}</i>
        <img :src="require(`../../public/weather_icon/${wdata.weather[0].icon}.png`)">
        <span class="temp">{{Math.round(wdata.temp.day - 273.15)}}<sup>&#8451;</sup></span>
        <i>{{new Date(wdata.dt * 1000).toLocaleString('en-us', {weekday: 'short'})}}</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WeekWeather',
  props: ['weekData'],
  computed:{
    weekDatas(){
      return this.weekData.slice(0,7)
    }
  }
}
</script>

<style lang="scss" scoped>
#week-weather {
  margin-top: 20px;
  box-shadow: $shadow1;
  font-weight: 700;
  h1 {
    color: $f-white;
    padding: 20px 0;
  }

  .box {
  display: flex;
  justify-content: space-between;
  background-color: $bg-gray;
  height: 140px;
  padding: 10px px2rem(10);
  color: $f-gray;
  border-radius: $br-10;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;   
      text-align: center; 
    }
    img {
      width: px2rem(30);
    }
  }
}
</style>