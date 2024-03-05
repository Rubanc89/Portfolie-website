document.addEventListener('DOMContentLoaded', generateCaptcha);

function generateCaptcha() {
  const captchaContainer = document.getElementById('captcha-container');
  const captchaChars = 'A-Za-z0-9';
  let captcha = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * captchaChars.length);
    captcha += captchaChars[randomIndex];
  }

  captchaContainer.textContent = captcha;
}

function verifyCaptcha() {
  const captchaInput = document.getElementById('captcha-input');
  const resultMessage = document.getElementById('result-message');
  const captchaContainer = document.getElementById('captcha-container');
  const enteredCaptcha = captchaInput.value.trim();
  const actualCaptcha = captchaContainer.textContent;

  if (enteredCaptcha === actualCaptcha) {
    resultMessage.textContent = 'Captcha verified Successfully!';
    resultMessage.style.color = '#4caf50'; // Green color for success
  } else {
    resultMessage.textContent = 'CAPTCHA Verification Failed. Please try again.';
    resultMessage.style.color = '#e74c3c'; // Red color for failure
    generateCaptcha(); // Regenerate CAPTCHA on failure
  }
}
