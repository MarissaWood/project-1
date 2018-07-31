// variables for the game
let level = 1
let playerPattern = []
let levelPattern = ['G', 'B', 'R', 'R'] // default starting pattern
let i = 0 // variable for playing colors first
let j = 0 // variable for keeping track of player input
let n = 4 // variable for number of notes

let soundPsycho = document.querySelectorAll('audio')[4]
// alien sounds 
let alienGreen = document.querySelectorAll('audio')[5]
let alienRed = document.querySelectorAll('audio')[6]
let alienYellow = document.querySelectorAll('audio')[7]
let alienBlue = document.querySelectorAll('audio')[8]

// button to start or restart game 
startButton = (document.querySelector('#alien'))

function activateStart () => startButton.addEventListener('click', alienMode)

// function to deactivate start button for 5 seconds after it is pushed
function deactivate () {
  startButton.removeEventListener('click', alienMode)
  setTimeout(activateStart, 5000)
}

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

let buttons = [green, red, blue, yellow] // put buttons into array

// create functions for when each button is pushed
function lightUp (e) {
  e.target.classList.add('clicked')
}
function removeTransition (e) {
  e.target.classList.remove('clicked')
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition))
// function to play each button & allow repeat play before soundclip's full runtime
function play (color) {
    color.currentTime = 0
    color.play()
  }
  
function greenClick (e) {
    playerPattern.push('G')
    play(soundGreen)
    lightUp(e)
  }
  
  function redClick (e) {
    playerPattern.push('R')
    play(soundRed)
    lightUp(e)
  }
  
  function yellowClick (e) {
    playerPattern.push('Y')
    play(soundYellow)
    lightUp(e)
  }
  
  function blueClick (e) {
    playerPattern.push('B')
    play(soundBlue)
    lightUp(e)
  }
  // function to display the pattern for each level that the player must copy
  function lightUpPlay () {
    // light up the correct tile
    if (levelPattern[i] === 'R') {
      setTimeout(function () {
        red.classList.add('clicked')
        play(soundRed)
      }, (i * 800 + 5))
    }// closes red
  
    if (levelPattern[i] === 'G') {
      setTimeout(function () {
        green.classList.add('clicked')
        play(soundGreen)
      }, (i * 800 + 5))
    }// closes green
  
    if (levelPattern[i] === 'Y') {
      setTimeout(function () {
        yellow.classList.add('clicked')
        play(soundYellow)
      }, (i * 800 + 5))
    }// closes yellow
  
    if (levelPattern[i] === 'B') {
      setTimeout(function () {
        blue.classList.add('clicked')
        play(soundBlue)
      }, (i * 800 + 5))
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

// function restart () {
//   level = 1
//   document.querySelector('.level-counter').innerHTML = level
//   // reset styling
//   document.querySelectorAll('.button')[0].style.background = 'rgb(57, 255, 20)'
//   document.querySelectorAll('.button')[1].style.background = 'rgb(255, 69, 0)'
//   document.querySelectorAll('.button')[2].style.background = '#FFFF33'
//   document.querySelectorAll('.button')[3].style.background = 'rgb(0, 127, 255)'
//   document.querySelector('.message').innerHTML = 'Space mom needs your help! Watch the lights carefully and repeat the sequence by pressing the buttons to transmit the coordinates. Select your mode below.'
//   document.querySelector('.panel-3').style.background = 'black'
//   document.querySelector('.panel-1').style.background = 'black'
//   document.querySelector('.panel-2').style.background = 'black'
//   document.querySelector('.center-button').style.background = "black url('./images/rezz.jpg')"
//   document.querySelector('.center-button').style.backgroundSize = 'contain'
//   // reset the check functions
//   buttons.forEach(function (button) { button.removeEventListener('click', checkAlien) })
//   buttons.forEach(function (button) { button.addEventListener('click', check) })
// }

// function impact () {
//   n = 4
//   newPattern()
//   ascension = false
//   restart()
//   startGame()
//   setTimeout(deactivate, 10)
// }

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
  newPattern()
  level = 1
  document.querySelector('.level-counter').innerHTML = level
  document.querySelector('.message').innerHTML = 'Space mom needs your help! Watch the lights carefully and repeat the sequence by pressing the buttons to transmit the coordinates. Select your mode below.'
  // switch to alien pattern check
  buttons.forEach(function (button) { button.removeEventListener('click', check) })
  buttons.forEach(function (button) { button.addEventListener('click', checkAlien) })
  startGame()
  setTimeout(deactivate, 10)
}


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
