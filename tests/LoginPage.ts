import { Page } from '@playwright/test';
 
export class LoginPage{
    readonly userName;
    readonly passWord;
    readonly buttonLogin;
    readonly navigate
 
    constructor( page:Page){
        this.userName = page.locator("//*[@id=\"email\"]");;
        this.passWord = page.locator("//*[@id=\"password\"]");
        this.buttonLogin = page.getByRole('button', { name: 'Sign Up' });
        this.navigate = page.locator('header > div > div').all()
    }
 
    async UserName(){
        await this.userName.fill("yerlin@gmail.com");
    }Y
 
    async PassWord(){
        await this.passWord.fill("12345");
    }
 
    async ButtonLogin(){
        await this.buttonLogin.click();
    }
}