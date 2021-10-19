const Login_Page = require('../Page_Objects/Login_Page');

describe('Login page positive test', function(){
    this.timeout(50000);
    beforeEach(function(){
        //Enter actions performed before test
    });

    afterEach(function(){
        driver.quit();
    });

    it('Login Test Positive', function(){
        //Enter test steps
        let base_url = 'http://automationpractice.com/index.php?controller=authentication&back=my-account';
        Login_Page.go_to_url(base_url);
        Login_Page.login_to_account('yaril20333@gmail.com', 'Test!1523');
        Login_Page.is_login();
    });
})