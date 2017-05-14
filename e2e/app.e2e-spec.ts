import { DogBookPage } from './app.po';

describe('dog-book App', () => {
  let page: DogBookPage;

  beforeEach(() => {
    page = new DogBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dg works!');
  });
});
