let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (1000000000)});

class BasePage{
    constructor(){
        global.driver = driver; //Allow us to share driver across page classes 
    } 

    async go_to_url(url){
        await driver.get(url);
    }
}

module.exports = BasePage;