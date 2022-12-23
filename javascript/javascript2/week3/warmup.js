console.log("Hello - Warmup");

// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(function(){
    console.log ("Called");
},2500)

/*
2. Create a function that takes 2 parameters: delay and stringToLog. 
    Calling this function should log out the stringToLog after delay seconds. 
    Call the function you have created with some different arguments.
*/

const logMessage = function (delay, stringToLog) {
    setTimeout(function () {
        console.log(stringToLog);
    }, delay * 1000)
}

logMessage(5, "This string logged after 5 secs");
logMessage(3, "This string logged after 3 secs")

/*
3. Create a button in html. 
    When clicking this button, 
    use the function you created in the previous task to log out the text: 
    Called after 5 seconds 5 seconds after the button is clicked.
*/

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", (e) => logMessage(5, "Called after 5 seconds"));

/*
4. Create two functions and assign them to two different variables. 
    One function logs out Earth, the other function logs out Saturn. 
    Now create a new third function that has one parameter: planetLogFunction. 
    The only thing the third function should do is call the provided parameter function. 
    Try call the third function once with the Earth function and once with the Saturn function.
*/

const planetEarth = function () {
    console.log("Earth")
}

const planetSaturn = function () {
    console.log("Saturn")
}

//planetLogFunction is a callback function
const logPlanet = function (planetLogFunction) {
    planetLogFunction()
}

logPlanet(planetEarth);
logPlanet(planetSaturn);

/*
5. Create a button with the text called "Log location". 
    When this button is clicked 
    the location (latitude, longitude) of the user should be logged out 
    using this browser api
*/

//Select the button "Log Location" and add eventListener
const display = document.querySelector(".display")

const logLocation = document.querySelector("#logLocation");
logLocation.addEventListener("click", userLocation)

function userLocation() {
    console.log("Log my location");
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        display.innerHTML = `Latitude: ${latitude.toFixed(2)} <br> Longitude: ${longitude.toFixed(2)}`
    })
}

// 6. Optional Now show that location on a map using fx the Google maps api

/*
7. Create a function called runAfterDelay. 
    It has two parameters: delay and callback. 
    When called the function should wait delay seconds and 
    then call the provided callback function. 
    Try and call this function with different delays and different callback functions
*/
function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000)
}

function goodMornning() {
    console.log("Good Morning")
}

function goodDay() {
    console.log("Good Day")
}

function goodNight() {
    console.log("Good Night")
}

runAfterDelay(2, goodMornning);
runAfterDelay(3, goodDay);
runAfterDelay(5, goodNight);

/*
8. Check if we have double clicked on the page. 
    A double click is defined by two clicks within 0.5 seconds. 
    If a double click has been detected, log out the text: "double click!"
*/

function dblClicked() {
    setTimeout(function dblClicked() {
        console.log("double click!")
    }, 500)
}

const page = document.querySelector("body");
page.addEventListener("dblclick", dblClicked)

/*
9. Create a function called jokeCreator that has three parameters:
    shouldTellFunnyJoke - boolean,
    logFunnyJoke - function and
    logBadJoke - function.
    If you set shouldTellFunnyJoke to true
    it should call the logFunnyJoke function that should log out a funny joke.
    And vice versa.
*/

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke,) {
    function logFunnyJoke() {
        console.log("a funny joke")
    }

    function logBadJoke() {
        console.log("a bad joke")
    }

    console.log(shouldTellFunnyJoke === true)
    if (shouldTellFunnyJoke === true) {
        logFunnyJoke();
    } else {
        logBadJoke()
    }
}

jokeCreator(true)
