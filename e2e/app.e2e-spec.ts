import { AngularAppWithSideBarPage } from './app.po';

describe('angular-app-with-side-bar App', () => {
  let page: AngularAppWithSideBarPage;

  beforeEach(() => {
    page = new AngularAppWithSideBarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
