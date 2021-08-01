<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import db from '../firebase/firebaseinit.js'
export default {
  name: 'App',
  data(){
    return {
      apiKeys: 'db5730996c0b394970b60595f72aa2b5',
      city: 'Shanghai',
      cities: []
    }
  },
  created(){
    // this.getWeather()
    this.getCityWeather()
  },
  methods: {
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
             }).then(() => {
               console.log(this.cities);
             })
           } catch(err){
             console.log(err);
           }
         }
        })
      })
    },
    getWeather(){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKeys}`)
    .then(res => {
      console.log(res.data)
    })
  }
  }

}
</script>

<style lang="scss">
#app {
  
}
</style>
