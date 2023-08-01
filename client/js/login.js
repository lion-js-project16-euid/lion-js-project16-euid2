import { addClass, attr, getNode, removeClass } from '../lib/index.js';
/*
import { addClass } from './../lib/dom/css';
------------------Login----------------
Unique ID가 존재한다면 루트경로(?)로 리디렉션

맨 처음 시작버튼 눌렀을 때
Unique ID를 탐색, 존재하면 바로 선배님 이야기로 이동

Unique ID가 유효하지 않다면 
1. 사용자에게 알리고 
2. 로그인페이지로 리디렉션

그럼 
1. 처음 페이지에서 구성해야될 코드는?
    - EventListener'click' 들어오면 UniqueID탐색, 존재하면 선배님이야기로, 존재하지않으면 회원가입으로
    - UniqueID탐색했는데 유효하지않으면 사용자에게 유효하지 않다고 알리고 login.js로 리디렉션
    - 그렇다면 총 새 가지 경우의 수 
2. 이 페이지에서 구성해야될 코드는?
    - 사실상 sign-up이랑 비슷할듯

그렇다면 주요하게 구현해야할 부분은 주석이나 그런데서 짜고 나중에 이동

로그아웃은 클라이언트 단(?)에서 localStorage    ㅇ에 저장된 Unique ID를 삭제하는 방식으로 구현
(뒤로가기 막아야될수도?)
*/

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
//is--invalid면 버튼 활성화 안되도록(완성)
//커서도 변경?
//버튼 활성화 되어서 누르면 register-certification으로 이동하도록(완성)
//동시에 localStorage에 key값으로 전화번호 저장하기(완성)
loginButton.addEventListener('click', function (e) {
  console.log(value_id);
  localStorage.setItem('phoneNum', value_id);
  /* const value = localStorage.getItem('phoneNum');
    console.log(value); */
  e.preventDefault();
  window.location.href = '/views/login-certification.html';
});
