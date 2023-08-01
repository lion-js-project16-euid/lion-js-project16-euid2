import { addClass, getNode, getRandom, removeClass } from '/lib/index.js';

const phone_input = getNode('#phone');
const get = localStorage.getItem('phoneNum');
const certificationNum = getNode('#certificationNum');
const signupStart = getNode('#login-agreeAndStart');
const numAgain = getNode('#loginNumAgain');
const phoneNum = localStorage.getItem('phoneNum');
let uniqueID = [];
phone_input.value = get;
phone_input.disabled = true;
let minutes = 5;
let seconds = 0;
let newMin = minutes;
let newSec = seconds;

let signupRandomNum = [];
for (let i = 0; i < 6; i++) {
  signupRandomNum.push(getRandom(9));
}
let signupRandomNum_int = signupRandomNum.join('');
alert(signupRandomNum_int);

function updateCountdown() {
  if (minutes == 0 && seconds == 0) {
    clearInterval(timerID);
    return;
  }

  if (newSec == 0) {
    newMin--;
    newSec = 59;
  } else {
    newSec--;
  }

  const formatMin = String(newMin).padStart(2, '0');
  const formatSec = String(newSec).padStart(2, '0');

  numAgain.innerText = `인증문자 다시 받기(${formatMin}분 ${formatSec}초)`;
}
const timerID = setInterval(updateCountdown, 1000);

certificationNum.addEventListener('input', () => {
  if (certificationNum.value !== '') {
    signupStart.disabled = false;
    removeClass(signupStart, 'cursor-not-allowed');
    console.log('값이 입력됨');
  } else {
    console.log('값이 입력되지 않음');
    signupStart.disabled = true;
    addClass(signupStart, 'cursor-not-allowed');
  }
});

signupStart.addEventListener('click', function (e) {
  e.preventDefault();
  if (certificationNum.value == signupRandomNum_int) {
    localStorage.setItem(phoneNum, certificationNum.value);

    for (let j = 0; j < 10; j++) {
      uniqueID.push(String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97)));
    }
    uniqueID = uniqueID.join('');
    console.log(uniqueID);
    localStorage.setItem('uniqueID', uniqueID);
    window.location.href = '/views/story.html';
  }
});
