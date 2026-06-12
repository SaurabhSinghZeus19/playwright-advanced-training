import { test as base } from "@playwright/test";
import { BrowserWindowsPage } from "../pages/BrowserWindowsPage";
import { BookStorePage } from "../pages/BookStorePage";
import { Logger } from "../utils/Logger";

type Fixtures = {
    browserWindowsPage: BrowserWindowsPage;
    bookStorePage: BookStorePage;
    logger: Logger;
};

export const test = base.extend<Fixtures>({
    browserWindowsPage: async ({ page }, use) => {
        await use(new BrowserWindowsPage(page));
    },
    bookStorePage: async ({ page }, use) => {
        await use(new BookStorePage(page));
    },
    logger: async ({}, use) => {
        await use(new Logger());
    }
});

export { expect } from "@playwright/test";