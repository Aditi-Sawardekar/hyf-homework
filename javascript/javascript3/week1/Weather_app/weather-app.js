// Using: Async Await

//Select the city, click Todays weather to get weather data
const getData = document.querySelector("#search");

// Click Current Location Button, to get latitude and longitude
const currentLocationBtn = document.querySelector("#current-location")
console.log(currentLocationBtn)

// All display variables
const displayLocation = document.querySelector(".location");
const displayWeatherIcon = document.querySelector(".weather-image");
const displayWeatherDescription = document.querySelector(".weather-description");
const displayTemperature = document.querySelector(".temperature");
const displayMinimumTemperature = document.querySelector(".minimum-temperature");
const displayMaximumTemperature = document.querySelector(".maximum-temperature")
const displayFeelLike = document.querySelector(".feels-like");
const displayWindSpeed = document.querySelector(".wind");
const displayCloudy = document.querySelector(".cloudy");
const displaySunriseTime = document.querySelector(".sunrise");
const displaySunsetTime = document.querySelector(".sunset");
const displayLatitude = document.querySelector(".location-lat");
const sunriseSunetAnimation = document.querySelector(".display-sunrise-sunset");
const displayTodaysWeather = document.querySelector(".display-weather");

const todaysWeatherData = async () => {
    // Get the input value
    let location = document.querySelector("#city").value;

    // If location is blank, then default location = "Copenhagen"
    if (location !== ""){
        console.log ("True")
    }else{
        location = "Copenhagen"
    }

    try {
        const response = await fetch(`${BASE_URL}?q=${location}&units=metric&appid=${appid}`)
        console.log(response.status);  //200 (Should be between 200 and 299)
        console.log(response.ok); //true

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }

};

// To get Weather Data
const todaysWeather = async () => {
    const data = await todaysWeatherData();

    // Display Todays Weather Data
    displayTodaysWeather.style.visibility = "visible";

    // Display Sunrise Sunset Animation
    sunriseSunetAnimation.style.visibility = "visible";

    //The chosen city
    displayLocation.innerHTML = data.name;

    //Temperature
    displayTemperature.innerHTML = Math.round(data.main.temp) + "&degC";
    displayFeelLike.innerHTML = `Feels like ${Math.round(data.main.feels_like)}&degC`;

    //Icon for the weather type
    const weatherIconNumber = (data.weather[0].icon)
    displayWeatherIcon.src = `http://openweathermap.org/img/wn/${weatherIconNumber}@2x.png`;
    
    // Weather Description
    displayWeatherDescription.innerHTML = data.weather[0].description;
    displayWeatherDescription.style.textTransform = "capitalize";

    //Temperature
    displayTemperature.innerHTML = Math.round(data.main.temp) + "&degC";
    displayFeelLike.innerHTML = `Feels like ${Math.round(data.main.feels_like)}&degC`;
    displayMinimumTemperature.innerHTML = `Min Temperature: ${Math.round(data.main.temp_min)} &degC`
    displayMaximumTemperature.innerHTML = `Max Temperature: ${Math.round(data.main.temp_max)} &degC`

    //Wind speed
    displayWindSpeed.innerHTML = `Wind: ${((data.wind.speed) * 2.2369362921).toFixed(1)} mph`;
    // Convert m/s to mph -> 1 m/s = 2.2369362921 mi/h

    //How clowdy it is
    displayCloudy.innerHTML = `Cloudy: ${data.clouds["all"]} %`

    // Sunrise Time Calculation
    const sunriseInUnix = data.sys.sunrise;   
    const sunrise = new Date(sunriseInUnix * 1000);
    const sunriseTime = "Sunrise: " + sunrise.getHours() + ":" + sunrise.getMinutes();
    displaySunriseTime.innerHTML = sunriseTime;

    // Sunset Time Calculation
    const sunsetInUnix = data.sys.sunset;
    const sunset = new Date(sunsetInUnix * 1000);
    const sunsetTime = "Sunset: " + sunset.getHours() + ":" + sunset.getMinutes();
    displaySunsetTime.innerHTML = sunsetTime;
}

// Add eventListener to Todays Weather Button
getData.addEventListener("click", todaysWeather)
getData.addEventListener("click", function (e) {
    console.log(e.currentTarget.dataset.category)
})

currentLocationBtn.addEventListener("click", getGeo)

