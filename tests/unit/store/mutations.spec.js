import comicStore from '../../../src/store/modules/comic';
import typesComic from '../../../src/store/modules/comic/types';
import mutations from '../../../src/store/modules/comic/mutations';

import payloads from '../../mocks/store/payload.mocks';

describe('Comics mutations', () => {
  let { state } = comicStore.module;

  afterEach(() => {
    state = comicStore.module.state;
  });

  test('Should set the value of the comics list state', () => {
    mutations[typesComic.mutations.SET_COMIC_LIST](state, payloads.COMIC_DATA);
    expect(state.comics).toStrictEqual(payloads.COMIC_DATA);
  });
  test('Should set the value of the comic id state', () => {
    mutations[typesComic.mutations.SET_ACTUAL_COMIC_ID](state, payloads.COMIC_ID);
    expect(state.comicId).toStrictEqual(payloads.COMIC_ID);
  });
});
