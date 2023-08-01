import { getNode } from '../lib/index.js';

const cancelProfile = getNode('.cancelProfile');

function cancelProf() {
  console.log(1);
  window.location.href = '/views/profile.html';
}

cancelProfile.addEventListener('click', cancelProf);
