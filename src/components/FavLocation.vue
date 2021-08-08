<template>
  <div id="fav-loaction">
    <nav>
      <span>Favorite Location</span>
      <div class="icon">
        <i class="iconfont icon-tianjia"></i>
        <i class="iconfont icon-shanchu"></i>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'FavLocation',
  props: ['cities'],

}
</script>

<style lang="scss" scoped>
#fav-loaction {
  nav {
    @include center-b;
    color: #fff;
    margin: px2rem(20) 0;

    span {
      font-size: px2rem(14);
      font-weight: 700;
    }
  }

  .icon {
    // font-weight: 700;
    font-size: px2rem(16);

    i {
      margin-left: px2rem(10);
    }
  }
}
</style>