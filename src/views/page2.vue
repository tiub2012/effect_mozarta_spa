<template>
  <div class="page">
    <PageHeader />
    <div class="blue-line">
      <div class="max">
        <div class="text-block-407">
          Прослушивание необходимо производить в наушниках.
          <br />
          <strong class="aeb">ЭТО ВАЖНО!</strong>
        </div>
      </div>
    </div>
    <div class="content-block">
      <div class="max960">
        <div class="row">
          <div class="block-content">
            <div class="text-block-406">
              <strong class="bold-text-157 ab">Эффект Моцарта. Часть II</strong>
              <br />Синхронизация биоритмов по модели Моцарта
            </div>

            <div class="div-block-109"></div>

            <blockquote class="block-quote">
              Сеанс обеспечивает несколько эффектов, которые в комплексе
              <br />воспринимаются как улучшение самочувствия/пополнение сил.
              <br />Это улучшение наступает, но главное не в этом. Фундаментальным
              <br />является получение внутреннего опыта, демонстрирующего,
              <br />что организм ощутимо отзывается на коды звукового ряда
              <br />Симфонии № 40 Моцарта.
              <br />В это взаимодействие организма с музыкой не нужно вникать.
              <br />Зато очень важно отмечать, что такая обратная связь есть,
              <br />и она проявляется как в конкретных ощущениях в моменте,
              <br />так и в улучшении самочувствия в периоде. И это всё, что нужно,
              <br />чтобы эффект синхронизации биоритмов проявился в полной мере:
              <br />отмечать улучшения – и связывать их с Симфонией № 40 Моцарта.
              <br />(Признавать, что это результат именно её воздействия).
            </blockquote>

            <div class="row btn-block-control">
              <div class="control-div" v-if="isPlay">
                <span class="control-span" @click="onPause">ОСТАНОВИТЬ</span>
              </div>
              <div class="control-div" v-else>
                <span class="control-span" @click="onPlay">ПРОДОЛЖИТЬ</span>
              </div>
              <div class="control-div">
                <a :href="href" class="control-span">СКАЧАТЬ</a>
              </div>
              <div class="control-div">
                <span class="control-span" @click="changePage_('start')">В ГЛАВНОЕ МЕНЮ</span>
              </div>
            </div>
          </div>
          <div class="block-img bl2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import PageHeader from "@/views/page-header";

export default {
  data() {
    return {
      width: 0,
      href:
        "https://api.selcdn.ru/v1/SEL_53369/mng/effect_mozarta/effect_mocarta_2.mp3",
      isPlay: true,
      audio: {}
    };
  },
  computed: {
    ...mapGetters(["pageName"])
  },
  methods: {
    ...mapMutations([
      "changePage",
      "changeShowSidebar",
      "changeMainWidth",
      "changeTop"
    ]),
    changePage_(page) {
      this.changeTop(false);
      this.changePage(page);
      this.changeShowSidebar(false);
      this.changeMainWidth("100%");
      window.removeEventListener("resize", this.updateWidth);
    },
    onPlay() {
      this.audio.play();
      this.isPlay = true;
    },
    onPause() {
      this.audio.pause();
      this.isPlay = false;
    },
    updateWidth() {
      this.width = document.documentElement.clientWidth;

      if (this.width <= 801 && this.pageName !== "start") {
        this.changeShowSidebar(false);
        this.changeMainWidth("100%");
      } else {
        this.changeShowSidebar(true);
        this.changeMainWidth("80%");
      }
    }
  },
  beforeDestroy() {
    this.audio.pause();
    this.audio.currentTime = 0;
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
  mounted() {
    this.audio = new Audio();
    this.audio.src = this.href;
    this.audio.play();
    this.updateWidth();
  },
  components: {
    PageHeader
  }
};
</script>

