import {
  nowDay,
  getNode,
  endScroll,
  now24Time,
  insertLast,
  toggleClass,
  nowDayHyphen,
  clearContents,
} from '../lib/index.js';

const contents = getNode('.contents');
const inputMessage = getNode('.message-write');
const chatWrapper = getNode('.chat-wrapper');

// todo 확인 필요
function createMessage(today, time, text) {
  const template = /* html */ `
      <time datetime=${nowDayHyphen()} class="text-[10px] text-contentsSecondary block text-center">${nowDay()}</time>
      <div class="flex items-center justify-end mx-4 my-2">
        <span class="text-[10px] text-contentsSecondary pr-2">${now24Time()}</span>
        <span class="px-[14px] py-2 text-xs rounded-[20px] bg-bluelight-400 text-white">${text}</span>
      </div>
      `;

  return template;
}

const handleChat = e => {
  let target = e.target;
  let name = target.dataset.name;

  while (!name) {
    target = target.parentNode;
    console.log(target);

    if (target.nodeName === 'BODY') {
      target = null;
      return;
    }
  }

  if (name === 'etc') toggleClass('.plus-list', 'hidden');

  if (name === 'send') {
    e.preventDefault();

    let value = inputMessage.value;
    if (value === '') return;

    insertLast(chatWrapper, createMessage('2023-08-01', '13:00', value));

    endScroll(chatWrapper);
    clearContents(inputMessage);
  }
};

contents.addEventListener('click', handleChat);
