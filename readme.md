# Selector 

![image](https://user-images.githubusercontent.com/26101268/40845534-00031f72-6585-11e8-86fa-1918678d058a.png)

## Description
Selector is based on the game 'Simon'.  I themed it around my favorite EDM Producer, Rezz.  Selector is the name of one of her songs and each mode is named after another song. For each level, a sequence is played on the game board and the player has to repeat it back to progress to the next level.  

I created three different modes of play for my game. 

**Impact** mode is the normal mode.  There are always has five buttons for each level and it creates a new random pattern every time.  **Alien** mode changes the styling of the game board.  It turns all fo the buttons black and the player must repeat the pattern backwards to get to the next level.  **Ascension** mode starts with one button for level one and increases the length of the pattern for every subsequent level. 

## Technologies used: 
This game was built using HTML5, CSS3 and JavaScript.

## The approach taken:
Each button on the game board has several functions tied to it.  When a button is clicked, it lights up, plays a sound and adds the color letter to a player input array.  

Everytime a button is clicked, it checks to see if it matches the level pattern array.  If it doesn't match, the game starts over.  The game board displays a message and the level goes back to 1.  If the player array matches the level array, the player moves on to the next level and a new random pattern is generated. 

An example for one of the buttons:

```js
let green = document.querySelector('#green')
let soundGreen = document.querySelectorAll('audio')[1]

green.addEventListener('click', greenClick)

function lightUp (e) {
  e.target.classList.add('clicked')
  setTimeout(function () {
    e.target.classList.remove('clicked')
  }, 100)
}

function greenClick (e) {
  playerPattern.push('G')
  soundGreen.play()
  lightUp(e)
}

``` 

## Install instructions:
If you want to install this game locally, simply fork and clone the repo and open the index.html file.   

The game can also be accessed at [https://marissawood.github.io/project-1/](https://marissawood.github.io/project-1/) 

## Unsolved problems:
If a player pushes the game mode buttons several times, a new pattern is generated and played.  If this happens is quick succession, the patterns overlap and the play can't tell which one is the current pattern that the game will check.

## Future features:
I plan to expand on these game modes.  Each mode is named after a Rezz song, so I plan on switching out the sounds the buttons make for each mode based on the song.  Also, if I can get permission, I would like to have the full song play if the player gets to level 20.

I plan to add easy-medium-hard settings for Impact Mode and Alien.  Easy with keep the pattern to four buttons each level, medium will increase it to seven and hard will increase it to ten. 

I also plan to deactivate the game start buttons for five seconds after one is pushed to prevent overlapping patterns.  
