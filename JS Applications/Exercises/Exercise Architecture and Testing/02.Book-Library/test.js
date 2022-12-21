const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

describe("tests", async function () {
  this.timeout(5000);

  let page, browser;
  before(async () => {
    browser = await chromium.launch();
  });
  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });

  it("works", async () => {
    await page.goto("http://127.0.0.1:5500/index.html");

    await page.click("text=Load All Books");

    await page.waitForSelector("text=Harry Potter");

    const rows = await page.$$eval("tr", (rows) =>
      rows.map((r) => r.textContent.trim())
    );
    expect(rows[1]).to.contains('Harry Potter')
  });
});
