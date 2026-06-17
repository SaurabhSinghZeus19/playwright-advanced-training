import { test, expect } from "../fixtures/customFixtures";

import {
  mockBooksResponse,
  mockEmptyBooksResponse,
  mockDelayedBooksResponse,
} from "../test-data/mockBooks";
import { TIMEOUTS } from "../constants/timeouts";

// Return custom book data instead of actual API response
test("TC_005 Mock Books API with custom books", async ({
  page,
  bookStorePage,
  logger,
}) => {
  logger.info("Mocking Books API with custom data");
  await page.route("https://demoqa.com/BookStore/v1/Books", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ books: mockBooksResponse.books }),
    });
  });

  await bookStorePage.goto();

  await expect(page.getByText("Advanced Playwright Testing")).toBeVisible();
});
// Verify application behavior when no books are returned
test("TC_006 Mock empty response", async ({ page, bookStorePage, logger }) => {
  logger.info("Mocking Books API with empty response");
  await page.route("https://demoqa.com/BookStore/v1/Books", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ books: mockEmptyBooksResponse.books }),
    });
  });

  await bookStorePage.goto();

  await expect(page.getByText("Page 1 of 0")).toBeVisible();
});
// Simulate slow API response using delayed mock data
test("TC_007 Delay API response", async ({ page, bookStorePage, logger }) => {
  // Example of Playwright annotation usage
  test.slow();
  logger.info("Mocking Delayed Books API response");
  await page.route("https://demoqa.com/BookStore/v1/Books", async (route) => {
    // replaced hardcoded timeout with reusable constants
    await new Promise((resolve) => setTimeout(resolve, TIMEOUTS.SHORT));
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ books: mockDelayedBooksResponse.books }),
    });
  });

  3;
  await bookStorePage.goto();

  await expect(page.getByText("Delayed Book")).toBeVisible();
});
