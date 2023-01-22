console.log("Screenshot API");

// STEP 1: FETCH DATA FROM API
//Fetch Data from API

// Select the button, when the button is clicked, get the input value.
const searchButton = document.querySelector("#generate-screenshot");

// Display Screenshot
const displayScreenshot = document.querySelector("#image");

// Save Screenshot
const saveScreenshotButton = document.querySelector(".saveScreenshot");

const getScreenshot = async (event) => {
    // Search Input
    const searchInput = document.querySelector("#url").value

    if (!searchInput) {
        alert("Please enter a url");
        return;
    }

    const HOST_URL = "https://website-screenshot6.p.rapidapi.com/screenshot"
    const XRapidAPIKey = "f797f72385msh65df0fcdf98a7dep1ff9b3jsn9efc4dfb6fac";
    const XRapidAPIHost = "website-screenshot6.p.rapidapi.com";
    const url = searchInput;     //"https://rapidapi.com/marketplace" //"https://www.hackyourfuture.dk/" //"https://rapidapi.com/marketplace";
    const width = 1920;
    const height = 1080;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f797f72385msh65df0fcdf98a7dep1ff9b3jsn9efc4dfb6fac',
            'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`${HOST_URL}?url=${url}&width=${width}&height=${height}&fullscreen=true`, options)
        console.log(response.status);  //200 (Should be between 200 and 299)

        const data = await response.json();
        console.log(data)

        const screenshotUrl = data.screenshotUrl;
        displayScreenshot.src = screenshotUrl;
        return data;

    } catch (error) {
        console.log(error)
    }

}

const saveScreenshot = async (event) => {
    event.preventDefault();
    console.log("Screenshot Saved")

    const searchInput = document.querySelector("#url").value

    if (!searchInput) {
        alert("Please enter a url");
        return;
    }

    const data = await getScreenshot();
    console.log(data);

    const screenshotUrl = data.screenshotUrl;
    console.log(screenshotUrl);

    const body = { imageUrl: screenshotUrl }

    try {
        const response = await fetch(`https://crudcrud.com/api/c915ea260e2e45b3875ee6c1da488d41/blog`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        console.log(response.status);  //200 (Should be between 200 and 299)
        if (response.ok) {
            console.log("Successful")
        } else {
            console.log("There is some problem")
        }

        const savedData = await response.json();
        console.log(savedData)

    } catch (error) {
        console.log(error)
    }

}

// EVENTLISTENERS:
searchButton.addEventListener("click", getScreenshot);
saveScreenshotButton.addEventListener("click", saveScreenshot);