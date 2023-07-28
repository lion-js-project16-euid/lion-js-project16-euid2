import { addClass, attr, getNode, removeClass, setCss } from './../lib/index.js';

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
    // console.log('false');
    registerButton.classList.add('is--invalid');
  } else {
    // console.log('true');
    registerButton.classList.remove('is--invalid');
  }
});

phone_input.addEventListener('input', () => {
  let checkValidationPhoneNumRegister = attr(registerButton, 'class').split(' ');
  if (checkValidationPhoneNumRegister.includes('is--invalid')) {
    setCss(registerButton, 'class', 'text-greybox');
    setCss(registerButton, 'class', 'border-greybox');
  } else {
    removeClass(registerButton, 'text-greybox');
    addClass(registerButton, 'text-black');
    addClass(registerButton, 'text-base');
  }
});

// attr(registerButton, 'class', )
