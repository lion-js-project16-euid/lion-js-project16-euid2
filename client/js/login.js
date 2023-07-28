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
    registerButton.classList.add('is--invalid');
  } else {
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
    removeClass(registerButton, 'text-sm');
    addClass(registerButton, 'text-black');
    addClass(registerButton, 'text-base');
    addClass(registerButton, 'font-semibold');
  }
});
//is--invalid면 버튼 활성화 안되도록
//버튼 활성화 되어서 누르면 register-certification으로 이동하도록
//동시에 localStorage에 key값으로 전화번호 저장하기
//랜덤한 6자리 난수 저장하기
//해당 난수를 value로 저장