import { test, expect } from "@playwright/test";
import { BrowserWindowsPage } from "../pages/BrowserWindowsPage";

test.beforeEach(async ({ page }) => {
    const browserWindowsPage = new BrowserWindowsPage(page);
    await browserWindowsPage.goto();
    }
);

test('TC_001 Verify New Tab Button opens a new tab',
    async ({ page, context }) => {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.locator("#tabButton").click()
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://demoqa.com/sample');

    }
);

test('TC_002 Verify content of newly opened tab',
    async ({ page, context }) => {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.locator("#tabButton").click()
        ]);
        await newPage.waitForLoadState();
        await expect(newPage.getByText('This is a sample page')).toBeVisible();
    }
);

test('TC_003 Close child tab and switch back to parent',
    async ({ page, context }) => {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.locator("#tabButton").click()
        ]);
        await newPage.waitForLoadState();
        await newPage.close();
        await expect(page).toHaveURL('https://demoqa.com/browser-windows');
        await expect(page.locator("#tabButton")).toBeVisible();
    }
);

test('TC_004 Close child tab and switch back to parent',
    async ({ page, context }) => {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.locator("#messageWindowButton").click()
        ]);
        await newPage.waitForLoadState();
        await expect(newPage.getByText('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.')).toBeVisible();
    }
);    