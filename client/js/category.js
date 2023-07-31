import { getNode, toggleClass, attr, loadStorage, saveStorage, deleteStorage } from '/lib/index.js';

const ul = getNode('.categoryList');
let valueArray = [];

function setChecked(e) {
  const li = e.target.closest('li');
  const checkbox = e.target.closest('input');
  const checkImg = e.target.closest('div').querySelector('span');
  const isChecked = checkbox.checked;
  if (!li) return;

  const value = attr(e.target, 'id').slice(8);

  if (!isChecked) {
    toggleClass(li, 'bg-gray-400');
    toggleClass(li, 'bg-primary');
    toggleClass(li, 'text-white');
    toggleClass(checkImg, 'bg-icon-plus');
    toggleClass(checkImg, 'bg-icon-checked');
    valueArray = valueArray.filter(i => i !== value);
    console.log(valueArray);
  } else {
    toggleClass(li, 'bg-gray-400');
    toggleClass(li, 'bg-primary');
    toggleClass(li, 'text-white');
    toggleClass(checkImg, 'bg-icon-plus');
    toggleClass(checkImg, 'bg-icon-checked');
    valueArray.push(value);
    console.log(valueArray);
  }

  const category = valueArray.join(', ');
  loadStorage(`category`) !== '' ? saveStorage(`category`, category) : deleteStorage(`category`);
}

ul.addEventListener('change', setChecked);