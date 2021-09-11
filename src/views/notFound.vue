<template>
  <div class="notFound">
    <div class="page-404">
      <p class="text-404 text-danger">It Seems Error Occurs</p>
      <h2 class="text-404">404 not found</h2>
      <div class="link-wrap">
        <div class="text-left mb-20">
          <ex-button type="primary" @click="router.push('/')"
            ><span class="font-lcd">BACK TO HOMEPAGE</span></ex-button
          >
        </div>
        <div class="font-lcd text-primary text-right text-back mg-8" @click="router.go(-1)">
          Or, back to previous page
          <svg-icon name="prev" size="18" color="#2061ff" class="prev"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'notFound'
})
</script>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import exButton from '../components/base/ex-button.vue'
import SvgIcon from '../components/SvgIcon.vue'
import router from '../router/index'
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';
.notFound {
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;

  .page-404 {
    width: 580px;

    .text-404 {
      font-size: 40px;
      font-family: LCD;
      letter-spacing: 2px;
      color: #333;
      margin-bottom: 20px;
    }

    .link-wrap {
      width: 400px;
      margin: 0 auto;

      .text-back {
        font-size: 18px;
        cursor: pointer;

        .prev {
          transform: rotateY(180deg);
        }
      }
    }
  }
}

#app .router-view {
  width: 100%;
}
</style>
