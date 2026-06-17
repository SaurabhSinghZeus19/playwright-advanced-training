// Page object for browser windows page

import { Page, Locator } from "@playwright/test";

export class BrowserWindowsPage {
  readonly page: Page;
  readonly newTabButton: Locator;
  readonly newWindowMessageButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTabButton = page.locator("#tabButton");
    this.newWindowMessageButton = page.locator("#messageWindowButton");
  }

  async goto(): Promise<void> {
    // navigate to browser windows page
    await this.page.goto("https://demoqa.com/browser-windows");
  }
}
