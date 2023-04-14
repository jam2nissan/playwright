// @ts-check
// const { test, expect } = require('@playwright/test');



// test('Login to investagrams and Get Gems', async ({ page }) => {

// });

import { test, expect } from '@playwright/test';

test('Login and Click the Collect Login Bonus', async ({ page }) => {
  await page.goto('https://www.investagrams.com/Login?ret=https%3A%2F%2Fwww.investagrams.com%2FAccount%2FGems%2FGemsRewardsCenter');
  await page.getByLabel('Email address', { exact: true }).click();
  await page.getByLabel('Email address', { exact: true }).fill('jam2.epile@gmail.com');
  await page.getByLabel('Email address', { exact: true }).press('Tab');
  await page.getByPlaceholder('Enter your password').fill('3ngrJham!x'); 
  await page.getByPlaceholder('Enter your password').press('Tab');
  await page.getByRole('button', { name: 'Login' }).press('Enter');
  await test.setTimeout(100000);
  await page.locator('a').filter({ hasText: 'Spin Roulette Get a chance to win exciting prizes daily' }).click();
  await test.setTimeout(100000);
  await page.locator('#gemsDailyRewardModal').getByRole('link').first().click();
  await test.setTimeout(100000);
  await page.getByRole('button', { name: 'Spin Roulette' }).click();
  await test.setTimeout(150000);
  await page.locator('#gemsDailyRewardModal').getByRole('link').nth(1).click();
  await page.getByRole('button', { name: 'Collect Gems' }).click();

  await page.locator('#gemsDailyRewardModal').getByRole('link').first().click();
  await test.setTimeout(150000);
});