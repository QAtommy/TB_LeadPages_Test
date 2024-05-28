const { expect } = require('@playwright/test');

/**
 * removes a given landing page, via search
 */
async function removeLandingPage(page, title) {
  await page.locator('navigation').getByRole('link').click();
  await page.getByRole('link', { name: 'Landing Pages' }).click();
  await page.getByRole('button', { name: 'search' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill(title);
  await page.getByPlaceholder('Search').press('Enter');
  await expect(page.locator('//*[contains(@class, "list-item List_listRow")]')).toHaveCount(1);
  await page.getByRole('button', { name: 'more', exact: true }).first().click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.locator('form')).toContainText(title);
  await page.locator('form i').click();
  await page.getByRole('button', { name: 'Delete', exact: true }).click();  
  await page.close();
}

module.exports = { removeLandingPage };
