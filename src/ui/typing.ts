import type { GameDom } from "../core/createGameDom"
import type { GameState } from "../core/gameState"
import { addClass, removeClass } from "../utils"
import { moveCursor } from "./cursor"
import { runTimer } from "./timer"


export function typingHandlerFactory(dom: GameDom, state: GameState) {
  return function handleTyping(e: KeyboardEvent) {

    const key = e.key

    const currentWord = dom.words.querySelector(".current")
    const currentLetter = dom.words.querySelector('.letter.current')
    if (!currentWord) return
    //мы не проверяем здесь наличие currentLetter, потому что в этом случае нам не нужен выход из функции


    const expected: string = currentLetter?.innerHTML || " " //мы в конце слова, занчит будем брать за ожидаемое нажатие пробел
    const isLetter: Boolean = key.length === 1 && key !== ' '
    const isSpace: Boolean = key === " "
    const isBackspace: Boolean = key === "Backspace"
    const isFirstLetter = currentLetter === currentWord.firstElementChild

    if (isFirstLetter) {
      runTimer(dom, state)
    }

    if (isLetter) {
      if (currentLetter) {
        addClass(currentLetter, key === expected ? "correct" : "incorrect")
        removeClass(currentLetter, 'current')
        addClass(currentLetter?.nextElementSibling, 'current')
      } else { //по сути это значит что мы в конце слова и пишем неправильные символы
        let extraLetter = document.createElement("span")
        extraLetter.innerHTML = key
        extraLetter.className = "letter incorrect extra"
        currentWord.appendChild(extraLetter)
      }
    }

    if (isSpace) {
      if (expected !== " ") {
        const lettersToInvalidate: Element[] = [...dom.words.querySelectorAll(".word.current .letter:not(.correct)")]
        lettersToInvalidate.forEach((letter: Element) => {
          addClass(letter, "incorrect")
        })
      }
      removeClass(currentWord, 'current')
      addClass(currentWord.nextElementSibling, 'current')
      removeClass(currentLetter, "current")
      addClass(currentWord.nextElementSibling?.firstElementChild, "current")

      //Промотка строк 
      const nextWord: Element | null = currentWord.nextElementSibling
      if (nextWord && nextWord.getBoundingClientRect().top >= dom.game.getBoundingClientRect().top + 74) {
        const margin = parseInt(dom.words.style.marginTop || "0px")
        dom.words.style.marginTop = (margin - 37) + "px"
      }
    }
    if (isBackspace) {
      if (currentLetter && isFirstLetter) {
        removeClass(currentWord, 'current')
        addClass(currentWord.previousElementSibling, 'current')
        removeClass(currentLetter, 'current')
      } else if (currentLetter && !isFirstLetter) {
        removeClass(currentLetter, 'current')
        removeClass(currentLetter, 'correct')
        removeClass(currentLetter, 'incorrect')

        addClass(currentLetter.previousElementSibling, 'current')
        removeClass(currentLetter.previousElementSibling, 'correct')
        removeClass(currentLetter.previousElementSibling, 'incorrect')
      } else {
        removeClass(currentWord.lastElementChild, "incorrect")
        removeClass(currentWord.lastElementChild, "correct")
        addClass(currentWord.lastElementChild, 'current')
        if (currentWord.lastElementChild?.className.includes('extra')) {
          currentWord.removeChild(currentWord.lastElementChild)
        }
      }
    }

    moveCursor(dom)
  }
}


