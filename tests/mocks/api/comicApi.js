import payloads from '../store/payload.mocks';

export default class ComicApi {
  getId() {
    return Promise.resolve({
      url: `${this.urlBase}?comic=${payloads.COMIC_ID}`,
    });
  }
}
