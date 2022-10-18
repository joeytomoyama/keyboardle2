const keyObjects = [
    {
        "name": "C3",
        "id": 0,
        "play": function() {
            playSFX("C3")
        },
        "shiftPlay": function() {
            playSFX("C3")
            playSFX("C4")
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
        "shiftPlay": function() {
            playSFX("CS3")
            playSFX("CS4")
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
        "shiftPlay": function() {
            playSFX("D3")
            playSFX("D4")
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
        "shiftPlay": function() {
            playSFX("DS3")
            playSFX("DS4")
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
        "shiftPlay": function() {
            playSFX("E3")
            playSFX("E4")
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
        "shiftPlay": function() {
            playSFX("F3")
            playSFX("F4")
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
        "shiftPlay": function() {
            playSFX("FS3")
            playSFX("FS4")
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
        "shiftPlay": function() {
            playSFX("G3")
            playSFX("G4")
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
        "shiftPlay": function() {
            playSFX("GS3")
            playSFX("GS4")
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
        "shiftPlay": function() {
            playSFX("A3")
            playSFX("A4")
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
        "shiftPlay": function() {
            playSFX("AS3")
            playSFX("AS4")
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
        "shiftPlay": function() {
            playSFX("B3")
            playSFX("B4")
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
        "shiftPlay": function() {
            playSFX("C4")
            playSFX("C5")
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
        "shiftPlay": function() {
            playSFX("CS4")
            playSFX("CS5")
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
        "shiftPlay": function() {
            playSFX("D4")
            playSFX("D5")
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
        "shiftPlay": function() {
            playSFX("DS4")
            playSFX("DS5")
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
        "shiftPlay": function() {
            playSFX("E4")
            playSFX("E5")
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
        "shiftPlay": function() {
            playSFX("F4")
            playSFX("F5")
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
        "shiftPlay": function() {
            playSFX("FS4")
            playSFX("FS5")
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
        "shiftPlay": function() {
            playSFX("G4")
            playSFX("G5")
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
        "shiftPlay": function() {
            playSFX("GS4")
            playSFX("GS5")
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
        "shiftPlay": function() {
            playSFX("A4")
            playSFX("A5")
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
        "shiftPlay": function() {
            playSFX("AS4")
            playSFX("AS5")
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
        "shiftPlay": function() {
            playSFX("B4")
            playSFX("B5")
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
        "shiftPlay": function() {
            playSFX("C5")
            playSFX("C6")
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
        "shiftPlay": function() {
            playSFX("CS5")
            playSFX("CS6")
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
        "shiftPlay": function() {
            playSFX("D5")
            playSFX("D6")
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
        "shiftPlay": function() {
            playSFX("DS5")
            playSFX("DS6")
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
        "shiftPlay": function() {
            playSFX("E5")
            playSFX("E6")
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
        "shiftPlay": function() {
            playSFX("F5")
            playSFX("F6")
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
        "shiftPlay": function() {
            playSFX("FS5")
            playSFX("FS6")
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
        "shiftPlay": function() {
            playSFX("G5")
            playSFX("G6")
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
        "shiftPlay": function() {
            playSFX("GS5")
            playSFX("GS6")
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
        "shiftPlay": function() {
            playSFX("A5")
            playSFX("A6")
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
        "shiftPlay": function() {
            playSFX("AS5")
            playSFX("AS6")
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
        "shiftPlay": function() {
            playSFX("B5")
            playSFX("B6")
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
        "shiftPlay": function() {
            playSFX('C6')
            playSFX('C7')
        },
        "active": 1,
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('.C6')
    },
    {
        "name": "chord1",
        "id": -4,
        "play": function() {
            playSFX("C3")
        },
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('')
    },
    {
        "name": "chord2",
        "id": -3,
        "play": function() {
            playSFX("C3")
        },
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('')
    },
    {
        "name": "chord3",
        "id": -2,
        "play": function() {
            playSFX("C3")
        },
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('')
    },
    {
        "name": "chord4",
        "id": -1,
        "play": function() {
            playSFX("C3")
        },
        "keybind": undefined,
        "pressed": false,
        "shifted": false,
        "html": document.querySelector('')
    },
]