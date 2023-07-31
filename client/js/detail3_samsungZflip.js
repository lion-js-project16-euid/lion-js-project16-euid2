import { getNode, tiger, renderDetail, attr } from '/lib/index.js';

const URL = 'http://localhost:3000/device/3';

const postDetail = getNode('.detail-wrapper');
const response = await tiger.get(URL);
const data = response.data;

const detailButton = getNode('.detail-button');

async function renderDetailList() {
  response;
  renderDetail(postDetail, data);
}

let status = true;
function handleLikeButton() {
  if (status === true) {
    attr('.detail-like-button', 'src', '/assets/icon-heart-strignt-full.svg');
  } else {
    attr('.detail-like-button', 'src', '/assets/icon-heart-strignt.svg');
  }
  status = !status;
}

renderDetailList();
detailButton.addEventListener('click', handleLikeButton);
