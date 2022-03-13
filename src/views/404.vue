<template>
  <div class="main">
    <span>404</span>
    <span>哎呀，网页溜走了...</span>
    <div class="btn-go-home">
      <van-button size="small" plain @click="relaunch('/')">返回首页</van-button>
    </div>
  </div>
</template>

<script>
import common from '@/mixins/common'

export default {
  name: 'Page404',
  mixins: [common]
}
</script>

<style lang="less" scoped>
.main{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >span{
    font-size: 20px;
    padding: 5px;
  }
  .btn-go-home{
    margin-top: 20px;
  }
}
</style>
