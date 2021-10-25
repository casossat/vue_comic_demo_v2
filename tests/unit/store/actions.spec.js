import comicStore from '../../../src/store/modules/comic';
import actions from '../../../src/store/modules/comic/actions';
import typesComic from '../../../src/store/modules/comic/types';

import ComicApi from '../../mocks/api/comicApi';

const commit = jest.fn();

describe('Comics actions', () => {
  let { state } = comicStore.module;

  afterEach(() => {
    jest.clearAllMocks();
    state = comicStore.module.state;
  });

  test('Should commit comics data', async () => {
    await actions[typesComic.actions.UPDATE_COMIC_DATA]({ commit });
    expect(commit).toHaveBeenCalledTimes(1);
  });

  test('Should commit comic actual id', async () => {
    await actions[typesComic.actions.UPDATE_COMIC_ID]({ commit });
    expect(commit).toHaveBeenCalledTimes(1);
  });

  test('Should catch the fetch comic data', async () => {
    jest
      .spyOn(ComicApi.prototype, 'getId')
      .mockRejectedValue('Error getting the comic data');

    try {
      await actions[typesComic.actions.FETCH_COMIC_BY_ID]({ commit, state });
    } catch (e) {
      expect(e).toMatch('Error getting the comic data');
    }
  });
});
