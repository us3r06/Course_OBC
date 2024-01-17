const miliS = document.querySelector('.miliseconds')
const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
let miliNum = 0
let secondNum = 0
let minuteNum = 0
let intervalo

const addMiliSeconds = () => {
  miliNum++
  if (miliNum < 10) {
    miliS.innerText = '0' + miliNum
  } else {
    miliS.innerText = miliNum
  }
  if (miliNum == 99) {
    miliNum = 0
    addSeconds()
  }
}
const addSeconds = () => {
  secondNum++
  if (secondNum < 10) {
    seconds.innerText = '0' + secondNum
  } else {
    seconds.innerText = secondNum
  }
  if (secondNum == 59) {
    secondNum = 0
    addMinutes()
  }
}
const addMinutes = () => {
  minuteNum++
  if (minuteNum < 10) {
    minutes.innerText = '0' + minuteNum
  } else {
    minutes.innerText = minuteNum
  }
}
const start = () => {
  clearInterval(intervalo)

  intervalo = setInterval(() => {
    addMiliSeconds()
  }, 10)
}
const reset = () => {
  clearInterval(intervalo)
  miliNum = 0
  secondNum = 0
  minuteNum = 0
  miliS.innerText = '00'
  seconds.innerText = '00'
  minutes.innerText = '00'
}
const pause = () => clearInterval(intervalo)
document.querySelector('.pause-btn').addEventListener('click', pause)
document.querySelector('.start-btn').addEventListener('click', start)
document.querySelector('.reset-btn').addEventListener('click', reset)
