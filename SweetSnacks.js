function searchProducts() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var products = document.getElementsByClassName('product');

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var title = product.getElementsByClassName('product-title')[0].textContent.toLowerCase();

        if (title.indexOf(searchTerm) !== -1) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
}

