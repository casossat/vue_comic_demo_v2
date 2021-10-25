import axios from 'axios';

class ComicApi {
  constructor() {
    this.urlBase = 'https://xkcd.now.sh';
  }

  getId(id) {
    const req = axios.get(`${this.urlBase}?comic=${id}`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
    return req;
  }
}

export default new ComicApi();
