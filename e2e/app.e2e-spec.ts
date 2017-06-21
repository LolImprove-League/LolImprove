import { LoLImprovePage } from './app.po';

describe('lo-limprove App', () => {
  let page: LoLImprovePage;

  beforeEach(() => {
    page = new LoLImprovePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
