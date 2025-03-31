function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            products.forEach(product => console.log(product.fields.name));
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

fetchProductsThen();

