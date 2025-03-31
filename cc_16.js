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

//Task 4

function displayProducts(products) {
    const container = document.getElementById('product-container');

    if (!container) {
        console.error("Element with ID 'product-container' not found.");
        return;
    }

    container.innerHTML = ''; 

    products.slice(0, 5).forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const name = document.createElement('h3');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        productDiv.appendChild(name);
        productDiv.appendChild(price);
        productDiv.appendChild(image);

        container.appendChild(productDiv);
    });
}

//Task 5

function handleError(error) {
    console.error("An error occurred:", error.message);
}