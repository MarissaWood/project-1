//variables for the game

let level=1 
let playerPattern=[]

//add event listeners for each button

let green = document.querySelector('#green')
green.addEventListener('click', greenClick)
green.addEventListener('click', lightUp)

/*
let red = document.querySelector('#red')
red.addEventListener('click', redClick)

let yellow = document.querySelector('#yellow')
yellow.addEventListener('click', yellowClick)

let blue = document.querySelector('#blue')
blue.addEventListener('click', blueClick)
*/
//create functions for when each button is pushed

function lightUp (e) {
    this.classList.add("clicked")
    setTimeout (function () {
        e.target.classList.remove("clicked")}, 100)
}

function greenClick () {
    playerPattern.push("g")
    console.log("green clicked")
}

/*
//play level pattern


//get player input pattern
    //check if input is correct, advance level
    if (playerPattern===levelPattern) {
        level +=1
    }

//level patterns
patterns = {
    1: []
    2: []
}
*/
//random patterns



//initiate game