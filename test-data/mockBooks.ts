// Test data used for network mocking scenarios

// Custom book response
export const mockBooksResponse = {
  books: [
    {
      isbn: "111",
      title: "Advanced Playwright Testing",
      subTitle: "Automation testing",
      author: "Saurabh Singh",
      publish_date: "2026-11-06",
      publisher: "QA Training",
      pages: 190,
      description: "Mock Book",
      website: "https://example.com",
    },
  ],
};

// Empty book response
export const mockEmptyBooksResponse = {
  books: [],
};

// Delayed response data
export const mockDelayedBooksResponse = {
  books: [
    {
      isbn: "222",
      title: "Delayed Book",
      subTitle: "Automation testing with delay",
      author: "Saurabh Singh",
      publish_date: "2026-11-06",
      publisher: "QA Training",
      pages: 190,
      description: "Mock Book with delay",
      website: "https://example.com",
    },
  ],
};
