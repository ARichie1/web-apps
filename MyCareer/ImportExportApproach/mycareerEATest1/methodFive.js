import{toggleStyle, sendGenIndexes, arrayRemove, camalize} from "./functions.js"
import{traits} from "./traits.js"
import { dictionary } from "./dictionary.js";

// STORE THE GENERRATED ARRAY OF RANDOM NUMBERS(INDEXES)
const genIndex = sendGenIndexes();

// STRORE A NEW ARRAY OF TRAITS.
const trait = new traits();

// GET AND HOLD THE WORDS MEANING FROM THE DICTIONARY
const meanings = dictionary();

// GET THE NECCESSARY DOM ELEMENTS.
let start = document.querySelector('.start');

let traitContainer = document.querySelectorAll('.traitContainer');

let traitBox = document.querySelectorAll('.traitBox');
let traitWord = document.querySelectorAll('.traitWord');
let traitBox1 = document.querySelector('#traitBox1 .traitWord');
let traitBox2 = document.querySelector('#traitBox2 .traitWord');
let traitBox3 = document.querySelector('#traitBox3 .traitWord');
let traitBox4 = document.querySelector('#traitBox4 .traitWord');

let nextTraits = document.querySelector('.nextTraits');
let submitTraits = document.querySelector('.submitTraits');
let prevTraits = document.querySelector('.prevTraits');


// HOLDS THE SELECTED WORD/WORDS TEMPORARILY
let selectChecker = [];
// STORES THE SELECTED WORD/WORDS AND MAKES THEM THE CHOSEN WORD/WORDS
let chosenWords = [];
// HELPS CYCLE BACK AND FRONT THE genIndex ARRAY
// TO LOAD NEW WORDS OR GET THE PREVIOUS WORDS.
let personaityInc = 0;

// ON MODULE LOAD ADD THE FIRST WORDS TO THE traitBoxes
traitBox1.innerHTML = trait.G[genIndex[personaityInc]];
traitBox2.innerHTML = trait.O[genIndex[personaityInc]];
traitBox3.innerHTML = trait.L[genIndex[personaityInc]];
traitBox4.innerHTML = trait.D[genIndex[personaityInc]];

// ON MODULE LOAD HIDE THE PREVIOUS BUTTON
prevTraits.style.opacity = "0";
prevTraits.style.zIndex = "-1";

// ===========================================================//

// PERFORM ACTION EACH traitBox START======================//
traitBox.forEach(tb => {
// SET ALL THE traitBoxes state TO unselected.
    tb.setAttribute('state', 'unselected');
// IF A traitBox IS CLICKED START
    tb.addEventListener('click', () => {
// GET THE WORD IN EACH traitBox 
        let traitBoxWord = tb.querySelector('.traitWord').textContent;
        if (tb.getAttribute('state') == 'unselected'){
            tb.setAttribute('state', 'selected');
// GET THE BACKGROUND COLOR TO SIGNIFY SELECTION
        tb.style.background = 'var(--theme-color)';
// IF THE WORD HAS NOT BEEN SELECTED BEFORE
            if (selectChecker.includes(traitBoxWord) == false) {
// ADD THE SELECTED traiBox WORD TEMPORARILY
// TO THE selectChecker ARRAY. 
                selectChecker.push(traitBoxWord);
            }
        }
// END IF (for selected state).

// ELSE IF THE STATE IS ALREADY SELECTED 
        else if (tb.getAttribute('state') == 'selected') {
// CHANGE THE STATE TO UNSELECTED(state and background)
            tb.setAttribute('state', 'unselected');
            tb.style.background = 'transparent';
// REMOVE THE traitBox WORD FROM
// THE selectChecker AND chosenWords ARRAY.
            selectChecker = arrayRemove(selectChecker, traitBoxWord);
            chosenWords = arrayRemove(chosenWords, traitBoxWord);
        }
// END IF (for unselected state).
    });
// END CLICK EVENT.
});
// PERFORM ACTION EACH traitBox END=====================//

// =========================================================//

// IF THE NEXT BUTTON IS CLICKED START=================//
nextTraits.addEventListener('click', () => {
// INCREMENT THE personaityInc TO ADD NEW WORDS 
    personaityInc++;
// SET ALL THE traitBoxes state TO unselected.
    traitBox.forEach(tb => {
        tb.setAttribute('state', 'unselected');
    });
// CHECK IF ANY OF THE NEXT WORDS AS BEEN CHOSEN BEFORE
// AND EXIST IN THE chosenWords ARRAY.
// SET TIMOUT TO WAIT FOR THE NEXT WORDS TO LOAD.
setTimeout(() => {
    traitBox.forEach(tb => {
        tb.setAttribute('state', 'unselected');
        let traitBoxWord = tb.querySelector('.traitWord').textContent;
// CHECK IF A traitBox word IS IN THE CHOSEN WORD ARRAY
// (i.e has been chosen before).        
        if (chosenWords.includes(traitBoxWord)) {
// CHANGE THE BACKGROUND COLOR TO SIGNIFY SELECTION
            tb.style.background = 'var(--theme-color)';
        }
        else{
            tb.style.background = 'transparent';
        }
// END ELSE
    });
// END triatBox FOR EACH        
}, 10);
// END SET TIMEOUT.

// ADD NEW WORDS TO THE traitBox
    traitBox1.innerHTML = trait.G[genIndex[personaityInc]];
    traitBox2.innerHTML = trait.O[genIndex[personaityInc]];
    traitBox3.innerHTML = trait.L[genIndex[personaityInc]];
    traitBox4.innerHTML = trait.D[genIndex[personaityInc]];
// IF THE LAST SET OF WORDS ARE DISPLAY(i.e at the ending)
    if (personaityInc == 29) {
// HIDE THE NEXT BUTTON
        nextTraits.style.opacity = "0";
        nextTraits.style.zIndex = "-1";
// DISPLAY THE SUBMIY BUTTON
        submitTraits.style.opacity = "1";
        submitTraits.style.zIndex = "1";

        console.log(chosenWords);
    }
// END IF

// CHECK IF THE SELECTED WORD/WORDS HAS BEEN CHOSEN 
// BEFORE ADDING IT TO THE chosenWord ARRAY.
    for (let i = 0; i < selectChecker.length; i++) {
        if (chosenWords.includes(selectChecker[i]) == false) {
            chosenWords.push(selectChecker[i]);
        }    
    }
// DISPLAY THE PREVIOUS BUTTON
    prevTraits.style.opacity = "1";
    prevTraits.style.zIndex = "1";
});
// IF THE NEXT BUTTON IS CLICKED END========================//

// ============================================================//

// IF THE PREVIOUS BUTTON IS CLICKED START=================//
prevTraits.addEventListener('click', () => {
// DECREMENT THE personaityInc TO GET THE PREVIOUS WORDS 
    personaityInc--;
// CHECK IF ANY OF THE PREVOIUS WORDS AS BEEN CHOSEN BEFORE
// AND EXIT IN THE chosenWords ARRAY.
// SET TIMOUT TO WAIT FOR THE PREVIOUS WORDS TO LOAD.
    setTimeout(() => {
// FOR EACH traitBox
    traitBox.forEach(tb => {
// GET THE traitBox Word
            tb.style.background = 'transparent';
            let traitBoxWord = tb.querySelector('.traitWord').textContent;
// CHECK IF A traitBox word IS IN THE CHOSEN WORD ARRAY
// (i.e has been chosen before).
            if (chosenWords.includes(traitBoxWord)) {
// CHANGE THE STATE AND BACKGROUND COLOR TO SIGNIFY SELECTION
                tb.setAttribute('state', 'selected');
                tb.style.background = 'var(--theme-color)';
// ELSE IF THE WORD HAS NOT BEEN CHOSEN
            }else if (chosenWords.includes(traitBoxWord)){
// CHANGE THE BACKGROUND COLOR TO SIGNIFY UNSELECTION
                tb.style.background = 'transparent';
            }
// END ELSE IF
        });
// END triatBox FOR EACH        
    }, 10);
// END SET TIMEOUT.

// LOAD THE PREVIOUS WORDS.
    traitBox1.innerHTML = trait.G[genIndex[personaityInc]];
    traitBox2.innerHTML = trait.O[genIndex[personaityInc]];
    traitBox3.innerHTML = trait.L[genIndex[personaityInc]];
    traitBox4.innerHTML = trait.D[genIndex[personaityInc]];
// IF WORDS ARE DISPLAY(i.e user is at the beginning)
    if (personaityInc == 0) {
// HIDE THE PREVIOUS BUTTON
        prevTraits.style.opacity = "0";
        prevTraits.style.zIndex = "-1";
    }
// END IF

// DISPLAY THE NECT BUTTON
    nextTraits.style.opacity = "1";
    nextTraits.style.zIndex = "1";
// HIDE THE SUBMIT BUTTON
    submitTraits.style.opacity = "0";
    submitTraits.style.zIndex = "-1";
});
// IF THE PREVIOUS BUTTON IS CLICKED END=================//


// FETCH THE MEANING OF THE WORDS FROM THE DICTIONARY START=====//
function fecthMeanings() {
    traitContainer.forEach(tc => {
        let traitWord = tc.querySelector('.traitWord').textContent;
        let traitMeaning = tc.querySelector('.traitMeaning');
// (triatWordKey) WILL BE USED TO GET 
// THE triatWord MEANING FROM THE DICTIONARY
        let traitWordKey;
// CHECK IF THE traitWord has a space 
// i.e if it is a sentence or multiple words.
       if (traitWord.includes(" ")) {
// IF IT IS TURN IT TO CAMEL CASE 
            traitWordKey = camalize(traitWord);
        }
        else{
            traitWordKey = traitWord;
        }

// INSERT THE MEANING TO THE MEANING DISPLAY DIV
        traitMeaning.innerHTML = "<h4 class='word'>" + traitWord 
                                    + "</h4><br><h5 class='meaning'>" 
                                    + meanings[traitWordKey] + "</h5>";
    });
}
// FETCH THE MEANING OF THE WORDS FROM THE DICTIONARY END=====//

// HIDE AND SHOW THE MEANING IF THE MEANING BUTTON IS CLICKED START=====//
traitContainer.forEach(tc => {
    let traitMeaning = tc.querySelector('.traitMeaning');
    let traitMeaningBtn = tc.querySelector('.traitMeaningBtn');

    traitMeaningBtn.addEventListener('click', () => {
        toggleStyle(traitMeaning, 'opacity', '1', '0');
        toggleStyle(traitMeaning, 'zIndex', '1', '-1');  

// RE-SCAN FOR NEW WORDS AND FECTH THE MEANINGS INSTANTLY.
        function displayMeaning() {
            if (traitMeaning.style.opacity == "1") {
                fecthMeanings();
            }else{
                return;
            }
        }
// DISPLAY THE MEANING IF HIDDEN
        displayMeaning();
    });
});
// HIDE AND SHOW THE MEANING IF THE MEANING BUTTON IS CLICKED END=====//


// submitTraits.addEventListener('click', () => {
//     for (let i = 0; i < array.length; i++) {
//         for (let i = 0; i < chosenWords.length; i++) {
//             const element = array[i];
            
//         }
//     }
// });