console.log("All Screenshots");

// Save Screenshot
const allScreenshotsButton = document.querySelector(".allScreenshots");
const displayScreenshots = document.querySelector("#screenshot-container");

const allScreenshots = async (event) => {
    console.log("All Screenshots")

    try {
        const response = await fetch(`${BASE_URL}/blog`)
        console.log(response.status);  //200 (Should be between 200 and 299)

        const data = await response.json();
        console.log(data)

        data.forEach(element => {
            console.log(element["_id"])
            displayScreenshots.innerHTML += createScreenshotDiv(element)
        });

        //const screenshotUrl = data.screenshotUrl;
        //displayScreenshot.src = screenshotUrl;
        return data;
        //return screenshotUrl
    } catch (error) {
        console.log(error)
    }

}

const createScreenshotDiv = (screenshot) => {
    return `<div class="screenshot-container" id="screenshot-container">   
        <hr>  
        <h3 class="screenshot-heading">        
        </h3>
        <div class = "delete-container">
            <h3 class="screenshot-id">
                ${screenshot["_id"]}
            </h3>
            <button onclick="handleDeleteScreenshot('${screenshot["_id"]}')" class="button delete">Delete</button> 
        </div>
        <img class="screenshot-img" src='${screenshot.imageUrl}'>   
        <hr> 
    </div>`
}

// EVENTLISTENERS:
allScreenshotsButton.addEventListener("click", allScreenshots);