// variables for the game
let level = 1
let playerPattern = []
let levelPattern = ['G', 'B', 'Y', 'G']
let i = 0 // variable for playing colors first
let j = 0 // variable for keeping track of player input

let soundRed = document.querySelectorAll('audio')[0]
let soundGreen = document.querySelectorAll('audio')[1]
let soundYellow = document.querySelectorAll('audio')[2]
let soundBlue = document.querySelectorAll('audio')[3]

// button to start or restart game
document.querySelector('#button').addEventListener('click', startGame)

// add event listeners for each button
let green = document.querySelector('#green')
green.addEventListener('click', greenClick)
green.addEventListener('click', lightUp)
green.addEventListener('click', check)

let red = document.querySelector('#red')
red.addEventListener('click', redClick)
red.addEventListener('click', lightUp)
red.addEventListener('click', check)

let yellow = document.querySelector('#yellow')
yellow.addEventListener('click', yellowClick)
yellow.addEventListener('click', lightUp)
yellow.addEventListener('click', check)

let blue = document.querySelector('#blue')
blue.addEventListener('click', blueClick)
blue.addEventListener('click', lightUp)
blue.addEventListener('click', check)

// create functions for when each button is pushed
function lightUp (e) {
  this.classList.add('clicked')
  setTimeout(function () {
    e.target.classList.remove('clicked')
  }, 100)
}

function greenClick () {
  playerPattern.push('G')
  soundGreen.play()
}

function redClick () {
  playerPattern.push('R')
  soundRed.play()
}

function yellowClick () {
  playerPattern.push('Y')
  soundYellow.play()
}

function blueClick () {
  playerPattern.push('B')
  soundBlue.play()
}

function lightUpPlay () {
  // light up the correct tile
  if (levelPattern[i] === 'R') {
    setTimeout(function () {
      red.classList.add('clicked')
      soundRed.play()
    }, (i * 1000 + 100))
    setTimeout(function () {
      red.classList.remove('clicked')
    }, (i + 1) * 1000)
  }// closes red

  if (levelPattern[i] === 'G') {
    setTimeout(function () {
      green.classList.add('clicked')
      soundGreen.play()
    }, (i * 1000 + 100))
    setTimeout(function () {
      green.classList.remove('clicked')
    }, (i + 1) * 1000)
  }// closes green

  if (levelPattern[i] === 'Y') {
    setTimeout(function () {
      yellow.classList.add('clicked')
      soundYellow.play()
    }, (i * 1000 + 100))
    setTimeout(function () {
      yellow.classList.remove('clicked')
    }, (i + 1) * 1000)
  }// closes yellow

  if (levelPattern[i] === 'B') {
    setTimeout(function () {
      blue.classList.add('clicked')
      soundBlue.play()
    }, (i * 1000 + 100))
    setTimeout(function () {
      blue.classList.remove('clicked')
    }, (i + 1) * 1000)
  }// closes blue
}// closes lightUpPlay

function playLevel () {
  lightUpPlay()
  if (i < levelPattern.length) {
    i++
    playLevel()
  }
  if (i === levelPattern.length) {
    playerPattern = []
    i = 0
  }
}// closes playLevel

function newPattern () {
  // clear old pattern
  levelPattern = []
  // create new level pattern
  for (let x = 0; x < 5; x++) {
    levelPattern.push(randomButton())
  }
}

function randomButton () {
  let num = Math.floor((Math.random() * 4) + 1)
  if (num === 1) {
    return 'R'
  }
  if (num === 2) {
    return 'B'
  }
  if (num === 3) {
    return 'Y'
  }
  if (num === 4) {
    return 'G'
  }
}
// check if player input is correct
function check () {
  if (playerPattern[j] !== levelPattern[j]) {
    // restart game
    document.querySelector('.level-counter').innerHTML = 1
    document.querySelector('.message').innerHTML = 'Space child, you have failed! Return to Earth.'
    level = 1
  }
  j += 1
  if (levelPattern.length === playerPattern.length) {
    level += 1
    if (level === 5) {
      document.querySelector('.panel-1').style.background = "url('REZZ_HandRed.png')"
    }
    document.querySelector('.level-counter').innerHTML = level
    newPattern()
    setTimeout(startGame, 1500)
  }
}// closes check function

function startGame () {
  i = 0
  j = 0
  document.querySelector('.message').innerHTML = ''
  playLevel()
}
