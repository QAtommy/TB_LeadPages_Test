// @ts-check
const { test, expect, selectors } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { LandingPage } = require('../pageObjects/landingPage');

test('test basic landing page creation/editing', async ({ page }) => {   
    
    const randomLandingPageTitle = Array.from({ length: 8 }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.
    charAt(Math.floor(Math.random() * 62))).join('');   

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tomsberg48@gmail.com', 'Iceman@323');    

    const landingPage = new LandingPage(page);
    await landingPage.createLandingPage(randomLandingPageTitle);
    await landingPage.editPopUpText('Enter Your Email to Get Your Free Guide');
    await landingPage.previewAndVerifyText('Enter Your Email to Get Your Free Guide');       

    /*await page.getByRole('link', { name: 'Landing Pages' }).click();
    await page.getByRole('link', { name: 'Create New Landing Page' }).click();
    await page.locator('div').filter({ hasText: /^Start BuildingPreviewBuster Business$/ }).getByRole('button').first().click();
    await page.getByLabel('Page Name').click();
    await page.getByLabel('Page Name').fill(randomLandingPageTitle);
    await page.getByRole('button', { name: 'Continue' }).click();
    
    await page.getByText('SEND ME THE GUIDE').hover();
    await page.getByText('Edit Pop-Up').click();   
    await page.getByRole('heading', { name: 'Enter Your Email to Get Your' }).click();
    await page.locator('.ProseMirror').fill('Enter Your Email to Get Your Free Guide');

    await page.getByLabel('Close', { exact: true }).click();
    await page.getByRole('button', { name: 'Preview check error' }).click();
    await page.frameLocator('iframe[title="Preview"]').getByRole('link', { name: 'SEND ME THE GUIDE' }).click();
    await expect(page.frameLocator('iframe[title="Preview"]').frameLocator('iframe').getByRole('heading')).toContainText('Enter Your Email to Get Your Free Guide');
    */
});

 test.afterAll(async () => {
     // remove landing page created during the testz
  });