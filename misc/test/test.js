console.log('test')
const var12 = new Audio('../../notes/4c.mp3')

const key = document.querySelector('.key')

key.addEventListener('mousedown', (e) => {
    key.style.background = 'white'
    key.style.color = 'black'
    var12.currentTime = 0
    var12.play()
})

key.addEventListener('mouseup', (e) => {
    key.style.background = 'black'
    key.style.color = 'white'
})

key.addEventListener('mouseleave', (e) => {
    key.style.background = 'black'
    key.style.color = 'white'
})