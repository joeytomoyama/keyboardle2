// for(let i = 0; i <= 100; i+=10) {
//     console.log(`${i}% { transform: rotate(${plusOrMinus(i)}${2+Math.round((1-i/100)*10)/10}deg); }`)
// }
for(let i = 0; i <= 100; i+=10) {
    console.log(`${i}% { transform: translate(${plusOrMinus(i)}${2+Math.round((1-i/100)*10)/10}deg); }`)
}

function plusOrMinus(i) {
    if ((i/10)%2===0) return ''
    return '-'
}