<template>
  <div>
    <div class="header">
      <div class="search_all">
        <van-icon name="arrow-left" />
        <div class="search_part">
          <div class="location" @click="searchCity">
            <span>{{ nowCity }}</span>
            <van-icon name="play" />
          </div>
          <van-search v-model="value" placeholder="请输入小区或地址" />
        </div>
        <div @click="onSearch" class="search_ditu iconfont icon-ditu1"></div>
      </div>
      <van-row>
        <van-col
          span="6"
          v-for="item in houseChoose"
          :key="item"
          @click="chooseItem(item)"
          :class="item === chooseOne ? 'green' : ''"
        >
          <div>{{ item }}</div>
          <van-icon name="play" />
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nowCity: this.$store.state.nowCity,
      value: '',
      houseChoose: ['区域', '方式', '租金', '筛选'],
      chooseOne: '区域'
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
.header {
  position: fixed;
  .search_all {
    width: 355px;
    background-color: #21b97a;
    height: 35px;
    padding: 7px 10px;
    display: flex;
    text-align: center;
    justify-content: space-between;
    .van-icon-arrow-left {
      line-height: 35px;
      color: #fff;
    }
    .search_part {
      width: 274px;
      height: 34px;
      border-radius: 5px;
      background-color: #fff;
      display: flex;
      .location {
        width: 55px;
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
  .van-row {
    height: 40px;
    .van-col {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      height: 100%;
      div {
        font-size: 17px;
        font-weight: normal;
      }
      :deep(.van-icon) {
        display: block;
        color: #bbbbbb;
        font-size: 12px;
        transform: rotate(90deg);
      }
      .green {
        color: #000;
      }
    }
  }
}
</style>
