import { addClass, removeClass } from "../utils"
import { moveCursor } from "./cursor"

const words = "i went to the store today it was raining outside i bought some groceries and saw a cat on the way home the cat was fluffy and orange it looked at me for a second then ran away i got home and made a sandwich it was a good day overall even with the rain and the cat was cute".split(" ")
window.timer = null
window.gameStartTime = null

function getRandomWord() {
  const randomIndex = Math.ceil(Math.random() * words.length) - 1
  return words[randomIndex]
}

function processWord() {
  let word = getRandomWord()

  return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`
}

export function newGame() {
  let game = document.getElementById('game')
  if (!game) return
  removeClass(game, 'over')

  let timer = document.getElementById('info')
  if (!timer) return
  timer.textContent = '30'

  let wordsBlock = document.getElementById('words')
  if (!wordsBlock) return

  wordsBlock.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    wordsBlock.innerHTML += processWord()
  }

  let firstWord = wordsBlock.querySelector('.word')
  let firstLetter = wordsBlock.querySelector('.letter')
  if (!firstWord || !firstLetter) return

  addClass(firstWord, 'current')
  addClass(firstLetter, 'current')

  wordsBlock.style.marginTop = "0px"

  moveCursor()

  window.timer = null
}
