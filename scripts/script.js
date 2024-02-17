function playNow(){
    console.log('Running: Play Now')
    hideElementByID('first-sec');
    unhideElementByID('middle-sec');

    let randomLEtter = randomLetter();
    document.getElementById('display-letter').innerText = randomLEtter;
    document.getElementById(randomLEtter).style.backgroundColor = 'yellow'

}

// to hide a section
function hideElementByID(elementIdName){
    document.getElementById(elementIdName).classList.add('hidden');
}

// to unhide a section
function unhideElementByID(elementIdName){
    document.getElementById(elementIdName).classList.remove('hidden');
}

// to make a random number for a random letter
function randomLetter(){
    // getting all letter in a array
    let allLetterInString = 'abcdefghijklmnopqrstuvwxyz';
    let allLetter = allLetterInString.split('');
    
    // generate index number
    let randomIndex = parseInt(Math.random()*25);
    return allLetter[randomIndex];

}