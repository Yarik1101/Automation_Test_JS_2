const {Builder, By, Key} = require('selenium-webdriver');
let BasePage = require('../Page_Objects/Base_Page');
let webdriver = require('selenium-webdriver');

class LoginPage extends BasePage {
    login_to_account(login, pass) { //This is a method of the class
        driver.findElement(By.xpath('//input[@id="email"]')).sendKeys(login);
        driver.findElement(By.xpath('//input[@id="passwd"]')).sendKeys(pass, Key.ENTER);
    };

    is_login() {
        if (driver.getTitle() === 'Login - My Store') return false;
        else return true;
    };
}

module.exports = new LoginPage();