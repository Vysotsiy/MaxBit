import {When} from "@wdio/cucumber-framework";
import {SearchPage} from "../pages/search.page";
import {itemForSearch} from "../testData";

const searchPage:SearchPage = new SearchPage();

When(/^the user is orders item$/, async () => {
    await searchPage.orderItem(itemForSearch);
});