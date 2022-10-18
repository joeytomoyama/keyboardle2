console.log('LOL')
const labelArray = document.querySelectorAll('.label')
const navbar = document.querySelector('.navbar')
const chord1 = document.querySelector('.chord1')
const chord2 = document.querySelector('.chord2')
const chord3 = document.querySelector('.chord3')
const chord4 = document.querySelector('.chord4')
let glissPotential = false //whether glissando is possible or not
// const major = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24, 26, 28, 29, 31, 33, 35, 36] //major key pattern
// const minor = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22, 24, 26, 27, 29, 31, 32, 34, 36] //minor key pattern
let signature = major //selected key signature
let legend = ['w', 's', 'x', 'e', 'd', 'c', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', 'i', 'k', 'o', 'l', 'p', '|'] //keys to bind
let legendCount = 0 //counter for upper array
let signatureShift = 0
const sigList = ['C', 'C sharp', 'D', 'E flat', 'E', 'F', 'F sharp', 'G', 'G sharp', 'A', 'B flat', 'B'] //signature list
let binds = new Map()
let shifted = false

//set all keys to something
function allKeys(something) {
	labelArray.forEach(label => {
        label.innerHTML = ''
        if (something) label.innerHTML = something
	})
}

//mouse function
function keyDown(key) {
    // shifted ? key.shiftPlay() : key.play()
    key.play()
    if (shifted) {
        shifted = false
        keyDown(keyObjects[key.id + 12])
        shifted = true
        key.shifted = true
    }
    key.pressed = true
    key.html.style.background = 'white'
    key.html.firstElementChild.style.color = 'black'
}

function keyUp(key) {
    if (key.shifted) {
        keyUp(keyObjects[key.id + 12])
    }
    key.pressed = false
    key.html.style.background = 'black'
    key.html.firstElementChild.style.color = 'white'
}

labelArray.forEach(label => {
    //mouse down
    label.addEventListener('mousedown', e => {
        e.preventDefault()
        const relKey = keyObjects[e.target.id]
        // const relKey = keyObjects[e.target.classList[1]]
        if (relKey.pressed === true) return
        keyDown(relKey)
        glissPotential = true
    })

    //mouse up
    label.addEventListener('mouseup', e => {
        const relKey = keyObjects[e.target.id]
        keyUp(relKey)
        glissPotential = false
    })

    //mouse leave
    label.addEventListener('mouseleave', e => {
        const relKey = keyObjects[e.target.id]
        keyUp(relKey)
    })

    //glissando
    label.addEventListener('mouseover', e => {
        const relKey = keyObjects[e.target.id]
        if (glissPotential === false) return
        keyDown(relKey)
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
    binds = new Map()
    let legendCounter = 0
    keyObjects.forEach(key => {
        // (key.active) ? key.html.firstElementChild.innerHTML = legend[legendCounter++] : key.html.firstElementChild.innerHTML = ''
        if(key.active) {
            key.html.firstElementChild.innerHTML = legend[legendCounter]
            binds.set('Key' + legend[legendCounter++].toUpperCase(), key)
        } else {
            key.html.firstElementChild.innerHTML = ''
        }
    })
}

function signatureShifter(shift) {
    if (shift > 11) {
        signatureShift = 0
    } else if (shift < 0) {
        signatureShift = 11
    }
    return signatureShift
}

//keyboard function
window.addEventListener('keydown', e => {
    console.log(e.key, e.code)
    console.log(shifted)
	switch (e.code) {
        case 'Space':
			e.preventDefault()
			break;
		case 'Enter':
			e.preventDefault()
			break;
		case 'ArrowLeft':
			e.preventDefault
			activeKeyMapper(signatureShifter(--signatureShift), signature)
			break;
		case 'ArrowRight':
			e.preventDefault()
			activeKeyMapper(signatureShifter(++signatureShift), signature)
			break;
		case 'ArrowDown':
			e.preventDefault()
			activeKeyMapper(signatureShift, switchSig())
			break;
		case 'ArrowUp':
			e.preventDefault()
			activeKeyMapper(signatureShift, switchSig())
			break;
        case 'ShiftLeft':
            shifted = true
            break;
        case 'ShiftRight':
            shifted = true
            break;
        case 'Digit1':	//CHORDS
            e.preventDefault()
            // playChord(chord1)
            chord1.classList.remove('shake')
            chord1.offsetWidth
            chord1.classList.add('shake')
            break;
		case 'KeyQ':
			e.preventDefault()
			// playChord(chord2)
            chord2.classList.remove('shake')
            chord2.offsetWidth
            chord2.classList.add('shake')
			break;
		case 'KeyA':
			e.preventDefault()
			// playChord(chord3)
            chord3.classList.remove('shake')
            chord3.offsetWidth
            chord3.classList.add('shake')
			break;
		case 'KeyZ':
			e.preventDefault()
			// playChord(chord4)
            chord4.classList.remove('shake')
            chord4.offsetWidth
            chord4.classList.add('shake')
			break;
		default:
            // const relKey = keyObjects.find(key => key.html.firstElementChild.innerHTML === e.code[e.code.length - 1])
            const relKey = binds.get(e.code)
            if (!relKey || relKey.pressed === true) return
            keyDown(relKey)
	}
})

function switchSig() {
    signatureShift = signatureShift === major ? minor : major
    return signatureShift
}

window.addEventListener('keyup', e => {
	switch (e.code) {
        case 'ShiftLeft':
            shifted = false
            break;
        case 'ShiftRight':
            shifted = false
            break;
		default:
        // const relKey = keyObjects.find(key => key.html.firstElementChild.innerHTML === e.code[e.code.length - 1])
        const relKey = binds.get(e.code)
        if (relKey) keyUp(relKey)
	}
})

//navigation bar
songList.forEach(song => {
    const page = document.createElement('div')
    page.innerHTML = song.title
    page.className = 'page center'
    page.id = song.key
    navbar.appendChild(page)
})

let selectedSong = undefined
document.querySelectorAll('.page').forEach(page => {
    page.addEventListener('click', e => {
        selectedSong = songList.get(e.target.id)
        console.log(selectedSong)
        signatureShift = selectedSong.signature[0]
        activeKeyMapper(signatureShifter(signatureShift), selectedSong.signature[1])
        document.querySelector('.signature-div').innerHTML = selectedSong.sigLiteral
    })
})

//music sheets
const stand = document.querySelector('.sheet-div')
stand.innerHTML = '123456789a123456789b123456789c123456789d'

function stringToArray(string) {
    return string.trim().split(/\s+/gi)
}

//keyObjects.forEach(key => {
//    console.log(key.keybind)
//})

//chords

//chord animations
// chord1.addEventListener('click', () => {
//     chord1.style.animation = 'shake 3s'
// })

activeKeyAssigner()