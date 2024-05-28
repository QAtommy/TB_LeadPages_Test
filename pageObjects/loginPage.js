class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.getByLabel('Email Address');
      this.passwordInput = page.getByLabel('Password', { exact: true });
      this.loginButton = page.getByRole('button', { name: 'Log in' });
    }
  
    async goto() {
      await this.page.goto('https://my.leadpages.com/login/');
    }
  
    async login(email, password) {
      await this.emailInput.click();
      await this.emailInput.fill(email);
      await this.passwordInput.click();
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  }
  
  module.exports = { LoginPage };
  