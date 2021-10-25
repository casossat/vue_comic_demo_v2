import Vue from 'vue';
import Vuex from 'vuex';

import comicStore from './modules/comic';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [comicStore.nameModule]: comicStore.module,
  },
});
