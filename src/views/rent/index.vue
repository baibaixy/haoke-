<template>
  <div>
    <van-nav-bar title="房屋管理" left-arrow @click-left="onClickLeft" />
    <div class="favorite_list">
      <van-row
        class="favorite_one"
        v-for="(item, index) in rents"
        :key="index"
        @click="detailFn(item.houseCode)"
      >
        <van-col span="8">
          <img :src="baseIMG + item.houseImg" />
        </van-col>
        <van-col span="16" class="favorite_one_text">
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
          <span>{{ item.tags[0] }}</span>
          <i>{{ item.price }} <span> 元/月</span></i>
        </van-col>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-row>
    </div>
  </div>
</template>
<script>
import { getUserRent } from '@/api/user'
export default {
  data () {
    return {
      rents: {},
      baseIMG: 'http://liufusong.top:8080'
    }
  },
  mounted () {},
  computed: {},
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async getUserRent () {
      const {
        data: { body }
      } = await getUserRent()
      this.rents = body
    },
    detailFn (id) {
      this.$router.push(`detail/${id}`)
    }
  },
  created () {
    this.getUserRent()
  }
}
</script>
<style scoped lang="less">
.van-nav-bar {
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-icon) {
    color: #fff;
  }
}
.favorite_list {
  .favorite_one {
    height: 80px;
    width: 375px;
    padding: 20px 0;
    border-bottom: 1px solid #eeeeee;
    img {
      width: 106px;
      height: 80px;
    }
    .favorite_one_text {
      h4 {
        margin: 0;
        font-size: 16px;
        color: #394043;
      }
      p {
        margin: 3px 0;
        font-size: 12px;
        color: #afb2b3;
      }
      span {
        display: block;
        width: 46px;
        height: 20px;
        color: #39becd;
        background: #e1f5f8;
        font-size: 12px;
        text-align: center;
        border-radius: 3px;
      }
      i {
        font-size: 16px;
        font-weight: bolder;
        color: #fa5741;
        span {
          display: inline;
          background-color: #fff;
          font-size: 12px;
          color: #fa5741;
        }
      }
    }
  }
}
</style>
