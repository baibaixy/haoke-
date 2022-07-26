<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white" class="swipe_all">
      <van-swipe-item v-for="item in Details.houseImg" :key="item">
        <img :src="baseIMG + item" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="detail_contain">
      <div class="detail_title">
        <h4>{{ Details.title }}</h4>
        <span v-for="item in Details.tags" :key="item">{{ item }}</span>
      </div>
      <van-row class="detail_rent">
        <van-col span="8">
          <van-row>{{ Details.price }} <span>/月</span> </van-row>
          <van-row>租金</van-row>
        </van-col>
        <van-col span="8">
          <van-row>{{ Details.roomType }}</van-row>
          <van-row>房型</van-row>
        </van-col>
        <van-col span="8">
          <van-row>{{ Details.size }}<span>平米</span> </van-row>
          <van-row>面积</van-row>
        </van-col>
      </van-row>
      <van-row class="detail_house">
        <van-col span="12">
          <van-row> 装修: <span>精装</span> </van-row>
          <van-row>
            楼层: <span>{{ Details.floor }}</span>
          </van-row>
        </van-col>
        <van-col span="12">
          <van-row v-for="item in Details.oriented" :key="item">
            朝向: <span> {{ item }}</span>
          </van-row>
          <van-row> 类型: <span>普通住宅</span> </van-row>
        </van-col>
      </van-row>
    </div>
    <div class="detail_map">
      <span>小区: {{ Details.community }}</span>
      <div>
        <baidu-map
          class="Map"
          :center="map.center"
          :zoom="map.zoom"
          @ready="handler"
        >
          <!--缩放-->
          <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
          <!--定位-->
          <bm-geolocation
            anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
            :showAddressBar="true"
            :autoLocation="true"
          ></bm-geolocation>
          <!--点-->
          <bm-marker
            :position="map.center"
            :dragging="map.dragging"
            animation="BMAP_ANIMATION_DROP"
          >
            <!--提示信息-->
            <bm-info-window :show="map.show">云端锦医试点</bm-info-window>
          </bm-marker>
        </baidu-map>
      </div>
    </div>

    <div class="householdElectricalAppliances">
      <div class="Appliances_title">
        <h4>房屋配置</h4>
      </div>
      <van-row>
        <van-col span="6">
          <div class="iconfont icon-yigui"></div>
          <span>衣柜</span>
        </van-col>
        <van-col span="6">
          <div class="iconfont icon-bingxiang"></div>
          <span>冰箱</span>
        </van-col>
        <van-col span="6">
          <div class="iconfont icon-xiyiji"></div>
          <span>洗衣机</span>
        </van-col>
        <van-col span="6">
          <div class="iconfont icon-kongdiao"></div>
          <span>空调</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">
          <div class="iconfont icon-tianranqi"></div>
          <span>天然气</span>
        </van-col>
        <van-col span="6">
          <div class="iconfont icon-reshuiqi"></div>
          <span>热水器</span>
        </van-col>
        <van-col span="6">
          <div class="iconfont icon-shafa"></div>
          <span>沙发</span>
        </van-col>
        <van-col span="6">
          <div class="iconfont icon-dianshi"></div>
          <span>电视</span>
        </van-col>
      </van-row>
    </div>
    <div class="detail_survey">
      <div class="Appliances_title1">
        <h4>房屋概况</h4>
      </div>
      <div class="detail_user">
        <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
        <div class="detail_user_wang">
          <h4>王女士</h4>
          <div class="detail_user_renzhen">
            <van-icon name="medal-o" />
            <i>已认证房主</i>
          </div>
        </div>
        <van-button plain hairline type="primary">发消息</van-button>
      </div>
      <div class="detail_introduce">
        1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
        2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
        3.人车分流，环境优美。
        4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
      </div>
    </div>
    <div class="detail_tuilike">
      <div class="Appliances_title2">
        <h4>房屋概况</h4>
      </div>
      <Myhouse></Myhouse>
    </div>
  </div>
</template>
<script>
import { getUserDetail } from '@/api/house'
import Myhouse from '@/views/favorate/component'
export default {
  name: 'MyHouseDetail',
  data () {
    return {
      Details: [],
      baseIMG: 'http://liufusong.top:8080',
      // img: this.Details.houseImg[0]
      map: {
        center: { lng: 115.929912, lat: 28.683191 },
        zoom: 15,
        show: true,
        dragging: true
      }
    }
  },
  mounted () {},
  computed: {},
  methods: {
    async getUserDetail () {
      const id = this.$route.params.id
      const {
        data: { body }
      } = await getUserDetail(id)
      console.log(body)
      this.Details = body
    },
    handler ({ BMap, map }) {
      // const me = this
      console.log(BMap, map)
      // 鼠标缩放
      map.enableScrollWheelZoom(true)
      // 点击事件获取经纬度
      map.addEventListener('click', function (e) {
        console.log(e.point.lng, e.point.lat)
      })
    }
  },
  created () {
    this.getUserDetail()
  },
  components: {
    Myhouse
  }
}
</script>
<style scoped lang="less">
.swipe_all {
  margin-top: 46px;
  img {
    width: 100%;
    height: 273px;
  }
}
.detail_contain {
  background-color: #fff;
  width: 345;
  height: 216px;
  padding: 0 15px 10px;
  .detail_title {
    border-bottom: 1px solid #d7d7d7;
    h4 {
      font-size: 16px;
      color: #333;
      margin: 10px 0 16px;
    }
    span {
      display: block;
      width: 44px;
      height: 20px;
      color: #39becd;
      background: #e1f5f8;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      margin-bottom: 16px;
    }
  }
  .detail_rent {
    padding: 15px 0;
    border-bottom: 1px solid #d7d7d7;
    .van-col {
      text-align: center;
      .van-row:first-child {
        color: #fa5741;
        font-size: 18px;
        font-weight: bolder;
      }
      .van-row:last-child {
        margin-top: 5px;
        color: #999999;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
  .detail_house {
    margin-top: 11px;
    .van-col {
      font-size: 13px;
      .van-row {
        padding: 5px 5px 5px 0;
        color: #999999;
        span {
          color: #333333;
        }
      }
    }
  }
}
.detail_map {
  width: 100%;
  height: 190px;
  margin: 12px 0;
  background-color: #fff;
  span {
    display: inline-block;
    padding: 12px;
    font-size: 14px;
    color: #333333;
  }
  .Map {
    width: 100%;
    height: 145px;
    background-color: purple;
    margin-top: 16px;
  }
}

.householdElectricalAppliances {
  height: 180px;
  background-color: #fff;
  padding: 0 15px;
  .Appliances_title {
    height: 48px;
    font-size: 15px;
    line-height: 48px;
    border-bottom: 1px solid #cecfd1;
  }
  .van-row {
    height: 60px;
    font-size: 14px;
    .van-col {
      margin-top: 20px;
      text-align: center;
      div {
        .iconfont {
          font-size: 70px;
        }
      }
    }
  }
}
.detail_survey {
  height: 266px;
  margin-top: 15px;
  padding: 0 15px;
  background-color: #fff;
  .Appliances_title1 {
    height: 48px;
    font-size: 15px;
    line-height: 48px;
    border-bottom: 1px solid #cecfd1;
  }
  .detail_user {
    margin-top: 15px;
    display: flex;
    img {
      width: 52px;
      height: 52px;
      margin-right: 10px;
    }
    .detail_user_wang {
      flex: 1;
      h4 {
        font-size: 14px;
        margin: 10px 0 5px;
      }
      .detail_user_renzhen {
        font-size: 12px;
        color: red;
        .iconfont {
          font-size: 16px;
          font-style: normal;
        }
      }
    }
    .van-button {
      width: 74px;
      height: 29px;
      margin: 15px 3px;
    }
  }
  .detail_introduce {
    line-height: 1.6;
    padding: 10px 0;
    color: #333;
    font-size: 14px;
  }
}
.detail_tuilike {
  min-height: 60px;
  margin-bottom: 50px;
  background-color: #fff;
  padding: 0 15px;
  .Appliances_title2 {
    height: 48px;
    font-size: 15px;
    line-height: 48px;
    border-bottom: 1px solid #cecfd1;
  }
}
</style>
