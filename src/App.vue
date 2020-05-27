<template>
  <div id="app">
    <main :style="{minHeight: `${height}px`, width: mainWidth}">
      <components :is="header"></components>
      <CONTENT />
      <FOOTER />
    </main>
    <components :is="sidebar" v-if="isShowSidebar"></components>
  </div>
</template>

<script>
import HEADER from "@/app/app-header";
import HEADER2 from "@/app/app-header2";
import CONTENT from "@/app/app-content";
import SIDEBAR from "@/app/app-sidebar";
import SIDEBAR2 from "@/app/app-sidebar2";
import FOOTER from "@/app/app-footer";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {
      height: 0
    };
  },
  computed: {
    ...mapGetters([
      "mainWidth",
      "isShowSidebar",
      "pageName",
      "sidebar",
      "header"
    ])
  },
  methods: {
    updateHeight() {
      this.height = document.documentElement.clientHeight;
    }
  },
  created() {
    window.addEventListener("resize", this.updateHeight);
  },
  mounted() {
    this.height = document.documentElement.clientHeight;

  },
  components: {
    HEADER,
    HEADER2,
    CONTENT,
    SIDEBAR,
    SIDEBAR2,
    FOOTER
  }
};
</script>

<style>
@import url("./assets/css/lib.css");
@import url("./assets/css/style.css");
main {
  display: flex;
  flex-direction: column;
}
</style>
