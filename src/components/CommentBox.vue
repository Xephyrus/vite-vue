<template>
  <div class="comment-box">
    <form action="" class="grid">
      <textarea
        name="comment"
        id=""
        placeholder="请输入你的评论"
        class="textarea"
        cols="30"
        rows="5"
      ></textarea>
    </form>
    <div class="comment-box-foot mt-12">
      <ex-button class="mr-12">取消</ex-button>
      <ex-button type="primary">发送</ex-button>
    </div>
  </div>
</template>

<script lang="ts">
import ExButton from './base/ex-button.vue'
export default {
  components: {
    ExButton
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';
.comment-box {
  padding: 24px 16px;
  .grid {
    textarea[name='comment'] {
      width: 100%;
      padding: 12px;
      resize: none;
      display: block;
      box-sizing: border-box;
      outline: none;

      &:focus {
        border-color: #409eff;
      }
    }
  }

  &-foot {
    text-align: right;
  }
}
</style>
