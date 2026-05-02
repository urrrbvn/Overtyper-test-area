import { addClass, removeClass } from "../utils"
import { moveCursor } from "../ui/cursor"
import type { GameState } from "./gameState"
import type { GameDom } from "./createGameDom"


export function newGameFactory(dom: GameDom, state: GameState) {
  return function newGame() {
    removeClass(dom.game, 'otta_over')

    if (state.gameTimer !== null) {
      clearInterval(state.gameTimer)
      state.gameTimer === null
    }

    dom.timer.textContent = '30'
    dom.words.innerHTML = "";
    for (let i = 0; i < 100; i++) {
      dom.words.innerHTML += processWords()
    }

    let firstWord = dom.words.querySelector('.otta_word')
    let firstLetter = dom.words.querySelector('.otta_letter')

    addClass(firstWord, 'otta_current')
    addClass(firstLetter, 'otta_current')

    dom.words.style.marginTop = "0px"

    moveCursor(dom)

  }
}

const words = "i went to the store today it was raining outside i bought some groceries and saw a cat on the way home the cat was fluffy and orange it looked at me for a second then ran away i got home and made a sandwich it was a good day overall even with the rain and the cat was cute".split(" ")

function getRandomWord() {
  const randomIndex = Math.ceil(Math.random() * words.length) - 1
  return words[randomIndex]
}

function processWords() {
  let word = getRandomWord()

  return `<div class="otta_word"><span class="otta_letter">${word.split('').join('</span><span class="otta_letter">')}</span></div>`
}

