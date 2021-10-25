import comicApi from '../../../api/comicApi';
import typesModule from '@/store/modules/comic/types';

export default {
  [typesModule.actions.FETCH_COMIC_BY_ID]({ commit, state }) {
    comicApi.getId(state.comicId)
      .then((response) => {
        const params = {
          ...state.comics,
          [state.comicId]: {
            rate: 0,
            comments: [],
            data: response,
          },
        };
        commit(typesModule.mutations.SET_COMIC_LIST, params);
      });
  },
  [typesModule.actions.UPDATE_COMIC_DATA]({ commit }, payload) {
    commit(typesModule.mutations.SET_COMIC_LIST, payload);
  },
  [typesModule.actions.UPDATE_COMIC_ID]({ commit }, payload) {
    commit(typesModule.mutations.SET_ACTUAL_COMIC_ID, parseInt(payload, 10));
  },
};
