# 멋쟁이 사자처럼 FE 6기 Javascript 프로젝트 - 김민성조
===================

프로젝트 기간 : 2023년 7월 28일 ~ 2023년 8월 2일

배포 주소 :


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
  - 휴대폰 번호 입력시 랜덤한 6자리 난수를 생성
  - 해당 인증번호 입력시 Upique ID 숫자를 부여 후 localStorage에 저장
  - 해당 유저의 Unique ID를 확인 후 로그인
  - 응답받은 Unique ID는 localStorage에 저장
  - 다음 번에 로그인 시 Unique ID가 존재한다면 루트 경로로 리디렉션
  - 어떤 경우든 Unique ID가 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리디렉션
  - 로그아웃은 클라인트 단에서 localStorafe에 저장된 Unique ID를 삭제하는 방식으로 구현
4. 인증번호 유효성 검사
  - 휴대폰 번호: localStorage에 저장된 key 값으로 사용
  - 인증번호 : 입력받은 고유한 ID를 value 값으로 가짐
  - 휴대폰 번호와 인증번호 모두 입력, 조건을 만족해야 제출 버튼이 활성화
5. 기기 거래 화면 구성
  - 데이터 스키마를 통해 데이터 설계 후 기기 거래 화면에 해당 데이터들 불러와 노출
  - 거래 항목 선택시 디테일 페이지로 들어가 이미지, 유저정보, 본문 등을 불러와 노출
6. 검색창 기능 구현
  - 검색 기능을 구현해 거래 항목의 text와 일치하는 항목들을 리랜더링


### Enter-Euid 설명

Enter-Euid 구현한 기능

- 로그인
1. 

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















