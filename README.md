# 멋쟁이 사자처럼 FE 6기 Javascript 프로젝트 - 김민성조
===================

프로젝트 기간 : 2023년 7월 28일 ~ 2023년 8월 2일


## 프로젝트 설명
=====================

### 프로젝트명
Enter-Eudim


### 프로젝트 조원
- 조장 : 김규민
- 조원 : 김민성, 이은빈, 방서빈


### 프로젝트 목표
1. 



### 역할 분담
- 김규민 : 프로젝트 setting, 로고 페이지, 카테고리 페이지, 채팅 페이지, 전체 UI 및 스크립트 동작 점검 (QA)
- 김민성 : 스크럼 마스터, 로그인/회원가입 페이지, 회원가입/로그인 인증 페이지, 프로필 페이지, 웹 접근성 점검
- 이은빈 : 기기 거래 페이지, 기기 거래 상세 페이지, 채팅 페이지 스크립트 기능 구현
- 방서빈 : 선배님 스토리 페이지, 스와이프 구현, 검색 페이지


### 사용 기술
- HTML
- Tailwind
- javascript


### 가이드라인 준수 사항
1. localStorage를 사용하여 "관심분야 선택 항목"을 저장했습니다.
2. 회원가입 기능을 구현했습니다. (휴대폰 번호, input, button 구성)
3. 회원가입을 통해 사용자를 생성하고 관리했습니다.
    + 휴대폰 번호 입력시 랜덤한 6자리 난수를 생성
    + 해당 인증번호 입력시 Upique ID 숫자를 부여 후 localStorage에 저장
    + 해당 유저의 Unique ID를 확인 후 로그인
    + 응답받은 Unique ID는 localStorage에 저장
    + 다음 번에 로그인 시 Unique ID가 존재한다면 루트 경로로 리디렉션
    + 어떤 경우든 Unique ID가 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리디렉션
    + 로그아웃은 클라인트 단에서 localStorafe에 저장된 Unique ID를 삭제하는 방식으로 구현
4. 인증번호 유효성 검사했습니다.
    + 휴대폰 번호: localStorage에 저장된 key 값으로 사용
    + 인증번호 : 입력받은 고유한 ID를 value 값으로 가짐
    + 휴대폰 번호와 인증번호 모두 입력, 조건을 만족해야 제출 버튼이 활성화
5. 기기 거래 화면 구성했습니다.
    + 데이터 스키마를 통해 데이터 설계 후 기기 거래 화면에 해당 데이터들 불러와 노출
    + 거래 항목 선택시 디테일 페이지로 들어가 이미지, 유저정보, 본문 등을 불러와 노출
6. 검색창 기능 구현했습니다.
    + 검색 기능을 구현해 거래 항목의 text와 일치하는 항목들을 리랜더링


### Enter-Euid 설명

Enter-Euid 구현한 기능

- 모든 페이지의 상단 바
1. 현재 시간 노출

- 선배님 스토리, 거래 기기, 마이 이듬 페이지의 하단 바 
1. 메뉴를 클릭하면 해당하는 메뉴의 아이콘만 색상 변경

- 시작 페이지
1. Unique ID 없이 시작하기 누르면 유효하지 않음을 알리는 창이 뜨고 로그인 페이지로 리디렉션

- 로그인 페이지
1. input에 휴대폰 번호 입력
2. 정규 표현식으로 입력한 휴대폰 번호가 11자리 숫자인지 확인
3. 입력받은 값과 정규표현식 매치되는지 확인
4. 숫자 11자리 입력되면 인증번호 문자받기 버튼 활성화
5. 활성화된 인증번호 문자받기 버튼 클릭하면 랜덤 숫자 alert 창으로 알림
6. 인증문자 다시 받기 클릭 시 새로운 숫자 노출
7. 노출된 숫자 그대로 입력을 해야 동의하고 시작하기 버튼 클릭이 됨
8. 동의하고 시작하기 버튼을 클릭 시 선배님 스토리 페이지로 리디렉션

- 회원가입 페이지
1. input에 휴대폰 번호 입력
2. 정규 표현식으로 입력한 휴대폰 번호가 11자리 숫자인지 확인
3. 입력받은 값과 정규표현식 매치되는지 확인
4. 숫자 11자리 입력되면 인증번호 문자받기 버튼 활성화
5. 활성화된 인증번호 문자받기 버튼 클릭하면 랜덤 숫자 alert 창으로 알림
6. 인증문자 다시 받기 클릭 시 새로운 숫자 노출
7. 노출된 숫자 그대로 입력을 해야 동의하고 시작하기 버튼 클릭이 됨
8. 동의하고 시작하기 버튼을 클릭 시 카테고리를 선택하는 페이지로 리디렉션
9. 검색창에 관심분야 입력시 해당되는 관심분야만 노출
10. "+" 버튼을 클릭 시 해당 관심분야의 데이터 값이 localStorage에 저장됨
11. 체크된 버튼을 클릭 시 해당 관심분야의 데이터 값이 localStorage에서 삭제됨
12. 이대로 저장할래요 버튼을 클릭 시 선배님 스토리 페이지로 리디렉션

- 선배님 스토리 페이지
1. swiper를 사용해서 data 값들을 슬라이드
2. 다음으로 이동하는 화살표, 이전으로 이동하는 화살표 클릭 시 동작
3. 중앙 밑에 위치한 버튼 클릭 시 슬라이드 정지 그리고 다시 클릭하면 버튼이 바뀌고 슬라이드 동작
4. data.json의 데이터들을 fetch를 사용하여 불러와서 화면에 노출함
5. 선배님 스토리, 기기거래, 질의응답, 같이해요 메뉴 클릭 시 text 색상이 바뀌고 border-bottom 생김

- 검색 페이지
1. input 창에 title 값 입력하고 enter 키 누르면 일치하는 값이 노출
2. 노출된 리스트 클릭하면 상세페이지로 이동
3. 친구들이 많이 찾고 있어요! 아래의 키워드 부분을 옆으로 밀면 슬라이드
3. 키워드들을 선택하면 input 창에 입력됨
4. 키워드 선택으로 input창에 입력된 상태에서 enter 키 누르면 일치하는 값이 노출
5. 일치하는 값이 없을 경우 "검색 결과가 없습니다." 문구 페이지에 노출

- 기기거래 페이지
1. data.json의 데이터들을 fetch를 사용해서 불러와서 화면에 노출
2. 하트 아이콘 클릭 시 붉은 색으로 변경되는 동시에 숫자 값 증가
3. 증가된 상태에서 한번 더 클릭하면 색상이 변경되는 동시에 숫자 값 감소
4. 리스트 클릭 시 상세 페이지로 리디렉션

- 상세페이지
1. data.json의 데이터들을 fetch를 사용해서 불러와서 화면에 노출
2. 상단 오른쪽에 위치한 다운로드 아이콘을 클릭하면 해당 페이지의 화면 파일이 다운로드됨
3. 점 3개로 이루어진 아이콘을 클릭하면 메뉴가 노출 됨
4. 한번 더 점 3개로 이루어진 아이콘을 클릭하면 메뉴가 사라짐
5. 하트 아이콘 클릭 시 아이콘 색상 변경
6. 하단에 노출되는 리스트들 선택하면 해당하는 상세페이지로 리디렉션
7. 채팅하기 버튼 클릭 시 채팅 페이지로 리디렉션

- 채팅 페이지
1. 상단 우측에 위치한 전화기 아이콘 클릭 시 FaceTime으로 연결됨 (mac으로 확인 가능)
2. 점 3개로 이루어진 아이콘을 클릭하면 메뉴가 노출 됨
3. 한번 더 점 3개로 이루어진 아이콘을 클릭하면 메뉴가 사라짐
4. 메시지 보내가 input 창에 text를 입력하고 enter 키 또는 화살표 아이콘 클릭하면 해당 text가 말풍선으로 노출

### 성능 검사



## JavaScript Project Scaffolding
*자바스크립트 프로젝트 환경 구성 스케폴딩*

> **Note**: 해당 문서는 자바스크립트 프로젝트에 필요한 기본적인 환경 구성을 위한 [스케폴딩](https://www.wisewiredbooks.com/term-dict/common/scaffolding.html) 자료입니다. 

---


패키지 설치 항목
- [live-server](https://www.npmjs.com/package/live-server)
- [json-server](https://www.npmjs.com/package/json-server)
- [prettier](https://www.npmjs.com/package/prettier)
- [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)
- [postcss-import](https://www.npmjs.com/package/postcss-import)
- [npm-run-all](https://www.npmjs.com/package/npm-run-all)


---

## live-server

```
로컬 환경을 실제 서버처럼 작동시켜
웹 개발을 도와주는 패키지로서
사용자가 직접 호스트,포트번호 를 바꿔서
클라이언트 서버를 구동시키고자 할때 사용됩니다.

```

---
## json-server

```
로컬 데이터 서버를 위한 패키지 모듈로서
DB와 API서버를 생성해주는 패키지 입니다.
백엔드 개발에서 실제 DB와 API Server가 구축될 때까지
프론트엔드 개발에 임시적으로 사용할 mock data를 생성하기 위해 사용됩니다.

```
---
## prettier

```
협업을 위해 formatter 기능을 활용해
코드의 통일성을 유지시켜주는 패키지 입니다.
ESLint가 코드의 퀄리티를 일관적으로 유지시켜준다면,
Prettier는 일관적인 코드 스타일을 유지할 수 있게 도와줍니다. 

```

---

---
## prettier-plugin-tailwindcss

```
tailwind가 가지고 있는 Automatic class sorting 기능을
prettier의 기능을 활용해 자동 포멧이 일어날 수 있도록 도와주는 플러그인 패키지 입니다.

```
[Automatic class sorting](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

---
## tailwindcss

```
utility-first를 지향하는 CSS의 프레임워크으로
미리 세팅된 유틸리티 클래스를 활용하여
HTML 코드 내에서 스타일링을 가능하게 하는 style 패키지 입니다.
tailwind가 제공하는 유틸리티 클래스들을 다양하게 조합하면
추가적인 CSS코드 작성 없이 스타일링이 가능합니다.

```
[Tailwind](https://tailwindcss.com/)

---
## postcss-import

```
자바스크립트 기반의 플러그인을 사용하여 css 기능을 자동화 시키는 도구로
postcss가 가지고 있는 플러그인 환경을 사용해 css를 사용할 수 있습니다.
css의 import 기능과 tailwind의 css 병합을 위해 사용됩니다.

```
[postcss](https://postcss.org/)



---

## START

> **Note**: 해당 프리셋은 node_modules를 내장하고 있지 않습니다.
> 다운받아 그대로 사용할 경우 `npm install` 을 하신 후 사용해 주세요.

<br/>

### 백엔드 서버 실행
```bash
npm run serve:backend
```
<br/>

### 프론트 서버 실행
```bash
npm run serve:frontend
```
<br/>

### tailwind 실행
```bash
npm run tailwind
```
<br/>

### 동시 실행
```bash
npm run start
```








**[⬆ back to top](#JavaScript-Project-Scaffolding)**















