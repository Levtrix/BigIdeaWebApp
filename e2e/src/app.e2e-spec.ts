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

  it('should have companies', function() {
    browser.get('http://localhost:4200/companies');
    browser.waitForAngularEnabled(false);

    expect(element.all(by.css('a')).getText()).toContain('●Poliform');
  });

  it('should have customers', function() {
    browser.get('http://localhost:4200/customers');
    browser.waitForAngularEnabled(false);

    expect(element.all(by.css('a')).getText()).toContain('●Pieter Klaasen');
  });

});
