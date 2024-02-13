// Home works 1

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)){
      gmailResult.innerHTML = 'OK'
      gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
})

// Home works 2

const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const moveBlock = () => {
  if (positionX < 449) {
      positionX++
      childBlock.style.left = `${positionX}px`
      requestAnimationFrame(moveBlock)
  }
}
moveBlock()

// Home works 3

const minutesBlock = document.querySelector('#seconds')
 btnStart = document.querySelector('#start')
 btnStop = document.querySelector('#stop')
 btnReset = document.querySelector('#reset')

 let interval;
 let minutes = 0;

 const startTime = () => {
  minutes++;

  minutesBlock.innerHTML = minutes;
 }

 btnStart.addEventListener('click', () => {
  clearInterval(interval);
    interval = setInterval(startTime, 10)
 })
 btnStop.addEventListener('click', () => {
  clearInterval(interval);

 })
 btnReset.addEventListener('click', () => {
  clearInterval(interval);
  minutes = 0;

  minutesBlock.innerHTML = minutes
 })

// Home works 4

// const childBlock = document.querySelector('.child_block')
// const parentBlock = document.querySelector('.parent_block')
// const mainwidht = parentBlock.offsetWidth - childBlock.offsetWidth
// const mainHeight = parentBlock.offsetHeight - childBlock.offsetHeight

// let positionX = 0
// let positionY = 0

// const moveBlock = () => {
//   if (positionX < mainwidht) {
//       positionX++
//       childBlock.style.left = `${positionX}px`
//       requestAnimationFrame(moveBlock)
//   } else if (positionX >= mainHeight && positionY < mainHeight) {
//     positionY++
//     childBlock.style.top = `${positionY}px`
//     requestAnimationFrame(moveBlock)
//   }
// }

// moveBlock()