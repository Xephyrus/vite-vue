<template>
  <div ref="pixiel" class="pixiel">
    <div id="cat"></div>
    <div class="color-picker">
      <div v-for="{ name, label }: any in colorList" :key="name" class="block">
        <el-color-picker
          v-model="colorManage[name]"
          @change="(val: string) => onChange(val, name)"
        ></el-color-picker>
        <div class="demonstration">{{ label }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const colorManage = ref<any>({
  black: '#020000',
  gray: '#ccc9d1',
  dkgray: '#a09da2',
  pink: '#ffa4ef'
})

const colorList = ref([
  {
    name: 'black',
    label: '黑色'
  },
  {
    name: 'gray',
    label: '灰色'
  },
  {
    name: 'dkgray',
    label: '深灰'
  },
  {
    name: 'pink',
    label: '粉色'
  }
])

const pixiel: any = ref(null)

const onChange = (val: string, color: string) => {
  console.log(val, color)
  const pixielVal: any = pixiel.value
  pixielVal.style.setProperty(`--${color}`, val)
}
</script>

<style lang="scss" scoped>
// The width/height of each of our "pixels".
$size: 20px;

// Colors
$t: transparent; // 透明
$black: var(--black, #020000); // 黑
$gray: var(--gray, #ccc9d1); // 灰
$dkgray: var(--dkgray, #a09da2); // 深灰
$pink: var(--pink, #ffa4ef); // 粉色

$cat: (
  ($t, $t, $t, $black, $t, $t, $t, $t, $t, $t, $black),
  ($t, $t, $black, $gray, $black, $t, $t, $t, $t, $black, $gray, $black),
  (
    $t,
    $t,
    $black,
    $gray,
    $dkgray,
    $black,
    $black,
    $black,
    $black,
    $dkgray,
    $gray,
    $black,
    $t,
    $t,
    $t,
    $t,
    $t,
    $t,
    $t,
    $t,
    $black,
    $black
  ),
  (
    $t,
    $black,
    $dkgray,
    $gray,
    $gray,
    $dkgray,
    $dkgray,
    $gray,
    $dkgray,
    $gray,
    $gray,
    $dkgray,
    $black,
    $t,
    $t,
    $t,
    $t,
    $t,
    $t,
    $black,
    $gray,
    $gray,
    $black
  ),
  (
    $t,
    $black,
    $dkgray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $dkgray,
    $black,
    $t,
    $t,
    $t,
    $t,
    $t,
    $t,
    $black,
    $gray,
    $gray,
    $black
  ),
  (
    $black,
    $dkgray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $dkgray,
    $black,
    $black,
    $black,
    $black,
    $t,
    $t,
    $t,
    $black,
    $dkgray,
    $black
  ),
  (
    $black,
    $gray,
    $gray,
    $black,
    $gray,
    $gray,
    $black,
    $gray,
    $gray,
    $black,
    $gray,
    $gray,
    $gray,
    $dkgray,
    $gray,
    $dkgray,
    $gray,
    $black,
    $t,
    $t,
    $black,
    $gray,
    $black
  ),
  (
    $black,
    $gray,
    $pink,
    $gray,
    $gray,
    $black,
    $gray,
    $black,
    $gray,
    $gray,
    $pink,
    $gray,
    $gray,
    $dkgray,
    $gray,
    $dkgray,
    $gray,
    $gray,
    $black,
    $black,
    $black,
    $dkgray,
    $black
  ),
  (
    $black,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $black,
    $gray,
    $black
  ),
  (
    $black,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $black
  ),
  (
    $black,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $black
  ),
  (
    $black,
    $dkgray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $black
  ),
  (
    $black,
    $dkgray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $black
  ),
  (
    $black,
    $dkgray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $dkgray,
    $black
  ),
  (
    $t,
    $black,
    $dkgray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $gray,
    $dkgray,
    $black
  ),
  (
    $t,
    $t,
    $black,
    $dkgray,
    $gray,
    $dkgray,
    $dkgray,
    $gray,
    $dkgray,
    $gray,
    $gray,
    $gray,
    $dkgray,
    $gray,
    $dkgray,
    $dkgray,
    $gray,
    $dkgray,
    $black
  ),
  (
    $t,
    $t,
    $t,
    $black,
    $gray,
    $black,
    $black,
    $gray,
    $black,
    $black,
    $black,
    $black,
    $black,
    $gray,
    $black,
    $black,
    $gray,
    $black
  ),
  (
    $t,
    $t,
    $t,
    $black,
    $black,
    $t,
    $t,
    $black,
    $black,
    $t,
    $t,
    $t,
    $black,
    $black,
    $t,
    $t,
    $black,
    $black
  )
);
@function pixelize($colors, $size) {
  $result: '';
  $numRows: length($colors);

  @for $rowIndex from 1 through $numRows {
    $y: ($rowIndex - 1);
    $row: nth($colors, $rowIndex);
    $numCols: length($row);

    @for $cellIndex from 1 through $numCols {
      $x: ($cellIndex - 1);
      $color: nth($row, $cellIndex);

      $sep: ', ';
      @if $x == 0 and $y == 0 {
        $sep: '';
      }

      $result: $result + '#{$sep}#{$x * $size} #{$y * $size} #{$color}';
    }
  }

  $result: unquote($result);
  @return $result;
}

.pixiel {
  position: relative;
  #cat {
    position: relative;
    width: calc(23 * #{$size}); // Pixel size * # of columns
    height: calc(18 * #{$size}); // Pixel size * # of rows
    margin: 1rem;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: $size;
      height: $size;
      box-shadow: pixelize($cat, $size);
      // box-shadow will be applied here
    }
  }

  .color-picker {
    position: absolute;
    left: calc(25 * #{$size});
    top: 0;

    .block {
      display: flex;

      .demonstration {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        margin-left: 1em;
      }
    }
  }
}
</style>
