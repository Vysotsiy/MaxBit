import {Given} from "@wdio/cucumber-framework";
import {BasePage} from "../pages/base.page";
// import{LoginPage} from "../pages/login.page";
// import{userName} from "../testData";
// import {password} from "../testData";

const basePage: BasePage = new BasePage();
// const loginPage: LoginPage = new LoginPage();

Given(/^the user is at the main page$/, async () => {
await basePage. openUrl();
// await loginPage.login(userName,password)
});