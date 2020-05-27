<template>
  <div class="start">
    <div class="max1200">
      <div class="inner-start">
        <div class="text-block-501">Сеанс-программа</div>
        <h1 class="heading _786765">
          ЭФФЕКТ
          <strong class="ab">МОЦАРТА</strong>
        </h1>

        <div class="text-block-501 _767665">
          Синхронизация биологических ритмов
          <br />в технике применения модели Моцарта
        </div>

        <span class="start-btn" @click="changePage_('page1')">Демонстрация модели Моцарта</span>
        <span
          class="start-btn"
          @click="changePage_('page2')"
        >Синхронизация биоритмов по модели Моцарта</span>

        <div class="inner-inner-start">
          <div class="row">
            <div class="ii-img1">
              <img src="@/assets/images/vnimanie.gif" alt />
            </div>
            <div class="ii-content">
              <div class="text-block-504 ab">
                Рекомендуется
                <br />добавочно
              </div>
            </div>
            <div class="ii-img2">
              <img src="@/assets/images/75.png" alt />
            </div>
          </div>
          <span class="start-btn dop" @click="changePage__('page3')">Торпедо-Терапия</span>
        </div>

        <div class="row start-btn-block-wrapper">
          <div class="start-btn-block">
            <a href="https://marta-ng.ru/mini-site/videohelper.html">Служба поддержки</a>
          </div>
          <div class="start-btn-block">
            <a href="/audio-katalog/">Магазин</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "changePage",
      "changeShowSidebar",
      "changeMainWidth",
      "changeSIDEBAR",
      "changeHEADER",
      "changeTop"
    ]),
    changePage__(page) {
      this.changeSIDEBAR("SIDEBAR2");
      this.changeHEADER("HEADER2");
      this.changePage(page);
      this.changeTop(false)
      this.changeShowSidebar(true);
      document.title = 'Торпедо-Терапия'
      if (document.documentElement.clientWidth < 801) {
        this.changeMainWidth("100%");
      } else {
        this.changeMainWidth("80%");
      }
    },
    changePage_(page) {
      this.changeTop(false)
      this.changePage(page);
      this.changeSIDEBAR("SIDEBAR");
      this.changeHEADER("HEADER");
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
.text-block-504 {
  font-size: 30px;
  line-height: 1.2em;
  font-weight: 700;
}
.ii-img1 {
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 3%;
}
.ii-img1 img {
  display: block;
  width: 70px;
  margin-right: auto;
  margin-left: auto;
}
.ii-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
}
.ii-img2 {
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 150px;
}
.ii-img2 img {
  width: 45px;
  margin-top: 23px;
}
.inner-inner-start {
  margin-top: 16px;
  margin-bottom: 5%;
  padding-bottom: 10px;
  border-radius: 20px;
  background-color: transparent;
  box-shadow: inset 3px 3px 9px 0 rgba(0, 0, 0, 0.36);
}
.start-btn-block {
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
}
.start-btn-block > a {
  width: 100%;
  border-radius: 20px;
  background-color: #2351ae;
  color: #fff;
  line-height: 1.6em;
  text-align: center;
  text-transform: uppercase;
  display: inline-block;
  padding: 9px 15px;
  cursor: pointer;
}
.start-btn-block > a:hover {
  box-shadow: 3px 3px 0 0 #011c3c;
}
.start-btn {
  display: block;
  width: 94%;
  max-width: 450px;
  margin-right: auto;
  margin-bottom: 3%;
  margin-left: auto;
  border-radius: 50px;
  background-color: #ae232b;
  box-shadow: 1px 1px 0 2px #3d0102;
  color: #fff;
  line-height: 2em;
  text-align: center;
  text-transform: uppercase;
  padding: 9px 15px;
  cursor: pointer;
}
.start-btn:hover {
  box-shadow: inset 3px 3px 4px 3px #8d0109;
}
.inner-start {
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  padding: 2%;
  border-style: solid;
  border-width: 1px;
  border-color: #fff;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.86);
  box-shadow: 3px 3px 10px 5px rgba(0, 85, 255, 0.29);
}
.start {
  display: flex;
  height: auto;
  min-height: 80vh;
  padding: 2% 1% 3%;
  align-items: center;
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.59),
      hsla(0, 0%, 100%, 0.59)
    ),
    url(../assets/images/spatbleat.jpg);
  background-position: 0px 0px, 50% 0%;
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
}
.dop {
  background-color: #30ad64;
  box-shadow: 1px 1px 0 2px #015323;
}
.dop:hover {
  box-shadow: inset 1px 1px 0 2px #015323;
}
@media (max-width: 1025px) {
  .start {
    min-height: 90vh;
    background-position: 0px 0px, 18% 0%;
  }
}
@media (max-width: 801px) {
  .start {
    padding: 5% 1% 3%;
  }
}
@media (max-width: 500px) {
  .start-btn {
    font-size: 14px;
    padding: 9px 10px;
  }
  .start-btn-block > a {
    font-size: 14px;
    padding: 9px 5px;
  }
  .ii-img1 {
    max-width: 70px;
  }
  .ii-img1 img {
    width: 48px;
  }
  .text-block-504 {
    font-size: 23px;
  }
  .ii-img2 img {
    width: 31px;
    margin-top: 18px;
  }
  .inner-start {
    max-width: 96%;
  }
  .start-btn {
    font-size: 13px;
    padding: 7px 2px;
  }
}
</style>