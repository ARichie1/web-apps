

let root = document.querySelector(':root');
let animationArray = [];
let eachPartAnimArray = [];

let figureHolder = document.querySelector('.figureHolder');
let figure = document.querySelector('.figure');
let head = figure.querySelector('.head');
let leftHand = figure.querySelector('.leftHand');
let rightHand = figure.querySelector('.rightHand');
let leftLeg = figure.querySelector('.leftLeg');
let rightLeg = figure.querySelector('.rightLeg');
let waist = figure.querySelector('.waist');

let partsArray = [
    head, leftHand, rightHand,
    leftLeg, rightLeg, waist
]

partsArray.forEach(part => {
    part.addEventListener('click', () => {
        let clickedPart = part.getAttribute("part");
        let thePartController = document.querySelector('#' + clickedPart);
        let thePartInput = thePartController.querySelector('input');
        thePartInput.focus();
    });
});


function inputSetter(theInputTypes) {
    theInputTypes.forEach(theInputType=> {
    let partId = theInputType.getAttribute("id");
    let moveDown = theInputType.querySelector('.moveDown');
    let moveUp = theInputType.querySelector('.moveUp');
    let input = theInputType.querySelector('input');

// SET THE STICK FIGURE TO A STANDING POSTION.
        switch (partId) {
            case "leftLeg":input.value = 75;break;
            case "rightLeg":input.value = -75;break;
            case "leftHand":input.value = 50;break;
            case "rightHand":input.value = -50;break;
            case "posX":input.value = 0;break;
            case "posY":input.value = -3;break;
            default:input.value = 0;break;
        }

    moveDown.addEventListener('click', () => {
        input.value++;
        input.focus();
        if (partId == "posY" || partId == "posX") {
            partPosition = input.value + "%";
        }else{
            partPosition = input.value + "deg";
        }
        root.style.setProperty("--" + partId, partPosition);
    });
    moveUp.addEventListener('click', () => {
        input.value--;
        if (partId == "posY" || partId == "posX") {
            partPosition = input.value + "%";
        }else{
            partPosition = input.value + "deg";
        }
        root.style.setProperty("--" + partId, partPosition);
    });
    input.addEventListener('keyup', (e) => {
        if (e.key == "Enter") {
            input.value = input.value;
            if (partId == "posY" || partId == "posX") {
                partPosition = input.value + "%";
            }else{
                partPosition = input.value + "deg";
            }
            root.style.setProperty("--" + partId, partPosition);
        }
    });
    input.addEventListener('keydown', (e) => {
        if (e.key == "ArrowDown") {
            input.value++;
            if (partId == "posY" || partId == "posX") {
                partPosition = input.value + "%";
            }else{
                partPosition = input.value + "deg";
            }
            root.style.setProperty("--" + partId, partPosition);
        }
        if (e.key == "ArrowUp") {
            input.value--;
            if (partId == "posY" || partId == "posX") {
                partPosition = input.value + "%";
            }else{
                partPosition = input.value + "deg";
            }
            root.style.setProperty("--" + partId, partPosition);
        }
    });
});
}

let partPosition;
let parts = document.querySelectorAll('.part');
let axisPosition = document.querySelectorAll('position');
inputSetter(parts);

let figureCoordinatePosition = document.querySelector('.figureCoordinatePosition');
let figureAxisPosition = document.querySelectorAll('.figureCoordinatePosition .position');
inputSetter(figureAxisPosition);

// CONTROLLER FUNCTIONALITIES END

// FRAME FUNCTIONALITIES START===
let framesContainer = document.querySelector('.framesContainer');
let addFrameBtn = document.querySelector('.addFrame');
let deleteFrame = document.querySelector('.deleteFrame');
let fInc = 0;
let frameId;
let frameClickState;
let currentFrame = 0;
let frameTotalAmount;
setInterval(() => {frameTotalAmount = framesContainer.children.length;}, 1000);

function createNewFrame() {
    let frameContainer = document.createElement('div');
    frameContainer.setAttribute('class', 'frameContainer');
    frameContainer.setAttribute('for', 'f' + fInc);

    let createFrameBefore = document.createElement('div');
    createFrameBefore.setAttribute('class', 'createFrameBefore btn frameProperty');
    createFrameBefore.setAttribute('add', 'f' + fInc );
    createFrameBefore.innerHTML = "&#11013;";

    let copyFrame = document.createElement('div');
    copyFrame.setAttribute('class', 'copyFrame btn frameProperty');
    copyFrame.setAttribute('copy', 'f' + fInc );
    copyFrame.innerHTML = "&#128220;";

    let createFrameAfter = document.createElement('div');
    createFrameAfter.setAttribute('class', 'createFrameAfter btn frameProperty');
    createFrameAfter.setAttribute('add', 'f' + fInc );
    createFrameAfter.innerHTML = "&#10145;";

    let deleteFrame = document.createElement('div');
    deleteFrame.setAttribute('class', 'deleteFrame btn frameProperty');
    deleteFrame.setAttribute('delete', 'f' + fInc );
    deleteFrame.innerHTML = "&#128465;";

    let frameProperties = document.createElement('div');
    frameProperties.setAttribute('class', 'frameProperties');
    frameProperties.setAttribute('for', 'f' + fInc );
    frameProperties.appendChild(createFrameBefore);
    frameProperties.appendChild(copyFrame);
    frameProperties.appendChild(createFrameAfter);
    frameProperties.appendChild(deleteFrame);

    let frame = document.createElement('div');
    frame.setAttribute('class', 'frame');
    frame.setAttribute('id', 'f' + fInc );

    frameContainer.appendChild(frameProperties);
    frameContainer.appendChild(frame);

    framesContainer.appendChild(frameContainer);

    fInc++; 
}

// BUTTONS DESCRIPTION FUNCTIONALITY START
// THIS WILL TELL THE USER WHAT EACH BUTTON DOES
let btnDictionary = {
    addFrame : "Create a new frame.",
    playFrames : "Play the animation.",
    createFrameBefore : "Create a new frame before this frame.",
    copyFrame : "Copy this Frame.",
    createFrameAfter : "Create a new frame after this frame.",
    deleteFrame : "Delete this frame."
};
setInterval(() => {
let btns = document.querySelectorAll('.framesHolder .btn');
btns.forEach(btn => {
    let btnInfo = document.createElement('div');
    btnInfo.setAttribute('class', 'btnInfo');
    let btnType = btn.classList[0];
    btnInfo.innerHTML = btnDictionary[btnType];
    btn.appendChild(btnInfo);
});
}, 1000);
// BUTTONS DESCRIPTION FUNCTIONALITY END.

// DELETE FRAME FUNCTION START
function deleteAFrame() {
    let frameContainers = framesContainer.querySelectorAll('.frameContainer');
    frameContainers.forEach(frameContainer => {
        let deleteBtn = frameContainer.querySelector('.deleteFrame');
        deleteBtn.addEventListener('click', () => {

            let animateIndex = String(deleteBtn.getAttribute('delete'));
            let removedAnimationIndex = parseInt(animateIndex[1]);
            if (removedAnimationIndex < animationArray.length) {
                animationArray.splice(removedAnimationIndex, 1);
            }
            frameContainer.remove();
        });
    });
}
// DELETE FRAME FUNCTION END

// THE FRAMES UPDATE FUNCTION
// this will update the frames id every seconds 
// even after delete.
let updateValue = 0;
function updateFrames() {
    let frameContainers = framesContainer.querySelectorAll('.frameContainer');
    frameContainers.forEach(frameContainer => {
        let deleteBtn = frameContainer.querySelector('.deleteFrame');
        let frame = frameContainer.querySelector('.frame');
        frameContainer.setAttribute('for', 'f' + updateValue);
        deleteBtn.setAttribute('delete', 'f' + updateValue);
        frame.setAttribute('id', 'f' + updateValue);

        updateValue++;
        if (updateValue == frameContainers.length) {
            updateValue = 0; 
        }
    });
    console.log(currentFrame);
}

// CREATE A FRAME WHEN THE WINDOW LOADS
// i.e a starting frame. 
createNewFrame();

// CALL THE delete and update functions.
setInterval(() => {deleteAFrame();}, 1000);
setInterval(() => {updateFrames();}, 1000);

// NEW FRAME ADDER
// it will add a new frame next to the last frame
addFrameBtn.addEventListener('click', () => {
    fInc = frameTotalAmount;
    createNewFrame();
});

// insertNewPositions() : 
// This will add the new figure positions
// to a frame (specified or not),
// it will also get the postion values
// and add to the (animationArray).
let saveInc = 0;
function insertNewPositions(insertType) {
    let frameToInsert = document.querySelector('#f'+ currentFrame);
    frameToInsert.innerHTML =  figure.innerHTML;

// GET THE INPUT VALUES OF ONLY THE BODYPARTS
    let partsInput = document.querySelectorAll('.part .partValue');
// GET THE BODYPARTS OF THE FRAME YOU WANT TO INSERT TO.
    let frameToInsertBody = frameToInsert.querySelectorAll('.bodyPart');

// GET THE INPUT VALUES OF ONLY THE X,Y POSTION
    let posInputs = document.querySelectorAll('.position .partValue');

// HOLDS THE NEW POSITIONS.
    let newPositions = [];

// FOR EACH BODY PART GET AND HOLD IT'S NEW POSITION.
    partsInput.forEach(partInput => {
        frameToInsertBody[saveInc].style.transform = "rotate(" + partInput.value + "deg)"; 
        newPositions.push(partInput.value);
        saveInc++;
        if ( saveInc == frameToInsertBody.length) {
            saveInc = 0
        }
    });

// FOR EACH X,Y POSITION GET AND HOLD THE NEW POSITION.
    posInputs.forEach(posInput => {
        newPositions.push(posInput.value);
    });

    if (insertType == "normal") {
// ADD THE NEW POSITIONS TO THE (animationArray).
    animationArray.push(newPositions);   
    }else if (insertType == "specific") {
        animationArray[currentFrame] = newPositions;
    }
// ADD THE NEW POSITIONS TO THE (animationArray).
    // animationArray.push(newPositions);

// TRASPOSE THE (animationArray) SO THAT EACH PART 
// HAS ITS OWN POSITION ARRAY TO HOLDS EACH CHANGE.
    for (let i = 0; i < animationArray[0].length; i++) {
        eachPartAnimArray[i] = [];
        for (let j = 0; j < animationArray.length; j++) {
            eachPartAnimArray[i].push(animationArray[j][i]);
        }
    }
// TRASPOSE THE (animationArray) END.
    fInc = frameTotalAmount;
    createNewFrame();
}

function toggleStyle(el, prop, style1, style2) {
    el.style[prop] = el.style[prop] === style1 ? style2 : style1;
}

// selectAframe() :
// This will help so you can insert 
// a new figure position to a selected frame.
function selectAframe() {
    let frameContainers = framesContainer.querySelectorAll('.frameContainer');
    frameContainers.forEach(frameContainer => {
        let frame = frameContainer.querySelector('.frame');
        if (framesContainer.children.length > 1) {
            frame.addEventListener('click', () => {
                frameId = String(frame.id);
                currentFrame = frameId[1];
                toggleStyle(frame, "borderWidth", "5px", "2px");
            });
        }else if(framesContainer.children.length == 1){
            frame.addEventListener('click', () => {
                frameId = String(frame.id);
                currentFrame = frameId[1];
                toggleStyle(frame, "borderWidth", "5px", "2px");
            });
        }
    });
}

// selectAframeProperty() :
// This will help so you can use a frame property.
function selectAframeProperty() {
    let frameContainers = framesContainer.querySelectorAll('.frameContainer');
    frameContainers.forEach(frameContainer => {
        let frameProperties = frameContainer.querySelector('.frameProperties');
        let frame = frameContainer.querySelector('.frame');
        if (framesContainer.children.length > 1) {
            frame.addEventListener('click', () => {
                frameId = String(frame.id);
                currentFrame = frameId[1];
                toggleStyle(frameProperties, "opacity", "1", "0");
                toggleStyle(frameProperties, "zIndex", "1", "-1");
                toggleStyle(frame, "borderWidth", "5px", "2px");
            });
        }else if(framesContainer.children.length == 1){
            frame.addEventListener('click', () => {
                frameId = String(frame.id);
                currentFrame = frameId[1];
                toggleStyle(frameProperties, "opacity", "1", "0");
                toggleStyle(frameProperties, "zIndex", "1", "-1");
                toggleStyle(frame, "borderWidth", "5px", "2px");
            });
        }
    });
}

setInterval(() => {
    selectAframeProperty();  
}, 1000);


// insertToSeletedFrame() :
// This will insert a new figure position
// to a selected frame.
function insertToSeletedFrame() {
    insertNewPositions("specific");
}

// insertToNextFrame() :
// This will insert a new figure position
// to the last frame.
function insertToNextFrame() {
    currentFrame = frameTotalAmount - 1;
    insertNewPositions("normal");
}

// INSERT FIGURE BASED ON THE BUTTON CLICKED.
let selectFrame = document.querySelector('.selectFrame');
let toSelectedFrame = document.querySelector('.addToSelectedFrame');
let toNextFrame = document.querySelector('.nextFrame');
selectFrame.addEventListener('click', () => {
    selectAframe();
    selectFrame.style.display = "none";
    toSelectedFrame.style.display = "flex";
});
toSelectedFrame.addEventListener('click', () => {
    insertToSeletedFrame();
    toSelectedFrame.style.display = "none";
    selectFrame.style.display = "flex";
});
toNextFrame.addEventListener('click', () => {
    insertToNextFrame();
});


// THE ANIMATION
let playFramesBtn = document.querySelector('.playFrames');
let theAnimation = document.querySelector('.theAnimation');
let animationHolder = document.querySelector('.animationHolder');
let animationContainer = document.querySelector('.animation');

// INSERT A NEW STICK FIGURE WITH DEFAULT VALUE INTO THE (animationContainer).
animationContainer.innerHTML = figure.innerHTML;


function frameMaker(type, identifier, number) { 
// GIVE THE (kFrameHolder) A DEFAULT VALUE OF "" 
// SO ITS NOT UNDEFINED AT INITIATION.
    let kFrameHolder = "";

    let flowStarter = 0;
    let framesAmount = framesContainer.children.length;
    let newKeyString;
    let flow = 100 / framesAmount;

    if (type == "parts") {
        for (let i = 0; i < eachPartAnimArray[0].length; i++) {
            newKeyString = flowStarter + "%{transform: rotate(" + 
            eachPartAnimArray[number][i] + "deg);}";
            kFrameHolder += newKeyString;
            flowStarter = flow + flowStarter;
        }
    } else if (type == "pos"){
        for (let i = 0; i < eachPartAnimArray[0].length; i++) {
            newKeyString = flowStarter + "%{left" + ": " + 
            eachPartAnimArray[eachPartAnimArray.length - 1][i] + 
            "%;bottom" + ": " + 
            eachPartAnimArray[eachPartAnimArray.length - 2][i] + "%;}";
            kFrameHolder += newKeyString;
            flowStarter = flow + flowStarter;
        }
    }
    let KeyStrings = kFrameHolder;
    let keySaver = "@keyframes anim" + identifier + "{" + KeyStrings + "}";
    return keySaver;
}
let appHead = document.querySelector('head');
let theKeyStyles = document.createElement('style');


playFramesBtn.addEventListener('click', () => {
    theAnimation.style.opacity = "1";
    theAnimation.style.zIndex = "1"; 

    console.log(animationArray);
// GIVE THE (cssAnimations) A DEFAULT VALUE OF ""
// SO ITS NOT UNDEFINED AT INITIATION. 
    let cssAnimations = "";

// ADD THE BODY PARTS POSITIONS KEYFRAMES
    parts.forEach(part => {
        let partId = part.id;
        let partNumber = part.getAttribute("partNumber");
        let partKeyFrame = frameMaker("parts", partId, partNumber);
        cssAnimations += partKeyFrame;
    });

// ADD THE X,Y POSITIONS KEYFRAMES
    let posKeyFrame = frameMaker("pos", "Position");
    cssAnimations += posKeyFrame;

// WRAP IN A STYLE TAG AND SEND THE ANIMATION TO THE HTML HEAD.
    theKeyStyles.innerHTML = new String(cssAnimations)
    appHead.appendChild(theKeyStyles);
});


// EMPTY A CHOSEN ELEMENT=================//
function clear(containerName) {
    let container = document.querySelector('.' + containerName);
    container.innerHTML = '';
}

