export{traits, careers}

function traits() {
        
const personalities = [
        ['patient', 'teases', 'modest', 'passive',
        'harmonious', 'good listener','conforming', 'compassionate', 
        'lack initiative', 'complacent', 'contentious', 'accommodating',
        'lack confidence', 'flexible', 'corporative', 'pliable', 
        'unassertive', 'agrecable', 'tactful', 'sensitive', 
        'fit in', 'indecisive', 'persistent', 'tolerant', 
        'stubborn', 'supportive','consistent', 'understanding',
        'cautions', 'dependable'],

        ['spontaneous', 'unorganized', 'forgetful', 'judgemental',
        'impelling', 'outgoing', 'talkative', 'excitable',
        'instinctive','versatile', 'generalist', 'humorous', 
        'decisive', 'efficient', 'proud', 'weak will', 
        'convincing', 'people oriented', 'energetic', 'passionate', 
        'erratic', 'procrastinate', 'friendly', 'rebellious', 
        'activist', 'unconventional', 'easily disturbed', 'inspiring',
        'warm', 'over tasking'],

        ['impatient', 'restless', 'logical', 'expensive',
        'defend ideas', 'controlling', 'touchy', 'likes change',
        'thick skinned', 'direct', 'critical', 'objective', 
        'bold', 'result oriented', 'determined', 'strong willed',
        'assertive', 'confrontational', 'quick minded', 'self centered',
        'take control', 'domineering', 'impulsive', 'visionary',
        'active', 'competitive', 'focused', 'confident',
        'logical', 'respond quickly'],

        ['structured', 'scheduled', 'fact oriented', 'tough',
        'perfectionist', 'questioning', 'responsible', 'promote change',
        'through', 'analysis syndronic', 'rigid', 'contentious',
        'creative', 'precise', 'diplomatic', 'firm',
        'respond quickly', 'picky', 'cool hearted', 'insensitive to others',
        'systematic', 'decisive', 'cool', 'combative',
        'critical', 'detailed', 'accurate', 'tough minded',
        'prepared/plan ahead', 'like stabilty']
 ]

 return personalities;
}

function careers() {
// STORE THE CAREER SUMMARY AND THE CAREERS FOR THE PERSONALITIES
// LET THE FIRST ELEMENT OF EACH CAREER ARRAY BE THE SUMMARY
let careerArray = {
        accomodatingHarmonious  : ['Human Relations',
            "Process Management", "Communication",
            "Nursery Care", "Teachers", "Psychologist and Counselor",
            "Engineering", "Statistics", "Civil Service"
        ],
        engagingSpontaneous : ['Thrives in less structured and detailed careers',
            "Entertainment", "Sales Person/Marketing",
            "Communicator", "Actor", "Preacher(Evangelist)"
        ],
        directiveObjective : ['Highly Structured Settings',
            "LeaderShip", "Military", "Academicians",
            "Construction", "Entrepreneurs", "Politics"
        ],
        methodicalObjective : ['All Creative Career',
            "Public Relation", "Lawyers", "Building and Designs",
            "Innovation and Inventions", "Accounting",
            "Data Analysis", "Educator", "Medicine"
        ]
    };
    
    return careerArray;
}