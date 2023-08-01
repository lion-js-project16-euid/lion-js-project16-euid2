const keywordDivs = document.querySelectorAll('.keyword');
const searchForm = document.getElementById('searchForm');
const searchInput = searchForm.querySelector('input[name="searchQuery"]')
const postList = document.getElementById('postList');

keywordDivs.forEach(keywordDiv => {
  keywordDiv.addEventListener('click', (event) => {
    event.preventDefault();
    const searchText = event.target.textContent.trim();
    searchInput.value = searchText;
  });
});

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
});
