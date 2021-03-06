import { browser, by, element } from 'protractor';

export class DogBookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dg-root h1')).getText();
  }
}
