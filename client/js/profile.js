//여기서 메인으로 구현해야 할 부분은 로그아웃
import { getNode } from './../lib/index.js';
//로그아웃을 하면
//localStorage.removeItem('uniqueID')를 해서
//uniqueID의 값을 유효하지않게 만들어주기

const logout = getNode('#profileLogout');

function logoutFunc() {
  localStorage.setItem('uniqueID', ' ');
  window.location.href = 'http://localhost:5500/index.html';
}

logout.addEventListener('click', logoutFunc);
