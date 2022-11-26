console.log("Script loaded");
const displayItems = document.querySelector(".product-list")
const products = getAvailableProducts();

window.addEventListener("DOMContentLoaded", function () {
    //Load /Display the items - Call the function
    // You need to pass the parameter to make everything work.
    renderProducts(products);

    function renderProducts(products) {
        /* OFFER OF THE DAY
        Random basis a product is selected as offer of the day.
        50% discount on the price of the product
        */       
        
        let displayProduct = products.map((element, index) => {
            const randomNumber = Math.floor(Math.random() * products.length);
            const discountedPrice = (products[randomNumber].price) * 50 / 100
            
            const displayOffer = document.querySelector(".todays-offer");
            if (index !== randomNumber) {
                /*
                I wanted to use
                displayOffer.visibility = "hidden";
                but it was not working
                */

                return `                
                <li class="product-list-item"> <span class="product-name">${(element["name"])}</span> <br>
                        Price: ${(element["price"])} <br>
                        Rating: ${(element["rating"])}
                </li> `
            } else {
                return `     
                    <li class="product-list-item"> <span class="product-name">${(element["name"])}</span> <br>
                        Price: ${(element["price"])} <br>
                        Rating: ${(element["rating"])}

                        <div class="todays-offer">
                            <img src="images/discount.jpeg" class = "discountImage" alt="50% off">
                            <p> Today's Price:<br> ${discountedPrice} </p>
                        </div>     
                    </li> `
            }  
        })
        
        displayProduct = displayProduct.join("");
        displayItems.innerHTML = displayProduct;
    } //End of function renderProducts

    //Select search and Add eventListener
    const searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", searchItems);

    const maxPriceInput = document.querySelector("#max");
    maxPriceInput.addEventListener("input", searchItems);

    function searchItems() {
        const searchValue = document.querySelector("#search").value.toLowerCase()
        
        const searchedProduct = products.filter((element) => {
            return (element.name.toLowerCase()).includes(searchValue)
        }) //End of searched products
        
        const maxPriceValue = document.querySelector("#max").value;
        
        const maxPrice = products.filter((element) => {
            return ((element.price) < maxPriceValue)
        })

        if (searchValue !== "") {
            renderProducts(searchedProduct);
        } else if (maxPriceValue !== "") {
            renderProducts(maxPrice);
        } else {
            renderProducts(products);
        }

    } //End of function searchItems
   
}); // End of window addEventListener DOMContentLoaded


