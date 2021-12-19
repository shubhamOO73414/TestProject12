
import {Given,When,Then} from '@cucumber/cucumber';
import {Login} from '../Pages/login';
//const app=new login();

Given(/^I'm in login page$/, async function () {
   await browser.url("https://www.facebook.com/");
});
When(/^login with default user (.+)$/, async function (txt) {
      //browser.pause(2000);
        await Login.enterUser(txt);
    //app.enterUser(user);
});
Then(/^hit enter$/, async function () {
  await Login.clickOnProceed();
});
// When(/^login with default user (.*)$/, function () {
//
// });
Then(/^enter password (.+)$/, async function (pass) {
    await Login.enterPass(pass);
});
Then(/^verify error message (.+)$/, async function (msg) {
   await Login.verifyMsg(msg);
});