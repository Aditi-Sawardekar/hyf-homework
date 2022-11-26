//Problem Solving Cardio

// 1.1. Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const findShortestWord = shortestDanishWord(danishWords);

function shortestDanishWord(danishWords) {
    let shortestWord = danishWords[0]
    const shortestDanishWord = danishWords.filter(element => {   
        if(element.length<shortestWord.length){
            return element
        }  
    })
    return shortestDanishWord
};    
     
    console.log (findShortestWord)

// 1.2. Find and count the Danish letters
//Find the individual number and the total number of Danish letters in a string.

const danishString = "Jeg har en blå bil";
const numberOfLetters = countDanishLetters(danishString)

const danishString2 = "Blå grød med røde bær";
const numberOfLetters2 = countDanishLetters(danishString2)

/*
function countDanishLetters(string) {
    const counts = {Å: null, Æ: null, Ø: null};
    let total = 0;

    for (const key in counts) {
        counts[key] = (string.match(new RegExp(key, "gi")) || []).length;
        total += counts[key];
    }
    counts.total = total;
    return counts;
}
*/

function countDanishLetters(string) {
    let countÅ
    let countÆ
    let countØ

    if (string.includes("æ")) {
        countÆ = string.match(/æ/gi || []).length;
    } else {
        countÆ = 0
    }

    if (string.includes("ø")) {
        countØ = string.match(/ø/gi || []).length;
    } else {
        countØ = 0
    }

    if (string.includes("å")) {
        countÅ = string.match(/å/gi || []).length;
    } else {
        countÅ = 0
    }

    return (`total: ${countÆ + countØ + countÅ} , æ: ${countÆ}, ø: ${countØ}, å: ${countÅ}`)

}

console.log(numberOfLetters);
// returns {total: 1 , æ: 0, ø: 0, å: 1}

console.log(numberOfLetters2);
// returns {total: 4, æ: 1, ø: 2, å: 1}




