function filterProducts(size) {
    // Get all product elements
    var products = document.getElementsByClassName('product');
    
    // Loop through all product items
    for (var i = 0; i < products.length; i++) {
        // Get the size of the current product item
        var productSize = products[i].getAttribute('data-size');

        // Check if the product item should be displayed
        if (size == 'all' || productSize == size) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}