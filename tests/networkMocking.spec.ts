import { test, expect } from "../fixtures/customFixtures";

import { mockBooksResponse, mockEmptyBooksResponse, mockDelayedBooksResponse } from "../test-data/mockBooks";




test('TC_005 Mock Books API with custom books',
    async ({ page, bookStorePage, logger }) => {
        logger.info('Mocking Books API with custom data');
        await page.route('https://demoqa.com/BookStore/v1/Books', async (route) => {
            
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ books: mockBooksResponse.books })
            });
        });

        
        await bookStorePage.goto();
        
        await expect(page.getByText('Advanced Playwright Testing')).toBeVisible();
    }
);

test('TC_006 Mock empty response',
    async ({ page,bookStorePage, logger }) => {
        logger.info('Mocking Books API with empty response');
        await page.route('https://demoqa.com/BookStore/v1/Books', async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ books: mockEmptyBooksResponse.books })

            });
        });


        
        await bookStorePage.goto();
        
        await expect(page.getByText('Page 1 of 0')).toBeVisible();
    }
);

test('TC_007 Delay API response',
    async ({ page,bookStorePage, logger }) => {
        logger.info('Mocking Delayed Books API response');
        await page.route('https://demoqa.com/BookStore/v1/Books', async (route) => {
            await new Promise(resolve => setTimeout(resolve, 3000));
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ books: mockDelayedBooksResponse.books })
            });
        }
        );

       
        await bookStorePage.goto();
       
        await expect(page.getByText('Delayed Book')).toBeVisible();
    }
);

