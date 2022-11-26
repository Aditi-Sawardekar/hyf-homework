console.log("start working");

const moviesData = getMovies();
// Linked movies file to get movies data.

//1. Create an array of movies containing the movies with a short title (you define what short means)
const movieTitles = moviesData.map((element) => {
    return (element.title);
});

const shortMovieTitles = movieTitles.filter((element) => {
    return ((element.length) < 5)
})
console.log(shortMovieTitles);

//2. Create an array of movie titles with long movie titles
const longMovieTitles = movieTitles.filter((element) => {
    return ((element.length) > 15)
})
console.log(longMovieTitles)

//3. Count the number of movies made between 1980-1989 (including both the years)
const moviesInYear = moviesData
    .map((element) => {
        let count = 0;
        if ((element.year >= "1980") && (element.year <= "1989")) {
            console.log(count++)
        }
        return count
    })
    .reduce((currentTotal, element) => {
        return element + currentTotal
    }, 0)
console.log(moviesInYear)

/* 4. Create a new array that has an extra key called tag. 
The tag is based on the rating: 
Good (>= 7), 
Average (>= 4 and < 7), 
Bad (< 4)
*/

const ratingTag = moviesData.map((element) => {
    if ((element.rating) >= 7) {
        element.tag = "Good";
        return element
    } else if (((element.rating) >= 4) && (element.rating) < 7) {
        element.tag = "Average";
        return element
    } else {
        element.tag = "Bad";
        return element
    }
});

console.log(ratingTag);

/* 5. Using chaining, 
first filter the movies array to only contain the movies rated higher than 6. 
Now map the movies array to only the rating of the movies.
*/
// Using chaining method - Just for practice
const highRatedMovies = moviesData
    // filter movies to only contain the movies rated higher than 6.   
    .filter(element => ((element.rating) > 6))

    //map the movies array to only the rating of the movies.
    .map(element => (element.rating))
console.log(highRatedMovies);

/*
Count the total number of movies containing any of following keywords: 
Surfer, Alien or Benjamin. 
So if there were 
3 movies that contained Surfer, 
1 with Alien and 
2 with Benjamin, 
you would return 6. 
Can you make sure the search is case insensitive?
*/
const word1 = new RegExp("/surfer/", "i")
//movieTitles in an array of movie titles

const moviesWithKeywords = movieTitles
    .filter((element) => {
        if (element.match(/surfer/i)) {
            return (element)
        } else if (element.match(/alien/i)) {
            return (element)
        } else if (element.match(/benjamin/i)) {
            return (element)
        }
    })

console.log(moviesWithKeywords)

/* 7. Create an array of movies where a word in the title is duplicated. 
Fx "Star Wars: The Clone Wars" the word Wars is duplicated. 
Here are some madeup examples of movies with duplicated words in the title: 
"The three men and the pistol", 
"Chase three - The final chase"
*/

// WORKING ON THIS ONE...

/*
8. Calculate the average rating of all the movies using reduce. 
Optional
*/

const averageRating = (moviesData
    .reduce((currentTotal, element) => {
        return (element.rating + currentTotal)
    }, 0) / (moviesData.length)).toFixed(2)

console.log(averageRating)

/* 
9. Count the total number of Good, Average and Bad movies using reduce. 
A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} 
Optional
*/

function countMovieTags (){

const goodMoviesInYear = moviesData
    .map((element) => {
        let count = 0;
        if (element.tag === "Good")  {
            count++
        }
        return count
    })
    .reduce((currentTotal, element) => {
        return element + currentTotal
    }, 0)

const averageMoviesInYear = moviesData
    .map((element) => {
        let count = 0;
        if (element.tag === "Average")  {
            count++
        }
        return count
    })
    .reduce((currentTotal, element) => {
        return element + currentTotal
    }, 0)

const badMoviesInYear = moviesData
    .map((element) => {
        let count = 0;
        if (element.tag === "Bad")  {
            count++
        }
        return count
    })
    .reduce((currentTotal, element) => {
        return element + currentTotal
    }, 0)


return `{goodMovies: ${goodMoviesInYear}, averageMovies: ${averageMoviesInYear}, badMovies: ${badMoviesInYear}}` 
}

const totalOfMoviesTags = countMovieTags()
console.log (totalOfMoviesTags)