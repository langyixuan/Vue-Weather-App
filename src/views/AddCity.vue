<template>
  <div class="add-city">
    <div class="city-link" v-for="(city, index) in cities" :key="index">
      <CityWeather :weatherObj="city"/>
    </div>
  </div>
</template>

<script>
import CityWeather from '../components/CityWeather'
export default {
  name: 'AddCity',
  components: {CityWeather},
  props: ['cities'],
  created() {
    console.log(this.cities)
  },
}
</script>

<style lang="scss" scoped> 
.add-city {
  display: grid;
  padding: 1rem;
  width: 100%;
  height: 75vh;
  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  // background-color: aquamarine;
}
</style>