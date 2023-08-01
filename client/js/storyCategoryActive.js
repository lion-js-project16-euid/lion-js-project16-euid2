const nav = document.querySelector('.nav');

function activeChange(li) {
  if (li) {
    const activeLi = document.querySelector('.is-active');
    if (activeLi) {
      activeLi.classList.remove('is-active');
    }
    li.classList.add('is-active');
  }
}

function handleClickEvent(event) {
  const clickA = event.target.closest('li');

  if (clickA) {
    activeChange(clickA);
  }
}

nav.addEventListener('click', handleClickEvent);
