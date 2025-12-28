import { addClass } from "../utils"

const words = "i went to the store today it was raining outside i bought some groceries and saw a cat on the way home the cat was fluffy and orange it looked at me for a second then ran away i got home and made a sandwich it was a good day overall even with the rain and the cat was cute".split(" ")


function getRandomWord() {
  const randomIndex = Math.ceil(Math.random() * words.length) - 1
  return words[randomIndex]
}

function processWord() {
  let word = getRandomWord()

  return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`
}

export function newGame() {
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
}
