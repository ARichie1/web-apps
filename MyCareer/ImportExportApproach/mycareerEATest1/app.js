
//Style Toggler
function toggleStyle(el, prop, style1, style2) {
	el.style[prop] = el.style[prop] === style1 ? style2 : style1;
}

let trait = [
    G = ['patient', 'teases', 'modest', 'passive',
         'harmonious', 'good listener','conforming', 'compassionate', 
         'lack initiative', 'complacent', 'contentious', 'accommodating',
          'lack confidence', 'flexible', 'corporative', 'pliable', 
          'unassertive', 'agrecable', 'tactful', 'sensitive', 
          'fit in', 'indecisive', 'persistent', 'tolerant', 
          'critical', 'supportive','consistent', 'understanding',
           'cautions', 'dependable'],

     O = ['spontaneous', 'unorganized', 'forgetful', 'judgemental',
               'impulsive', 'outgoing', 'talkative', 'excitable',
                'instinctive','versatile', 'generalist', 'humorous', 
                'deecisive', 'efficient', 'proud', 'weakwill', 
                'convincing', 'people oriented', 'energetic', 'passionate', 
                'erratic', 'procrastinate', 'friendly', 'rebellious', 
                'activist', 'unconventional', 'easily distured', 'inspiring',
                 'warm', 'over tasking'],

    L = ['impatient', 'restless', 'logical', 'expensive',
            'defend ideas', 'controlling', 'touchy', 'like change',
            'thick skinned', 'direct', 'critical', 'objective', 
            'bold', 'result oriented', 'determined', 'strong willed',
            'assertive', 'confrontational', 'quick minded', 'self centered',
            'take control', 'domineering', 'impulsive', 'visionary',
            'active', 'competitive', 'focused', 'confident',
            'logical', 'respond quickly'],

    D = ['structure', 'scheduled', 'fact oriented', 'tough',
            'perfectionist', 'questioning', 'responsible', 'promote change',
            'through', 'analysis syndronic', 'rigid', 'contentious',
            'creative', 'precise', 'diplomatic', 'firm',
            'respond quickly', 'picky', 'cool hearted', 'insensitive to others',
            'systematic', 'decisive', 'cool', 'combative',
            'critical', 'detailed', 'accurate', 'tough minded',
            'prepared/plan ahead', 'like stabilty'] 
];

let start = document.querySelector('.start');

let traitLi = document.querySelectorAll('.trait');
let traitWord = document.querySelectorAll('.traitWord');
let prevTraits = document.querySelector('.prevTraits');
let nextTraits = document.querySelector('.nextTraits');
let submitTraits = document.querySelector('.submitTraits');

let personaityInc = 0;
let traitInc = 0
let traitLiWord;
let selectChecker = '';
let chosenWords = [];

function wordAdder() {
    traitWord.forEach(tw => {
        tw.innerHTML = trait[personaityInc][traitInc];
// GET THE WORDS IN EACH TRAIT TYPE
        // traitLiWord = tw.innerHTML;
// FIRST GET THE WORD IT HOLDS
        personaityInc++
        if (personaityInc > 3) {
            personaityInc = 0;
        }
    }); 
}

// start.addEventListener('click', () => {
//     wordAdder();
// });

wordAdder();

traitLi.forEach(tl => {
    tl.addEventListener('click', () => {
        let traitBoxWord = tl.querySelector('.traitWord').textContent;
        boxId = tl.id;
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

nextTraits.addEventListener('click', () => {
    traitLi.forEach(tl => {
        tl.style.background = 'transparent';
    });
    chosenWords.push(selectChecker);
    console.log(chosenWords);

    traitInc++
    wordAdder();
    if (traitInc == trait[0].length - 1) {
        nextTraits.style.opacity = "0";
        nextTraits.style.zIndex = "-1";

        submitTraits.style.opacity = "1";
        submitTraits.style.zIndex = "1";
    }
});