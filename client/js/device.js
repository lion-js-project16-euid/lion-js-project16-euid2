import { getNode, getNodes, renderPost, tiger, toggleClass, attr } from '/lib/index.js';

const URL = 'http://localhost:3000/device';

const postDevice = getNode('.device-wrapper');
const button = getNode('.add-button');
const addList = getNode('.hidden');

const response = await tiger.get(URL);

async function renderPostList() {
  response;
  const data = response.data;
  data.forEach(item => {
    renderPost(postDevice, item);
  });
}

let buttonState = true;
function handleAddDevice() {
  toggleClass(addList, 'hidden');
  if (buttonState === true) {
    attr('.add-button-img', 'src', '/assets/icon-plus-button-full.svg');
  } else {
    attr('.add-button-img', 'src', '/assets/icon-plus-button.svg');
  }
  buttonState = !buttonState;
}

let status = true;
let count;
function handleLike(e) {
  const buttonImg = e.target.closest('button').querySelector('img');
  const buttonNum = e.target.closest('button').querySelector('span');
  count = Number(buttonNum.innerText);

  console.log(e.target);

  if (status === true) {
    attr(buttonImg, 'src', '/assets/icon-heart-full.svg');
    buttonNum.innerText = ++count;
  } else {
    attr(buttonImg, 'src', '/assets/icon-heart.svg');
    buttonNum.innerText = --count;
  }

  status = !status;
  response;
}

renderPostList();
button.addEventListener('click', handleAddDevice);
postDevice.addEventListener('click', handleLike);