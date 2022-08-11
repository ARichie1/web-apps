export{traits}

 let traits = function(G, O, L, D){
        const personalityA = ['patient', 'teases', 'modest', 'passive',
        'harmonious', 'good listener','conforming', 'compassionate', 
        'lack initiative', 'complacent', 'contentious', 'accommodating',
        'lack confidence', 'flexible', 'corporative', 'pliable', 
        'unassertive', 'agrecable', 'tactful', 'sensitive', 
        'fit in', 'indecisive', 'persistent', 'tolerant', 
        'critical', 'supportive','consistent', 'understanding',
        'cautions', 'dependable'];

        const personalityB = ['spontaneous', 'unorganized', 'forgetful', 'judgemental',
        'impulsive', 'outgoing', 'talkative', 'excitable',
        'instinctive','versatile', 'generalist', 'humorous', 
        'decisive', 'efficient', 'proud', 'weak will', 
        'convincing', 'people oriented', 'energetic', 'passionate', 
        'erratic', 'procrastinate', 'friendly', 'rebellious', 
        'activist', 'unconventional', 'easily disturbed', 'inspiring',
        'warm', 'over tasking'];

        const personalityC = ['impatient', 'restless', 'logical', 'expensive',
        'defend ideas', 'controlling', 'touchy', 'likes change',
        'thick skinned', 'direct', 'critical', 'objective', 
        'bold', 'result oriented', 'determined', 'strong willed',
        'assertive', 'confrontational', 'quick minded', 'self centered',
        'take control', 'domineering', 'impulsive', 'visionary',
        'active', 'competitive', 'focused', 'confident',
        'logical', 'respond quickly'];

        const personalityD = ['structured', 'scheduled', 'fact oriented', 'tough',
        'perfectionist', 'questioning', 'responsible', 'promote change',
        'through', 'analysis syndronic', 'rigid', 'contentious',
        'creative', 'precise', 'diplomatic', 'firm',
        'respond quickly', 'picky', 'cool hearted', 'insensitive to others',
        'systematic', 'decisive', 'cool', 'combative',
        'critical', 'detailed', 'accurate', 'tough minded',
        'prepared/plan ahead', 'like stabilty'];

        this.G = personalityA;
        this.O = personalityB;
        this.L = personalityC;
        this.D = personalityD;
}