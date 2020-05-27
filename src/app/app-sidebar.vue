<template>
  <aside>
    <div class="aside_template">
      <a href="/audio-katalog/" target="_blank" class="temp-a">
        <img src="@/assets/images/asidelogo.png" alt title class="imgg" />
      </a>
      <span class="logo_link brand-text aside_ancor">Проект Марта-NG</span>
    </div>
    <nav class="aside_nav">
      <a href="/audio-katalog/" class="menu_btn">МАГАЗИН</a>
      <a href="/audio-katalog/premiere/" class="menu_btn">НОВИНКИ</a>
      <a href="/audio-katalog/sale/" class="menu_btn">РАСПРОДАЖА</a>
      <a href="/audio-katalog/week/" class="menu_btn">СЕАНСЫ НЕДЕЛИ</a>
      <a href="https://marta-ng.ru/mini-site/videohelper.html" class="menu_btn">Служба поддержки</a>
      <a href="https://marta-ng.ru/mini-site/" class="menu_btn">ИНТЕРАКТИВНЫЙ ПОМОЩНИК</a>
      <a href="javascript:void(0);" class="menu_btn" @click="changePage__('page3')">
        Рекомендуется
        <br />добавочно
      </a>
    </nav>
  </aside>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(['changeSIDEBAR', 'changeHEADER', 'changePage', 'changeMainWidth']),
    changePage__(page) {
      this.changeSIDEBAR('SIDEBAR2')
      this.changeHEADER('HEADER2')
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
/*aside*/

aside {
  z-index: 1;
  background: #025852;
  border-left: 1px solid rgba(255, 255, 255, 0.44);
  width: 20%;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: auto;
}
.logo_link {
  display: block;
  margin-top: 10vh;
  margin-bottom: 7vh;
}
.brand-text {
  display: block;
  margin-top: 0vh;
  margin-bottom: 1vh;
  color: #fff;
  font-size: 26px;
  line-height: 1.4em;
  font-weight: 400;
  letter-spacing: 1px;
  transition: 0.3s;
  padding: 1vh 10px 1vh 10px;
  cursor: pointer;
}
.brand-text:hover {
  text-decoration: underline;
}
.menu_btn {
  width: 100%;
  display: block;
  padding: 1.3vh 10px 1.3vh 30px;
  font-size: 16px;
  text-transform: uppercase;
  transition: 0.2s;
  color: #ecf0f1;
  letter-spacing: 1px;
}
.menu_btn:hover {
  background-color: #dacd9c;
  color: #000;
}
.text-block-200 {
  margin-bottom: 1%;
  font-size: 18px;
  line-height: 1.4em;
  text-align: left;
}
.aside_template {
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.imgg,
.temp-a {
  width: 45px;
}
.menu_btn:active {
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.84);
}
@media (max-width: 1300px) {
  .menu_btn {
    font-size: 14px;
  }
  aside {
    /* padding: 0 10px; */
  }
}
@media (max-width: 1025px) {
  .brand-text {
    font-size: 19px;
  }
  .menu_btn {
    padding: 0.8vh 10px 0.8vh 6px;
  }
}
@media (max-width: 801px) {
  .brand-text {
    margin-top: -6px;
    margin-bottom: 0vh;
    padding: 1vh 0px 0vh 1vw;
  }
  .side_win_img {
    display: block;
  }
}
@media (max-width: 500px) {
  .brand-text {
    font-size: 20px;
  }
}
</style>