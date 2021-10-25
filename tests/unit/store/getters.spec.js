import stateMock from '../../mocks/store/state.mock';
import getters from '../../../src/store/modules/comic/getters';
import typesComic from '../../../src/store/modules/comic/types';

describe('Comics getters', () => {
  let state = stateMock.STATES;

  afterEach(() => { state = stateMock.STATES; });

  test('Should return an empty array', () => {
    const comments = getters[typesComic.getters.GET_COMIC_COMMENTS](state);
    expect(comments.length).toBe(0);
  });

  test('Should return a empty len value of comments', () => {
    const qtyComments = getters[typesComic.getters.GET_TOTAL_COMMENTS_USER](state);
    expect(qtyComments).toBe(0);
  });

  test('Should return an empty array', () => {
    const commentsIds = getters[typesComic.getters.GET_COMIC_COMMENTS_ID](state);
    expect(commentsIds.length).toBe(0);
  });

  test('Should return an empty object', () => {
    const rated = getters[typesComic.getters.GET_ACTUAL_DATA_COMIC](state);
    expect(rated).toStrictEqual({});
  });

  test('Should return an empty string', () => {
    const publishDate = getters[typesComic.getters.GET_DATE_PUBLISH](state);
    expect(publishDate).toBe('');
  });

  test('Should return an empty array', () => {
    const comicsIds = getters[typesComic.getters.GET_COMICS_IDS](state);
    expect(comicsIds.length).toBe(0);
  });
});
