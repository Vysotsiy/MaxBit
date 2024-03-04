import {Then, When} from "@wdio/cucumber-framework";
import {ShoppingCartPage} from "../pages/shoppingCart.page";
import { expect } from 'chai';
import {itemForSearch} from "../testData";
import {ElementUtils} from "../helpers/elementUtils";

const shoppingCart:ShoppingCartPage = new ShoppingCartPage();
const elementUtils:ElementUtils = new ElementUtils();

When(/^the user navigate to the shopping cart$/, async () => {
    await elementUtils.clickByElement(shoppingCart.basketIcon);
});

Then(/^shopping cart contains order part$/, async () => {
    expect(await elementUtils.getTextByElement(shoppingCart.itemDescription)).to.contain(itemForSearch);
    expect(await elementUtils.getValueByLocator(shoppingCart.qtyItems)).to.equal("1");
});

When(/^the user deletes the order$/, async () => {
    await elementUtils.clickByElementWithJs(shoppingCart.removeItemButton);
    await elementUtils.waitForTextToBePresentInElement(shoppingCart.itemDescription, "Вы удалили");
});