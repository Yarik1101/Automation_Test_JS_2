const Login_Page = require('../Page_Objects/Login_Page');
const assert = require('assert');

describe('Login page positive test', function(){
    this.timeout(50000);
    beforeEach(function(){
        //Enter actions performed before test
    });

    afterEach(function(){
        driver.quit();
    });

    it('Login Test Positive', async function(){
        //Enter test steps
        let base_url = 'http://automationpractice.com/index.php?controller=authentication&back=my-account';
        await Login_Page.go_to_url(base_url);
        await Login_Page.login_to_account('yaril20333@gmail.com', 'Test!123');
        assert.equal(true, await Login_Page.is_login())
    });
})