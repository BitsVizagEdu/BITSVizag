const { chromium } = require('@playwright/test');

(async () => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5173/aboutus/Message-from-Secretary-&-Correspondent/');
    // Wait for the image to load
    await page.waitForSelector('.image-box img');
    // Take screenshot of the entire page
    await page.screenshot({ path: 'C:/Users/rangu/.gemini/antigravity-ide/brain/f76d3e7b-edfc-4674-bbd9-43fda6bb5c67/browser_test_screenshot_1.png' });
    await browser.close();
    console.log('Screenshot taken successfully!');
  } catch (err) {
    console.error('Error during screenshot:', err);
  }
})();
