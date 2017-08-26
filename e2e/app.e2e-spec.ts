import { GamingeraPage } from './app.po';

describe('gamingera App', () => {
  let page: GamingeraPage;

  beforeEach(() => {
    page = new GamingeraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
