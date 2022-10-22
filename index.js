const labelArray = document.querySelectorAll('.label')
const navbar = document.querySelector('.navbar')
let glissPotential = false //whether glissando is possible or not
// const major = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24, 26, 28, 29, 31, 33, 35, 36] //major key pattern
// const minor = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22, 24, 26, 27, 29, 31, 32, 34, 36] //minor key pattern
let signature = major //selected key signature
let keyLegend = ['w', 's', 'x', 'e', 'd', 'c', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', 'i', 'k', 'o', 'l', '|']//, '|'] //keys to bind
let chordLegend = ['1', 'q', 'a', 'z'] //keys to bind to chords
let legendCount = 0 //counter for upper array
let signatureShift = 0
const sigList = ['C', 'C sharp', 'D', 'E flat', 'E', 'F', 'F sharp', 'G', 'G sharp', 'A', 'B flat', 'B'] //signature list
let binds = new Map()
// let reverseBinds = new Map()
let shifted = false

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
        if (relKey.pressed === true) return
        shifted ? relKey.keyDown(true) : relKey.keyDown(false)
        glissPotential = true
    })

    //mouse up
    label.addEventListener('mouseup', e => {
        const relKey = keyObjects[e.target.id]
        relKey.keyUp()
        glissPotential = false
    })

    //mouse leave
    label.addEventListener('mouseleave', e => {
        const relKey = keyObjects[e.target.id]
        relKey.keyUp()
    })

    //glissando
    label.addEventListener('mouseover', e => {
        const relKey = keyObjects[e.target.id]
        if (glissPotential === false) return
        shifted ? relKey.keyDown(true) : relKey.keyDown(false)
    })
})

document.querySelector('.piano').addEventListener('mouseleave', e => {
    glissPotential = false
})

document.querySelector('.sig-left').addEventListener('click', () => {
    activeKeyMapper(signatureShifter(--signatureShift), signature)
})

document.querySelector('.sig-right').addEventListener('click', () => {
    activeKeyMapper(signatureShifter(++signatureShift), signature)
})

function activeKeyMapper(shift, signature) {
    keyObjects.forEach(key => {
        key.active = 0
    })
    signature.forEach(note => {
        keyObjects[(note + shift) % 36].active = 1
    })
    if (keyObjects[0].active) {
        keyObjects[36].active = 1
    } else {
        keyObjects[37].active = 1
        // keyObjects[39].active = 1
    }

    stand.signature.innerHTML = `${noteArr[signatureShift]} ${signature === major ? 'major' : 'minor'}`

    activeKeyAssigner()
    //keyObjects.forEach(key => {
    //    console.log(key.name, key.active)
    //})
    //console.log("\n\n\n")
}

function activeKeyAssigner() {
    binds = new Map()
    // reverseBinds = new Map()
    let legendCounter = 0
    keyObjects.forEach(key => {
        if (key.type !== 'key') return
        if (key.active) {
            if (key.type === 'key') key.html.firstElementChild.innerHTML = keyLegend[legendCounter]
            binds.set('Key' + keyLegend[legendCounter++].toUpperCase(), key)
            // reverseBinds.set(key, 'Key' + keyLegend[legendCounter++].toUpperCase())
        } else {
            if (key.type === 'key') key.html.firstElementChild.innerHTML = ''
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
    if (e.getModifierState("CapsLock")) shifted = true
    else shifted = false
    // console.log(e.key)
    console.log(e.code)
	switch (e.code) {
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
        case 'Space':
            e.preventDefault()
            playSFX('bass')
            break;
        case 'Enter':
            e.preventDefault()
            playSFX('clap')
            break;
        case 'Backquote':
            e.preventDefault()
            playSFX('hihat')
            break;
        case 'Digit1':	//CHORDS
            e.preventDefault()
            chordHandler.playChord(0)
            break;
		case 'KeyQ':
			e.preventDefault()
            chordHandler.playChord(1)
			break;
		case 'KeyA':
			e.preventDefault()
            chordHandler.playChord(2)
			break;
		case 'KeyZ':
			e.preventDefault()
            chordHandler.playChord(3)
			break;
		default:
            const relKey = binds.get(e.code)
            if (!relKey || relKey.pressed === true) return
            shifted ? relKey.keyDown(true) : relKey.keyDown(false)
            stand.checkNote(e.code)
	}
})

function switchSig() {
    signature = signature === major ? minor : major
    return signature
}

window.addEventListener('keyup', e => {
	switch (e.code) {
        case 'ShiftLeft':
            shifted = false
            break;
        case 'ShiftRight':
            shifted = false
            break;
        case 'Digit1':	//CHORDS
            e.preventDefault()
            chordHandler.releaseChord(0)
            break;
		case 'KeyQ':
			e.preventDefault()
            chordHandler.releaseChord(1)
			break;
		case 'KeyA':
			e.preventDefault()
            chordHandler.releaseChord(2)
			break;
		case 'KeyZ':
			e.preventDefault()
            chordHandler.releaseChord(3)
			break;
		default:
        const relKey = binds.get(e.code)
        if (relKey && relKey.type === 'key') relKey.keyUp()
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
        signatureShift = selectedSong.signature[0]
        activeKeyMapper(signatureShifter(signatureShift), selectedSong.signature[1])
        stand.prepareSong(selectedSong)
    })
})

const pianoLegend = [
    'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3',
    'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4',
    'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5',
    'C6', '|'
  ]

const piano2key = new Map()

//music sheets
const stand = {
    visibleSheets: '',
    cs: new Array(),
    pastSheets: new Array(),
    prepareSong: function(song) {
        for (let i = 0; i < keyLegend.length; i++) {
            piano2key.set(pianoLegend[i], keyLegend[i])
        }
        this.cs = song.sheets.trim().split(/\s+/gi).map(note => piano2key.get(note))
        this.pipes = 0
        this.cs.forEach(note => {
            if (note !== '|') this.pipes++
        })
        this.updateVisible()

        this.signature.innerHTML = song.sigLiteral
        this.counter.innerHTML = this.pipes
        this.sheet.innerHTML = this.visibleSheets
        chordHandler.setChords(selectedSong.chords)
    },
    updateVisible: function() {
        this.visibleSheets = ''
        for (let i = 0; i < 20; i++) {
            if (this.cs[i]) this.visibleSheets = this.visibleSheets.concat(this.cs[i] + ' ')
        }
        this.sheet.innerHTML = this.visibleSheets.trim()
    },
    checkNote: function(key) {
        if (!selectedSong) return
        if (key === 'Key' + this.cs[0].toUpperCase()) this.passNote()
    },
    passNote: function() {
        this.pastSheets.push(this.cs.shift())
        if (this.pastSheets.length >= 10) this.pastSheets.shift()
        while (this.cs[0] === '|') this.pastSheets.push(this.cs.shift())
        this.updateVisible()
        this.counter.innerHTML = --this.pipes
        console.log(this.pastSheets)
    },
    sheet: document.querySelector('.sheet-div'),
    signature: document.querySelector('.signature-div'),
    counter: document.querySelector('.counter-div'),
    pipes: 0
}
// stand.sheet.innerHTML = '123456789a123456789b123456789c123456789d' 


const noteArr = ['C', 'C sharp', 'D', 'E flat', 'E', 'F', 'F sharp', 'G', 'G sharp', 'A', 'B flat', 'B']

//chords
const chordHandler = {
    enabled: false,
    chordObjects: chordObjectsArray,
    setChords: function(string) {
        string = string.split(/\s/gi)
        if (string.length !== 4) {
            this.chordObjects.forEach(chord => {
                chord.label.innerHTML = ''
            })
            this.enabled = false
            return
        }
        this.enabled = true
        string = string.map(chord => {
            return chord.split(/_/gi)
        })
        for (let i = 0; i < this.chordObjects.length; i++) {
            this.chordObjects[i].audioArray = string[i].map(note => {return new Audio(`./notes/${note}.mp3`)})
            this.chordObjects[i].label.innerHTML = chordLegend[i]
        }

    },
    playChord: function(chordIndex) {
        const chordInQuestion = this.chordObjects[chordIndex]
        if (!this.enabled || chordInQuestion.pressed) return
        this.chordObjects.forEach(chord => {
            chord.audioArray.forEach(audio => {
                audio.pause()
                audio.currentTime = 0
            })
        })
        chordInQuestion.audioArray.forEach(audio => audio.play())
        this.chordObjects.forEach(chord => chord.html.classList.remove('shake'))
        chordInQuestion.html.offsetWidth
        chordInQuestion.html.classList.add('shake')
        chordInQuestion.pressed = true
    },
    releaseChord: function(chordIndex) {
        this.chordObjects[chordIndex].pressed = false
    }
}

// const scrollHandler = {
//     scrollCounter: 0,
//     scrollLimit: 0,
//     currentScroll: 0,
//     scrollListener: function() {
//         window.addEventListener('scroll', () => {
//             if(++this.scrollCounter % 5 !== 0) return
//             this.scrollLimit = document.body.offsetHeight - window.innerHeight
//             this.currentScroll = (window.scrollY / this.scrollLimit).toFixed(1)
//             if (this.currentScroll < 0.4) {
//                 switchBlack()
//             } else if (this.currentScroll >= 0.4 && this.currentScroll < 0.7) {
//                 switchWhite()
//             } else if (this.currentScroll >= 0.7) {
//                 switchBlack()
//             }
//             console.log(this.currentScroll)
//         })
//     }
// }

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            // if (entry.target.id === 'whiteText') switchWhite()
        } else {
            entry.target.classList.remove('show')
            // if (entry.target.id === 'whiteText') switchBlack()
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach(element => observer.observe(element))

activeKeyMapper(signatureShift, signature)
// scrollHandler.scrollListener()