//Spirit animal name generator

const yourSpiritAnimalObject = {
    "The Lion": "Natural-born leader, courageous, powerful ",
    "The Cheetah":"Quick thinking, flexible, quick-witted",    
    "The Horse": "Adventurous, independent, friendly ",
    "The Rabbit":"Sensitive, creative, clever",
    "The Elephant":"Strong, loyal, proud",
    "The Camel": "Patient, committed, focused",
    "The Panda": "Strong, loyal, proud",
    "The Dog": "Loyal, brave, protective",
    "The Deer": "Graceful, elegant, compassionate",
    "The Cat": "Secretive, observant, curious"        
}

const spiritAnimal = Object.keys(yourSpiritAnimalObject)

//Select the button
const submitBtn = document.querySelector("#submit");

//Add eventListener
submitBtn.addEventListener("click", displaySpiritAnimal);

//Select the New Spirit button
const newSpiritBtn = document.querySelector("#new");
newSpiritBtn.addEventListener("click", displaySpiritAnimal)

function displaySpiritAnimal(event) {
    event.preventDefault(); //To prevent the default behaviour
    const firstName = document.getElementById("name").value;
    if ((firstName === "")||(typeof firstName !=="string")) {
        alert("Error! Please enter the name")
    } else {
        const randomNumber = [Math.floor(Math.random() * spiritAnimal.length)];

        const output = document.querySelector("#display-name");
        output.innerHTML =
        (`${firstName} - ${(spiritAnimal[randomNumber])}`);

        const displayQualities = document.querySelector("#display-qualities");
        displayQualities.innerHTML = (`You are ${(yourSpiritAnimalObject[spiritAnimal[randomNumber]])}`)
    
    }
};

