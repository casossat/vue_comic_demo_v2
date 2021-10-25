import typesModule from '@/store/modules/comic/types';

export default {
  [typesModule.mutations.SET_COMIC_LIST](state, payload) {
    state.comics = payload;
  },
  [typesModule.mutations.SET_ACTUAL_COMIC_ID](state, payload) {
    state.comicId = payload;
  },
};
