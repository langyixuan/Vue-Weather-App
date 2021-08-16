<template>
  <div id="city-modal" v-if="modalTriggle" @click="closeModal">
    <div class="search-box" @click.stop="">
      <label for="city-name">Enter Location</label>
      <input type="text" name="city-name" placeholder="Search By City Name" v-model="cityName">
      <button @click="addCity">Add City</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import db from '../../firebase/firebaseinit.js'

export default {
  name: 'CityModal',
  data(){
    return {
      modalTriggle: false,
      cityName: '',
      apiKeys: 'db5730996c0b394970b60595f72aa2b5',
    }
  },
  mounted(){
    this.$bus.$on('getModalTriggle', (data) => {
      this.modalTriggle = data
      console.log(this.modalTriggle);
    })
  },
  beforeDestroy() {
    // 卸载该组件使用的全局事件总线
    this.$bus.$off('getModalTriggle')
  },
  methods: {
    closeModal(){
      this.modalTriggle = !this.modalTriggle
    },
    async addCity(){
      if (!this.cityName) {
        alert('filed cannot be empty')
      } else {
        try {
          const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.apiKeys}`)
          const data = await res.data
          // 将搜索到的城市天气相关信息存储到远端firebase数据库中
          db.collection('cities').doc().set({
          city: this.cityName,
          currentWeather: data
          }).then(() => {
            this.cityName = ''
            this.closeModal()
          })
        } catch(err) {
          console.log(err)
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
#city-modal {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-0.5rem, -0.5rem);
  background-color: rgba(26, 26, 26, 0.8);
  @include center;

  .search-box {
    width: 80%;
    height: px2rem(150);
    padding: px2rem(20) px2rem(15);
    border-radius: $br-20;
    background-color: $bg-gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    label, button {
      color: $f-white;
      font-weight: 600;
      font-size: px2rem(16);
    }
    input {
      border: none;
      border-bottom: 1px solid #ccc;
      background-color: transparent;
      outline: none;
      color: $f-white;
      font-size: px2rem(14);
    }
    button {
      background-color: $bg-blue;
      border: none;
      outline: none;
      border-radius: px2rem(5);
      font-size: px2rem(14);
      padding: 5px 0;
    }
  }
}
</style>