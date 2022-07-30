

class login{
    // private user:string='#form1';
    // private proceed:string='#proceed-button';
    // private user1:=$('#form1');

    get user(){return $('#email');}
    get password(){return $('#pass');}
    get proceedButton(){return $('#loginbutton');}
    get errorMsg(){return $('#loginform>div>div:nth-child(2)>a')}

    public enterUser(email:string){
      //$(this.user).waitForDisplayed({ timeout: 10000 });
        //browser.pause(10000);
       // browser.setImplicitTimeout(10000)
       return this.user.setValue(email);
    }
    public clickOnProceed(){

        return this.proceedButton.click();
    }
    public enterPass(pass:string){
        return this.password.setValue(pass);
    }
    async verifyMsg(msg:string){
        return await this.errorMsg.getText() === msg;
    }


}
export const Login = new login();