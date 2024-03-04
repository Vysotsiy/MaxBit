import {ElementUtils} from "../helpers/elementUtils";

const elementUtils:ElementUtils = new ElementUtils;

export class SearchPage {

searchField:string = "input.fast-search__input";
 searchItemName(itemName:string) {
     return `//a[contains(text(),"${itemName}")]/ancestor::div[@class="result__wrapper"]`
 }
 iframe:string = ".modal-iframe"
    addToScButton: string = "//a[contains(text(),'В корзи')]";

 basketCountItem: string = "div.auth-bar__counter"


async orderItem(itemName:string): Promise<void> {
    await elementUtils.sendTextByElement(this.searchField, itemName);
    await elementUtils.clickByElementWithIframe(this.searchItemName(itemName), this.iframe);
    await elementUtils.clickByElement(this.addToScButton)
    await $(this.basketCountItem).isDisplayed();
    }
}