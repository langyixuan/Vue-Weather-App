<template>
  <div class="home" >
    <HomeHeader />
    <CurrentCityWeather :currentWeather="currentWeather" v-if="currentWeather"/>
    <FavLocation/>
    <CityModal />
  </div>
</template>

<script>
import CurrentCityWeather from '../components/CurrentCityWeather'
import HomeHeader from '../components/HomeHeader'
import FavLocation from '../components/FavLocation'
import CityModal from '../components/CityModal'
export default {
  name: 'Home',
  components: { CurrentCityWeather, HomeHeader, FavLocation, CityModal },
  props: ['currentWeather'],
  created(){
    console.log(this.currentWeather)
    this.$bus.$on('getModalTriggle', (data) => {
      if (data) {
        this.$refs.home.style.backgroundColor = 'red'
      }
    })
  },
  mounted() {
    
  },
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}
</style>