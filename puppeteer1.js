const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];

(async () => {
  const browser = await puppeteer.launch({headless: false, slowmo:100});
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto('https://www.nytimes.com/section/sports/baseball');
  await page.screenshot({ path: 'example1.png' });

  await browser.close();
})();
