<template>
  <div class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav-item">
          <router-link :to="'/'">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link :to="'/vuex'">Vuex</router-link>
        </div>
        <div class="nav-item">
          <router-link :to="'/axios'">Axios</router-link>
        </div>
        <div class="nav-item">
          <router-link :to="'/demo'">Demo</router-link>
        </div>
        <div class="nav-item">
          <router-link :to="'/detail/33401891/doc'">DOC</router-link>
        </div>
        <div class="nav-item">
          <router-link :to="'/detail/33401891/ppt'">PPT</router-link>
        </div>
        <div class="nav-item">
          <router-link :to="'/detail/33401891/xls'">XLS</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('Home')
    return {
      name
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';
.header {
  position: fixed;
  z-index: 10;
  height: 60px;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;

  .container {
    height: 100%;
    max-width: 980px;
    margin: 0 auto;

    .nav {
      display: flex;
      align-items: center;
      position: relative;
      height: 100%;
      margin: 0;

      &-item {
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: block;
          height: inherit;
          padding: 0 16px;
          line-height: 60px;
          color: $text-gray;
          font-size: 14px;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            transition: all 0.3s ease;
            width: 0;
            left: 50%;
            bottom: 0;
            border-bottom: 2px solid $primary;
          }

          &.is-active {
            color: $primary;

            &::before {
              width: 100%;
              left: 0;
              bottom: 0;
              border-bottom: 3px solid $primary;
            }
          }
        }

        &:hover a {
          color: $primary;
        }
      }
    }
  }
}
</style>
