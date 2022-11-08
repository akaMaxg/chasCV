//start page
const welcomeBox = 
document.querySelector('.welcome')

//play game button
const gameBtn =
document.querySelector(".playGame")

//game modal window
const gameModal = 
document.querySelector('.modalGame')
gameModal.classList.add('hide')

//Guess button 
const guessBtn = 
document.querySelector('.enterGuess')

//when this is pressed, value from input to variable guessInput in int
let guessInput = guessBtn.addEventListener('click',function(){
    guessInput = parseInt(document.querySelector('.guessField').value)
})

//Ordered list
const guessList = 
document.querySelector('.guessList')

//object for guesses
let guess = {
    guessed: [null, null, null, null, null]
}

//arraycounter
let i = 0

//H3 that gives tips
const cta = 
document.querySelector('.enterNo')

//a number between 1-100
let rng = null 
//function to randomize a number between 1-100
function rngNumber() { 
    rng = Math.floor((Math.random() * 100) + 1)
 }

//When play game button is pressed, hide background, show modal, generate number
gameBtn.addEventListener('click',function(){
    welcomeBox.classList.add('hide')
    gameModal.classList.remove('hide')
    rngNumber()
})

//Check for button click, run the functions if within span
guessBtn.addEventListener('click',function(){
    if (guessInput > 0 && guessInput < 101) {
        checkNumber()
        guessedList()
    } else {
        cta.innerHTML = `<br> ${guessInput} is not within 1-100`
    }
})

//function to check if guessed number is equal, below or above rng.
function checkNumber() {
    if (guessInput == rng) {
        cta.innerHTML = `<br> ${guessInput} is correct!`
    }
    else if (guessInput > rng) {
        cta.innerHTML = `<br> ${guessInput} is too high, guess lower!`
    } else if (guessInput < rng) {
        cta.innerHTML = `<br> ${guessInput} is too low, guess higher!`
    } 
}

//function to log guesses up to five.
function guessedList() {
    let tooHigh = "(Too High!)"
    let tooLow = "(Too Low!)"
    if(i<=4) { 
    guess.guessed[i] = guessInput
    let listElement = document.createElement("li")
    if (guessInput == rng) {
        } else if (guessInput < rng) {
    listElement.innerHTML = guessInput + tooLow
    guessList.appendChild(listElement)
    } else if (guessInput > rng) {
        listElement.innerHTML = guessInput + tooHigh
        guessList.appendChild(listElement)
        }
    } else {
        cta.innerHTML = `<br> You've guessed too many times!`
    }
    i++
}