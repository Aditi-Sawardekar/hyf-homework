console.log("Hello World!");

//When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

const distance = (travelInformation.destinationDistance);
const speed = (travelInformation.speed)

// Use function expression
const calcTimeToDestination = function (distance, speed) {
    const time = (distance / speed);
    const hours = Math.trunc(time);
    const minutes = Math.round(time % hours * 60);

    return (`${hours} Hours and ${minutes} minutes`)
}

// Display time in console
const timeToDestination = calcTimeToDestination(distance, speed);
console.log(timeToDestination);

