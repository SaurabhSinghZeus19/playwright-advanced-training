import { test, expect } from "@playwright/test";
import { BookStorePage } from "../pages/BookStorePage";
import { mockBooksResponse, mockEmptyBooksResponse, mockDelayedBooksResponse } from "../test-data/mockBooks";



test('TC_005 Mock Books API with custom books',
    async ({ page }) => {
        await page.route('https://demoqa.com/BookStore/v1/Books', async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ books: mockBooksResponse.books })
            });
        });

        const bookStorePage = new BookStorePage(page);
        await bookStorePage.goto();
        await expect(page.getByText('Advanced Playwright Testing')).toBeVisible();
    }
);

test('TC_006 Mock empty response',
    async ({ page }) => {
        await page.route('https://demoqa.com/BookStore/v1/Books', async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ books: mockEmptyBooksResponse.books })

            });
        });


        const bookStorePage = new BookStorePage(page);
        await bookStorePage.goto();

        await expect(page.getByText('Page 1 of 0')).toBeVisible();
    }
);

test('TC_007 Delay API response',
    async ({ page }) => {
        await page.route('https://demoqa.com/BookStore/v1/Books', async (route) => {
            await new Promise(resolve => setTimeout(resolve, 3000));
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ books: mockDelayedBooksResponse.books })
            });
        }
        );

        const bookStorePage = new BookStorePage(page);
        await bookStorePage.goto();
        await expect(page.getByText('Delayed Book')).toBeVisible();
    }
);

