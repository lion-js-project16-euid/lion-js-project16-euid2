import {
  getNode,
  getNodes,
  toggleClass,
  attr,
  loadStorage,
  saveStorage,
  deleteStorage,
  addClass,
  removeClass,
} from '/lib/index.js';

const ul = getNode('.categoryList');
const listNodes = getNodes('.categoryList li');
const searchBox = getNode('.searchBox');
const submitCategory = getNode('.submitCategory');
let valueArray = [];

function handleCategoryClass(e) {
  const li = e.target.closest('li');
  const isChecked = e.target.closest('input').checked;
  const checkImg = e.target.closest('div').querySelector('span');
  const value = attr(e.target, 'id').slice(8);

  toggleClass(li, 'bg-gray-400');
  toggleClass(li, 'bg-primary');
  toggleClass(li, 'text-white');
  toggleClass(checkImg, 'bg-icon-plus');
  toggleClass(checkImg, 'bg-icon-checked');

  isChecked ? valueArray.push(value) : (valueArray = valueArray.filter(i => i !== value));
  const category = valueArray.join(', ');
  loadStorage(`category`) !== '' ? saveStorage(`category`, category) : deleteStorage(`category`);
}

function setCategoryChecked(node) {
  node.addEventListener('change', handleCategoryClass);
}

setCategoryChecked(ul);

/* -------------------------------------------------------------------------- */

function searchCategory(e) {
  const text = e.target.value;

  if (text === '') {
    listNodes.forEach(li => removeClass(li, 'hidden'));
  } else if (text) {
    listNodes.forEach(li => {
      let isIncludeText =
        li.children[0].children[0].innerText.includes(text) || li.children[0].children[1].innerText.includes(text);
      !isIncludeText ? addClass(li, 'hidden') : removeClass(li, 'hidden');
    });
  }
}

searchBox.addEventListener('input', searchCategory);

/* -------------------------------------------------------------------------- */

function submitAndGoStory(e) {
  e.preventDefault();
  window.location.href = '/views/story.html';
}

submitCategory.addEventListener('click', submitAndGoStory);
