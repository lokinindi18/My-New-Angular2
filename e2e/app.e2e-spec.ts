import { MyNewAngular2Page } from './app.po';

describe('my-new-angular2 App', () => {
  let page: MyNewAngular2Page;

  beforeEach(() => {
    page = new MyNewAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
