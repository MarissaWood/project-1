// variables for the game

let level = 1
let playerPattern = []
let i = 0

// add event listeners for each button
let green = document.querySelector('#green')
green.addEventListener('click', greenClick)
green.addEventListener('click', lightUp)

let red = document.querySelector('#red')
red.addEventListener('click', redClick)
red.addEventListener('click', lightUp)

let yellow = document.querySelector('#yellow')
yellow.addEventListener('click', yellowClick)
yellow.addEventListener('click', lightUp)

let blue = document.querySelector('#blue')
blue.addEventListener('click', blueClick)
blue.addEventListener('click', lightUp)

// create functions for when each button is pushed
function lightUp (e) {
  this.classList.add('clicked')
  setTimeout(function () {
    e.target.classList.remove('clicked')
  }, 100)
}

function greenClick () {
  playerPattern.push('G')
}

function redClick () {
  playerPattern.push('R')
}

function yellowClick () {
  playerPattern.push('Y')
}

function blueClick () {
  playerPattern.push('B')
}

let levelPattern = ['B', 'Y', 'R', 'G']

function lightUpPlay () {
  // light up the correct tile
  if (levelPattern[i] === 'R') {
    setTimeout(function () {
        red.classList.add('clicked')}, (i*1000+100))
    setTimeout(function () {
      red.classList.remove('clicked')
    }, (i+1)*1000)
  }// closes red

  if (levelPattern[i] === 'G') {
    setTimeout(function () {
        green.classList.add('clicked')}, (i*1000+100))
    setTimeout(function () {
      green.classList.remove('clicked')
    }, (i+1)*1000)
  }// closes green

  if (levelPattern[i] === 'Y') {
    setTimeout(function () {
        yellow.classList.add('clicked')}, (i*1000+100))
    setTimeout(function () {
      yellow.classList.remove('clicked')
    }, (i+1)*1000)
  }// closes yellow

  if (levelPattern[i] === 'B') {
    setTimeout(function () {
        blue.classList.add('clicked')}, (i*1000+100))
    setTimeout(function () {
      blue.classList.remove('clicked')
    }, (i+1)*1000)
  }// closes blue

}// closes lightUpPlay

function playLevel () {
  lightUpPlay()
  //pause between buttons???
  if (i < levelPattern.length) {
    i++
  playLevel()
  }
}// closes playLevel

// playLevel()

/*
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
// random patterns

// initiate game
