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
    removeClass(registerButton, 'text-semibold');
    addClass(registerButton, 'text-contentsSecondary');
    addClass(registerButton, 'border-contentsSecondary');
    addClass(registerButton, 'text-sm');
    addClass(registerButton, 'cursor-not-allowed');
  } else {
    removeClass(registerButton, 'text-contentsSecondary');
    removeClass(registerButton, 'text-sm');
    removeClass(registerButton, 'cursor-not-allowed');
    addClass(registerButton, 'text-black');
    addClass(registerButton, 'text-base');
    addClass(registerButton, 'font-semibold');
  }
});
//is--invalid면 버튼 활성화 안되도록(완성)
//커서도 변경?
//버튼 활성화 되어서 누르면 register-certification으로 이동하도록(완성)
//동시에 localStorage에 key값으로 전화번호 저장하기(완성)
registerButton.addEventListener('click', function (e) {
  console.log(value_id);
  localStorage.setItem('phoneNum', value_id);
  /* const value = localStorage.getItem('phoneNum');
  console.log(value); */
  e.preventDefault();
  window.location.href = '/views/sign-up-certification.html';
});
