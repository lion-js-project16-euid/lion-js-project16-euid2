const postDivs = document.querySelectorAll('.post');

function setImage(imageElements, product) {
  imageElements.forEach(image => {
    image.src = product.src;
    image.alt = product.alt;
  });
}

function setTitleText(titleElements, product) {
  titleElements.forEach(pTitle => {
    pTitle.textContent = product.title;
  });
}

function setSchoolText(schoolElements, product) {
  schoolElements.forEach(spanSchool => {
    spanSchool.textContent = product.school;
  });
}

function setWriterText(writerElements, product) {
  writerElements.forEach(spanWriter => {
    spanWriter.textContent = product.writer;
  });
}

async function fetchProductData() {
  try {
    const response = await fetch('http://localhost:3000/storyData'); // Replace 'data.json' with the actual file path if it's different
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
}

async function getProductIds() {
  const products = await fetchProductData();
  // const productIds = products.map(product => product.id);
  return products;
}

async function loadPostData() {
  const productsIdValue = await getProductIds();
  productsIdValue.forEach(product => {
    postDivs.forEach(postDiv => {
      const dataIndex = parseInt(postDiv.getAttribute('data-index'));
      if (dataIndex === product.id) {
        const imageElements = postDiv.querySelectorAll('.postImage');
        const titleElements = postDiv.querySelectorAll('.postTitle');
        const schoolElements = postDiv.querySelectorAll('.postSchool');
        const writerElements = postDiv.querySelectorAll('.postWriter');
        console.log(product);
        setImage(imageElements, product);
        setTitleText(titleElements, product);
        setSchoolText(schoolElements, product);
        setWriterText(writerElements, product);
      }
    });
  });
}
loadPostData();

getProductIds()
  .then(dataIndex => console.log(dataIndex))
  .catch(error => console.error('Error getting product IDs:', error));
