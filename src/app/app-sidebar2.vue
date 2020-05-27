<template>
  <aside>
    <div class="aside_template">
      <span class="logo_link brand-text aside_ancor">Проект Марта-NG</span>
    </div>
    <nav class="aside_nav an2">
      <a href="#y1" class="menu_btn active_">Предложение дня</a>
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
  </aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["tovarka"])
  }
};
</script>

<style scoped>
.zakaz{
  background: #b40610;
  color: #fff !important;
}
.zakaz:hover{
  background: #ff9500;
}

/*aside*/

aside {
  z-index: 1;
  background-color: #b6efff;
  background-image: url(../assets/images/123.png);
  background-position: 100% 100%;
  background-size: 94px;
  background-repeat: no-repeat;
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
  margin-top: 2.8vh;
  margin-bottom: 2vh;
  color: #292525;
  font-size: 26px;
  line-height: 1.4em;
  font-weight: 400;
  letter-spacing: 1px;
  transition: 0.3s;
  padding: 1vh 10px 1vh 19px;
  cursor: pointer;
}
.brand-text:hover {
  text-decoration: underline;
}
.menu_btn {
  width: 100%;
  display: block;
  padding: 1.1vh 10px 1.1vh 20px;
  color: #292525;
  font-size: 14px;
  text-transform: uppercase;
  transition: 0.2s;
  letter-spacing: 1px;
}
.menu_btn:not(.zakaz):hover {
  background-color: #fff;
  color: #ff5e00;
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
}
.imgg,
.temp-a {
  width: 45px;
}
.menu_btn:active {
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.84);
}
@media (max-width: 1300px) {
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