
import {BasePage} from "./base.page";
import {ElementUtils} from "../helpers/elementUtils";

const elementUtils:ElementUtils = new ElementUtils;
const basePage:BasePage = new BasePage();
export class LoginPage extends BasePage{

    get inputUserName() {
        return "//input[contains(@placeholder, 'Ник')]";
    }
    get inputPassword() {
        return "//input[@type='password']";
    }
     get loginButton() {
        return "//div[contains(text(),'Вход')]";
    }
    connectButton: string = "//button[contains(text(),'Войти')]"

    async login(userName: string, password: string): Promise<void> {
        await elementUtils.clickByElement(this.loginButton);
        await elementUtils.sendTextByElement(this.inputUserName, userName);
        await elementUtils.sendTextByElement(this.inputPassword, password);
        await elementUtils.clickByElement(this.connectButton);
        await $(basePage.onlinerLogo).waitForDisplayed();
    }
}