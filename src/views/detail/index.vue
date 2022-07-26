<template>
  <div class="body">
    <van-nav-bar left-arrow @click-left="onClickLeft" title="" fixed />
    <MyHouseDetail></MyHouseDetail>
    <van-tabbar class="detail_bottom" fixed>
      <van-tabbar-item @click="setInCollect">
        <template>
          <van-icon v-if="isFavorite" name="star-o" />
          <van-icon v-else name="star" class="icon_star" />
        </template>
        收藏
      </van-tabbar-item>
      <van-tabbar-item>在线咨询</van-tabbar-item>
      <van-tabbar-item>电话预约</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { getInCollect, setInCollect, deleteInCollect } from '@/api/house'
import MyHouseDetail from './component'
export default {
  data () {
    return {
      isFavorite: false
    }
  },
  mounted () {},
  computed: {},
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async setInCollect () {
      // console.log(111)
      const id = this.$route.params.id
      if (this.isFavorite) {
        await setInCollect(id)
      } else {
        await deleteInCollect(id)
      }
      this.isFavorite = !this.isFavorite
    },
    async getInCollect () {
      const id = this.$route.params.id
      const {
        data: { body }
      } = await getInCollect(id)
      console.log(body)
      // this.isFavorite = body
    }
  },
  created () {
    this.getInCollect()
  },
  components: {
    MyHouseDetail
  }
}
</script>
<style scoped lang="less">
.body {
  background-color: #f6f5f6;
  .van-nav-bar {
    background-color: #21b97a;
    :deep(.van-icon) {
      color: #fff;
    }
  }
  .detail_bottom {
    height: 50px;
    .van-tabbar-item {
      font-size: 17px;
      color: #999999;
      border-top: 1px solid #cecfd1;
    }
    .van-tabbar-item:first-child {
      border-right: 1px solid #cecfd1;
    }
    .van-tabbar-item:last-child {
      border-left: 1px solid #cecfd1;
      background-color: #21b97a;
      color: #fff;
    }
    .icon_star {
      color: red;
    }
    .van-tabbar-item--active {
      color: #999999;
    }
  }
}
</style>
