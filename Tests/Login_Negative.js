const Login_Page = require('../Page_Objects/Login_Page');
const assert = require('assert');

describe('Login to account negative', function(){
    this.timeout(50000)
    beforeEach(function(){

    });
    afterEach(function() {
        driver.quit();
    });
    it('Login Test Negative', async function(){
        let base_url = 'http://automationpractice.com/index.php?controller=authentication&back=my-account';
        await Login_Page.go_to_url(base_url);
        await Login_Page.login_to_account('wrongemail@wrong.com', 'WrongPass');
        assert.equal(false, await Login_Page.is_login())
    });
})