import { getNode, tiger, renderDetail, attr } from '/lib/index.js';

const URL = 'http://localhost:3000/device/3';

const postDetail = getNode('.detail-wrapper');
const response = await tiger.get(URL);
const data = response.data;

async function renderDetailList() {
  response;
  renderDetail(postDetail, data);
}

let status = true;
function handleLikeButton(e) {
  const buttonImg = e.target.closest('button').querySelector('img');
  console.log(buttonImg);

  if (status === true) {
    attr(buttonImg, 'src', '/assets/icon-heart-strignt-full.svg');
  } else {
    attr(buttonImg, 'src', '/assets/icon-heart-strignt.svg');
  }

  status = !status;
  response;
}

renderDetailList();
postDetail.addEventListener('click', handleLikeButton);
