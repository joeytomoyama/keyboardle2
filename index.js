const labelArray = document.querySelectorAll('.label')
const navbar = document.querySelector('.navbar')
let glissPotential = false //whether glissando is possible or not
// const major = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24, 26, 28, 29, 31, 33, 35, 36] //major key pattern
// const minor = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22, 24, 26, 27, 29, 31, 32, 34, 36] //minor key pattern
let signature = major //selected key signature
let legend = ['w', 's', 'x', 'e', 'd', 'c', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', 'i', 'k', 'o', 'l', 'p', '|'] //keys to bind
let chordLegend = ['1', 'q', 'a', 'z'] //keys to bind to chords
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
    if (keyObjects[0].active) {
        keyObjects[36].active = 1
    } else {
        keyObjects[37].active = 1
        // keyObjects[39].active = 1
    }

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
        if (key.type === 'phantomKey') return
        if(key.active) {
            if (key.type === 'key') key.html.firstElementChild.innerHTML = legend[legendCounter]
            binds.set('Key' + legend[legendCounter++].toUpperCase(), key)
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
    // console.log(e.key)
    // console.log(e.code)
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
            // const relKey = keyObjects.find(key => key.html.firstElementChild.innerHTML === e.code[e.code.length - 1])
            const relKey = binds.get(e.code)
            console.log(relKey)
            if (!relKey || relKey.pressed === true) return
            shifted ? relKey.keyDown(true) : relKey.keyDown(false)
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
        // const relKey = keyObjects.find(key => key.html.firstElementChild.innerHTML === e.code[e.code.length - 1])
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
        console.log(selectedSong)
        signatureShift = selectedSong.signature[0]
        activeKeyMapper(signatureShifter(signatureShift), selectedSong.signature[1])
        document.querySelector('.signature-div').innerHTML = selectedSong.sigLiteral
        chordHandler.setChords(selectedSong.chords)
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


const scrollHandler = {
    scrollCounter: 0,
    scrollLimit: 0,
    currentScroll: 0,
    scrollListener: function() {
        window.addEventListener('scroll', () => {
            if(++this.scrollCounter % 5 !== 0) return
            this.scrollLimit = document.body.offsetHeight - window.innerHeight
            this.currentScroll = (window.scrollY / this.scrollLimit).toFixed(1)
            if (this.currentScroll < 0.4) {
                switchBlack()
            } else if (this.currentScroll >= 0.4 && this.currentScroll < 0.7) {
                switchWhite()
            } else if (this.currentScroll >= 0.7) {
                switchBlack()
            }
            console.log(this.currentScroll)
        })
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach(element => observer.observe(element))

activeKeyAssigner()
scrollHandler.scrollListener()