console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
    for (let i = 0; i <= products.length - 1; i++) {
        //Select ul
        const myProductList = document.querySelector(".product-list")

        //Create li
        const listItem = document.createElement("li");

        //Add text to li    
        list.innerHTML = `<span class="product-name">${(products[i]["name"])}</span> <br>
            Price: ${(products[i]["price"])} <br>
            Rating: ${(products[i]["rating"])}`;

        //Append li to ul
        myProductList.appendChild(list);
    }
}

renderProducts(products);
