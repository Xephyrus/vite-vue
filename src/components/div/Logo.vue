<template>
  <div class="logo">
    <div v-if="name === 'doc'" class="doc">
      <div class="word"></div>
      <div class="layer layer--1"></div>
      <div class="layer layer--2"></div>
      <div class="layer layer--3"></div>
      <div class="layer layer--4"></div>
    </div>

    <div v-else-if="name === 'xls'" class="xls">
      <div class="excel"></div>
      <div class="column"></div>
      <div class="layer layerx--1"></div>
      <div class="layer layerx--2"></div>
      <div class="layer layerx--3"></div>
      <div class="layer layerx--4"></div>
    </div>

    <div v-else-if="name === 'ppt'" class="ppt">
      <div class="powerpoint"></div>
      <div class="ppt-left"></div>
      <div class="ppt-right"></div>
    </div>

    <div v-else-if="name === 'ae'" class="ae">
      <div class="access"></div>
      <div class="cylinder cylinder--1" style="--i: 3"></div>
      <div class="cylinder cylinder--2" style="--i: 2"></div>
      <div class="cylinder cylinder--3" style="--i: 1"></div>
    </div>

    <div v-else-if="name === 'olk'" class="olk">
      <div class="outlook"></div>
      <div class="message-right"></div>
      <div class="message-left"></div>
      <div class="diamond"></div>
      <div class="grid"></div>
    </div>

    <div v-else-if="name === 'pub'" class="pub">
      <div class="publisher"></div>
      <div class="layer layer--1"></div>
      <div class="layer layer--2"></div>
      <div class="layer layer--3"></div>
      <div class="layer layer--4"></div>
    </div>

    <div v-else-if="name === 'note'" class="note">
      <div class="one-note"></div>
      <div class="layer"></div>
    </div>

    <div v-else-if="name === 'ex'" class="ex">
      <div class="exchange"></div>
      <div class="layer"></div>
      <div class="layer-left"></div>
      <div class="layer-right"></div>
    </div>

    <div v-else-if="name === 'tm'" class="tm">
      <div class="teams"></div>
      <div class="layer layer-front"><div class="man man-front" style="--bg: #7b82ea"></div></div>
      <div class="layer layer-back"><div class="man man-back" style="--bg: #4f59ca"></div></div>
    </div>

    <div v-else-if="name === 'sp'" class="sp">
      <div class="share-point"></div>
      <div class="round round--1" style="--i: 1"></div>
      <div class="round round--2" style="--i: 2"></div>
      <div class="round round--3" style="--i: 3"></div>
    </div>

    <div v-else-if="name === 'vs'" class="vs">
      <div class="visio"></div>
      <div class="figure figure--1" style="--i: 2"></div>
      <div class="figure figure--2" style="--i: 1"></div>
      <div class="figure figure--3" style="--i: 2"></div>
    </div>

    <div v-else-if="name === 'sw'" class="sw">
      <div class="sway"></div>
      <div class="layer layer--1"></div>
      <div class="box">
        <div class="figure figure--1"></div>
        <div class="figure figure--2"></div>
      </div>
      <div class="layer layer--4"></div>
    </div>

    <div v-else-if="name === 'form'" class="form">
      <div class="forms"></div>
      <div class="layer layer--1">
        <div class="radio"></div>
      </div>
      <div class="layer layer--2">
        <div class="checkbox"></div>
      </div>
    </div>

    <div v-else-if="name === 'sky'" class="sky">
      <div class="skype"></div>
      <div class="layer layer--1"></div>
      <div class="layer layer--2"></div>
    </div>

    <div v-else-if="name === 'ym'" class="ym">
      <div class="yammer"></div>
      <div class="layer layer--1" style="--deg: 45deg; --size: 125px"></div>
      <div class="layer layer--2" style="--deg: 75deg; --size: 150px"></div>
      <div class="layer layer--3" style="--deg: 105deg; --size: 125px"></div>
    </div>

    <div v-else-if="name === 'st'" class="stream">
      <div class="layer">
        <triangle :size="7.5" bgColor="#e7457a" class="figure"></triangle>
      </div>
      <div class="layer">
        <triangle :size="7.5" bgColor="#bc1947" class="figure" style="margin-top: -50%"></triangle>
      </div>
      <triangle :size="4" bgColor="#8b183e" class="angle"></triangle>
    </div>
  </div>
</template>

<script lang="ts" setup>
import triangle from '../geometry/triangle.vue'

const props = defineProps({
    name: String
  });
</script>

<style lang="scss" scoped>
$word-1: #42a5ee;
$word-2: #2b7dd3;
$word-3: #175bbe;
$word-4: #103f90;

$excel-1: #34c380;
$excel-2: #20a366;
$excel-3: #0e7c41;
$excel-4: #185c37;

$ppt-1: #fe906a;
$ppt-2: #ee6b47;
$ppt-3: #d35232;

$ae-1: #d57c8e;
$ae-2: #c04d5c;
$ae-3: #a5212f;
$ae-4: #a5212f;
$ae-5: #831a1f;

$pub-1: #40b9c4;
$pub-2: #219499;
$pub-3: #127e81;

$olk-1: #105ea9;
$olk-1-1: #1971b9; // 也是符号的背景颜色
$olk-1-2: #339dd7;
$olk-1-3: #63c5e8;
$olk-2-2: #1971b9;
$olk-2-3: #319ed6;
$olk-3-2: #105ea9;
$olk-3-3: #1971b9; // 左
$olk-right: #2187c9; // 右
$olk-dark: #162b59;

$note: #cb64eb;
$note-grid: ((#af4ad6), (#942ec0), (#7812ac));

$ex-letter: #0078d3;
$ex-1: #28a7ea;
$ex-2: #4fd9fe;
$ex-3: #0178d4;

$sp-1: #036c6f;
$sp-2: #1b9ba2;
$sp-3: #36c6ce;

$vs-1: #3fa6ec;
$vs-2: #2c7dd3;
$vs-3: #0f3f91;

$sway-letter: #028388;
$sway-1: #36c6ce;
$sway-2: #87f2f2;
$sway-3: #1b9ba2;
$sway-4: #028388;
$sway-5: #036c6f;

$forms-1: #37c5cf;
$forms-2: #1a9ba1;
$forms-3: #036c70;
$forms-4: #1a9ba1;

$yammer-letter: #0e78d4;
$yammer-1: #28a8ea;
$yammer-2: #0e78d4;
$yammer-3: #0459a7;

$grid: (
  ($olk-1-1, $olk-1-2, $olk-1-3),
  ($olk-1-1, $olk-2-2, $olk-2-3),
  ($olk-1-1, $olk-3-2, $olk-3-3)
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

$body: #00abec;
$body-2: lighten($body, 20%);

@mixin cells($hex, $top-left, $top-right, $position, $bottom-right, $bottom-left) {
  background: $hex;
  border-radius: $top-left $top-right $bottom-right $bottom-left;
  top: $position;
}
@mixin text($content) {
  position: absolute;
  content: $content;
  top: 22%;
  left: 32%;
  font-size: 48px;
  color: #fff;
  font-family: 'Arial', sans-serif;
  line-height: 1.2;
}
@mixin textShadow($startColor, $endColor) {
  position: absolute;
  width: 90px;
  height: 90px;
  background: linear-gradient($startColor, $endColor);
  top: 25%;
  right: 65%;
  border-radius: 10px;
  box-shadow: 6px 0px 0px #00000020, 10px -4px 0px #00000010, 10px 4px 0px #00000010;
  z-index: 2;
}
@mixin mainArea() {
  width: 150px;
  height: 180px;
  background: grey;
  border-radius: 10px;
  margin-right: 60px;
  position: relative;
  transition: box-shadow 0.5s;
}
@mixin mainAreaHover($hoverColor) {
  box-shadow: 0px 5px 15px darken($hoverColor, 20%);
}
@mixin ellipse($bg) {
  position: absolute;
  content: '';
  height: 46px;
  width: 100%;
  left: 0;
  clip-path: ellipse(50% 50% at 50% 50%);
  background: $bg;
}
@mixin cylinder($color1, $color2) {
  width: 150px;
  height: 46px;
  background: $color1;
  position: relative;
  &::before {
    @include ellipse($color2);
    top: -23px;
  }

  &::after {
    @include ellipse($color1);
    bottom: -23px;
    transition: 0.5s;
  }
}
@mixin message() {
  width: 100%;
  height: 103.5px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.logo {
  .doc {
    &:hover {
      @include mainAreaHover($word-1);
    }
    @include mainArea();
    .word {
      @include textShadow(#1d60c0, #1653b6);
      &::before {
        @include text('W');
        height: 26%;
        left: 27%;
      }
    }
    .layer {
      position: absolute;
      width: 150px;
      height: 45px;
      &--1 {
        @include cells($word-1, 10px, 10px, 0px, 0px, 0px);
      }
      &--2 {
        @include cells($word-2, 0px, 0px, 45px, 0px, 0px);
      }
      &--3 {
        @include cells($word-3, 0px, 0px, 90px, 0px, 0px);
      }
      &--4 {
        @include cells($word-4, 0px, 0px, 135px, 10px, 10px);
      }
    }
  }
  .xls {
    &:hover {
      @include mainAreaHover($excel-1);
    }
    @extend .doc;
    .excel {
      @include textShadow(#17874e, #0e6b35);
      &::before {
        @include text('X');
      }
    }
    .column {
      border-top-left-radius: 10px;
      width: 80px;
      height: 100px;
      background-color: #185c3780;
      position: absolute;
      z-index: 1;
    }
    .layerx {
      &--1 {
        @include cells($excel-1, 10px, 10px, 0px, 0px, 0px);
      }
      &--2 {
        @include cells($excel-2, 0px, 0px, 45px, 0px, 0px);
      }
      &--3 {
        @include cells($excel-3, 0px, 0px, 90px, 0px, 0px);
      }
      &--4 {
        @include cells($excel-4, 0px, 0px, 135px, 10px, 10px);
      }
    }
  }
  .ppt {
    margin-left: -14px;
    &:hover {
      @include mainAreaHover($ppt-1);
    }
    @include mainArea();
    background: linear-gradient(to bottom, rgba(255, 144, 106, 1) 40%, rgba(211, 82, 50, 1) 100%);
    width: 180px;
    border-radius: 100%;
    margin-right: 60px;
    .powerpoint {
      @include textShadow(#c54424, #bc3819);
      &::before {
        @include text('P');
      }
    }
    .ppt-left {
      z-index: 1;
      position: absolute;
      width: 98px;
      height: 100px;
      background-color: $ppt-2;
      top: 0;
      left: -4px;
      border-radius: 100% 0px 0px 0px;
    }
    .ppt-right {
      @extend .ppt-left;
      left: 94px;
      width: 85px;
      background-color: $ppt-1;
      border-radius: 0px 100% 0px 0px;
    }
  }

  .ae {
    &:hover {
      @include mainAreaHover($ae-4);

      .cylinder--3::after {
        @include mainAreaHover($ae-5);
      }
    }
    @extend .doc;
    padding-bottom: 40px;
    height: 100px;
    margin-top: 40px;
    transform: translateY(-15px);
    .access {
      @include textShadow(#a52533, #a62230);
      top: 14%;
      z-index: 4;
      &::before {
        @include text('A');
      }
    }

    .cylinder {
      z-index: var(--i);

      &--1 {
        @include cylinder($ae-2, $ae-1);
      }

      &--2 {
        @include cylinder($ae-4, $ae-1);
      }

      &--3 {
        @include cylinder($ae-5, $ae-1);
      }
    }
  }

  .pub {
    &:hover {
      @include mainAreaHover($pub-3);
      &::after {
        @include mainAreaHover($pub-3);
      }
    }
    @include mainArea();
    width: 135px;

    &::after {
      position: absolute;
      content: '';
      height: 160px;
      background: $pub-3;
      width: 32px;
      left: 100%;
      top: 10px;
      transition: all 0.5s;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      z-index: 0;
    }

    &::before {
      position: absolute;
      content: '';
      display: block;
      height: 160px;
      width: 20px;
      margin-left: -20px;
      left: 100%;
      top: 10px;
      box-shadow: 5px 0px 0px #00000020, 10px 0px 0px #00000010, 10px 0px 0px #00000010;
      z-index: 1;
    }

    .publisher {
      @include textShadow($pub-3, $pub-3);
      &::before {
        @include text('P');
        height: 26%;
        left: 32%;
      }
    }
    .layer {
      z-index: 1;
      position: absolute;
      width: 135px;
      height: 45px;
      &--1 {
        @include cells($pub-1, 10px, 10px, 0px, 0px, 0px);
      }
      &--2 {
        @include cells($pub-1, 0px, 0px, 45px, 0px, 0px);
      }
      &--3 {
        @include cells($pub-2, 0px, 0px, 90px, 0px, 0px);
      }
      &--4 {
        @include cells($pub-3, 0px, 0px, 135px, 10px, 10px);
      }
    }
  }

  .olk {
    &:hover {
      @include mainAreaHover($olk-1-1);
      &::after {
        @include mainAreaHover($olk-1-1);
      }
      .grid {
        transition: transform 0.5s;
        transform: translateY(-25px);
      }
    }
    @include mainArea();
    margin-top: 70px;
    height: 110px;

    .outlook {
      @include textShadow($olk-1-1, $olk-1-1);
      top: auto;
      bottom: 45px;
      z-index: 3;
      &::before {
        @include text('O');
        height: 26%;
        left: 30%;
        top: auto;
        bottom: 50px;
      }
    }

    .message {
      &-left {
        @include message();
        clip-path: polygon(0 0, 0% 100%, 100% 100%);
        background: $olk-1-2;
        border-radius: 10px;
        z-index: 2;
      }
      &-right {
        @include message();
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        background: $olk-right;
        border-radius: 10px 0 10px 10px;
        z-index: 1;
      }
    }

    .diamond {
      width: 93px;
      height: 93px;
      position: absolute;
      bottom: 103.5px;
      background: $olk-dark;
      border-radius: 10px;
      transform: rotate(45deg) skew(-10deg, -10deg);
      transform-origin: 0% 100%;
    }

    .grid {
      position: absolute;
      width: 126px;
      height: 100px;
      top: -70px;
      left: 12.5px;
      background: $olk-1;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      transition: transform 0.5s;

      &::after {
        content: '';
        position: absolute;
        top: 18.75px;
        left: 0;
        background: $olk-1-1;
        width: 42px;
        height: 42px;
        box-shadow: pixelize($grid, 42px);
      }
    }
  }

  .note {
    &:hover {
      @include mainAreaHover($note);
    }
    @include mainArea();
    background: $note;
    .one-note {
      @include textShadow(#831eb3, #630999);
      &::before {
        @include text('N');
        height: 26%;
        left: 30%;
        top: 20%;
      }
    }

    .layer {
      position: absolute;
      width: 45px;
      height: 3 * 45px;
      border-bottom-right-radius: 10px;
      right: 0;
      bottom: 0;
      overflow: hidden;
      &::before {
        content: '';
        width: 45px;
        height: 45px;
        display: block;
        background-color: #af4ad6;
        box-shadow: pixelize($note-grid, 45px);
      }
    }
  }

  .ex {
    &:hover {
      .layer {
        transform: rotate(180deg);
        transition: 0.5s all;
        &-left {
          left: 50%;
          top: 50%;
        }
        &-right {
          right: 50%;
          bottom: 50%;
        }
      }
    }
    @include mainArea();
    background: none;
    height: 150px;
    margin-top: 15px;
    margin-bottom: 15px;
    .exchange {
      @include textShadow($ex-letter, $ex-letter);
      top: 20%;
      &::before {
        @include text('E');
        height: 26%;
        left: 30%;
        top: 20%;
      }
    }

    .layer {
      width: 150px;
      height: 150px;
      background: $ex-1;
      border-radius: 10px;
      clip-path: polygon(65% 0, 100% 0, 100% 35%, 35% 100%, 0 100%, 0 65%);
      transition: 0.5s all;

      &-left {
        width: 50%;
        height: 50%;
        position: absolute;
        background: $ex-2;
        border-radius: 10px;
        left: 0;
        top: 0;
        clip-path: polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%);
        transition: 0.5s all;
      }

      &-right {
        width: 50%;
        height: 50%;
        position: absolute;
        background: $ex-3;
        border-radius: 10px;
        right: 0;
        bottom: 0;
        transition: 0.5s all;
        clip-path: polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%);
      }
    }
  }

  .tm {
    @include mainArea();
    background: transparent;

    &:hover {
      .layer-front {
        left: 65px;
        top: -6.5px;
        z-index: 0;
        transition: 0.5s all;

        .man {
          transform: scale(0.7);
        }
      }

      .layer-back {
        left: 0;
        top: 0;
        z-index: 1;
        transition: 0.5s all;

        .man {
          transform: scale(1);
        }
      }
    }

    .teams {
      @include textShadow(#5861c3, #3a41ad);
      &::before {
        @include text('T');
        height: 26%;
        left: 32%;
        top: 20%;
      }
    }

    .layer {
      position: absolute;
      height: 100%;
      z-index: 1;
      transition: 0.5s all;

      .man {
        width: 100px;
        height: 100%;
        position: relative;

        &::before {
          position: absolute;
          content: '';
          width: 58px;
          height: 58px;
          display: block;
          border-radius: 50%;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          background: var(--bg);
        }

        &::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 113px;
          display: block;
          bottom: 0;
          left: 0;
          background: var(--bg);
          border-radius: 10px 10px 50% 50%;
        }
      }

      &-back {
        left: 65px;
        top: -6.5px;
        z-index: 0;
        transition: 0.3s all;

        .man {
          transform: scale(0.7);
        }
      }
    }
  }

  .sp {
    @include mainArea();
    background: transparent;

    &:hover {
      .round {
        &--1 {
          @include mainAreaHover($sp-1);
        }
        &--2 {
          @include mainAreaHover($sp-2);
        }
        &--3 {
          @include mainAreaHover($sp-3);
        }
      }
    }

    .share-point {
      @include textShadow(#028485, #018486);
      z-index: 4;
      &::before {
        @include text('S');
        height: 26%;
        left: 30%;
        top: 20%;
      }
    }

    .round {
      position: absolute;
      border-radius: 50%;
      z-index: var(--i);
      transition: 0.5s;

      &--1 {
        width: 112.5px;
        height: 112.5px;
        background: $sp-1;
      }

      &--2 {
        width: 100px;
        height: 100px;
        background: $sp-2;
        right: 0;
        top: 28%;
      }

      &--3 {
        width: 70px;
        height: 70px;
        background: $sp-3;
        bottom: 0;
        left: 10%;
      }
    }
  }

  .vs {
    @include mainArea();
    background: transparent;

    &:hover {
      .figure {
        &--1 {
          @include mainAreaHover($vs-1);
        }
        &--2 {
          @include mainAreaHover($vs-2);
        }
        &--3 {
          @include mainAreaHover($vs-3);
        }
      }
    }

    .visio {
      @include textShadow(#1f69be, #1248ac);
      z-index: 4;
      &::before {
        @include text('V');
        height: 26%;
        left: 32%;
        top: 20%;
      }
    }

    .figure {
      position: absolute;
      z-index: var(--i);
      transition: 0.5s;

      &--1 {
        width: 70px;
        height: 70px;
        left: 11%;
        border-radius: 10px;
        top: 6%;
        transform: rotate(45deg);
        background: $vs-1;
      }

      &--2 {
        width: 100px;
        height: 90px;
        border-radius: 10px;
        background: $vs-2;
        right: 0;
        top: 25%;
      }

      &--3 {
        width: 90px;
        height: 90px;
        background: $vs-3;
        top: 50%;
        left: 5%;
        border-radius: 50%;
      }
    }
  }

  .sw {
    &:hover {
      @include mainAreaHover($sway-1);
      &::after {
        @include mainAreaHover($sway-1);
      }
    }
    @include mainArea();
    background: $sway-1;

    .sway {
      @include textShadow($sway-letter, $sway-letter);
      &::before {
        @include text('S');
        height: 26%;
        left: 32%;
      }
    }

    .box {
      width: 100%;
      height: 135px;
      overflow: hidden;
      position: relative;

      .figure {
        position: absolute;

        &--1 {
          --size: 80px;
          width: var(--size);
          height: var(--size);
          background-color: $sway-3;
          right: -10px;
          top: 50%;
          margin-top: 10px;
          border-radius: 8px;
          transform: rotate(45deg);
        }

        &--2 {
          --size: 150px;
          width: var(--size);
          height: var(--size);
          background-color: $sway-4;
          right: -10px;
          top: 50%;
          margin-top: 12px;
          border-radius: 8px;
          transform: rotate(45deg);
        }
      }
    }
    .layer {
      z-index: 1;
      position: absolute;

      &--1 {
        --size: 20px;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        right: var(--size);
        top: var(--size);
        background: $sway-2;
      }

      &--4 {
        width: 100%;
        height: 45px;
        @include cells($sway-5, 0px, 0px, 135px, 10px, 10px);
      }
    }
  }

  .form {
    &:hover {
      @include mainAreaHover($sway-1);
      &::after {
        @include mainAreaHover($sway-1);
      }
    }
    @include mainArea();
    background: $sway-1;

    .forms {
      @include textShadow(#048e91, #056a6f);
      &::before {
        @include text('F');
        height: 26%;
        left: 32%;
      }
    }

    .layer {
      width: 100%;
      height: 50%;
      position: relative;

      &--1 {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background: $forms-1;

        .radio {
          position: absolute;
          --padding: 18px;
          right: var(--padding);
          top: var(--padding);
          width: 54px;
          height: 54px;
          background: $forms-2;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

          &::after {
            content: '';
            width: 27px;
            height: 27px;
            display: block;
            background: $forms-3;
            border-radius: 50%;
          }
        }
      }

      &--2 {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background: $forms-3;

        .checkbox {
          position: absolute;
          --padding: 22.5px;
          right: var(--padding);
          top: var(--padding);
          width: 45px;
          height: 45px;
          background: $forms-4;
        }
      }
    }
  }

  .sky {
    width: 150px;
    position: relative;
    height: 150px;
    margin: 15px 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      .skype,
      .layer {
        @include mainAreaHover(#007dd6);
      }
    }

    .skype {
      width: 92%;
      height: 92%;
      border-radius: 50%;
      background: linear-gradient(to bottom, #00b6ef, #007dd6);
      z-index: 2;
      transition: 0.5s;

      &::before {
        content: 'S';
        color: #ffffff;
        line-height: 100px;
        font-size: 100px;
        position: absolute;
        left: 50%;
        top: 25px;
        transform: translateX(-50%);
      }
    }

    .layer {
      width: 41%;
      height: 41%;
      border-radius: 50%;
      background: linear-gradient(to bottom, #00b6ef, #007dd6);
      position: absolute;
      transition: 0.5s;

      &--1 {
        left: 4%;
        top: 4%;
      }

      &--2 {
        right: 4%;
        bottom: 4%;
      }
    }
  }

  .ym {
    @include mainArea();
    background: transparent;

    &:hover {
      .layer {
        @include mainAreaHover(#007dd6);
        transition: transform 0.5s, box-shadow 0.2s linear 0.2s;
        &--1 {
          transform: rotate(0);
          &::before {
            transform: skewY(0deg);
          }
        }

        &--2 {
          transform: rotate(45deg);
          &::before {
            transform: skewY(0deg);
          }
        }

        &--3 {
          transform: rotate(90deg);
          &::before {
            transform: skewY(0deg);
          }
        }
      }
    }

    .yammer {
      @include textShadow($yammer-letter, $yammer-letter);
      &::before {
        @include text('Y');
        height: 26%;
        left: 32%;
      }
    }

    .layer {
      position: absolute;
      left: 0;
      bottom: 50%;
      transform-origin: 0% 100%;
      overflow: hidden;
      width: var(--size);
      height: var(--size);
      border-radius: 0 100% 0 0;
      transform: rotate(var(--deg));

      &::before {
        content: '';
        width: var(--size);
        height: var(--size);
        display: block;
        bottom: 0;
        left: 0;
        transform-origin: 0% 100%;
        position: absolute;
        transform: skewY(-60deg);
      }

      &--1::before {
        transform: skewY(-58deg);
        background: $yammer-1;
      }

      &--2::before {
        background: $yammer-2;
      }

      &--3::before {
        background: $yammer-3;
      }
    }
  }

  .stream {
    width: 150px;
    height: 150px;
    margin: 15px 30px;
    position: relative;

    &:hover {
      .angle {
        left: 40px;
        transform: rotate(90deg) scale(0.6);
      }
    }

    .layer {
      height: 50%;
      overflow: hidden;

      .figure {
        transform: rotate(90deg) translateY(-16px);
      }
    }

    .angle {
      position: absolute;
      transform: rotate(90deg);
      left: -8px;
      top: 50%;
      margin-top: -40px;
      transition: 0.3s;
    }
  }
}
</style>
