import { getNode, renderPost, tiger, toggleClass, attr } from '/lib/index.js';

const URL = 'http://localhost:3000/device';

const postDevice = getNode('.device-wrapper');
const button = getNode('.add-button');
const addList = getNode('.hidden');
const likeButton = getNode('.like-button');
const likeData = getNode('.like-data');
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
let count = Number(likeData.innerText);
function handleLike() {
  if (status === true) {
    attr('.like-icon', 'src', '/assets/icon-heart-full.svg');
    likeData.innerText = count + 1;
    console.log(likeData.innerText);
  } else {
    attr('.like-icon', 'src', '/assets/icon-heart.svg');
    likeData.innerText = count;
    console.log(likeData.innerText);
  }
  status = !status;
  response;
}

renderPostList();
button.addEventListener('click', handleAddDevice);
likeButton.addEventListener('click', handleLike);
