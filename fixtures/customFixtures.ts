// Common fixtures used across the tyest suite

import { test as base } from "@playwright/test";
import { BrowserWindowsPage } from "../pages/BrowserWindowsPage";
import { BookStorePage } from "../pages/BookStorePage";
import { Logger } from "../utils/Logger";

// custom fixture definitions
type Fixtures = {
    browserWindowsPage: BrowserWindowsPage;
    bookStorePage: BookStorePage;
    logger: Logger;
};

export const test = base.extend<Fixtures>({
    //Browser windows page fixture
    browserWindowsPage: async ({ page }, use) => {
        await use(new BrowserWindowsPage(page));
    },
    // Book store page fixture
    bookStorePage: async ({ page }, use) => {
        await use(new BookStorePage(page));
    },
    // Logger utility fixture
    logger: async ({}, use) => {
        await use(new Logger());
    }
});

export { expect } from "@playwright/test";