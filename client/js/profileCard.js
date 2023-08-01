import { getNode } from '../lib/index.js';

const cancelProfile = getNode('.cancelProfile');

function cancelProf() {
  console.log(1);
  window.location.href = 'http://localhost:5500/views/profile.html';
}

cancelProfile.addEventListener('click', cancelProf);
