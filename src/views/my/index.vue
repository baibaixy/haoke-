<template>
  <div>
    <header>
      <div v-if="isLogin" class="banner_islogin">
        <img class="my_bg" :src="img" />
        <div class="my_info_yk">
          <van-row
            ><van-image
              round
              class="yk_tx"
              src="http://liufusong.top:8080/img/profile/avatar.png"
          /></van-row>
          <van-row class="yk_wz"> {{ userInfo.nickname }} </van-row>
          <van-row>
            <van-button class="yk_login" size="small" @click="outLogin" round
              >退出</van-button
            >
          </van-row>
          <van-row class="edit_my">
            <span>编辑个人资料 ></span>
          </van-row>
        </div>
      </div>
      <div v-else class="banner">
        <img
          class="my_bg"
          src="http://liufusong.top:8080/img/profile/bg.png"
          alt=""
        />
        <div class="my_info_yk">
          <van-row
            ><van-image
              round
              class="yk_tx"
              src="http://liufusong.top:8080/img/profile/avatar.png"
          /></van-row>
          <van-row class="yk_wz"> 游客 </van-row>
          <van-row>
            <van-button class="yk_login" size="small" @click="goLogin"
              >去登陆</van-button
            >
          </van-row>
        </div>
      </div>
    </header>
    <main class="my_main">
      <van-grid :column-num="3">
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-shoucang"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-fangzi"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-shijian"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-fangzhu"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-geren"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-24gl-headset"></span>
          </template>
        </van-grid-item>
      </van-grid>
    </main>
    <footer class="footer">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </footer>
  </div>
</template>
<script>
import { getUserInfo } from '@/api/user'
import baseIMG from '@/utils/img'
export default {
  data () {
    return {
      userInfo: {},
      img: '',
      baseIMG
    }
  },
  mounted () {},
  computed: {
    isLogin () {
      return !!this.$store.state.user.token
    }
  },
  methods: {
    outLogin () {
      this.$dialog
        .confirm({
          title: '好客租房',
          message: '是否确认退出该账号'
        })
        .then(() => {
          this.$store.commit('SetUser', {})
        })
        .catch(() => {})
    },
    goLogin () {
      this.$router.push('/login')
    },
    async getUserInfo () {
      try {
        if (this.isLogin) {
          const {
            data: { body }
          } = await getUserInfo()
          this.userInfo = body
          this.img = 'http://liufusong.top:8080' + this.userInfo.avatar
          console.log(body)
        }
      } catch (error) {
        this.$toast.fail('请重新登录')
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>
<style scoped lang="less">
.banner {
  position: relative;
  width: 375px;
  height: 300px;
  .my_bg {
    width: 100%;
  }
  .my_info_yk {
    position: absolute;
    background: #fff;
    width: 75%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .yk_tx {
      position: relative;
      transform: translateY(-50%);
      height: 60px;
      border: 5px solid #f5f5f5;
      box-shadow: 0 0 10px 3px #ddd;
    }
    .yk_wz {
      margin: -20px 0 0 0;
      font-size: 13px;
    }
    .yk_login {
      width: 70px;
      height: 30px;
      font-size: 13px;
      color: #fff;
      background-color: #21b97a;
      margin-top: 20px;
      border-radius: 5px;
    }
  }
}
.banner_islogin {
  position: relative;
  width: 375px;
  height: 380px;
  .my_bg {
    width: 100%;
    height: 370px;
  }
  .my_info_yk {
    position: absolute;
    background: #fff;
    width: 75%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .yk_tx {
      position: relative;
      transform: translateY(-50%);
      height: 60px;
      border: 5px solid #f5f5f5;
      box-shadow: 0 0 10px 3px #ddd;
    }
    .yk_wz {
      margin: -20px 0 0 0;
      font-size: 13px;
    }
    .yk_login {
      width: 60px;
      height: 20px;
      font-size: 13px;
      color: #fff;
      background-color: #21b97a;
      margin-top: 5px;
      border-radius: 10px;
    }
    .edit_my {
      font-size: 13px;
      margin-top: 28px;
      color: #999999;
    }
  }
}
.my_main {
  margin-top: 10px;
  .van-grid-item {
    height: 90px;
    :deep(.van-grid-item__text) {
      line-height: 2.5;
      font-size: 13px;
    }
    .iconfont {
      font-size: 21px;
    }
    .icon-fangzi {
      font-size: 30px;
    }
  }
}
.footer {
  width: 345px;
  height: 85px;
  border-radius: 5px;
  margin: 8px auto;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
