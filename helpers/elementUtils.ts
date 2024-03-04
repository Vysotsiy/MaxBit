export class ElementUtils {

    public async clickByElement(locator:string){
        const element: WebdriverIO.Element = await $(locator);
        await element.isDisplayed();
        await element.isClickable();
        await element.click();
    }

    public async clickByElementWithJs(locator:string){
        const element: WebdriverIO.Element = await $(locator);
        await browser.execute('arguments[0].click()', element);
    }

    public async clickByElementWithIframe(locator:string, iframe:string){
        const mainIframe = await $(iframe);
        const element: WebdriverIO.Element = await $(locator);
        await element.isClickable();
        await browser.switchToFrame(mainIframe);
        await element.click();
        await browser.switchToParentFrame();
    }

    public async sendTextByElement(locator:string, value:string){
        const element: WebdriverIO.Element = await $(locator);
        await element.waitForDisplayed();
        await element.isClickable();
        await element.setValue(value);
    }

    public async getTextByElement(locator:string): Promise<String> {
        const element: WebdriverIO.Element = await $(locator);
        await element.isDisplayed();
        return element.getText();
    }

    public async getValueByLocator(locator:string): Promise<String> {
        const element: WebdriverIO.Element = await $(locator);
        await element.isDisplayed();
        return element.getValue()
    }

    public async waitForTextToBePresentInElement(locator: string, textValue: string, retry:number = 10): Promise<void> {
        let counter: number = 0;
        const element: WebdriverIO.Element = await $(locator);
        while (counter < retry) {
            if ((await element.getText()).includes(textValue)) {
                break;
            } else {
                await browser.pause(500);
                counter++;
            }
        }

    }
}