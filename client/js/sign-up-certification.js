import { addClass, getNode, getRandom, removeClass, showAlert } from './../lib/index.js';

const phone_input = getNode('#phone');
const get = localStorage.getItem('phoneNum');
const certificationNum = getNode('#certificationNum');
const signupStart = getNode('#regi-agreeAndStart');
let uniqueID = [];
phone_input.value = get;
phone_input.disabled = true;

/*
랜덤한 6자리 난수 생성(인증번호)(완료)

휴대폰번호와 인증번호 모두 입력되어 있으면(폰번호는 disable되어있으니까 인증번호만 입력되어있으면) 제출버튼 활성화(완료)

인증번호 입력 해서 동의하고시작하기(회원가입) 성공하면 Unique ID숫자를 부여
해당 Unique ID는 localStorage의 value값으로, key값으로는 휴대폰번호를 가지고 있어야함(완료)

인증번호 입력시 Unique숫자를 부여
key : value
UniqueID : randomvalue
로 부여하면 될 것같은느낌?

타이머 작동하도록 하기
*/

let signupRandomNum = [];
for (let i = 0; i < 6; i++) {
  signupRandomNum.push(getRandom(9));
}
let signupRandomNum_int = signupRandomNum.join('');
console.log(signupRandomNum_int);
// alert(signupRandomNum_int);
//modal로 구현해볼까?

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
    const phoneNum = localStorage.getItem('phoneNum');
    localStorage.setItem(phoneNum, certificationNum.value);

    for (let j = 0; j < 10; j++) {
      uniqueID.push(String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97)));
    }
    uniqueID = uniqueID.join('');
    console.log(uniqueID);
    localStorage.setItem('uniqueID', uniqueID);
  }
});
/*
------------------Login----------------
Unique ID가 존재한다면 루트경로(?)로 리디렉션

Unique ID가 유효하지 않다면 
1. 사용자에게 알리고 
2. 로그인페이지로 리디렉션

로그아웃은 클라이언트 단(?)에서 localStorage에 저장된 Unique ID를 삭제하는 방식으로 구현
(뒤로가기 막아야될수도?)
*/
