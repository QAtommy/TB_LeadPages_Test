// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/loginPage');
const { LandingPage } = require('../pageObjects/landingPage');
const { removeLandingPage } = require('../util/landingPageUtils');
const { generateRandomString } = require('../util/misc_utils');

let page;
// generate a unique Landing page id for testing
const randomLandingPageTitle = "LeadPages " + generateRandomString();

test.describe.configure({ mode: 'serial' });

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
});

test.afterAll(async () => {        
    // remove landing page created during the test
    await removeLandingPage(page, randomLandingPageTitle);    
});

test('test basic landing page creation/editing', async () => {       
    // define the new popup text
    const newPopupText = 'Enter Your Email to Get Your Free Guide';   
    
    // sign in
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tomsberg48@gmail.com', 'Iceman@323');    

    // create, edit and verify landing page popup text
    const landingPage = new LandingPage(page);
    await landingPage.createLandingPage(randomLandingPageTitle);
    await landingPage.editPopUpText(newPopupText);
    await landingPage.previewAndVerifyText(newPopupText);
});