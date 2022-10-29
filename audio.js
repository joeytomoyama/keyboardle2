class AudioSwitcher {
    constructor(path, amount) {
        this.path = path
        this.array = new Array(amount)
        for (let i = 0; i < amount; i++) {
            this.array[i] = new Audio(path)
        }
        this.count = 0
    }

    go() {
        const audio = this.array[this.count % this.array.length]
<<<<<<< HEAD
        audio.pause()
        audio.currentTime = 0
        audio.play()
=======
        // audio.pause()
        audio.currentTime = 0
        audio.play()
        this.count++
>>>>>>> b66a8651c10babeb1b32e6782b187028bea7d552
    }

    setVolume(volume) {
        this.array.forEach(audio => {
            audio.volume = volume
        })
    }
}

const keyMap = new Map()
function addSFX(key, path, amount) {
    keyMap.set(key, new AudioSwitcher(path, amount))
}

function playSFX(key) {
    keyMap.get(key).go()
}

function setVolume(key, volume) {
    keyMap.get(key).setVolume(volume)
}

function setAllVolume(volume) {
    for(let key of keyMap.values()) {
        key.setVolume(volume)
    }
}

addSFX('C3', './notes/3c.mp3', 3)
addSFX('CS3', './notes/3c-.mp3', 3)
addSFX('D3', './notes/3d.mp3', 3)
addSFX('DS3', './notes/3d-.mp3', 3)
addSFX('E3', './notes/3e.mp3', 3)
addSFX('F3', './notes/3f.mp3', 3)
addSFX('FS3', './notes/3f-.mp3', 3)
addSFX('G3', './notes/3g.mp3', 3)
addSFX('GS3', './notes/3g-.mp3', 3)
addSFX('A3', './notes/3a.mp3', 3)

addSFX('AS3', './notes/3a-.mp3', 3)
addSFX('B3', './notes/3b.mp3', 3)
addSFX('C4', './notes/4c.mp3', 3)
addSFX('CS4', './notes/4c-.mp3', 3)
addSFX('D4', './notes/4d.mp3', 3)
addSFX('DS4', './notes/4d-.mp3', 3)
addSFX('E4', './notes/4e.mp3', 3)
addSFX('F4', './notes/4f.mp3', 3)
addSFX('FS4', './notes/4f-.mp3', 3)
addSFX('G4', './notes/4g.mp3', 3)

addSFX('GS4', './notes/4g-.mp3', 3)
addSFX('A4', './notes/4a.mp3', 3)
addSFX('AS4', './notes/4a-.mp3', 3)
addSFX('B4', './notes/4b.mp3', 3)
addSFX('C5', './notes/5c.mp3', 3)
addSFX('CS5', './notes/5c-.mp3', 3)
addSFX('D5', './notes/5d.mp3', 3)
addSFX('DS5', './notes/5d-.mp3', 3)
addSFX('E5', './notes/5e.mp3', 3)
addSFX('F5', './notes/5f.mp3', 3)

addSFX('FS5', './notes/5f-.mp3', 3)
addSFX('G5', './notes/5g.mp3', 3)
addSFX('GS5', './notes/5g-.mp3', 3)
addSFX('A5', './notes/5a.mp3', 3)
addSFX('AS5', './notes/5a-.mp3', 3)
addSFX('B5', './notes/5b.mp3', 3)
addSFX('C6', './notes/6c.mp3', 3)

addSFX('bass', './notes/eKick1.mp3', 1)
addSFX('tom', './notes/clap.mp3', 1)
addSFX('hihat', './notes/hihat.mp3', 1)


setAllVolume(0.5)

console.log('ready')