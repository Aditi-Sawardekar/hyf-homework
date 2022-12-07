console.log("Hello World!");

//NOnoN0nOYes (Note taking app)

//Create a variable called notes and assign it to an empty array. 
const notes = [];

// SAVE A NOTE
function saveNote(content, id) {
  if ((typeof content === 'string') && (typeof id === "number")) {
    let newNote = new Object();
    newNote.content = content
    newNote.id = id
    notes.push(newNote)
  } else {
    console.log("Please enter in correct format")
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Pay Bills", 3);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// GET A NOTE

function getNote(id) {
  for (i = 0; i < notes.length; i++) {
    if (id === i) {
      console.log(notes[id - 1])
    } else if ((id === null) || (typeof id !== "number")) {
      console.log("Error! Id can be only a number")
    }
  } //End of for Loop  
}

const firstNote = getNote(1);
const secondNote = getNote(2);
const myNote = ("2");

// LOGOUT NOTES

function logOutNotesFormatted() {
  notes.forEach((element) =>
    console.log(`The note with id: ${element.id}, has the following note text: ${element.content}`)
  )
}

const allNotes = logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

// UNIQUE FEATURE

/* When the activity is done, it will strike through the note*/
function checkDone(id) {
  for (i = 0; i < notes.length; i++) {
    if (id === i) {
      const done = ((notes[id - 1].content));
      console.log(done.strike());
      //select the element
      const display = document.querySelector(".displayNote");
      // Display in HTML
      display.innerHTML = (done.strike())
    } else if ((id === null) || (typeof id !== "number")) {
      console.log("Error! Id can be only a number")
    }
  } //End of for Loop  
}

checkDone(2);



