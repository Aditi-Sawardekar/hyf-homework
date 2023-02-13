const BASE_URL = `https://crudcrud.com/api/${API_KEY}`

// Save Screenshot
const saveScreenshotButton = document.querySelector(".saveScreenshot");

const saveScreenshot = async (event) => {
    event.preventDefault();
    
    const searchInput = document.querySelector("#url").value

    if (!searchInput) {
        alert("Please enter a url");
        return;
    }

    //const data = await getScreenshot();
    //console.log(data);

    const screenshotUrl = await getScreenshot();
    console.log(screenshotUrl);

    const body = { imageUrl: screenshotUrl }

    try {
        const response = await fetch(`${BASE_URL}/blog`, {
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
        console.log(savedData);
        console.log("Screenshot Saved")

    } catch (error) {
        console.log(error)
    }

}


// EVENTLISTENERS:
saveScreenshotButton.addEventListener("click", saveScreenshot);