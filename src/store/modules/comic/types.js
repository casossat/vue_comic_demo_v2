export default {
  nameModule: '@module/home',
  actions: {
    UPDATE_COMIC_ID: '@actions/updateComicId',
    UPDATE_COMIC_DATA: '@actions/updateComicData',
    FETCH_COMIC_BY_ID: '@actions/getComicDataById',
  },
  mutations: {
    SET_COMIC_LIST: '@mutations/setComicsList',
    SET_ACTUAL_COMIC_ID: '@mutations/setActualComicId',
  },
  getters: {
    GET_COMIC_RATE: '@getters/getComicRate',
    GET_COMICS_IDS: '@getters/getComicsIds',
    GET_DATE_PUBLISH: '@getters/getDatePublishComic',
    GET_COMIC_COMMENTS: '@getters/getComicUserComments',
    GET_ACTUAL_DATA_COMIC: '@getters/getActualDataComic',
    GET_TOTAL_COMMENTS_USER: '@getters/getTotalCommentsUser',
    GET_COMIC_COMMENTS_ID: '@getters/getComicUserCommentsIds',
    GET_COMICS_IDS_WITHOUT_ACTUAL: '@getters/getComicsIdsToReview',
  },
};
