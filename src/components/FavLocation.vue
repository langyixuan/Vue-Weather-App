<template>
  <div id="fav-loaction">
    <nav>
      <span>Favorite Location</span>
      <div class="icon">
        <i class="iconfont icon-tianjia1" @click="isShowModal"></i>
        <i class="iconfont icon-shanchu" @click="isShowDelete"></i>
      </div>
    </nav>

    <div class="fav-container">
      <div class="fav-box" v-for="city in favCities" :key="city.currentWeather.id" @click="toWeatherDetail(city.city)">
        <div class="desc">
          <span class="temp">{{Math.round(city.currentWeather.main.temp - 273.15)}}<sup>&#8451;</sup></span>
          <p>{{city.currentWeather.weather[0].description | upperCase }}</p>
          <i><i class="iconfont icon-location"></i>  {{city.city}}</i>
        </div>
        <img :src="require(`../../public/weather_icon/${city.currentWeather.weather[0].icon}.png`)">
        <i class="iconfont icon-shanchu1" ref="delete" @click.stop="deleteCity(city.city)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../../firebase/firebaseinit.js'

export default {
  name: 'FavLocation',
  data(){
    return {
      favCities: null,
      modalTriggle: false,
      showDeleteFun: false,
      deleteId: ''
    }
  },
  beforeDestroy() {
    // 在该组件准备销毁时，解绑当前组件使用到的全局事件总线
    this.$bus.$off('getFavCities')
  },
  created(){
    this.$bus.$on('getFavCities', (data) => {
      console.log('我需要favData的数据', data)
      this.favCities = data
    })
  },
  // props: ['cities'],
  mounted() {
    this.$bus.$on('getFavCities', (data) => {
      console.log('我需要favData的数据', data)
      this.favCities = data
    })
  },
  methods:{
    // 显示输入城市模态框
    isShowModal(){
      this.modalTriggle = true
      this.$bus.$emit('getModalTriggle', this.modalTriggle)
    },
    // 显示城市删除功能
    isShowDelete(){
      if (!this.showDeleteFun) {
        this.$refs.delete.forEach(i => { i.style.display = 'block'})
        this.showDeleteFun = !this.showDeleteFun
      } else {
        this.$refs.delete.forEach(i => { i.style.display = 'none' })
        this.showDeleteFun = !this.showDeleteFun
      }
    },
    // 删除选中城市
    deleteCity(city){
      // 在firebase数据库中匹配被选中删除的城市
      db.collection('cities').where('city', '==', `${city}`)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          this.deleteId = doc.id
        })
      }).then(() => {
        db.collection('cities').doc(this.deleteId).delete()
      })
      console.log('当前被选中的城市',  city)
    },
    // 跳转到选中城市的天气详情页面
    toWeatherDetail(cityName){
      this.$router.push(`/weather/${cityName}`)
    }
  }
}
</script>

<style lang="scss" scoped>
#fav-loaction {
  nav {
    @include center-b;
    color: $f-gray;
    margin: px2rem(30) 0;

    span {
      font-size: px2rem(16);
    }
  }

  .icon {
    font-size: px2rem(18);

    i {
      margin-left: px2rem(10);
    }
  }
}

.fav-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .fav-box {
    position: relative;
    width: 48%;
    height: 150px;
    border-radius: $br-20;
    background-color: $bg-gray;
    margin-bottom: 5%;
    @include center-b;
    padding: px2rem(15);
    cursor: pointer;
    box-shadow: $shadow2;

    &:hover {
      box-shadow: $shadow2;
    }

    img {
      width: 1.4rem;
    }

    .icon-shanchu1 {
      position: absolute;
      top: px2rem(15);
      right: px2rem(15);
      font-weight: 700;
      color: $f-white;
      display: none;
    }
  }

  .desc {
    height: 100%;
    padding: px2rem(10) 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      font-size: px2rem(20);
      color: $f-white;
      font-weight: 700;
    }
    i {
      font-size: px2rem(12);
      color: $f-gray;
    }
    p {
      font-size: px2rem(14);
      font-weight: 700;
      color: $bg-blue;
    }
  }
}
</style>