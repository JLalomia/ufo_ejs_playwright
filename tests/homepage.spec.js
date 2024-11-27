const { test, expect } = require('@playwright/test');

test.describe('Homepage Tests for UFO & AI Chronicles', () => {
  test('should load the homepage and display correct title', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Check that the page has the correct title
    await expect(page).toHaveTitle(/UFO & AI Chronicles/i);

    // Check that the header contains the correct text
    const logo = page.locator('.header .logo h1');
    const tagline = page.locator('.header .logo span');
    await expect(logo).toHaveText('UFO');
    await expect(tagline).toHaveText('Chronicles');
  });

  test('should display navigation links', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Check that the navigation contains all expected links
    const nav = page.locator('.header .nav');
    await expect(nav.locator('a[href="/"]')).toHaveText('Home');
    await expect(nav.locator('a[href="/ai-insights"]')).toHaveText('AI Insights');
    await expect(nav.locator('a[href="/ufo-stories"]')).toHaveText('UFO Stories');
    await expect(nav.locator('a[href="/news"]')).toHaveText('News');
    await expect(nav.locator('a[href="/about"]')).toHaveText('About Us');
    await expect(nav.locator('a[href="/contact"]')).toHaveText('Contact');
  });

  test('should display the hero section correctly', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Check for the hero section elements
    const heroTitle = page.locator('.hero .hero-title');
    const heroSubtitle = page.locator('.hero .hero-subtitle');
    const heroDescription = page.locator('.hero .hero-description');
    const learnMoreButton = page.locator('.hero .btn');

    await expect(heroTitle).toHaveText('UFO & AI Chronicles');
    await expect(heroSubtitle).toHaveText('Explore the Intersection of the Unknown and the Intelligent');
    await expect(heroDescription).toHaveText('Discover groundbreaking AI technologies and unravel UFO mysteries.');
    await expect(learnMoreButton).toHaveText('Learn More');
  });

  test('should display main content cards correctly', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Verify content cards
    const cards = page.locator('.content .card');
    await expect(cards.nth(0).locator('h3')).toHaveText('Home');
    await expect(cards.nth(0).locator('p')).toHaveText('Explore curated stories and articles on AI and UFOs.');

    await expect(cards.nth(1).locator('h3')).toHaveText('AI Insights');
    await expect(cards.nth(1).locator('p')).toHaveText('Delve into the latest advancements in Artificial Intelligence.');

    await expect(cards.nth(2).locator('h3')).toHaveText('UFO Stories');
    await expect(cards.nth(2).locator('p')).toHaveText('Read intriguing accounts and news about UFO sightings.');

    await expect(cards.nth(3).locator('h3')).toHaveText('About Us');
    await expect(cards.nth(3).locator('p')).toHaveText('Learn more about our mission to explore UFOs and AI.');
  });

  test('should display footer with correct text', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Check for footer text
    const footer = page.locator('footer p');
    await expect(footer).toHaveText('© 2024 Express EJS Demo. All rights reserved.');
  });
});
