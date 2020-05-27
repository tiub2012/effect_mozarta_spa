<template>
  <div>
    <header>
      <a href="/audio-katalog/" class="logo_link brand-text ab">Проект Марта-NG</a>
      <div class="switch" title="МЕНЮ" @click="changeTop(!isTop)" :class="{bgr: isTop}"></div>
      <nav class="header_nav" :class="{top: isTop}">
        <a href="/audio-katalog/" class="menu_btn">МАГАЗИН</a>
        <a href="/audio-katalog/premiere/" class="menu_btn">НОВИНКИ</a>
        <a href="/audio-katalog/sale/" class="menu_btn">РАСПРОДАЖА</a>
        <a href="/audio-katalog/week/" class="menu_btn">СЕАНСЫ НЕДЕЛИ</a>
        <a href="https://marta-ng.ru/mini-site/videohelper.html" class="menu_btn">Служба поддержки</a>
        <a href="https://marta-ng.ru/mini-site/" class="menu_btn">ИНТЕРАКТИВНЫЙ ПОМОЩНИК</a>
        <a
          href="javascript:void(0);"
          class="menu_btn"
          @click="changePage__('page3')"
        >Рекомендуется добавочно</a>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["isTop"])
  },
  methods: {
    ...mapMutations([
      "changeTop",
      "changeSIDEBAR",
      "changeHEADER",
      "changePage",
      "changeMainWidth",
      "changeShowSidebar"
    ]),
    changePage__(page) {
      this.changeSIDEBAR("SIDEBAR2");
      this.changeHEADER("HEADER2");
      this.changeTop(false)
      this.changePage(page);
      this.changeShowSidebar(true);
      if (document.documentElement.clientWidth < 801) {
        this.changeMainWidth("100%");
      } else {
        this.changeMainWidth("80%");
      }
    }
  }
};
</script>

<style scoped>
.header_nav .menu_btn {
  text-align: center;
  color: #fff;
  text-transform: uppercase;
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