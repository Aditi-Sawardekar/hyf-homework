// https://rapidapi.com/apishub/api/website-screenshot6
console.log("Screenshot API");

// STEP 1: FETCH DATA FROM API
//Fetch Data from API

// Select the button, when the button is clicked, get the input value.
const searchButton = document.querySelector("#generate-screenshot");

// Display Screenshot
const displayScreenshot = document.querySelector("#image");

const getScreenshot = async (event) => {
    // Search Input
    const searchInput = document.querySelector("#url").value

    if (!searchInput) {
        alert("Please enter a url");
        return;
    } else{
        const match = "http"
        const regex = new RegExp(match, 'gi');        
        if ((regex.test(searchInput)) === false){
            alert("Please enter a valid url")
        }        
    }

    const XRapidAPIHost = "website-screenshot6.p.rapidapi.com";
    const HOST_URL = `https://${XRapidAPIHost}/screenshot`
    
    // "https://rapidapi.com/marketplace";
    // "https://www.hackyourfuture.dk/" ;
    // "https://rapidapi.com/marketplace" ;
    
    const url = searchInput;       
    const width = 1024;         //720;//320;//1024; //1920;
    const height = 768;     //576;//240;//768; //1080;
    const fullscreen = false

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': XRapidAPIKey,
            'X-RapidAPI-Host': XRapidAPIHost
        }
    };

    try {
        const response = await fetch(`${HOST_URL}?url=${url}&width=${width}&height=${height}&fullscreen=${fullscreen}`, options)
        console.log(response.status);  //200 (Should be between 200 and 299)

        const data = await response.json();
        //console.log(data)

        const screenshotUrl = data.screenshotUrl;
        displayScreenshot.src = screenshotUrl;
        return screenshotUrl;

    } catch (error) {
        console.log(error)
    }

}

// EVENTLISTENERS:
searchButton.addEventListener("click", getScreenshot);