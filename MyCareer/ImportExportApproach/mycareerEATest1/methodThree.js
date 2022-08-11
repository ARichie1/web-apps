import{traits} from "./traits.js"

const trait = new traits();

//=====RANDOM INDEXES GENARATION START=====//
// LET (genIndex) HOLD THE ARRAY OF RANDOM NUMBERS(index)
let genIndex;
    
// generateRandomNumber(min,max) WILL RETURN A RANDOM NUMBER
    function generateRandomNumber(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
// uniqueRangeGenerator(rength,min,max) WILL RETURN A RANGE
// OF UNIQUE NUMBERS, EACH BETWEEN "MIN AND MAX"
//WITH RANGE LENGTH(rength) EQUAL TO THE CHOSEEN ARRAY LENGTH.
    function uniqueRangeGenerator(rength,min,max) {
        const range = []
        while (range.length < (rength)) {
            var randomNumber = generateRandomNumber(min, max)
            if (range.indexOf(randomNumber) === -1) {
                    if (range.includes(randomNumber) == false) {
                            range.push(randomNumber); 
                    }
            }
        }
        return range
    }
// GENERATE THE INDEXES AND STORE THEM IN THE genIndex ARRAY.
        genIndex = uniqueRangeGenerator(trait.G.length,0,trait.G.length - 1);
//=====RANDOM INDEXES GENERATION END=====//

let traitBox1 = document.querySelector('#traitBox1 .traitWord');
let traitBox2 = document.querySelector('#traitBox2 .traitWord');
let traitBox3 = document.querySelector('#traitBox3 .traitWord');
let traitBox4 = document.querySelector('#traitBox4 .traitWord');

let start = document.querySelector('.start');
let traitLi = document.querySelectorAll('.trait');
let traitWord = document.querySelectorAll('.traitWord');

let nextTraits = document.querySelector('.nextTraits');
let submitTraits = document.querySelector('.submitTraits');
let prevTraits = document.querySelector('.prevTraits');

// nextTraits.style.opacity = "0";
// nextTraits.style.zIndex = "-1";

prevTraits.style.opacity = "0";
prevTraits.style.zIndex = "-1";



let selectChecker = '';
let chosenWords = [];
let personaityInc = 0;

traitLi.forEach(tl => {
    tl.addEventListener('click', () => {
        let traitBoxWord = tl.querySelector('.traitWord').textContent;
        tl.style.background = 'var(--theme-color)';
        selectChecker = traitBoxWord;
        console.log(selectChecker);
        traitLi.forEach(te => {
            if (te.id != tl.id) {
                te.style.background = 'transparent';
            }
        });
    });
});

traitBox1.innerHTML = trait.G[genIndex[personaityInc]];
traitBox2.innerHTML = trait.O[genIndex[personaityInc]];
traitBox3.innerHTML = trait.L[genIndex[personaityInc]];
traitBox4.innerHTML = trait.D[genIndex[personaityInc]];

nextTraits.addEventListener('click', () => {
    personaityInc++;
    traitLi.forEach(tl => {
        tl.style.background = 'transparent';
    });
    traitBox1.innerHTML = trait.G[genIndex[personaityInc]];
    traitBox2.innerHTML = trait.O[genIndex[personaityInc]];
    traitBox3.innerHTML = trait.L[genIndex[personaityInc]];
    traitBox4.innerHTML = trait.D[genIndex[personaityInc]];
    if (personaityInc == 29) {
        nextTraits.style.opacity = "0";
        nextTraits.style.zIndex = "-1";
        submitTraits.style.opacity = "1";
        submitTraits.style.zIndex = "1";
    }
    if (chosenWords.includes(selectChecker) == false) {
        chosenWords.push(selectChecker);
    }
    
    console.log(chosenWords);
    prevTraits.style.opacity = "1";
    prevTraits.style.zIndex = "1";
});

prevTraits.addEventListener('click', () => {
    personaityInc--;
    setTimeout(() => {
        traitLi.forEach(tb => {
            let traitBoxWord = tb.querySelector('.traitWord').textContent;
            if (traitBoxWord == chosenWords[chosenWords.length - 1]) {
                console.log(traitBoxWord);
                tb.style.background = 'var(--theme-color)';
                chosenWords.pop(); 
                console.log(chosenWords);
            }else if (traitBoxWord != chosenWords[chosenWords.length - 1]){
                tb.style.background = 'transparent';
                console.log(chosenWords);
            }
        });        
    }, 10);

    traitBox1.innerHTML = trait.G[genIndex[personaityInc]];
    traitBox2.innerHTML = trait.O[genIndex[personaityInc]];
    traitBox3.innerHTML = trait.L[genIndex[personaityInc]];
    traitBox4.innerHTML = trait.D[genIndex[personaityInc]];
    if (personaityInc == 0) {
        prevTraits.style.opacity = "0";
        prevTraits.style.zIndex = "-1";
    }
    nextTraits.style.opacity = "1";
    nextTraits.style.zIndex = "1";
    submitTraits.style.opacity = "0";
    submitTraits.style.zIndex = "-1";
});
