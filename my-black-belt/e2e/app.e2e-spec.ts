import { MyBlackBeltPage } from './app.po';

describe('my-black-belt App', () => {
  let page: MyBlackBeltPage;

  beforeEach(() => {
    page = new MyBlackBeltPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
