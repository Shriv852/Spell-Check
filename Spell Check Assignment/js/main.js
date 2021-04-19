// Spell Check Start Code

// Global Variables
let dictionary;
let aliceWords;

// Load Data Files into Global Variables
loadDictionary();
loadAliceText();

//HTML Variables
let wordBtnEl = document.getElementById("submit");
let aliceBtnEl = document.getElementById("submit1");
let wordInputEl = document.getElementById("word");
let wordSelectEl = document.getElementById("search-select");
let aliceSelectEl = document.getElementById("search-select1");
let wordResultEl = document.getElementById("result1");
let aliceResultEl = document.getElementById("result2");

//Add Event Listeners 
wordBtnEl.addEventListener("click" , wordCheck);
aliceBtnEl.addEventListener("click", aliceCheck);

function wordCheck() {
    let searchType = wordSelectEl.value;
    let word = wordInputEl.value;
    let index;

    if (searchType == "linear") {
        index = linearSearch(dictionary, word.toLowerCase());
    } else {
        index = binarySearch(dictionary, word.toLowerCase());
    }

    if (index == -1) {
        wordResultEl.innerHTML = word + " was not found.";
    } else {
        wordResultEl.innerHTML = word + " was found at " + index;
    }
}

function aliceCheck() {
    let searchAliceType = aliceSelectEl.value;
    let index;
    let words = 0;
    
    if (searchAliceType == "linear1") {
        for (let i = 0; i < aliceWords.length; i++) {
            let index = linearSearch(dictionary, aliceWords[i].toLowerCase());
            if (index == -1) {
                console.log(aliceWords[i] + " is not in the dictionary.");
                words++;
                aliceResultEl.innerHTML = words + " words NOT found in the dictionary.";
            }
        }
    } else {
        for (let i = 0; i < aliceWords.length; i++) {
            let index = binarySearch(dictionary, aliceWords[i].toLowerCase());
            if (index == -1) {
                console.log(aliceWords[i] + " is not in the dictionary.");
                words++;
                aliceResultEl.innerHTML = words + " words NOT found in the dictionary.";
            }
        }
    }
}

function linearSearch(anArray, item) {
    for (i = 0; i < anArray.length; i++) {
        if (anArray[i] == item) {
            return i;
        } 
    } return -1;
}

function binarySearch(anArray, item) {
    let lowerIndex = 0;
    let upperIndex = anArray.length - 1;

    while (lowerIndex <= upperIndex) {
        let middleIndex = Math.floor((lowerIndex + upperIndex)/2);
        if (item == anArray[middleIndex]) {
            return middleIndex;
        } else if (item < anArray[middleIndex]) {
            upperIndex = middleIndex - 1;
        } else {
            lowerIndex = middleIndex + 1;
        }
    } return -1;
}
