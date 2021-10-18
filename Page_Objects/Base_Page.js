let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class Base_Page{
    constructor(){
        global.driver = driver; //Allow us to share driver across page classes 
    } 
}

module.exports = Base_Page;