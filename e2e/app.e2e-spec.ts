import { NgDialogPage } from './app.po';

describe('ng-dialog App', function() {
  let page: NgDialogPage;

  beforeEach(() => {
    page = new NgDialogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
