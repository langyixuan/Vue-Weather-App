<template>
  <div class="home">
    <HomeHeader />
    <CurrentCityWeather :currentWeather="currentWeather" v-if="currentWeather"/>
    <FavLocation :cities="cities"/>
  </div>
</template>

<script>
import CurrentCityWeather from '../components/CurrentCityWeather'
import HomeHeader from '../components/HomeHeader'
import FavLocation from '../components/FavLocation'
export default {
  name: 'Home',
  components: { CurrentCityWeather, HomeHeader, FavLocation },
  props: ['currentWeather', 'cities'],
  created(){
    console.log(this.currentWeather)
    console.log(this.cities)
  }
}
</script>

<style lang="scss" scoped>
</style>