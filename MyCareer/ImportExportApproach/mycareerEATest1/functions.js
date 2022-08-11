export {toggleStyle, toggleContent, uniqueRangeGenerator,
         arrayRemove, camalize}

// =====TOGGLE STYLES FUNCTIONALITY START=====//
function toggleStyle(el, prop, style1, style2) {
	el.style[prop] = el.style[prop] === style1 ? style2 : style1;
}

//Content Toggler
function toggleContent(el, content1, content2) {
	el.innerHTML = el.innerHTML === content1 ? content2 : content1;
}
// =====TOGGLE STYLES FUNCTIONALITY END=====//

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
//=====RANDOM INDEXES GENERATION END=====//

//=====ARRAY ELEMENT REMOVER START=======//
function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}
//=====ARRAY ELEMENT REMOVER END=======//

// =====CONVERT A SENTENCE OR WORD TO CAMELCASE START=====//
function camalize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
// =====CONVERT A SENTENCE OR WORD TO CAMELCASE END=====//

// =====ARRAY BINDER START=====//
function arrayBinder(array) {
    let binded = array.reduce((a, b) => a + b);
    return binded;
}
// =====ARRAY BINDER END=====//
