<template>
  <div class="new-footer">
    <div class="second-footer-block">
      <div class="footer-max1200">
        <div class="inner-second-footer-block">
          <div class="new-footer-text">ИП Шотт Сергей Брониславович</div>
          <div class="new-footer-text">Свидетельство 54№003394741 от 04.05.2006</div>
          <div class="new-footer-text">
            <a href="https://marta-ng.ru/help/?video" target="_blank">Поддержка клиентов</a>
          </div>
          <div class="new-footer-text">
            Адрес службы поддержки
            <a
              href="mailto:info@marta-ng.com"
              target="_blank"
            >info@marta-ng.com</a>
          </div>
          <div class="new-footer-text">
            Телефон службы поддержки
            <a href="tel:+79137336383" target="_blank">+7 913 733 63 83</a>
          </div>
          <div class="new-footer-text">
            Бесплатный звонок по России
            <a href="tel:88003507963" target="_blank">8 800 350 79 63</a>
          </div>
          <div class="new-footer-text">Часы работы: с 8.00 до 19.00 мск</div>
        </div>
        <div class="inner-second-footer-block-2">
          <div class="footer-a-link">
            <a href="https://www.instagram.com/marta_ng_proekt/" target="_blank">
              <img src="../assets/images/instagram.png" alt title />
            </a>
          </div>
          <div class="footer-a-link">
            <a href="https://ttttt.me/marta_ng" target="_blank">
              <img src="../assets/images/telegram.png" alt title />
            </a>
          </div>
          <div class="footer-a-link">
            <a href="https://wa.me/79137336383" target="_blank">
              <img src="../assets/images/wacap.png" alt title />
            </a>
          </div>
          <div class="footer-a-link">
            <a href="https://www.youtube.com/channel/UCcAXS8DjSnp1k1l_Q2f4JEQ" target="_blank">
              <img src="../assets/images/youtube1.png" alt title />
            </a>
          </div>
          <div class="footer-a-link">
            <a href="viber://chat?number=%2B79137336383" target="_blank">
              <img src="../assets/images/viber.png" alt title />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*-----------footer----------*/

.new-footer {
  width: 100%;
  position: relative;
  z-index: 2003;
}
.first-footer-block {
  position: relative;
}
.second-footer-block {
  background-color: #192024;
  background-image: url("../assets/images/123.png");
  background-position: 0 0;
  background-size: 40px;
  background-repeat: no-repeat;
  padding: 1%;
}
.inner-first-footer-block-2 {
  background: #000;
}
.new-footer-logo {
  position: absolute;
  width: 80px;
  height: 80px;
  right: 20px;
  top: -40px;
}
.inner-second-footer-block {
  flex: 1;
  min-width: 300px;
  padding-left: 10px;
  padding-right: 10px;
}
.inner-second-footer-block-2 {
  flex: 1;
  min-width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
.new-footer-text,
.new-footer-text a {
  font-family: akrobat-regular;
  font-size: 14px;
  color: white;
  line-height: 1.3em;
}
.new-footer-text a {
  text-decoration: underline;
}
.footer-max1200 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.footermax1200_ {
  position: relative;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.footer-a-link {
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 80px;
}
.footer-a-link a img {
  width: 100%;
  max-width: 100%;
  transition: 0.3s;
}
.footermax1200_ a img {
  transition: 0.3s;
}
.footer-a-link a img:hover,
.footermax1200_ a img:hover {
  transform: scale(0.95);
  opacity: 0.7;
}

@media (max-width: 1281px) {
  .footer-max1200 {
    max-width: 927px;
  }
}
@media (max-width: 1025px) {
  .footer-max1200 {
    max-width: 735px;
  }
}
@media (max-width: 801px) {
  .new-footer-text,
  .new-footer-text a {
    text-align: center;
  }
  .inner-second-footer-block-2 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
@media (max-width: 416px) {
  .new-footer-logo {
    width: 56px;
    height: 56px;
    top: -24px;
  }

  #_1,
  #_2,
  #_3,
  #_4 {
    min-width: 50%;
  }
  #_1,
  #_3 {
    border-right: 2px solid white;
  }
  #_2,
  #_4 {
    border-left: 2px solid white;
  }
}
/*-----------end footer----------*/
</style>