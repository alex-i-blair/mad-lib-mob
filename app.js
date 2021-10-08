// import functions

// reference needed DOM elements
const blanks = [];

const buttonPress = document.getElementById('button');
const answers = [];
const wordPrompts = document.getElementById('word-prompts');
const hideButton = document.getElementById('button');
const message = document.getElementById('message');

buttonPress.addEventListener('click', () => {
    for (let i = 1; i <= 13; i++) {
        // let blankValue = blanks[i].value;
        blanks[i] = document.getElementById(`blank-${i}`);
        answers[i] = blanks[i].value;
    }
    wordPrompts.classList.add('hide');
    hideButton.classList.add('hide');
    message.textContent = 'Congratulations! You are accepted!';

    let text = `We are ${answers[1]} to inform you that you have been accepted at
    Hogwarts School of ${answers[2]} and ${answers[3]}.<br>
    Please find enclosed a list of all necessary books and equipment.<br>
    Term begins on 1 September. We await your owl by no later than 31 July.<br>
    <br>
    UNIFORM<br>
    First-year students will require:<br>
    1. Three sets of ${answers[4]} ${answers[5]}<br>
    2. One ${answers[6]} ${answers[7]} ${answers[8]} for day wear<br>
    3. One pair of ${answers[9]} gloves (${answers[10]} hide or similar)<br>
    Please note that all pupil's clothes should carry name tags.<br>
    <br>
    Students may also bring, if they desire, an ${answers[11]} OR a ${answers[12]} OR a ${answers[13]}.<br>
    <br>
PARENTS ARE REMINDED THAT FIRST YEARS<br>
<br>
ARE NOT ALLOWED THEIR OWN BROOMSTICK<br>`;
    document.getElementById('harryPotterPassage').innerHTML = text;

});






// set event listeners
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)


