export{traits, careers}

function traits() {
        
const personalities = [
        ['patient', 'teases', 'modest', 'passive',
        'harmonious', 'good listener','conforming', 'compassionate', 
        'lack initiative', 'complacent', 'controversial', 'accommodating',
        'lack confidence', 'flexible', 'corporative', 'pliable', 
        'unassertive', 'agreeable', 'tactful', 'sensitive', 
        'fit in', 'indecisive', 'persistent', 'tolerant', 
        'stubborn', 'supportive','consistent', 'understanding',
        'cautious', 'dependable'],

        ['spontaneous', 'unorganized', 'forgetful', 'judgemental',
        'impelling', 'outgoing', 'talkative', 'excitable',
        'instinctive','versatile', 'generalist', 'humorous', 
        'makes quick decisions', 'efficient', 'proud', 'weak will', 
        'convincing', 'people oriented', 'energetic', 'passionate', 
        'erratic', 'procrastinate', 'friendly', 'rebellious', 
        'activist', 'unconventional', 'easily disturbed', 'inspiring',
        'warm', 'over tasking'],

        ['impatient', 'restless', 'reasons to logic', 'expensive',
        'defend ideas', 'controlling', 'touchy', 'likes change',
        'thick skinned', 'direct', 'criticise', 'objective', 
        'bold', 'result oriented', 'determined', 'strong willed',
        'assertive', 'confrontational', 'quick minded', 'self centered',
        'take control', 'domineering', 'impulsive', 'visionary',
        'active', 'competitive', 'focused', 'confident',
        'logical', 'respond quickly'],

        ['structured', 'scheduled', 'fact oriented', 'tough',
        'perfectionist', 'questioning', 'responsible', 'promote change',
        'through', 'analysis syndronic', 'rigid', 'contentious',
        'creative', 'precise', 'diplomatic', 'firm',
        'respond fast', 'picky', 'cool hearted', 'insensitive to others',
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
            "Nursery Care", "Teaching", "Psychology and Counselling",
            "Engineering", "Statistics", "Civil Service"
        ],
        engagingSpontaneous : ['Thrives in less structured and detailed careers',
            "Entertainment", "Sales Person/Marketing",
            "Communication", "Acting", "Preacher(Evangelist)"
        ],
        directiveObjective : ['Highly Structured Settings',
            "Leadership", "Military", "Academician",
            "Construction", "Entrepreneurship", "Politics"
        ],
        methodicalObjective : ['All Creative Career',
            "Public Relation", "Building and Designs",
            "Innovation and Inventions", "Accounting",
            "Data Analysis",  "Medicine", "Law", "Educator"
        ]
    };
    
    return careerArray;
}