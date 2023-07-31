import { getNode } from './../lib/index.js';

const temp = getNode('.startButton'); //여기 값은 시작화면 id/class에 맞춰줘야됨
temp.addEventListener('click', function (e) {
  //EventListener'click' 들어오면 UniqueID탐색
  e.preventDefault();
  //   const localStorageCopy = [...localStorage];
  const keysForUnique = Object.keys(localStorage);
  const valuesForUnique = Object.values(localStorage);
  const indexOfUnique = keysForUnique.indexOf('uniqueID');
  const uniqueNum = valuesForUnique[indexOfUnique];
  if (typeof uniqueNum !== 'undefined') {
    console.log(1);
    if (uniqueNum.length != 10) {
      //유효하지않으면 사용자에게 유효하지 않다고 알리고 login.js로 리디렉션
      alert('해당 uniqueID는 로그아웃, 만료 등의 이슈로 유효하지 않습니다. 다시 로그인해주세요.');
      window.location.href = 'http://localhost:5500/views/login.html';
    } else {
      //존재하면 선배님이야기로
      window.location.href = 'http://localhost:5500/views/story.html';
    }
  } else {
    console.log(2);
    //존재하지않으면 회원가입으로
    window.location.href = 'http://localhost:5500/views/sign-up.html';
  }
});
