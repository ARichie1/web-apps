import{toggleStyle, toggleContent, camalize} from "./functions.js"
import{careers} from "./traits.js"

// GET THE CARRERS THE PERSONALITIES.
const careerArray = careers();

let personalities = [ 
    ["compassionate", "indecisive", "corporative", 
    "cautions", "harmonious", "patient", "tactful",
    "persistent", "sensitive", "conforming", 
    "flexible", "accommodating", "contentious", 
    "agrecable", "lack confidence", "teases", 
    "consistent", "unassertive", "stubborn", 
    "complacent", "modest", "tolerant", 
    ],
    [
        "excitable", "decisive", "procrastinate",
        "warm", "outgoing", "spontaneous", "energetic",
        "friendly", "passionate", "weak will"
    ],
    [
        "likes change", "domineering", "determined",
        "logical", "controlling", "defend ideas", 
        "quick minded", "impulsive", "touchy",
        "take control", "result oriented", 
        "strong willed", "confrontational",
        "competitive", "restless", 
        "respond quickly", "active"
    ],
    [
        "promote change", "decisive", "diplomatic", 
        "prepared/plan ahead", "questioning", 
        "cool", "systematic", "contentious", "detailed",
        "accurate", "respond quickly", "like stabilty", 
        "rigid", "analysis syndronic", "combative",
        "tough minded", "tough", "through",
        "competitive", "restless", 
        "respond quickly", "active"
    ]
];

let personalityType = [
    "Accomodating Harmonious",
    "Engaging Spontaneous",
    "Directive Objective",
    "Methodical Objective"
];

// GET THE RESULTS DIVS
let resultStats = document.querySelector('.resultStats');
let personalityStatsBox = document.querySelectorAll('.personalityStats');
let pBox0 = document.querySelector('.sOne');
let pBox1 = document.querySelector('.sTwo');
let pBox2 = document.querySelector('.sThree');
let pBox3 = document.querySelector('.sFour');

console.log(personalities[0]);
console.log(personalities[1]);
console.log(personalities[2]);
console.log(personalities[3]);

// STORE THE LENGTH OF EACH personalities ARRAY
// subArray(each personality).
let pLengthArray = [];
for (let i = 0; i < personalities.length; i++) {
    let pLength = personalities[i].length;
    pLengthArray.push(pLength);
}
console.log(pLengthArray);

// RE-ARRANGE THE (pLengthArray) FROM HIGHEST TO LOWEST NUMBER
// THIS WILL HELP TO IDENTIFY DOMINANCE IN EACH PERSONALITY.
let personalitiesList = pLengthArray.sort((a, b) => b - a);
console.log(personalitiesList);

// LET (pNames) HOLD THE PERSONALITY TYPES 
// FROM HIGHEST TO LOWEST DOMINANCE.
let pNames = ["", "", "", ""];

// ARRANGE THE (pNames) ARRAY 
// FROM HIGHEST TO LOWEST DOMINANCE.
for (let i = 0; i < personalities.length; i++) {
// GET THE INDEX OF EACH PERSONALITY
    let pIndex = personalities.indexOf(personalities[i]);

// IF THE PERSONALITY HAS THE HIGHEST LENGTH(MOST DOMINANT)
// MAKE IT THE FIRST ELEMENT IN THE (pNames) ARRAY.
    if (personalities[i].length == personalitiesList[0]) {
// POSITION LOGIC {IF THERE ARE OTHER PERSONALITY WITH THE SAME LENGTH
// SET THEM AS THE NEXT ELEMENTS OF THE (pNames) ARRAY}
        if (pNames.includes(personalityType[pIndex]) == false) {
            if (pNames[0] == "") {
                pNames[0] = personalityType[pIndex];   
            }
            else if (pNames[1] == "") {
                pNames[1] = personalityType[pIndex];   
            }
            else if (pNames[2] == "") {
                pNames[2] = personalityType[pIndex];   
            }
            else if (pNames[3] == "") {
                pNames[3] = personalityType[pIndex];   
            }
        }
    }
// IF THE PERSONALITY HAS THE 2ND HIGHEST LENGTH(2ND DOMINANT)
// MAKE IT THE 2ND ELEMENT IN THE (pNames) ARRAY.
    if (personalities[i].length == personalitiesList[1]) {
// POSITION LOGIC
        if (pNames.includes(personalityType[pIndex]) == false) {
            if (pNames[1] == "") {
                pNames[1] = personalityType[pIndex];   
            }
            else if (pNames[2] == "") {
                pNames[2] = personalityType[pIndex];   
            }
            else if (pNames[3] == "") {
                pNames[3] = personalityType[pIndex];   
            }
        }
    } 
// IF THE PERSONALITY HAS THE 3RD HIGHEST LENGTH(3RD DOMINANT)
// MAKE IT THE 3RD ELEMENT IN THE (pNames) ARRAY.
    if (personalities[i].length == personalitiesList[2]) {
// POSITION LOGIC
        if (pNames.includes(personalityType[pIndex]) == false) {
            if (pNames[2] == "") {
                pNames[2] = personalityType[pIndex];   
            }
            else if (pNames[3] == "") {
                pNames[3] = personalityType[pIndex];   
            }
        }
    } 
// IF THE PERSONALITY HAS THE 4TH HIGHEST LENGTH(4TH DOMINANT)
// MAKE IT THE 4TH ELEMENT IN THE (pNames) ARRAY.
    if (personalities[i].length == personalitiesList[3]) {
// POSITION LOGIC
        if (pNames.includes(personalityType[pIndex]) == false) {
            if (pNames[3] == "") {
                pNames[3] = personalityType[pIndex];   
            }
        }
    } 
}
console.log(pNames);


// DISPLAY THE PERSONALITIES FROM THE 
// MOST DOMINANT TO THE LEAST DOMINANT.

// LOGIC { FOR EACH OF THE PERSONALITY BOXES,
// SET THE PERSONALITY IN ORDER OF THE (pNames) ARRAY
// THEN GET THE INDEX OF EACH OF THE PERSONALITY
// IN THEIR ORDER IN THE (personalityType) ARRAY,
// THEN SET THE DOMINANCE AMOUNT TO THE 
// LENGTH OF THAT PERSONALITY}
pBox0.querySelector('.personality').innerHTML = pNames[0];
let dominantOne = personalityType.indexOf(pNames[0]);
pBox0.querySelector('.amount').innerHTML =  personalities[dominantOne].length;

pBox1.querySelector('.personality').innerHTML = pNames[1];
let dominantTwo = personalityType.indexOf(pNames[1]);
pBox1.querySelector('.amount').innerHTML =  personalities[dominantTwo].length;

pBox2.querySelector('.personality').innerHTML = pNames[2];
let dominantThree = personalityType.indexOf(pNames[2]);
pBox2.querySelector('.amount').innerHTML =  personalities[dominantThree].length;

pBox3.querySelector('.personality').innerHTML = pNames[3];
let dominantFour = personalityType.indexOf(pNames[3]);
pBox3.querySelector('.amount').innerHTML =  personalities[dominantFour].length;

// =========RESULTS MODULE FUNCTIONALITIES END======================//
// =======================================================================//
// =======================================================================//
// =========CAREER DISPLAY MODULE FUNCTIONALITIES START======================//

// GET THE CAREER DIV ELEMENTS
let showListBtn = document.querySelector('.showListBtn');
let dominanceList = document.querySelectorAll('.dominanceList');
let mostDominantList = document.querySelector('.mostDominantList')
let lessDominantList = document.querySelector('.lessDominantList')

let dominanceSwitch = document.querySelector('.dominanceSwitch');
let checkLessDominant = document.querySelector('.checkLessDominant');

// USE (mostDomBox ) AND (mostDomBox ) 
// TO GIVE EACH PERSONALITY A UNIQUE CLASS
// i.e ld1, ld2, ... or md1, md2, ...
let mostDomBox = 1;
let lessDomBox = 1;

// IF THE CAREERS SHOW BUTTON IS CLICKED START===========//
showListBtn.addEventListener('click', () => {
// CYCLE THROUGH THE RESULTS GOTTEN        
    for (let i = 0; i < personalities.length; i++) {
// CREATE A NEW DIV TO DISPLAY THE PERSONALITY DETAILS
        let newDomList = document.createElement('div');
// CONVERT EACH OF THE PERSONALITY NAMES TO UPPERCASE
// TO BE DISPLAY AS THE TITLE.
        let theTitle = personalityType[i].toUpperCase();

// CONVERT EACH OF THE PERSONALITY NAMES TO LOWERCASE 
// SO THAT THEY CAN BE CONVERTED EASILY TO CAMEL CASE 
        let personalityLowerCase = personalityType[i].toLowerCase();
// CONVERT TO CAMELCASE SO WE CAN CYCLE THROUGH THE carrerArray 
        let personalityCamelCase = camalize(personalityLowerCase);

// LET (theSummary) HOLD THE GENERAL OVERVIEW OF EACH PERSONALITY
        let theSummary = careerArray[personalityCamelCase][0];

// LET (listContent) HOLD THE (newDomList) CONTENT. 
        let listContent = 
        "<h3 class='personalityTitle'>" + theTitle + " (" + personalities[i].length + ")" + "</h3>" +
        "<h4 class='personalityInfo'>(" + theSummary + ")</h4>" +
        "<p>You should pursue any of the following careers</p>" +
        "<ul class='list'></ul>";

// INSERT THE (listContent) TO THE (newDomList)
// FOR EACH PERSONALITY.
        newDomList.innerHTML = listContent;

// FECTH THE PERSONALITY UL
        let theList = newDomList.querySelector('.list');
// CREATE NEW LIST ELEMENTS AND LET THE HOLD THE CAREERS
// RELATED TO THAT PERSONALITY
// REMEMBER THE CAREERS START FROM 
        for (let j = 1; j < careerArray[personalityCamelCase].length; j++) {
            let newLi = document.createElement('li');
            newLi.innerHTML = careerArray[personalityCamelCase][j];
// ADD THE LIST TO THE PERSONALITY UL
            theList.appendChild(newLi);
        }
// IF PERSONALITY IS THE MOST DOMINANT
// ADD TO THE MOST DOMIMANT DIV  
        if (personalities[i].length == personalitiesList[0]) {
            newDomList.setAttribute('class', 'careerList mostDominant md' + mostDomBox);
            newDomList.setAttribute('id', personalityType[i]);
            mostDominantList.appendChild(newDomList);
            mostDomBox++;
        }
// ELSE ADD TO THE LESS DOMIMANT DIV 
        else{
            newDomList.setAttribute('class', 'careerList lessDominant ld' + lessDomBox);
            newDomList.setAttribute('id', personalityType[i]);
            lessDominantList.appendChild(newDomList);
            lessDomBox++;
        }
    }

// IF THE CHECK BUTTON IS CLICKED
    checkLessDominant.addEventListener('click', () => {
        toggleContent(dominanceSwitch, 'most dominant personality', 'less dominant personalities');
        toggleStyle(mostDominantList,'opacity','0','1');
        toggleStyle(mostDominantList,'zIndex','-1','1');
        toggleStyle(lessDominantList,'opacity','1','0');
        toggleStyle(lessDominantList,'zIndex','1','-1');

// SET THE SCROLL POINT TO THE DEFAULT
        dominanceList.forEach(domlist => {
            domlist.scrollLeft = 0;
            domlist.scrollTop = 0;
        });
    });
});
// IF THE CAREERS SHOW BUTTON IS CLICKED END===========//
// =========CAREER DISPLAY MODULE FUNCTIONALITIES END======================//
