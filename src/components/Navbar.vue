<template>
  <header class="navbar">
    <nav>
      <i class="iconfont icon-fanhui"></i>
      <i class="iconfont icon-shanchu"></i>
    </nav>
    <div class="title">
      <h1>Choose a City</h1>
      <span>Selete a city or country to <br>see the weather</span>
    </div>
  </header>
 
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 25vh;
  // background-color: aquamarine;
  padding: 1rem;
  nav {
    display: flex;
    justify-content: space-between;
    i {
      color: #fff;
      font-size: 1.3rem;
      cursor: pointer;
    }
  }

  .title {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    h1 {
      width: 100%;
      color: #FFC83B;
      text-align: center;
      font-weight: 700;
    }
    span {
      width: 100%;
      text-align: center;
      color: #fff;
      font-weight: 500;
    }
  }
}
</style>