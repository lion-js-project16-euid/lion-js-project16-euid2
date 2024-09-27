import { insertLast } from '/lib/index.js';

const today = new Date();
const years = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();

export function nowTime() {
  if (hours < 10) {
    return '0' + hours + ':' + minutes;
  } else {
    if (minutes < 10) {
      return hours + ':' + '0' + minutes;
    } else {
      return hours + ':' + minutes;
    }
  }
}

export function nowDay() {
  return years + '년 ' + (month + 1) + '월 ' + day + '일';
}

export function nowDayHyphen() {
  return years + '-' + (month + 1) + '-' + day;
}

export function now24Time() {
  if (hours < 12) {
    return '오전' + hours + ':' + minutes;
  } else {
    if (minutes < 10) {
      return '오후 ' + (hours - 12) + ':' + 0 + minutes;
    }
    return '오후 ' + (hours - 12) + ':' + minutes;
  }
}

function createPost(item) {
  const { id, href, name, price, location, upload, image, like } = item;
  const { img, alt } = image;

  const templete = /* html */ `
  <article class="h-[130px] relative border-b border-[#D3D3D3] border-solid data-[index]:${id}">
    <a href="${href}">
      <div class="flex flex-row-reverse p-3">
        <div class="flex flex-col grow px-6 py-3">
          <h2 class="text-sm">${name}</h2>
          <div class="flex flex-col-reverse">
            <div class="state flex">    
              <strong class="text-sm">${price}</strong>
            </div>
            <div class="flex items-center text-xs text-contents">
              <span>${location}</span>
              <span aria-hidden="true" class="p-1">&middot;</span>
              <span>${upload}</span>
            </div>
          </div>
        </div>
      <img src="${img}" alt="${alt}" class="w-[140px] h-[110px] rounded-lg" />
      </div>
    </a>
    <button type="button" class="like-button flex items-center absolute bottom-0 right-0 p-3 ">
      <img src="/assets/icon-heart.svg" alt="좋아요 버튼" class="data-[index]:${id}" />
      <span class="p-1 text-xs">${like}</span>
    </button>
  </article>
  `;

  return templete;
}

function createDetail(item) {
  const { name, category, upload, description, price, image, user, userProfile, temperature, location } = item;
  const { img, alt } = image;
  const templete = /* html */ `
  <img src="${img}" alt="${alt}" class="w-full" />
  <a href="#" class="flex justify-between m-[10px]">
    <div class="flex items-center">
      <img
        src="${userProfile}"
        ,
        alt="${user} 사용자 프로필 사진"
        class="w-12 h-12 rounded-[50px] m-[6px] mr-3"
      />
      <div class="flex flex-col">
        <span class="text-sm font-semibold" aria-label="닉네임 ${user}">${user}</span>
        <span class="text-xs" aria-label="위치 ${location}">${location}</span>
      </div>
    </div>
    <div class="flex flex-col-reverse justify-center">
      <span class="text-xs text-contentsSecondary">매너온도</span>
      <span class="text-secondary text-sm font-semibold">${temperature}</span>
    </div>
  </a>
</div>

<article class="m-4">
  <h2 class="text-lg font-semibold my-1">${name}</h2>
  <div class="text-xs text-contentsSecondary">
    <span aria-label="카테고리 ${category}">${category}</span>
    <span class="p-1">&middot;</span>
    <span aria-label="업로드 ${upload}">${upload}</span>
  </div>
  <p class="text-sm my-3"> ${description} </p>
  <div class="flex items-center relative my-9">
    <button type="button" class="detail-button">
      <img src="/assets/icon-heart-strignt.svg" alt="좋아요" class="detail-like-button" />
    </button>
    <div class="flex flex-col border-l border-contentsSecondary border-solid mx-3 px-3">
      <span class="text-sm font-semibold">${price}</span>
      <a href="#" class="text-secondary text-xs font-semibold">가격 제안하기</a>
    </div>
    <a
      href="/views/chat.html"
      class="px-[14px] py-2 rounded-lg bg-secondary text-white text-sm font-semibold absolute right-0"
      >채팅하기</a
    >
  </div>
</article>
`;

  return templete;
}

export function renderPost(target, data) {
  insertLast(target, createPost(data));
}

export function renderDetail(target, data) {
  insertLast(target, createDetail(data));
}
