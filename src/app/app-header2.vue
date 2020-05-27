<template>
  <div>
    <header>
      <a href="/audio-katalog/" class="logo_link brand-text ab">Проект Марта-NG</a>
      <div class="switch" title="МЕНЮ" @click="changeTop(!isTop)" :class="{bgr: isTop}"></div>
      <nav class="header_nav" :class="{top: isTop}">
        <a href="#y1" class="menu_btn">Предложение дня</a>
        <a href="#y2" class="menu_btn">Как это работает</a>
        <a href="#y3" class="menu_btn">почему это работает</a>
        <a href="#y4" class="menu_btn">Ограничения</a>
        <a href="#y5" class="menu_btn">Какой формат</a>
        <a href="#y6" class="menu_btn">Кто проводит терапию</a>
        <a href="#y7" class="menu_btn">ЦЕНА СЕГОДНЯ</a>
        <a href="#y8" class="menu_btn">1 сеанс бесплатно</a>
        <a href="javascript:void(0);" class="menu_btn _oo">Отзывы</a>
        <a href="javascript:void(0);" class="menu_btn _g">ДВОЙНАЯ ГАРАНТИЯ</a>
        <a href="javascript:void(0);" class="menu_btn _p">доставка</a>
        <a :href="tovarka" class="menu_btn zakaz">Заказать сейчас</a>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["isTop", "tovarka"])
  },
  methods: {
    ...mapMutations(["changeTop"])
  }
};
</script>

<style scoped>
.header_nav .menu_btn {
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
}
.header_nav .menu_btn.zakaz{
  background: #b40610;
}
/*header*/

header {
  z-index: 1;
  display: none;
  height: 50px;
  background: #025852;
  position: relative;
  perspective: 1100px;
  box-shadow: 1px -1px 2px #fff;
}
.header_nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: #192024;
  top: 12px;
  transition: 0.4s;
  backface-visibility: hidden;
  transform-origin: center top;
  transform: rotateX(-90deg);
}
.brand-text {
  position: relative;
  left: 10px;
  top: 10px;
}
.switch {
  position: absolute;
  height: 50px;
  width: 50px;
  right: 0;
  top: 0px;
  cursor: pointer;
  background: url("../assets/images/2menu.png") center center/75% no-repeat;
}
.top {
  transform: rotateX(0deg);
}
.bgr {
  background: url("../assets/images/3menu.png") center center/75% no-repeat;
}
@media (max-width: 1025px) {
  aside {
    width: 25%;
  }
  main {
    width: 75%;
  }
  .new-footer-logo {
    width: 65px;
    height: 65px;
    top: -31px;
  }
  .head-img {
    max-width: 180px;
  }
}
@media (max-width: 801px) {
  .brand-text {
    margin-top: -5px;
    color: #fff;
  }
  aside {
    display: none;
  }
  header {
    display: block;
  }
  main {
    width: 100%;
  }
  .header_nav {
    top: 23px;
    padding: 1%;
  }
}
@media (max-width: 416px) {
  .brand-text {
    margin-top: 0px;
    position: relative;
    padding-left: 10px;
  }
  .header_nav .menu_btn {
    font-size: 14px;
  }
}
</style>