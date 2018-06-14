// this is my attempt at making my code DRY-er (very much a work in progress)
/*
let level = 1
let levelPattern = ['G', 'B', 'R', 'R'] // default starting pattern
let i = 0 // variable for playing colors first
let j = 0 // variable for keeping track of player input
let n = 4 // variable for number of notes
let ascension = false
*/

let playerPattern = []

class Button {
  constructor (object, color, sound) {
    this.object = object
    this.color = color
    this.sound = sound
  }

  playSound () {
    this.sound.play()
  }

  lightUp (e) {
    e.target.classList.add('clicked')
    setTimeout(function () {
      e.target.classList.remove('clicked')
    }, 100)
  }

  clicked (e) {
    playerPattern.push(this.color)
    console.log(this.color)
    // this.playSound()
    // this.lightUp(e)
  }
}

const red = new Button(document.querySelector('#red'), 'R', document.querySelectorAll('audio')[0])
const green = new Button(document.querySelector('#green'), 'G', document.querySelectorAll('audio')[1])
const yellow = new Button(document.querySelector('#yellow'), 'Y', document.querySelectorAll('audio')[2])
const blue = new Button(document.querySelector('#blue'), 'B', document.querySelectorAll('audio')[3])

red.object.addEventListener('click', red.clicked)
green.object.addEventListener('click', green.clicked)
yellow.object.addEventListener('click', yellow.clicked)
blue.object.addEventListener('click', blue.clicked)
