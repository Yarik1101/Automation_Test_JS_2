const {Builder, By, Key} = require('selenium-webdriver');
let BasePage = require('../Page_Objects/Base_Page');
let webdriver = require('selenium-webdriver');

class LoginPage extends BasePage {
    async login_to_account(login, pass) { //This is a method of the class
        await driver.findElement(By.xpath('//input[@id="email"]')).sendKeys(login);
        await driver.findElement(By.xpath('//input[@id="passwd"]')).sendKeys(pass, Key.ENTER);
    };

    async is_login() {
        let correct_url = 'http://automationpractice.com/index.php?controller=my-account';
        if (await driver.getCurrentUrl() === correct_url) return true;
        else return false;
    };
}

module.exports = new LoginPage();