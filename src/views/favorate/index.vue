<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    <Myhouse></Myhouse>
  </div>
</template>
<script>
import Myhouse from './component'
export default {
  data () {
    return {}
  },
  mounted () {},
  computed: {},
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  },
  components: {
    Myhouse
  }
}
</script>
<style scoped lang="less"></style>
