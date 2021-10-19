const Login_Page = require('../Page_Objects/Login_Page');
const assert = require('assert');

describe('Login to account negative', function(){
    this.timeout(50000)
    beforeEach(function(){

    });
    afterEach(function() {
        driver.quit();
    });
    it('Login Test Negative', function(){
        let base_url = 'http://automationpractice.com/index.php?controller=authentication&back=my-account';
        Login_Page.go_to_url(base_url);
        Login_Page.login_to_account('wrongemail@wrong.com', 'WrongPass');
    });
})