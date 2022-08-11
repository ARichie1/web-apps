let chosenWords = [
    "likes change", "compassionate", 
    "excitable", "promote change", "decisive", 
    "indecisive", "domineering", "procrastinate", 
    "determined", "corporative", "diplomatic", "warm", 
    "logical", "cautions", "prepared/plan ahead", 
    "outgoing", "controlling", "questioning", 
    "harmonious", "defend ideas", "patient", 
    "spontaneous", "tactful", "energetic", 
    "quick minded", "cool", "persistent", 
    "impulsive", "friendly", "passionate", 
    "sensitive", "conforming", "touchy", 
    "systematic", "take control", "flexible", 
    "result oriented", "accommodating", 
    "contentious", "weak will", "strong willed", 
    "agrecable", "confrontational", "lack confidence",
    "detailed", "competitive", "teases", 
    "restless", "accurate", "consistent", 
    "respond quickly", "unassertive", "like stabilty", 
    "rigid", "active", "stubborn", "analysis syndronic",
    "complacent", "modest", "combative", "tolerant",
    "tough minded", "understanding", "tough",
    "passive", "through"
];

let personalities = [ 
    ["compassionate", "indecisive", "corporative", 
    "cautions", "harmonious", "patient", "tactful",
    "persistent", "sensitive", "conforming", 
    "flexible", "accommodating", "contentious", 
    "agrecable", "lack confidence", "teases", 
    "consistent", "unassertive", "stubborn", 
    "complacent", "modest", "tolerant", 
    "understanding", "passive"
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
        "tough minded", "tough", "through"
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
