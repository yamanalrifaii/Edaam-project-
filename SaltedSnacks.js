function filterByPrice() {
    var minPrice = document.getElementById('min-price').value;
    var maxPrice = document.getElementById('max-price').value;
    var products = document.getElementsByClassName('product');

    for (var i = 0; i < products.length; i++) {
        var price = parseFloat(products[i].getElementsByClassName('product-price')[0].textContent);
        if (price >= minPrice && price <= maxPrice) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}
