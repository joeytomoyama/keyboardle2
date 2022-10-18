console.log('test')

const key = document.querySelector('.key')

key.addEventListener('mousedown', (e) => {
    key.style.background = 'white'
    key.style.color = 'black'
})

key.addEventListener('mouseup', (e) => {
    key.style.background = 'black'
    key.style.color = 'white'
})

key.addEventListener('mouseleave', (e) => {
    key.style.background = 'black'
    key.style.color = 'white'
})