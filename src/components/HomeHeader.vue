<template>
  <div id="home-header">
    <h1>FIND OTHER CITIES</h1>
    <!-- <p>Find the area or city that you want to know<br> the detailed weather info at this time</p> -->
    <h1>AND CHECK THE WEATHER</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
#home-header {
  height: px2rem(50);
  color: $f-white;
  flex-wrap: wrap;
  margin-bottom: px2rem(30);
  display: flex;
  align-items: center;

  h1 {
    width: 100%;
    display: block;
    font-size: px2rem(16);
  }

  p {
    text-align: center;
    color: #ccc;
  }
}
</style>