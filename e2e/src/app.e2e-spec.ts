import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a title', function() {
    browser.get('http://localhost:4200');
    browser.waitForAngularEnabled(false);

    expect(browser.getTitle()).toEqual('Ticket systeem');
  });

});
