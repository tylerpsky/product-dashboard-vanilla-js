//Task 2

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

//Task 3

async function fetchProductsAsync() {
    try {
        const response = await fetch('https://api.example.com/products'); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

function displayProducts(products) {
    console.log("Displaying products:", products);
}

function handleError(error) {
    console.error("Error fetching products:", error);
}

