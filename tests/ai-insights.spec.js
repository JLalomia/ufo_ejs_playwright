const { test, expect } = require('@playwright/test');

test.describe('AI Insights Page Tests', () => {
  test('should load the AI Insights page and display correct title', async ({ page }) => {
    // Navigate to the AI Insights page
    await page.goto('/ai-insights');

    // Verify the page title
    await expect(page).toHaveTitle('UFO & AI Chronicles');
  });

  test('should display correct header content', async ({ page }) => {
    // Navigate to the AI Insights page
    await page.goto('/ai-insights');

    // Validate the header logo and tagline
    const headerLogo = page.locator('header .logo h1');
    const headerTagline = page.locator('header .logo span');
    await expect(headerLogo).toHaveText('UFO');
    await expect(headerTagline).toHaveText('Chronicles');

    // Validate the navigation links in the header
    const navLinks = page.locator('header .nav a');
    await expect(navLinks.nth(0)).toHaveText('Home');
    await expect(navLinks.nth(0)).toHaveAttribute('href', '/');
    await expect(navLinks.nth(1)).toHaveText('AI Insights');
    await expect(navLinks.nth(1)).toHaveAttribute('href', '/ai-insights');
    await expect(navLinks.nth(2)).toHaveText('UFO Stories');
    await expect(navLinks.nth(2)).toHaveAttribute('href', '/ufo-stories');
    await expect(navLinks.nth(3)).toHaveText('News');
    await expect(navLinks.nth(3)).toHaveAttribute('href', '/news');
    await expect(navLinks.nth(4)).toHaveText('About Us');
    await expect(navLinks.nth(4)).toHaveAttribute('href', '/about');
    await expect(navLinks.nth(5)).toHaveText('Contact');
    await expect(navLinks.nth(5)).toHaveAttribute('href', '/contact');
  });

  test('should display main content inside <main> tag', async ({ page }) => {
    // Navigate to the AI Insights page
    await page.goto('/ai-insights');

    // Validate the <h2> within <main>
    const mainHeading = page.locator('body > h2');
    await expect(mainHeading).toHaveText('Explore insights into Artificial Intelligence.');

    // Validate the <p> within <main>
    const mainParagraph = page.locator('body > p');
    await expect(mainParagraph).toHaveText('ai insights');
  });

  test('should display footer with correct text', async ({ page }) => {
    // Navigate to the AI Insights page
    await page.goto('/ai-insights');

    // Validate the footer text
    const footerText = page.locator('footer p');
    await expect(footerText).toHaveText('© 2024 Express EJS Demo. All rights reserved.');
  });

  test('should ensure CSS and JavaScript files are loaded', async ({ page }) => {
    // Navigate to the AI Insights page
    await page.goto('/ai-insights');

    // Check that the CSS file is referenced
    const cssLink = page.locator('link[rel="stylesheet"]');
    await expect(cssLink).toHaveAttribute('href', 'css/style.css');

    // Check that the JavaScript file is loaded
    const jsScript = page.locator('script[src="/js/script.js"]');
    await expect(jsScript).toHaveAttribute('src', '/js/script.js');
  });
});
