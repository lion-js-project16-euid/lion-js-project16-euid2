import { getNode, attr, toggleClass } from '/lib/index.js';

const detailButton = getNode('.detail-button');
const plusButton = getNode('.plus-button');

let status = true;
function handleLikeButton() {
  if (status === true) {
    attr('.detail-like-button', 'src', '/assets/icon-heart-strignt-full.svg');
  } else {
    attr('.detail-like-button', 'src', '/assets/icon-heart-strignt.svg');
  }
  status = !status;
}

let buttonState = true;
function handleList() {
  toggleClass('.plus-list', 'hidden');
  buttonState = !buttonState;
}

detailButton.addEventListener('click', handleLikeButton);
plusButton.addEventListener('click', handleList);
