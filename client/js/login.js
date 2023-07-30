import { attr, getNode, removeClass, setCss } from './../lib/index.js';

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
    console.log('false');
    registerButton.classList.add('is--invalid');
  } else {
    console.log('true');
    registerButton.classList.remove('is--invalid');
  }
});

let checkValidationPhoneNumRegister = attr(registerButton, 'class').split(' ');
console.log(checkValidationPhoneNumRegister);
if (checkValidationPhoneNumRegister.includes('is--invalid')) {
  //만약 registerButton에 is--invalid가 있으면
  //비활성화 하고 색깔 회색
  setCss(registerButton, 'class', 'text-greybox');
  setCss(registerButton, 'class', 'border-greybox');
  console.log('false');
} else {
  //만약 registerButton에 is--invalid가 없으면
  //활성화 하고 색깔 검은색
  removeClass(registerButton, 'text-greybox');
  removeClass(registerButton, 'border-greybox');
  setCss(registerButton, 'class', 'text-black');
  setCss(registerButton, 'class', 'border-black');
  console.log('true');
}
// attr(registerButton, 'class', )
