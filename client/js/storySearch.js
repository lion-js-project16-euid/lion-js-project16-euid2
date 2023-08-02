document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  const searchInput = searchForm.querySelector('input[name="searchQuery"]');
  const postList = document.getElementById('postList');

  searchForm.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData(searchForm);
    const searchQuery = formData.get('searchQuery');

    searchInput.value = '';

    try {
      const response = await fetch('http://localhost:3000/searchData');
      const posts = await response.json();

      const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));

      displayPosts(filteredPosts);
    } catch (error) {
      console.error('Error fetching product data:', error);
      return [];
    }
  });
});

function displayPosts(posts) {
  postList.innerHTML = '';
  if (posts.length === 0) {
    postList.innerHTML = '<p>검색 결과가 없습니다.</p>';
    return;
  }

  const postItems = posts.map(
    post =>
    `
      <article class="h-[130px] relative border-b border-[#D3D3D3] border-solid data-[index]:10">
        <a href=${post.url}>
          <div class="flex flex-row-reverse p-3">
            <div class="flex flex-col grow px-6 py-3">
              <h2 class="text-sm">${post.title}</h2>
              <div class="flex flex-col-reverse">
                <div class="state flex">    
                  <strong class="text-sm">${post.price}</strong>
                </div>
                <div class="flex items-center text-[10px] text-contents">
                  <span>${post.location}</span>
                  <span aria-hidden="true" class="p-1">&middot;</span>
                  <span>${post.upload}</span>
                </div>
              </div>
            </div>
              <img src=${post.imgSrc} alt=${post.alt} class="w-[140px] h-[110px] rounded-lg" />
          </div>
        </a>
        <button type="button" class="like-button flex items-center absolute bottom-0 right-0 p-3">
          <img src="/assets/icon-heart.svg" alt="좋아요 버튼" class="like-icon" /><span class="like-data p-1 text-xs">${post.like}</span>
        </button>
      </article>
    `
  );
  postList.innerHTML = postItems.join('');
}