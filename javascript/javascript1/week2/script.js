console.log("Hello World!");

// Flight booking fullname function

function getFullName(firstName, lastName, useFormalName = false, gender) {
    const fullName = firstName + " " + lastName;

    if (useFormalName === true) {
        if (gender === "female") {
            return `Lady ${fullName}`;
        } else {
            return `Lord ${fullName}`;
        }
    } else {
        return fullName;
    }
}

const fullName1 = "Benjamin";
const fullName2 = "Hughes";
const printName = getFullName(fullName1, fullName2);
console.log(printName);

// Use a variable to get result from return.
const printFormalFullName = getFullName("Benjamin", "Hughes");
console.log(printFormalFullName);

/* Below commented code was used to check code under different circumstances
    getFullName ("Lilly", "Joseph")
    getFullName ("Benjamin", "Hughes")

    // When used usedFormalName argument 
    getFullName ("Lilly", "Joseph", true)
    getFullName ("Benjamin", "Hughes", true)
    getFullName ("Lilly", "Joseph", false)
    getFullName ("Benjamin", "Hughes", false)

    // When added gender as parameter, to address male as "Lord" and female as "Lady"
    getFullName ("Lilly", "Joseph", true, "female")
    getFullName ("Benjamin", "Hughes", true, "male")
    getFullName ("Lilly", "Joseph", false, "female")
    getFullName ("Benjamin", "Hughes", false, "male")

    // When empty string used for useFormalName
    getFullName ("Benjamin", "Hughes","" , "male") 
    getFullName ("Lilly", "Joseph", "", "female")
    */

// Event application

// Get todays Date
const todaysDate = new Date();
/*const todaysDate = new Date(2022, 9, 29) 
used for testing purpose to check the code*/

// Create a variable to specify after how many days the event will be held
const numberOfDaysToEvent = 10;

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const todaysDayIndex = todaysDate.getDay();
//const todaysDayIndex is the index to the array days

const printTodaysDate = todaysDate.toDateString();
console.log(`Today is ${printTodaysDate}`);

const printEventDay = getEventDay(numberOfDaysToEvent);
console.log(
    `Event is going to be held after ${numberOfDaysToEvent} days on ${printEventDay}`
);

function getEventDay(numberOfDaysToEvent) {
    if (todaysDayIndex + numberOfDaysToEvent === 6) {
        if (days.length - todaysDayIndex < numberOfDaysToEvent) {
            const eventDay = days[(todaysDayIndex + numberOfDaysToEvent) % 6];
            return eventDay;
        } else {
            const eventDay = days[todaysDate.getDay() + numberOfDaysToEvent];
            console.log(eventDay);
        }
    } else if (todaysDayIndex + numberOfDaysToEvent > 6) {
        const eventDay = days[((todaysDayIndex + numberOfDaysToEvent) % 6) - 1];
        return eventDay;
    } else {
        const eventDay = days[todaysDate.getDay() + numberOfDaysToEvent];
        return eventDay;
    }
}

// HELP ME CALCULATE EVENTDATE
const eventDate = todaysDate.setDate(todaysDate.getDate() + 50);
console.log(eventDate);

// Weather wear

const temperature = -4;
const goingToRainToday = false;
console.log(goingToRainToday === true);

const whatToWear = getWhatToWear(goingToRainToday, temperature);
console.log(whatToWear);

function getWhatToWear(goingToRainToday, temperature) {
    if ((goingToRainToday === true) && (temperature > 5)) {
        return (`Today's temperature is ${temperature}. Its going to rain today, so remember to carry rain jacket`)

    } else {
        if (temperature <= 0) {
            return (`Today's temperature is ${temperature}. Its freezing cold today, so wear thermals or a layer or 2 of full pants and t.Shirts.You should wear a winter jacket, winter boots, glooves, scarf and winter hat`)
        } else if ((temperature > 0) && (temperature <= 5)) {
            return (`Today's temperature is ${temperature}. Its very cold today, so wear full pants and t.Shirts. You should wear a winter jacket and winter hat`)
        } else if ((temperature > 5) && (temperature <= 10)) {
            return (`Today's temperature is ${temperature}. Its slightly cold today, so wear full pants and t.Shirts. You should wear a light summer wear jacket`)
        } else if ((temperature > 10) && (temperature <= 15)) {
            return (`Today's temperature is ${temperature}. Its slightly hot today, so wear light colored loose clothing. You may wear a light summer wear jacket`)
        } else {
            return (`Today's temperature is ${temperature}.Its very hot today, so wear light colored loose clothing. You may wear shorts`)
        }
    }
}
