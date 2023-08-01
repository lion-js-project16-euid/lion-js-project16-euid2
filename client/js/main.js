import { getNode } from '/lib/index.js';

const temp = getNode('.startButton');

temp.addEventListener('click', function (e) {
  e.preventDefault();

  const keysForUnique = Object.keys(localStorage);
  const valuesForUnique = Object.values(localStorage);
  const indexOfUnique = keysForUnique.indexOf('uniqueID');
  const uniqueNum = valuesForUnique[indexOfUnique];

  if (typeof uniqueNum !== 'undefined') {
    console.log(1);
    if (uniqueNum.length != 10) {
      alert('해당 uniqueID는 로그아웃, 만료 등의 이슈로 유효하지 않습니다. 다시 로그인해주세요.');
      window.location.href = '/views/login.html';
    } else {
      window.location.href = '/views/story.html';
    }
  } else {
    console.log(2);
    window.location.href = '/views/sign-up.html';
  }
});
