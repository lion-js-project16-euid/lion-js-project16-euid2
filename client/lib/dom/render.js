import { insertLast } from './insert.js';

function createPost(item) {
  const { id, name, price, location, upload, image } = item;
  const { img, alt } = image;

  const templete = /* html */ `
  <article class="h-[130px] relative border-b border-[#D3D3D3] border-solid data-[index]:${id}">
            <div class="flex flex-row-reverse p-3">
              <div class="flex flex-col grow px-6 py-3">
                <h2 class="text-sm">${name}</h2>
                <div class="flex flex-col-reverse">
                  <strong class="text-sm">${price}</strong>
                  <div class="flex items-center text-[10px] text-contents">
                    <span>${location}</span>
                    <span class="p-1">&middot;</span>
                    <span>${upload}</span>
                  </div>
                </div>
              </div>
              <img src="${img}" alt="${alt}" class="w-[140px] h-[110px] rounded-lg" />
            </div>
            <button type="button" class="flex items-center absolute bottom-0 right-0 p-3">
              <img src="../assets/heart.svg" alt="좋아요 버튼" /><span class="p-1 text-xs">1</span>
            </button>
          </article>
  `;

  return templete;
}

export function renderPost(target, data) {
  insertLast(target, createPost(data));
}
