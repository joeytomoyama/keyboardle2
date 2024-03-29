let priColor = 'black'
let secColor = 'white'

function switchBlack() {
    priColor = 'black'
    secColor = 'white'
    document.documentElement.style.setProperty('--priColor', 'black')
    document.documentElement.style.setProperty('--secColor', 'white')
    document.documentElement.style.setProperty('--invert', 'empty')
}
function switchWhite() {
    priColor = 'white'
    secColor = 'black'
    document.documentElement.style.setProperty('--priColor', 'white')
    document.documentElement.style.setProperty('--secColor', 'black');
    document.documentElement.style.setProperty('--invert', '100%')
}

function keysDown(shift) {
    playSFX(this.name)
    this.pressed = true
    this.html.style.background = secColor//'white'
    this.html.firstElementChild.style.color = priColor//'black'
    if (shift) {
        keyObjects[this.id + 12].keyDown()
        this.shifted = true
    }
}
function keysUp() {
    this.pressed = false
    this.html.style.background = priColor//'black'
    this.html.firstElementChild.style.color = secColor//'white'
    if (this.shifted && keyObjects[this.id + 12].type === 'key') {
        keyObjects[this.id + 12].keyUp()
    }
}

const keyObjects = [
    {
        type: 'key',
        name: "C3",
        id: 0,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.C3')
    },
    {
        type: 'key',
        name: "CS3",
        id: 1,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.CS3')
    },
    {
        type: 'key',
        name: "D3",
        id: 2,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.D3')
    },
    {
        type: 'key',
        name: "DS3",
        id: 3,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.DS3')
    },
    {
        type: 'key',
        name: "E3",
        id: 4,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.E3')
    },
    {
        type: 'key',
        name: "F3",
        id: 5,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.F3')
    },
    {
        type: 'key',
        name: "FS3",
        id: 6,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.FS3')
    },
    {
        type: 'key',
        name: "G3",
        id: 7,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.G3')
    },
    {
        type: 'key',
        name: "GS3",
        id: 8,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.GS3')
    },
    {
        type: 'key',
        name: "A3",
        id: 9,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.A3')
    },
    {
        type: 'key',
        name: "AS3",
        id: 10,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.AS3')
    },
    {
        type: 'key',
        name: "B3",
        id: 11,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.B3')
    },
    {
        type: 'key',
        name: "C4",
        id: 12,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.C4')
    },
    {
        type: 'key',
        name: "CS4",
        id: 13,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.CS4')
    },
    {
        type: 'key',
        name: "D4",
        id: 14,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.D4')
    },
    {
        type: 'key',
        name: "DS4",
        id: 15,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.DS4')
    },
    {
        type: 'key',
        name: "E4",
        id: 16,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.E4')
    },
    {
        type: 'key',
        name: "F4",
        id: 17,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.F4')
    },
    {
        type: 'key',
        name: "FS4",
        id: 18,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.FS4')
    },
    {
        type: 'key',
        name: "G4",
        id: 19,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.G4')
    },
    {
        type: 'key',
        name: "GS4",
        id: 20,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.GS4')
    },
    {
        type: 'key',
        name: "A4",
        id: 21,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.A4')
    },
    {
        type: 'key',
        name: "AS4",
        id: 22,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.AS4')
    },
    {
        type: 'key',
        name: "B4",
        id: 23,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.B4')
    },
    {
        type: 'key',
        name: "C5",
        id: 24,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.C5')
    },
    {
        type: 'key',
        name: "CS5",
        id: 25,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.CS5')
    },
    {
        type: 'key',
        name: "D5",
        id: 26,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.D5')
    },
    {
        type: 'key',
        name: "DS5",
        id: 27,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.DS5')
    },
    {
        type: 'key',
        name: "E5",
        id: 28,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.E5')
    },
    {
        type: 'key',
        name: "F5",
        id: 29,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.F5')
    },
    {
        type: 'key',
        name: "FS5",
        id: 30,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.FS5')
    },
    {
        type: 'key',
        name: "G5",
        id: 31,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.G5')
    },
    {
        type: 'key',
        name: "GS5",
        id: 32,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.GS5')
    },
    {
        type: 'key',
        name: "A5",
        id: 33,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.A5')
    },
    {
        type: 'key',
        name: "AS5",
        id: 34,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 0,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.AS5')
    },
    {
        type: 'key',
        name: "B5",
        id: 35,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.B5')
    },
    {
        type: 'key',
        name: "C6",
        id: 36,
        keyDown: keysDown,
        keyUp: keysUp,
        active: 1,
        keybind: undefined,
        pressed: false,
        shifted: false,
        html: document.querySelector('.C6')
    },
    {
        type: 'ghostKey',
        name: "CS6",
        id: 37,
        keyDown: function() {
            // playSFX("CS6")
            console.log('phantom key pressed')
        },
        active: 0,
    },
    {
        type: 'ghostKey',
        name: "D6",
        id: 38,
        keyDown: function() {
            // playSFX("D6")
            console.log('phantom key pressed')
        },
        active: 1,
    },
    {
        type: 'phantomKey',
        name: "DS6",
        id: 39,
        keyDown: function() {
            // playSFX("DS6")
            console.log('phantom key pressed')
        }
    },
    {
        type: 'phantomKey',
        name: "E6",
        id: 40,
        keyDown: function() {
            // playSFX("E6")
            console.log('phantom key pressed')
        }
    },
    {
        type: 'phantomKey',
        name: "F6",
        id: 41,
        keyDown: function() {
            // playSFX("F6")
            console.log('phantom key pressed')
        }
    },
    {
        type: 'phantomKey',
        name: "FS6",
        id: 42,
        keyDown: function() {
            // playSFX("FS6")
            console.log('phantom key pressed')
        }
    },
    {
        type: 'phantomKey',
        name: "G6",
        id: 43,
        keyDown: function() {
            // playSFX("G6")
            console.log('phantom key pressed')
        }
    },
    {
        type: 'phantomKey',
        name: "GS6",
        id: 44,
        keyDown: function() {
            // playSFX("GS6")
            console.log('phantom key pressed')
        }
    },
    {
        type: 'phantomKey',
        name: "A6",
        id: 45,
        keyDown: function() {
            // playSFX("A6")
            console.log('phantom key pressed')
        }
    },
    {
        type: 'phantomKey',
        name: "AS6",
        id: 46,
        keyDown: function() {
            // playSFX("AS6")
            console.log('phantom key pressed')
        }
    },
    {
        type: 'phantomKey',
        name: "B6",
        id: 47,
        keyDown: function() {
            // playSFX("B6")
            console.log('phantom key pressed')
        }
    },
    {
        type: 'phantomKey',
        name: "C7",
        id: 48,
        keyDown: function() {
            // playSFX("C7")
            console.log('phantom key pressed')
        }
    }]/*
    {
        type: 'percussion',
        name: "hihat",
        id: 49,
        keyDown: function() {
            // playSFX("AS6")
        },
        pressed: false,
        html: document.querySelector('.hihat')
    },
    {
        type: 'percussion',
        name: "bass",
        id: 50,
        keyDown: function() {
            // playSFX("B6")
        },
        pressed: false,
        html: document.querySelector('.bass')
    },
    {
        type: 'percussion',
        name: "tom",
        id: 51,
        keyDown: function() {
            // playSFX("C7")
        },
        pressed: false,
        html: document.querySelector('.tom')
    }
]*/

const chordObjectsArray = [
    {
        name: "chord1",
        id: -4,
        audioArray: new Array(3),
        keybind: undefined,
        pressed: false,
        html: document.querySelector('.chord1'),
        label: document.querySelector('.chord-label1')
    },
    {
        name: "chord2",
        id: -3,
        audioArray: new Array(3),
        keybind: undefined,
        pressed: false,
        html: document.querySelector('.chord2'),
        label: document.querySelector('.chord-label2')
    },
    {
        name: "chord3",
        id: -2,
        audioArray: new Array(3),
        keybind: undefined,
        pressed: false,
        html: document.querySelector('.chord3'),
        label: document.querySelector('.chord-label3')
    },
    {
        name: "chord4",
        id: -1,
        audioArray: new Array(3),
        keybind: undefined,
        pressed: false,
        html: document.querySelector('.chord4'),
        label: document.querySelector('.chord-label4')
    },
]

const percObjectsArray = [
    {
        name: 'hihat',
        id: 0,
        pressed: false,
        keyDown: function() {
            if (this.pressed) return
            playSFX(this.name)
            this.pressed = true
            this.html.style.background = secColor
        },
        keyUp: function() {
            this.pressed = false
            this.html.style.background = priColor
        },
        html: document.querySelector('.hihat'),
    },
    {
        name: 'bass',
        id: 1,
        pressed: false,
        keyDown: function() {
            if (this.pressed) return
            playSFX(this.name)
            this.pressed = true
            this.html.style.background = secColor
        },
        keyUp: function() {
            this.pressed = false
            this.html.style.background = priColor
        },
        html: document.querySelector('.bass'),
    },
    {
        name: 'tom',
        id: 2,
        pressed: false,
        keyDown: function() {
            if (this.pressed) return
            playSFX(this.name)
            this.pressed = true
            this.html.style.background = secColor
        },
        keyUp: function() {
            this.pressed = false
            this.html.style.background = priColor
        },
        html: document.querySelector('.tom'),
    }
]