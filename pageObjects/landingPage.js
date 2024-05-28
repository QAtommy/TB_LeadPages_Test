const { expect } = require('@playwright/test');

/**
 * handles the page creation, popup text editing and confirming the text change
 */
class LandingPage {
    constructor(page) {
      this.page = page;
      this.landingPagesLink = page.getByRole('link', { name: 'Landing Pages' });
      this.createNewLandingPageLink = page.getByRole('link', { name: 'Create New Landing Page' });
      this.firstTemplateButton = page.locator('div').filter({ hasText: /^Start BuildingPreviewBuster Business$/ }).getByRole('button').first();
      this.pageNameInput = page.getByLabel('Page Name');
      this.continueButton = page.getByRole('button', { name: 'Continue' });
      this.guideText = page.getByText('SEND ME THE GUIDE');
      this.editPopUpButton = page.getByText('Edit Pop-Up');
      this.heading = page.getByRole('heading', { name: 'Enter Your Email to Get Your' });
      this.proseMirrorInput = page.locator('.ProseMirror');
      this.closeButton = page.getByLabel('Close', { exact: true });
      this.previewCheckErrorButton = page.getByRole('button', { name: 'Preview check error' });
      this.previewFrame = page.frameLocator('iframe[title="Preview"]');
      this.boldButton = page.getByLabel('Bold');
    }
  
    async createLandingPage(title) {
      await this.landingPagesLink.click();
      await this.createNewLandingPageLink.click();
      await this.firstTemplateButton.click();
      await this.pageNameInput.click();
      await this.pageNameInput.fill(title);
      await this.continueButton.click();
    }
  
    async editPopUpText(newText) {
      await this.guideText.hover();
      await this.editPopUpButton.click();
      await this.heading.click();
      // update text
      await this.proseMirrorInput.fill(newText);   
      // select and bold text
      await this.proseMirrorInput.press('ControlOrMeta+a');
      await this.boldButton.click();      
      await this.closeButton.click();
    }
  
    async previewAndVerifyText(expectedText) {
      await this.previewCheckErrorButton.click();
      await this.previewFrame.getByRole('link', { name: 'SEND ME THE GUIDE' }).click();
      await expect(this.previewFrame.frameLocator('iframe').getByRole('heading')).toContainText(expectedText);
    }
  }
  
  module.exports = { LandingPage };
  