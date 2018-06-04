// variables for the game
let level = 1
let playerPattern = []
let levelPattern = ['G', 'B', 'R', 'R'] // default starting pattern
let i = 0 // variable for playing colors first
let j = 0 // variable for keeping track of player input
let n = 4 // variable for number of notes
let ascension = false // turn on/off ascension mode

// store sounds in variables
let soundRed = document.querySelectorAll('audio')[0]
let soundGreen = document.querySelectorAll('audio')[1]
let soundYellow = document.querySelectorAll('audio')[2]
let soundBlue = document.querySelectorAll('audio')[3]
let soundPsycho = document.querySelectorAll('audio')[4]


// button to start or restart game in different modes
document.querySelector('#impact').addEventListener('click', impact)
document.querySelector('#alien').addEventListener('click', alienMode)
document.querySelector('#ascension').addEventListener('click', ascensionMode)

// added psycho sample if you click Rezz face
document.querySelector('.center-button').addEventListener('click', psycho)
// create buttons 
let green = document.querySelector('#green')
let red = document.querySelector('#red')
let yellow = document.querySelector('#yellow')
let blue = document.querySelector('#blue')
// add event listeners for each button
green.addEventListener('click', greenClick)
red.addEventListener('click', redClick)
yellow.addEventListener('click', yellowClick)
blue.addEventListener('click', blueClick)

let buttons = [green, red, blue, yellow] //put buttons into array

// create functions for when each button is pushed
function lightUp (e) {
  e.target.classList.add('clicked')
  setTimeout(function () {
    e.target.classList.remove('clicked')
  }, 100)
}

function greenClick (e) {
  playerPattern.push('G')
  soundGreen.currentTime = 0
  soundGreen.play()
  lightUp(e)
}

function redClick (e) {
  playerPattern.push('R')
  soundRed.currentTime = 0
  soundRed.play()
  lightUp(e)
}

function yellowClick (e) {
  playerPattern.push('Y')
  soundYellow.currentTime = 0
  soundYellow.play()
  lightUp(e)
}

function blueClick (e) {
  playerPattern.push('B')
  soundBlue.currentTime = 0
  soundBlue.play()
  lightUp(e)
}

function lightUpPlay () {
  // light up the correct tile
  if (levelPattern[i] === 'R') {
    setTimeout(function () {
      red.classList.add('clicked')
      soundRed.currentTime = 0
      soundRed.play()
    }, (i * 1000 + 10))
    setTimeout(function () {
      red.classList.remove('clicked')
    }, (i + 1) * 1000 - 100)
  }// closes red

  if (levelPattern[i] === 'G') {
    setTimeout(function () {
      green.classList.add('clicked')
      soundGreen.currentTime = 0
      soundGreen.play()
    }, (i * 1000 + 10))
    setTimeout(function () {
      green.classList.remove('clicked')
    }, (i + 1) * 1000 - 100)
  }// closes green

  if (levelPattern[i] === 'Y') {
    setTimeout(function () {
      yellow.classList.add('clicked')
      soundYellow.currentTime = 0
      soundYellow.play()
    }, (i * 1000 + 10))
    setTimeout(function () {
      yellow.classList.remove('clicked')
    }, (i + 1) * 1000 - 100)
  }// closes yellow

  if (levelPattern[i] === 'B') {
    setTimeout(function () {
      blue.classList.add('clicked')
      soundBlue.currentTime = 0
      soundBlue.play()
    }, (i * 1000 + 10))
    setTimeout(function () {
      blue.classList.remove('clicked')
    }, (i + 1) * 1000 - 100)
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

function startGame () {
  i = 0
  j = 0
  playLevel()
}

function newPattern () {
  // clear old pattern
  levelPattern = []
  if (ascension) {
    n += 1
  }
  // create new level pattern
  for (let x = 0; x < n; x++) {
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
    document.querySelector('.panel-1').style.background = 'black'
    level = 1
    playerPattern = []
  }
  j += 1
  if (levelPattern.length === playerPattern.length) {
    level += 1
    if (level === 5) {
      document.querySelector('.panel-1').style.background = "url('./images/REZZ_HandRed.png')"
      document.querySelector('.message').innerHTML = ' '
      document.querySelector('h2').innerHTML = ' '
    }
    if (level === 10) {
      document.body.style.background = "url('./images/swirl-small.png')"
    }
    document.querySelector('.level-counter').innerHTML = level
    newPattern()
    setTimeout(startGame, 1500)
  }
}// closes check function

function psycho () {
  soundPsycho.play()
}

function restart () {
  level = 1
  document.querySelector('.level-counter').innerHTML = level
  // reset styling
  document.querySelectorAll('.button')[0].style.background = 'rgb(57, 255, 20)'
  document.querySelectorAll('.button')[1].style.background = 'rgb(255, 69, 0)'
  document.querySelectorAll('.button')[2].style.background = '#FFFF33'
  document.querySelectorAll('.button')[3].style.background = 'rgb(0, 127, 255)'
  document.querySelector('.message').innerHTML = 'Space mom needs your help! Watch the lights carefully and repeat the sequence by pressing the buttons to transmit the coordinates. Select your mode below.'
  document.querySelector('.panel-3').style.background = 'black'
  document.querySelector('.panel-1').style.background = 'black'
  document.querySelector('.panel-2').style.background = 'black'
  document.querySelector('.center-button').style.background = "black url('./images/rezz.jpg')"
  document.querySelector('.center-button').style.backgroundSize = 'contain'
  // reset the check functions
  buttons.forEach(function(button) {button.removeEventListener('click', checkAlien)})
  buttons.forEach(function(button) {button.addEventListener('click', check)})
}

function impact () {
  n = 4
  newPattern()
  ascension = false
  restart()
  startGame()
}

function alienMode () {
  for (let y = 0; y < 4; y++) {
    document.querySelectorAll('.button')[y].style.background = 'black'
  }
  document.querySelector('.panel-3').style.background = 'linear-gradient(black, green, black)'
  document.querySelector('.panel-1').style.background = 'radial-gradient(green, black)'
  document.querySelector('.panel-2').style.background = 'radial-gradient(green, black)'
  document.querySelector('.center-button').style.background = "black url('./images/green-rezz.png')"
  document.querySelector('.center-button').style.backgroundSize = 'contain'
  document.querySelector('.center-button').style.border = '10px solid white'
  document.querySelector('.game-container').style.background = 'white'
  document.querySelector('.game-console').style.background = 'white'
  n = 5
  ascension = false
  newPattern()
  level = 1
  document.querySelector('.level-counter').innerHTML = level
  document.querySelector('.message').innerHTML = 'Space mom needs your help! Watch the lights carefully and repeat the sequence by pressing the buttons to transmit the coordinates. Select your mode below.'
// switch to alien pattern check 
  buttons.forEach(function(button) {button.removeEventListener('click', check)})
  buttons.forEach(function(button) {button.addEventListener('click', checkAlien)})
  startGame()
}

function ascensionMode () {
  n = 1
  newPattern()
  ascension = true
  level = 1
  restart()
  startGame()
}

// futuregame changes: 
// change out the sounds for each mode
// make the notes play faster in ascension mode
// disable mode buttons for 5 seconds after they are pushed
// add the option for a different number of notes in impact mode and alien mode
// make the full songs play after level 20 ???

function checkAlien () {
  if (levelPattern[n - 1 - j] !== playerPattern[j]) {
    // restart game
    document.querySelector('.level-counter').innerHTML = 1
    document.querySelector('.message').innerHTML = 'Space child, you have failed! Return to Earth.'
    document.querySelector('.panel-1').style.background = 'black'
    level = 1
    playerPattern = []
  }
  j += 1
  if (levelPattern.length === playerPattern.length) {
    level += 1
    if (level === 10) {
      document.body.style.background = "url('./images/swirl-small.png')"
    }
    document.querySelector('.level-counter').innerHTML = level
    newPattern()
    setTimeout(startGame, 1500)
  }
}// closes checkAlien function
