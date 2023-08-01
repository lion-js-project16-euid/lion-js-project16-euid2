import { addClass, attr, getNode, removeClass } from '/lib/index.js';

function phoneReg(text) {
  const re = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;

  return re.test(String(text).toLowerCase());
}

const phone_input = document.querySelector('#phone');
const registerButton = getNode('#registerButton');
let value_id = phone_input.value;

phone_input.addEventListener('input', () => {
  value_id = phone_input.value;
  let numerror = phoneReg(value_id);
  if (numerror == false) {
    registerButton.classList.add('is--invalid');
    registerButton.disabled = true;
  } else {
    registerButton.classList.remove('is--invalid');
    registerButton.disabled = false;
  }
});

phone_input.addEventListener('input', () => {
  let checkValidationPhoneNumRegister = attr(registerButton, 'class').split(' ');
  if (checkValidationPhoneNumRegister.includes('is--invalid')) {
    removeClass(registerButton, 'text-black');
    removeClass(registerButton, 'text-base');
    removeClass(registerButton, 'font-bold');
    removeClass(registerButton, 'border-black');
    addClass(registerButton, 'text-contentsSecondary');
    addClass(registerButton, 'border-contentsSecondary');
    addClass(registerButton, 'text-base');
    addClass(registerButton, 'cursor-not-allowed');
  } else {
    removeClass(registerButton, 'text-contentsSecondary');
    removeClass(registerButton, 'text-base');
    removeClass(registerButton, 'cursor-not-allowed');
    addClass(registerButton, 'text-black');
    addClass(registerButton, 'text-base');
    addClass(registerButton, 'font-bold');
  }
});

registerButton.addEventListener('click', function (e) {
  console.log(value_id);
  localStorage.setItem('phoneNum', value_id);
  e.preventDefault();
  window.location.href = '/views/sign-up-certification.html';
});
