  const searchInput = document.querySelector('.product_input');
  const searchBtn = document.querySelector('.product_search_btn');
  const products = document.querySelectorAll('.product_item');

  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    
    products.forEach(product => {
      const productName = product.querySelector('.product_name').textContent.toLowerCase();
      
      if (productName.includes(searchTerm)) {
        product.parentElement.style.display = 'block';
      } else {
        product.parentElement.style.display = 'none';
      }
    });
  }

  searchBtn.addEventListener('click', filterProducts);
  searchInput.addEventListener('keyup', filterProducts);