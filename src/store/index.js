import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainWidth: '100%',
    isShowSidebar: false,
    isTop: false,
    pageName: 'start',
    sidebar: 'SIDEBAR',
    header: 'HEADER',
    tovarka: 'https://snnnew.justclick.ru/order/torpedo_therapy_mozart',
    timerOn: true
  },
  mutations: {
    changeTovarka: state => {
      state.tovarka = 'https://shop.supernastroy.com/order/torpedo_therapy_mozart_full/'
      state.timerOn = false
    },
    changeHEADER: (state, HEADER) => state.header = HEADER,
    changeSIDEBAR: (state, SIDEBAR) => state.sidebar = SIDEBAR,
    changeTop: (state, bool) => state.isTop = bool,
    changePage: (state, page) => state.pageName = page,
    changeShowSidebar: (state, bool) => state.isShowSidebar = bool,
    changeMainWidth: (state, width) => state.mainWidth = width
  },
  getters: {
    timerOn: state => state.timerOn,
    tovarka: state => state.tovarka,
    header: state => state.header,
    sidebar: state => state.sidebar,
    isTop: state => state.isTop,
    isShowSidebar: state => state.isShowSidebar,
    mainWidth: state => state.mainWidth,
    pageName: state => state.pageName
  }
})
