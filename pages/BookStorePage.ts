// Page object for book store page

import { Page } from "@playwright/test";

export class BookStorePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goto(): Promise<void> {
        // open book store page
        await this.page.goto('https://demoqa.com/books');
    }
}