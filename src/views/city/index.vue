<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="goMy" />
    <van-index-bar :index-list="cityIndex">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell>{{ nowCity }}</van-cell>
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        v-for="obj in hotCityList"
        :key="obj.label"
        @click="chooseCity(obj.label)"
        >{{ obj.label }}</van-cell
      >
      <div v-for="ele in oldCityIndex" :key="ele">
        <van-index-anchor :index="ele.toUpperCase()" />
        <van-cell
          v-for="(e, index) in citylist[ele]"
          :key="index"
          :title="e.label"
          @click="chooseCity(e.label)"
        ></van-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getAreaCity, getAreaHotCity } from '@/api/area'
export default {
  data () {
    return {
      cityIndex: [],
      oldCityIndex: [],
      citylist: {},
      hotCityList: [],
      nowCity: this.$store.state.nowCity
    }
  },
  created () {
    this.getAreaCity()
    this.getAreaHotCity()
  },
  methods: {
    goMy () {
      this.$router.back()
    },
    // 获取城市列表数据
    async getAreaCity () {
      const { data } = await getAreaCity(1)
      // console.log(data.body)
      const city = data.body
      const res = this.formatCityData(city)
      this.oldCityIndex = res.cityIndex
      const abc = res.cityIndex.map((ele) => ele.toUpperCase())
      this.cityIndex = abc
      this.cityIndex.unshift('#', '热')
      this.citylist = res.citylist
      // this.citylist['热'].push(...this.hotCityList)
      // this.citylist.unshift(...this.hotCityList)
      // console.log(this.citylist)
      // console.log(this.oldCityIndex)
      // console.log(this.cityIndex)
      // console.log(this.citylist)
    },
    formatCityData (data) {
      // data => 原数组数据
      let citylist = {}
      let cityIndex = []
      data.map((item) => {
        const first = item.short.substr(0, 1)
        if (first in citylist) {
          citylist[first].push(item)
        } else {
          citylist[first] = [item]
        }
        cityIndex = Object.keys(citylist).sort()
      })
      return {
        citylist,
        cityIndex
      }
    },
    // 查询热门城市
    async getAreaHotCity () {
      const { data } = await getAreaHotCity()
      console.log(data.body)
      this.hotCityList = data.body
    },
    chooseCity (item) {
      this.nowCity = item
      this.$store.commit('SetNowCity', item)
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
  .van-nav-bar__title {
    color: #fff;
    justify-content: center;
    font-size: 18px;
    white-space: nowrap;
  }
  .van-icon-arrow-left {
    color: #fff;
    margin-left: 5px;
  }
}
</style>
