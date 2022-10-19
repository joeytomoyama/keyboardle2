const major = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24, 26, 28, 29, 31, 33, 35, 36]//, 38, 40, 41, 43, 45, 47, 48] //major key pattern
const minor = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22, 24, 26, 27, 29, 31, 32, 34, 36]//, 38, 39, 41, 43, 44, 46, 48] //minor key pattern

const songList = new Map()
songList.set("allstar", {
    "key": "allstar",
    "title": "allstar",
    "sheets": `F4 | C5 A4 A4 G4 F4 F4 B4 | A4 A4 G4 G4 F4 F4 | C5 A4 A4 G4 F4 F4 D4 | C4 F4 F4 |
    C5 A4 A4 G4 G4 F4 F4 B4 | A4 A4 G4 G4 F4 F4 | C5 A4 A4 G4 F4 F4 G4 | D4 F4 D4 |
    F4 F4 F4 F4 D4 C4 F4 F4 F4 F4 | F4 F4 F4 F4 F4 F4 F4 F4 F4 A4 F4 | A4 A4 C5 B4 A4 F4 G4 G4 G4 G4 |
    A4 F4 F4 D4 C4 F4 F4 F4 | A4 C5 A4 D5 A4 C5 A4 D5 A4 C5 | B4 A4 G4 F4 F4 G4 F4 F4 |
    F4 F4 F4 F4 F4 F4 F4 F4 F4 | A4 F4 F4 F4 D4 D4 D4 | A4 F4 F4 D4 F4 F4 F4 D4 |
    F4 F4 F4 A4 | A4 F4 F4 D4 F4 F4 F4 D4 | F4 F4 F4 A4 | A4 C5 B4 C5 D5 F5 |
    G5 F5 F4 F4 G4 F4 | A4 G4 G4 F4 G4 | A4 D4 D4 D4 | A4 F4 F4 D4 F4 D4 F4 F4 F4 D4 |`,
    "signature": [11, major],
    "sigLiteral": "B major",
    "chords": ""
})
songList.set("ghost", {
    "key": "ghost",
    "title": "ghost",
    "sheets": `D4 | F4 A4 | B4 F4 A4 | D4 D4 | A4 A4 G4 F4 | E4 D4 D4 | F4 F4 D4 | G4 F4 D4 | | |
    B4 A4 F4 A4 E4 | D4 F4 E4 D4 | | |
    B4 A4 F4 A4 E4 | D4 F4 E4 D4 | | |
    F4 F4 F4 F4 A4 B4 | E4 D4 G4 F4 | | B4 C5 |
    D5 C5 A4 A4 A4 D5 C5 | A4 A4 A4 | D5 E5 F5 E5 | D5 F5 A5 |
    B5 F5 A5 | D5 D5 | A5 A5 G5 F5 | E5 D5 D5 | F5 F5 D5 |
    G5 F5 D5 | | D5 F5 A5 | B5 F5 A5 | D5 D5 |
    A5 A5 G5 F5 | E5 D5 D5 | F5 F5 D5 | G5 F5 F5 | F5 F5 D5 |
    G5 F5 D5 | B4 A4 F4 A4 E4 | D4 F4 E4 D4 | |
    | B4 A4 F4 A4 E4 | D4 F4 E4 D4 | |
    | F4 F4 F4 F4 A4 B4 | E4 D4 G4 F4 | |
    B4 C5 | D5 C5 A4 A4 A4 D5 C5 | A4 A4 A4 | D5 E5 F5 E5 |
    D5 F5 A5 | B5 F5 A5 | D5 D5 | A5 A5 G5 F5 | E5 D5 D5 |
    F5 F5 D5 | G5 F5 D5 | | D5 F5 A5 B5 F5 A5 | D5 D5 |
    A5 A5 G5 F5 | E5 D5 D5 | F5 F5 D5 | G5 F5 F5 | F5 F5 D5 |
    G5 F5 D5 | B5 F5 A5 | D5 D5 | A5 A5 G5 F5 | E5 D5 D5 | F5 F5 D5 | G5 A5 F5 |
    | D4 F4 A4 | B4 F4 A4 | D4 D4 | A4 A4 G4 F4 | E4 D4 D4 |
    F4 F4 D4 | G4 F4 F4 | | D4 F4 A4 | B4 F4 A4 | D4 D4 |
    A4 A4 G4 F4 | E4 D4 D4 | F4 F4 D4 | G4 F4 F4 | F4 F4 D4 |
    G4 F4 D4`,// | | |`,
    "signature": [2, major],
    "sigLiteral": "D major",
    "chords": "2b_3f-_3b 2g_3d_3g 2d_3f-_3a 2a_3e_3a"
})
songList.set("riverFlowsInYou", {
    "key": "riverFlowsInYou",
    "title": "river flows in you",
    "sheets": `A4 G4 A4 G4 A4 E4 A4 D4 A3 C4 A4 G4 A4 G4 A4 E4 A4 D4 A3 C4 A4 G4 A4 A3 G4 A4 A3 E4 A4 A3 D4 A3 |
    B3 C4 D4 E4 C4 B3 A3 G3 A3 E3 A3 B3 C4 C4 D4 E4 D4 C4 B3 A3 C4 A4 G4 A4 A3 G4 A4 A3 E4 A4 A3 D4 A3 |
    B4 C5 D5 E5 C6 B5 E5 B5 C6 B5 A5 G5 | A5 A4 B4 C5 E4 A4 C5 D5 | E5 E4 C5 D5 C5 B4 A4 B4 A4 G4 |
    A5 A4 E5 A4 A5 B5 A5 G5 A5 A4 E5 A4 A5 B5 A5 G5 | A5 B5 C6 B5 A5 G5 B4 A5 B5 A5 G5 |`,
    "signature": [6, major],
    "sigLiteral": "A major",
    "chords": ""
})
songList.set("littleTalks", {
    "key": "littleTalks",
    "title": "little talks",
    "sheets": `D4 | F4 F4 F4 D4 F4 D4 F4 | A4 | F4 F4 F4 D4 F4 E4 D4 | C4 D4 E4 | F4 F4 F4 D4 F4 D4 F4 | 
    A4 | F4 F4 F4 A4 F4 E4 D4 | D4 | F5 F5 F5 E5 E5 F5 E5 D5 D5 | 
    D5 E5 F5 E5 D4 | F4 F4 F4 F4 G4 D4 D4 D4 D4 | D4 | 
    F5 F5 E5 F5 E5 D5 F5 | D5 F5 F5 E5 D4 D4 | 
    F4 F4 F4 G4 D4 D4 D4 D4 | D4 | F5 F5 E5 F5 E5 D5 | 
    F5 F5 E5 D4 | F4 F4 F4 F4 G4 D4 D4 D4 | F5 F5 A5 | 
    B5 B5 A5 F5 A5 | A5 A5 E5 E5 E5 | F5 F5 E5 D5 D5 | 
    F3 F3 F3 F3 F3 | F5 F5 F5 D5 F5 D5 F5 | A5 | F5 F5 F5 D5 F5 E5 D5 | C5 D5 E5 | `,
    "signature": [1, major],
    "sigLiteral": "D flat major",
    "chords": "2a-_3c-_3f 2f-_3c-_3f- 2g-_3c-_3f 2g-_3c-_3f"
})
songList.set("loveTheWayYouLie", {
    "key": "loveTheWayYouLie",
    "title": "love the way you lie",
    "sheets": `B4 C5 D5 | B4 B4 D5 E5 | B4 E5 D5 | B4 B4 D5 C5 | 
    B4 C5 D5 | B4 B4 B4 D5 E5 | B4 B4 B4 E5 D5 | B4 B4 D5 C5 | 
    B4 C5 | D5 B5 B5 D5 E5 | B5 B5 E5 D5 | B5 B5 D5 C5 | 
    C6 C6 B4 C5 | D5 B4 B4 D5 E5 | B4 B4 E5 D5 | B4 B4 C5 C5 | 
    G5 G5 F5 | `,
    "signature": [10, major],
    "sigLiteral": "B flat major",
    "chords": ""
})
songList.set("letHerGo", {
    "key": "letHerGo",
    "title": "let her go",
    "sheets": `A4 B4 A4 G4 | D4 E4 G4 E4 B4 | A4 B4 A4 G4 | D4 E4 G4 E4 B4 | A4 A4 B4 A4 G4 | D4 E4 G4 E4 G4 | 
    D5 B4 G4 A4 B4 | B4 | A4 B4 A4 G4 | B4 B4 A4 B4 A4 G4 | G4 G4 E4 G4 E4 G4 | A4 B4 A4 G4 | 
    A4 A4 G4 B4 A4 A4 | G4 A4 B4 A4 G4 | A4 G4 E4 E4 E4 D4 G4 | G4 | G4 | B4 B4 B4 A4 A4 G4 | G4 G4 E4 G4 E4 G4 | 
    A4 B4 A4 G4 | A4 A4 G4 B4 A4 A4 | G4 A4 B4 A4 G4 | A4 G4 E4 E4 E4 D4 G4 | G4 | G4 | A4 G4 B4 A4 A4 G4 | 
    
    B4 B4 B4 B4 B4 A4 G4 G4 | G4 B4 B4 | A4 A4 A4 G4 F4 | F4 E4 B4 A4 G4 | E4 E4 B4 A4 | G4 E4 |     
    E4 | B4 B4 B4 B4 B4 A4 G4 | G4 B4 B4 B4 B4 | A4 A4 A4 G4 F4 | F4 B4 B4 B4 B4 | B4 G4 G4 A4 G4 | 
    G4 |      B4 B4 B4 B4 A4 G4 | G4 G4 E4 G4 E4 G4 | A4 B4 A4 G4 | A4 A4 G4 B4 A4 A4 | G4 A4 B4 A4 G4 | 
    A4 G4 E4 E4 E4 D4 G4 | G4 |      B4 B4 B4 B4 A4 G4 | G4 G4 E4 G4 E4 G4 | A4 B4 A4 G4 | A4 A4 G4 B4 A4 A4 G4 | 
    A4 B4 A4 G4 | A4 G4 E4 E4 E4 D4 G4 | G4 |          B4 B4 B4 B4 B4 A4 G4 G4 | G4 B4 B4 | `,
    "signature": [7, major],
    "sigLiteral": "G major",
    "chords": "3c_3e_3g 2b_3d_3g 2a_3d_3f- 2b_3e_3g"
})
songList.set("blueBird", {
    "key": "blueBird",
    "title": "blue bird",
    "sheets": `C4 F4 G4 | A4 G4 F4 C4 F4 G4 | A4 B4 A4 B4 C5 C4 F4 G4 | A4 G4 F4 F4 C5 B4 | F4 C5 B4 E4 E4 F4 F4 | 
    C4 F4 G4 | A4 C4 A4 G4 F4 E4 F4 A3 B3 C4 C4 C4 C4 | D4 E4 F4 E4 E4 E4 E4 F4 G4 A4 G4 C4 F4 G4 | 
    A4 C4 A4 G4 F4 E4 F4 A3 B3 C4 C4 C4 C4 | D4 A4 G4 F4 E4 E4 F4 C4 F4 G4 | A4 A4 G4 A4 G4 C4 G4 A4 | 
    B4 B4 A4 G4 F4 F4 A4 B4 C5 F4 A4 B4 C5 C5 E5 D5 C5 | C5 C4 F4 G4 | A4 G4 F4 C4 F4 G4 | 
    A4 B4 A4 B4 C5 C4 F4 G4 | A4 G4 F4 F4 C5 B4 | F4 C5 B4 E4 E4 F4 F4 C4 F4 G4 | A4 G4 F4 C4 F4 G4 | 
    A4 B4 A4 B4 C5 C4 F4 G4 | A4 G4 F4 F4 C5 B4 | F4 C5 B4 E4 E4 F4 F4 F4 C5 B4 | 
    F4 C5 B4 E4 E4 F4 F4 F4 C5 B4 | F4 C5 B4 E4 E4 F4 F4 | `,
    "signature": [9, major],
    "sigLiteral": "A major",
    "chords": ""
})
songList.set("faded", {
    "key": "faded",
    "title": "faded",
    "sheets": `G3 G3 G3 B3 | E4 E4 E4 D4 | B3 B3 B3 B3 | F3 F3 F3 E3 |
    G4 G4 E4 G4 E4 G4 A4 | B4 G4 G4 D4 B4 | G4 G4 G4 |
    F4 F4 F4 E4 G4 | G4 G4 E4 G4 E4 G4 A4 | B4 G4 G4 D4 B4 | G4 G4 A4 |
    B4 B4 B4 | B4 G4 G4 B4 | E5 E5 E5 B4 B4 B4 | B4 B4 B4 B4 |
    F4 F4 F4 B4 B4 B4 | B4 G3 A3 A3 A3 B3 | A3 G3 G3 B4 B4 B4 |
    B4 G3 G3 G3 G3 A3 | F3 F3 F3 G3 B4 B4 B4 | B4 B3 G3 | E3 D3 G3 D4 D4 B3 |
    G3 D4 D4 B3 | A3 B4 B4 B4 | B4 G3 G3 E3 C4 | D4 |
    B3 D4 B3 D4 B3 D4 B3 A3 C4 | E3 C4 B3 | G3 G3 G3 G3 B3 B3 G4 G4 G4 F4 F4 |
    E4 E4 E4 E4 E4 E4 D4 | B3 B3 B3 B3 D4 C4 B3 A3 G3 | F3 F3 F3 F3 F3 C4 B3 |
    G3 G3 G3 G3 G3 G3 B3 B3 G4 G4 G4 F4 F4 | E4 E4 E4 E4 E4 E4 D4 | B3 B3 B3 B3 D4 C4 B3 A3 G3 |
    F3 F3 F3 F3 F3 C4 B3 | G3 G3 G3 B3 | E4 E4 E4 D4 | B3 B3 B3 B3 |
    F3`,
    "signature": [7, major],
    "sigLiteral": "G major",
    "chords": "2e_2g_2b 2c_2e_2g 2g_2b_3d 2d_2f-_2a"
})