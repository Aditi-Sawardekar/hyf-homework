/*
Find a cool api
Find a cool api and explain how it works and 
what kind of json data the api responds with. 
Is it an array, an object, a string. 
How is the data structure. 
Is it fx an array of objects or how is it structured.

There are a few examples of apis here: 
https://github.com/toddmotto/public-apis
*/

//Examples
// Fetch API -> Working Code

const displayDisneyData = document.querySelector(".display-disney-data");
const disneyFilm = document.querySelector("#films")
const disneyImage = document.querySelector("#disney-image")

const fetchData = () => {
    fetch("https://api.disneyapi.dev/characters")        
        .then(response => response.json())
        .then(disneyData => {
            console.log(disneyData);
            console.log(typeof disneyData);

            /* Api Explanation:
            Base url: https://api.disneyapi.dev
 
            Available endpoints:
            {
                filterCharacter: 'https://api.disneyapi.dev/character?queryParams',
                getAllCharacters: 'https://api.disneyapi.dev/characters',
                getOneCharacter: 'https://api.disneyapi.dev/characters/:id'
            }
            
            The endpoint I have used is:
            Get the list of all characters using the /characters endpoint.
            https://api.disneyapi.dev/characters
            
            Fetch Method to get the data:
            The fetch() method in JavaScript is used to request data from a server. 
            The request can be of any type of API that returns the data in JSON or XML. 
            The fetch() method has two parameter and returns a promise.
                - first parameter is the URL to request data, 
                - second parameter is optional 
                    – optional parameters: method, headers etc.
                - if second paramter is not used, then by default it is a GET Request.
 
            Getting a response is two step process    
                - Step1: fetch() returns a Promise
                - Step2: Additional method is used to get response.
 
            Fetch is Promise based:
                - We can use Async Await or
                - We can use .then .catch      

             
            // disneyData ->
            /*
            The disneyapi responds a json, which is object.
            This object has keys such as count, data, nextPage, totalPages.
            Data -> The data that we actually can work further is in the data key.
            */

            console.log(disneyData.data);
            /* disneyData.data 
            This is an array of objects
            We can access the Objects using index number
            */

            console.log(disneyData.data[16])

            /* This object has keys: 
            films, shortfilms, tvShows, videoGames, parkAttractions etc
            The value of all these keys is an array
            */

            // To access the films array
            console.log(disneyData.data[16].films)
            // ['Alice in Wonderland (2010 film)', 'Alice Through the Looking Glass']

            console.log(disneyData.data[16].url);
            disneyImage.src = disneyData.data[16].imageUrl;

            // To access videoGames
            console.log(disneyData.data[16].videoGames)
            // ['Alice in Wonderland (2010 video game)', 'Disney Universe', 'Disney Crossy Road']

            console.log(typeof disneyData.data[16]._id)
            //console.log(data.people[0].name)

        }).catch(err => {
            console.error(err)
        }) // End of fetch API 
}

fetchData()

// Using Method 2: Async Await
const BASE_URL = "https://api.disneyapi.dev";
const endpoint = "characters";
const id = 308;

const getData = async () => {
    try {        
        const response = await fetch(`${BASE_URL}/${endpoint}/${id}`)
        console.log(response.status);  //200 (Should be between 200 and 299)
        console.log(response.ok); //true
        console.log(response);
        const data = await response.json();
        console.log(data);
        // {_id: 308, films: Array(2), shortFilms: Array(2), tvShows: Array(2), videoGames: Array(4), …}
        return data;
    } catch (error) {
        console.log(error)
    }
};

// We need to call the function
getData();

const disneyData = async () =>{    
    const data = await getData();    
    console.log (data.films)
    disneyFilm.innerHTML = data.films;
    disneyImage.src = data["imageUrl"];
}

disneyData()
