const keyObjects = [
    {
        "name": "C3",
        "id": 0,
        "play": function() {
            playSFX("C3")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.C3')
    },
    {
        "name": "CS3",
        "id": 1,
        "play": function() {
            playSFX("CS3")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.CS3')
    },
    {
        "name": "D3",
        "id": 2,
        "play": function() {
            playSFX("D3")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.D3')
    },
    {
        "name": "DS3",
        "id": 3,
        "play": function() {
            playSFX("DS3")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.DS3')
    },
    {
        "name": "E3",
        "id": 4,
        "play": function() {
            playSFX("E3")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.E3')
    },
    {
        "name": "F3",
        "id": 5,
        "play": function() {
            playSFX("F3")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.F3')
    },
    {
        "name": "FS3",
        "id": 6,
        "play": function() {
            playSFX("FS3")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.FS3')
    },
    {
        "name": "G3",
        "id": 7,
        "play": function() {
            playSFX("G3")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.G3')
    },
    {
        "name": "GS3",
        "id": 8,
        "play": function() {
            playSFX("GS3")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.GS3')
    },
    {
        "name": "A3",
        "id": 9,
        "play": function() {
            playSFX("A3")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.A3')
    },
    {
        "name": "AS3",
        "id": 10,
        "play": function() {
            playSFX("AS3")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.AS3')
    },
    {
        "name": "B3",
        "id": 11,
        "play": function() {
            playSFX("B3")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.B3')
    },
    {
        "name": "C4",
        "id": 12,
        "play": function() {
            playSFX("C4")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.C4')
    },
    {
        "name": "CS4",
        "id": 13,
        "play": function() {
            playSFX("CS4")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.CS4')
    },
    {
        "name": "D4",
        "id": 14,
        "play": function() {
            playSFX("D4")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.D4')
    },
    {
        "name": "DS4",
        "id": 15,
        "play": function() {
            playSFX("DS4")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.DS4')
    },
    {
        "name": "E4",
        "id": 16,
        "play": function() {
            playSFX("E4")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.E4')
    },
    {
        "name": "F4",
        "id": 17,
        "play": function() {
            playSFX("F4")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.F4')
    },
    {
        "name": "FS4",
        "id": 18,
        "play": function() {
            playSFX("FS4")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.FS4')
    },
    {
        "name": "G4",
        "id": 19,
        "play": function() {
            playSFX("G4")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.G4')
    },
    {
        "name": "GS4",
        "id": 20,
        "play": function() {
            playSFX("GS4")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.GS4')
    },
    {
        "name": "A4",
        "id": 21,
        "play": function() {
            playSFX("A4")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.A4')
    },
    {
        "name": "AS4",
        "id": 22,
        "play": function() {
            playSFX("AS4")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.AS4')
    },
    {
        "name": "B4",
        "id": 23,
        "play": function() {
            playSFX("B4")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.B4')
    },
    {
        "name": "C5",
        "id": 24,
        "play": function() {
            playSFX("C5")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.C5')
    },
    {
        "name": "CS5",
        "id": 25,
        "play": function() {
            playSFX("CS5")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.CS5')
    },
    {
        "name": "D5",
        "id": 26,
        "play": function() {
            playSFX("D5")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.D5')
    },
    {
        "name": "DS5",
        "id": 27,
        "play": function() {
            playSFX("DS5")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.DS5')
    },
    {
        "name": "E5",
        "id": 28,
        "play": function() {
            playSFX("E5")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.E5')
    },
    {
        "name": "F5",
        "id": 29,
        "play": function() {
            playSFX("F5")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.F5')
    },
    {
        "name": "FS5",
        "id": 30,
        "play": function() {
            playSFX("FS5")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.FS5')
    },
    {
        "name": "G5",
        "id": 31,
        "play": function() {
            playSFX("G5")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.G5')
    },
    {
        "name": "GS5",
        "id": 32,
        "play": function() {
            playSFX("GS5")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.GS5')
    },
    {
        "name": "A5",
        "id": 33,
        "play": function() {
            playSFX("A5")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.A5')
    },
    {
        "name": "AS5",
        "id": 34,
        "play": function() {
            playSFX("AS5")
        },
        "active": 0,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.AS5')
    },
    {
        "name": "B5",
        "id": 35,
        "play": function() {
            playSFX("B5")
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.B5')
    },
    {
        "name": "C6",
        "id": 36,
        "play": function() {
            playSFX('C6')
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.C6')
    }
]

const labelArray = document.querySelectorAll('.label')
let glissPotential = false //whether glissando is possible or not
const major = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24, 26, 28, 29, 31, 33, 35, 36] //major key pattern
const minor = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22, 24, 26, 27, 29, 31, 32, 34, 36] //minor key pattern
let signature = major
let legend = ['S', 'X', 'E', 'D', 'C', 'R', 'F', 'V', 'T', 'G', 'B', 'Y', 'H', 'N', 'U', 'J', 'M', 'I', 'K', 'O', 'L', 'P', '|']
let legendCount = 0
let signatureShift = 0

//set all keys to something
function allKeys(something) {
	labelArray.forEach(label => {
        label.innerHTML = ''
        if (something) label.innerHTML = something
	})
}

//mouse function
labelArray.forEach(label => {
    //mouse down
    label.addEventListener('mousedown', e => {
        e.preventDefault()
        const relKey = keyObjects[e.target.id]
        relKey.play()
        relKey.pressed = true
        glissPotential = true
        relKey.html.style.background = 'white'
        relKey.html.firstElementChild.style.color = 'black'
    })

    //mouse up
    label.addEventListener('mouseup', e => {
        // e.preventDefault()
        const relKey = keyObjects[e.target.id]
        relKey.pressed = false
        glissPotential = false
        relKey.html.style.background = 'black'
        relKey.html.firstElementChild.style.color = 'white'
    })

    //mouse leave
    label.addEventListener('mouseleave', e => {
        // e.preventDefault()
        const relKey = keyObjects[e.target.id]
        relKey.pressed = false
        relKey.html.style.background = 'black'
        relKey.html.firstElementChild.style.color = 'white'
    })

    //glissando
    label.addEventListener('mouseover', e => {
        e.preventDefault()
        const relKey = keyObjects[e.target.id]
        if (glissPotential === true) {
            relKey.play()
            relKey.pressed = true
            relKey.html.style.background = 'white'
            relKey.html.firstElementChild.style.color = 'black'
        }
    })
})

document.querySelector('.piano').addEventListener('mouseleave', e => {
    glissPotential = false
})

document.querySelector('.sig-arrow-left').addEventListener('click', () => {
    activeKeyMapper(signatureShifter(--signatureShift), signature)
})

document.querySelector('.sig-arrow-right').addEventListener('click', () => {
    activeKeyMapper(signatureShifter(++signatureShift), signature)
})

function activeKeyMapper(shift, signature) {
    keyObjects.forEach(key => {
        key.active = 0
    })
    signature.forEach(note => {
        keyObjects[(note + shift) % 36].active = 1
    })
    if (keyObjects[0].active) keyObjects[keyObjects.length - 1].active = 1

    activeKeyAssigner()

    //keyObjects.forEach(key => {
    //    console.log(key.name, key.active)
    //})
    //console.log("\n\n\n")
}

function activeKeyAssigner() {
    let legendCounter = 0
    keyObjects.forEach(key => {
        (key.active) ? key.html.firstElementChild.innerHTML = legend[legendCounter++] : key.html.firstElementChild.innerHTML = ''
    })
}

function signatureShifter(shift) {
    if (shift > 11) {
        shift = 0
    } else if (shift < 0) {
        shift = 11
    }
    return signatureShift
}

//keyboard function
window.addEventListener('keydown', e => {
    console.log(e.key, e.code)
	switch (e.code) {
		default:
        const relKey = keyObjects.find(key => key.html.firstElementChild.innerHTML === e.code[e.code.length - 1])
        if (relKey.pressed === false) {
            relKey.play()
            relKey.pressed = true
            relKey.html.style.background = 'white'
            relKey.html.firstElementChild.style.color = 'black'
        }
	}
})

window.addEventListener('keyup', e => {
    console.log(e.key, e.code)
	switch (e.code) {
		default:
        const relKey = keyObjects.find(key => key.html.firstElementChild.innerHTML === e.code[e.code.length - 1])
        relKey.pressed = false
        relKey.html.style.background = 'black'
        relKey.html.firstElementChild.style.color = 'white'
	}
})

//music sheets
const stand = document.querySelector('.sheet-div')
stand.innerHTML = '123456789a123456789b123456789c123456789d'

//keyObjects.forEach(key => {
//    console.log(key.keybind)
//})

activeKeyAssigner()