import { getNode, renderPost, tiger, toggleClass } from '../lib/index.js';

const URL = 'http://localhost:3000/device';

const postDevice = getNode('.device-wrapper');
const button = getNode('.add-button');
const addList = getNode('.hidden');

async function renderPostList() {
  const response = await tiger.get(URL);
  // console.log(response.data);
  const data = response.data;
  data.forEach(item => {
    renderPost(postDevice, item);
    // console.log(item);
  });
}

renderPostList();

function handleAddDevice() {
  toggleClass(addList, 'hidden');
}

button.addEventListener('click', handleAddDevice);
