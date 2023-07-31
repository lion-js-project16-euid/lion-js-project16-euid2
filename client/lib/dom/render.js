import { insertLast } from './insert.js';

export function nowTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  if (hours < 10) {
    return '0' + hours + ':' + minutes;
  } else {
    if (minutes < 10) {
      return hours + ':' + '0' + minutes;
    }
    return hours + ':' + minutes;
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
            <strong class="text-sm">${price}</strong>
            <div class="flex items-center text-[10px] text-contents">
              <span>${location}</span>
              <span aria-hidden="true" class="p-1">&middot;</span>
              <span>${upload}</span>
            </div>
          </div>
        </div>
      <img src="${img}" alt="${alt}" class="w-[140px] h-[110px] rounded-lg" />
      </div>
    </a>
    <button type="button" class="like-button flex items-center absolute bottom-0 right-0 p-3">
      <img src="../assets/icon-heart.svg" alt="좋아요 버튼" class="like-icon" /><span class="like-data p-1 text-xs">${like}</span>
    </button>
  </article>
  `;

  return templete;
}

export function renderPost(target, data) {
  insertLast(target, createPost(data));
}
