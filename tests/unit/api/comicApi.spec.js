import ComicApi from '../../mocks/api/comicApi';

jest.mock('axios');

describe('Home tests', () => {
  test('Should consult a comic', async () => {
    jest
      .spyOn(ComicApi.prototype, 'getId')
      .mockRejectedValue('Error getting the comic data');
  });
});
