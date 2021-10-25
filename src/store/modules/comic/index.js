import typesModule from '@/store/modules/comic/types';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const { nameModule } = typesModule;
const module = {
  namespaced: true,
  state: {
    comics: {},
    comicId: null,
  },
  actions,
  getters,
  mutations,
};

export default {
  module,
  nameModule,
};
