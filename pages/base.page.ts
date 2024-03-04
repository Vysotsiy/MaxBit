
export class BasePage {
    onlinerLogo: string= "div.b-top-logo";
    async openUrl(): Promise<void> {
        await browser.url("https://www.onliner.by/");
    }
}
