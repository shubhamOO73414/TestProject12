

class login{
    // private user:string='#form1';
    // private proceed:string='#proceed-button';
    // private user1:=$('#form1');

    get user(){
        return $('body #email');
    }
    get password(){
        return $('body #pass');
    }
    get proceedButton(){
        return $('body [name="login"]');
    }
    get errorMsg(){
        return $('body //*[@id="email_container"]/div[2]')
    }

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
    public verifyMsg(msg:string){
        return this.errorMsg.getText() === msg;
    }


}
export const Login = new login();