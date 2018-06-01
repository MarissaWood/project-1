class Button {
    constructor (object, color, sound,) {
        this.object = object
        this.color = color
        this.sound = sound

        this.playSound () {
            this.sound.play()
        }
        this.lightUp (e) {
            this.object.classList.add('clicked')
            setTimeout(function () {
              e.target.classList.remove('clicked')
            }, 100)
        }

        this.clicked () {
            this.object.addEventListener('click', click)
        }
    }
}

function click() {

}

const red = new Button(document.querySelector('#red'), "R", document.querySelectorAll('audio')[0])