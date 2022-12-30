const BASE_URL = "https://api.giphy.com/v1/gifs/search"

const displayGiphyContainer = document.querySelector(".giphy-display")
const sectionCenter = document.querySelector(".section-center");

// Select the button, when the button is clicked, get the input value.
const searchGifBtn = document.querySelector("#search-for-gif");
searchGifBtn.addEventListener("click", searchGiphy)
console.log(searchGifBtn)

// Fetch API
function searchGiphy() {

    // Search Input
    const searchInput = document.querySelector("#search-input").value
   
    // Number of Gifs
    const numberOfGifs = document.querySelector("#limit").value;
        
    fetch(`${BASE_URL}?api_key=${API_KEY}&q=${searchInput}&limit=${numberOfGifs}&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(dataOfGif => {
            const dataArray = dataOfGif.data;

            // Displayed in div, already created in HTML.
            const displayGiphy = document.querySelector("#searched-image");
            
            let giphyImage = dataArray.map(function (item) {
                console.log(item);
                // To acess each and every item
                return [
                    `<article class = "menu-item">
                        <img src=${item.images["480w_still"]["url"]} class = "photo" alt=${item.images["480w_still"].title}>                      
                    </article>`
                ];
            }); // End of displayMenu

            giphyImage = giphyImage.join("");
            sectionCenter.innerHTML = giphyImage;
        }) // End of fetch API
}
