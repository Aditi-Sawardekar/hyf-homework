// Working further -> On Map and Local Storage
// Currently could get current location latitude and longitude and fetch data based on it

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function getGeo() {
    navigator.geolocation.getCurrentPosition(getCurrentLoc)
}

const getCurrentLoc= async (data) => {    
    let lat=data.coords.latitude;
    let lon=data.coords.longitude;
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${appid}`)
        console.log(response.status);  //200 (Should be between 200 and 299)
        console.log(response.ok); //true

        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.log(error)
    }
}

getGeo()

