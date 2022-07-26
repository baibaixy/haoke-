<template>
  <div>
    <van-swipe :autoplay="3000" class="swipe_all">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="search_all">
      <div class="search_part">
        <div class="location" @click="searchCity">
          <span>{{ nowCity }}</span>
          <van-icon name="play" />
        </div>
        <van-search v-model="value" placeholder="请输入小区或地址" />
      </div>
      <div @click="onSearch" class="search_ditu iconfont icon-ditu1"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      images: [
        'http://liufusong.top:8080/img/swiper/1.png',
        'http://liufusong.top:8080/img/swiper/2.png',
        'http://liufusong.top:8080/img/swiper/3.png'
      ],
      value: '',
      nowCity: this.$store.state.nowCity
    }
  },
  mounted () {},
  computed: {},
  methods: {
    searchCity () {
      this.$store.commit('SetNowCity', this.nowCity)
      this.$router.push('/city')
    },
    onSearch () {
      console.log(111)
    }
  }
}
</script>
<style scoped lang="less">
.swipe_all {
  img {
    width: 100%;
    height: 212px;
  }
}
.search_all {
  position: absolute;
  left: 0;
  top: 0;
  width: 90%;
  height: 34px;
  margin: 25px 20px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  .search_part {
    width: 310px;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    margin-right: 9px;
    .location {
      width: 45px;
      height: 34px;
      display: flex;
      border-radius: 5px;
      justify-content: space-evenly;
      align-items: center;
      padding: 0 9px;
      background-color: #fff;
      border-right: 1px solid #e5e5e5;
      span {
        font-size: 14px;
      }
      .van-icon {
        display: block;
        color: #000;
        font-size: 12px;
        transform: rotate(90deg);
      }
    }
    .van-search {
      height: 34px;
      width: 270px;
      background-color: #fff;
      border-radius: 5px;
      .van-cell {
        background-color: #fff;
      }
      .van-search__content {
        background-color: #fff;
      }
    }
  }
  .search_ditu {
    width: 22px;
    height: 22px;
    margin-top: 3px;
  }
  .icon-ditu1 {
    display: inline-block;
    font-size: 19px;
    font-weight: 300;
    color: #fff;
    border-radius: 50%;
    border: 2px solid #fff;
  }
}
</style>
