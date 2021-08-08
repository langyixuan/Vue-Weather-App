<template>
  <div id="app">
    <router-view :cities = "cities" :currentWeather="currentWeather"/>
  </div>
</template>

<script>
import axios from 'axios'
import db from '../firebase/firebaseinit.js'
import { location } from './utils/location.js'
export default {
  name: 'App',
  data(){
    return {
      apiKeys: 'db5730996c0b394970b60595f72aa2b5',
      cities: [],
      // 用户当前地理位置经纬度(第一个元素纬度， 第二个元素经度)
      currentLocation: [],  
      // 用户当前地理位置天气信息
      currentWeather: null
    }
  },
  created(){
    this.getCityWeather(),
    this.getLocation() // 调用获取地理位置
  },
  methods: {
    /**获取firebase数据库中的天气信息 */
    getCityWeather(){
      // 获取firebase数据库中cities字段的数据
      let firebaseDB = db.collection("cities")
      // 监听数据库中cities中的数据
      firebaseDB.onSnapshot((snap) => {
        snap.docChanges().forEach(async (doc) => {
         if (doc.type === 'added') {
           try {
             const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${doc.doc.data().city}&appid=${this.apiKeys}`)
             const data = response.data
             firebaseDB.doc(doc.doc.id).update({
               currentWeather: data
             }).then(() => {
               this.cities.push(doc.doc.data())
             })
           } catch(err){
             console.log(err);
           }
         }
        })
      })
    },
    /**获取地图定位*/
    getLocation() {
      let _that = this;
      let geolocation = location.initMap("map-container"); //定位
      AMap.event.addListener(geolocation, "complete", result => {
        console.log(result)
        this.currentLocation[0] = result.position.lat  // 获取用户当前地理位置经度
        this.currentLocation[1] = result.position.lng  // 获取用户当前地理位置纬度
        _that.lat = result.position.lat; 
        _that.lng = result.position.lng;
        _that.province = result.addressComponent.province;
        _that.city = result.addressComponent.city;
        _that.district = result.addressComponent.district;
        console.log(this.currentLocation);
        this.getCurrentWeather()
      });
    },

    /**获取用户当前地理位置天气信息 */
    getCurrentWeather() {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.currentLocation[0]}&lon=${this.currentLocation[1]}&appid=${this.apiKeys}`)
      .then(res => { 
        console.log(res.data) 
        this.currentWeather = res.data
      })
    }
  }
}
// 动态设置html根元素的fontSize，以达到适配的效果
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10 
  // 给fontSize设置上限，以防屏幕大导致字体过大
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
* {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: $bg-main;
  padding: 0.5rem;
}
</style>
