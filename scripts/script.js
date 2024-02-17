// playing with letters
function playNow() {
    console.log('Running: Play Now')
    hideElementByID('first-sec');
    hideElementByID('last-sec');
    unhideElementByID('middle-sec');

    let randomLEtter = randomLetter();
    document.getElementById('display-letter').innerText = randomLEtter;
    document.getElementById(randomLEtter).style.backgroundColor = 'yellow';
    
    
}

// playing game again

// keyboard key detect
document.addEventListener('keyup', keyboardKey);
function keyboardKey(event) {
    const pressedKey = event.key;
    const haveToPressKey = document.getElementById('display-letter').innerText.toLowerCase();
    console.log('Pressed Key: ', pressedKey, ' Have to press: ', haveToPressKey)
    const score = parseInt(document.getElementById('score-number').innerText);
    const score2 = parseInt(document.getElementById('life-number').innerText);
    
    // cross matching between pressedKey and have to presskey
    if (pressedKey === haveToPressKey) {
        document.getElementById(haveToPressKey).style.backgroundColor = 'white';
        document.getElementById('score-number').innerText = score + 1;
        playNow();
        
    }
    else {
        // life set
        document.getElementById('life-number').innerText = score2 - 1;
        if(document.getElementById('life-number').innerText == 0){
            hideElementByID('middle-sec');
            unhideElementByID('last-sec');
            document.getElementById('life-number').innerText = 5;
            document.getElementById('score-number').innerText = 0;
            document.getElementById(haveToPressKey).style.backgroundColor = 'white';
            finalResult(score)
        }
    }
    
    
}



function finalResult(score){
    document.getElementById('last-result').innerText = score;
}










// to hide a section
function hideElementByID(elementIdName) {
    document.getElementById(elementIdName).classList.add('hidden');
}

// to unhide a section
function unhideElementByID(elementIdName) {
    document.getElementById(elementIdName).classList.remove('hidden');
}

// to make a random number for a random letter
function randomLetter() {
    // getting all letter in a array
    let allLetterInString = 'abcdefghijklmnopqrstuvwxyz';
    let allLetter = allLetterInString.split('');

    // generate index number
    let randomIndex = parseInt(Math.random() * 25);
    return allLetter[randomIndex];

}