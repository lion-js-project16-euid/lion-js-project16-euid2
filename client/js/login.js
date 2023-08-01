import { addClass, attr, getNode, removeClass } from '/lib/index.js';

function phoneReg(text) {
  const re = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;

  return re.test(String(text).toLowerCase());
}

const phone_input = document.querySelector('#phone');
const loginButton = getNode('#loginButton');
let value_id = phone_input.value;

phone_input.addEventListener('input', () => {
  value_id = phone_input.value;
  let numerror = phoneReg(value_id);
  if (numerror == false) {
    loginButton.classList.add('is--invalid');
    loginButton.disabled = true;
  } else {
    loginButton.classList.remove('is--invalid');
    loginButton.disabled = false;
  }
});

phone_input.addEventListener('input', () => {
  let checkValidationPhoneNumRegister = attr(loginButton, 'class').split(' ');
  if (checkValidationPhoneNumRegister.includes('is--invalid')) {
    removeClass(loginButton, 'text-black');
    removeClass(loginButton, 'text-base');
    removeClass(loginButton, 'text-semibold');
    addClass(loginButton, 'text-contentsSecondary');
    addClass(loginButton, 'border-contentsSecondary');
    addClass(loginButton, 'text-sm');
    addClass(loginButton, 'cursor-not-allowed');
  } else {
    removeClass(loginButton, 'text-contentsSecondary');
    removeClass(loginButton, 'text-sm');
    removeClass(loginButton, 'cursor-not-allowed');
    addClass(loginButton, 'text-black');
    addClass(loginButton, 'text-base');
    addClass(loginButton, 'font-semibold');
  }
});

loginButton.addEventListener('click', function (e) {
  console.log(value_id);
  localStorage.setItem('phoneNum', value_id);
  e.preventDefault();
  window.location.href = '/views/login-certification.html';
});
