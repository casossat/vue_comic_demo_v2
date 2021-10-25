import typesModule from '@/store/modules/comic/types';

export default {
  [typesModule.getters.GET_COMIC_COMMENTS](state) {
    if (state.comicId && state.comics[state.comicId]) {
      return state.comics[state.comicId].comments;
    }
    return [];
  },
  [typesModule.getters.GET_TOTAL_COMMENTS_USER](state) {
    if (state.comicId && state.comics[state.comicId]) {
      return Object.keys(state.comics[state.comicId].comments).length;
    }
    return 0;
  },
  [typesModule.getters.GET_COMIC_COMMENTS_ID](state) {
    if (state.comicId && state.comics[state.comicId]) {
      return Object.keys(state.comics[state.comicId].comments);
    }
    return [];
  },
  [typesModule.getters.GET_COMIC_RATE](state) {
    return state.comics[state.comicId] ? state.comics[state.comicId].rate : 0;
  },
  [typesModule.getters.GET_ACTUAL_DATA_COMIC](state) {
    return state.comics[state.comicId] ? state.comics[state.comicId].data : {};
  },
  [typesModule.getters.GET_DATE_PUBLISH](state) {
    return state.comics[state.comicId]
      ? `
        ${state.comics[state.comicId].data.day}/
        ${state.comics[state.comicId].data.month}/
        ${state.comics[state.comicId].data.year}
      `
      : '';
  },
  [typesModule.getters.GET_COMICS_IDS](state) {
    return Object.keys(state.comics);
  },
};
