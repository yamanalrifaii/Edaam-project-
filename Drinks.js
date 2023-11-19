function filterProducts(size) {
    var products = document.getElementsByClassName('product');
    
    for (var i = 0; i < products.length; i++) {
        var productSize = products[i].getAttribute('data-size');
        if (size == 'all' || productSize == size) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}