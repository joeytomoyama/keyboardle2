const keyObjects = [
    // {
    //     "name": "chord1",
    //     "id": -4,
    //     "play": function() {
    //         playSFX("C3")
    //     },
    //     "keybind": undefined,
    //     "pressed": false,
    //     "shifted": false,
    //     "html": document.querySelector('')
    // },
    // {
    //     "name": "chord2",
    //     "id": -3,
    //     "play": function() {
    //         playSFX("C3")
    //     },
    //     "keybind": undefined,
    //     "pressed": false,
    //     "shifted": false,
    //     "html": document.querySelector('')
    // },
    // {
    //     "name": "chord3",
    //     "id": -2,
    //     "play": function() {
    //         playSFX("C3")
    //     },
    //     "keybind": undefined,
    //     "pressed": false,
    //     "shifted": false,
    //     "html": document.querySelector('')
    // },
    // {
    //     "name": "chord4",
    //     "id": -1,
    //     "play": function() {
    //         playSFX("C3")
    //     },
    //     "keybind": undefined,
    //     "pressed": false,
    //     "shifted": false,
    //     "html": document.querySelector('')
    // },
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

const keyObjects2 = {
    C3: {
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
    CS3: {
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
    D3: {
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
    DS3: {
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
    E3: {
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
    F3: {
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
    FS3: {
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
    G3: {
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
    GS3: {
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
    A3: {
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
    AS3: {
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
    B3: {
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
    C4: {
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
    CS4: {
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
    D4: {
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
    DS4: {
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
    E4: {
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
    F4: {
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
    FS4: {
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
    G4: {
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
    GS4: {
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
    A4: {
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
    AS4: {
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
    B4: {
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
    C5: {
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
    CS5: {
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
    D5: {
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
    DS5: {
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
    E5: {
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
    F5: {
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
    FS5: {
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
    G5: {
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
    GS5: {
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
    A5: {
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
    AS5: {
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
    B5: {
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
    C6: {
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
}