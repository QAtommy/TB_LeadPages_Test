// generate a random 8 character string
function generateRandomString(length = 8) {
    return Array.from({ length }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      .charAt(Math.floor(Math.random() * 62))).join('');
  }
  
  module.exports = { generateRandomString };
  