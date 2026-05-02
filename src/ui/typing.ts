import type { GameDom } from "../core/createGameDom"
import type { GameState } from "../core/gameState"
import { addClass, removeClass } from "../utils"
import { moveCursor } from "./cursor"
import { runTimer } from "./timer"


export function typingHandlerFactory(dom: GameDom, state: GameState) {
  return function handleTyping(e: KeyboardEvent) {

    const key = e.key

    const currentWord = dom.words.querySelector(".otta_current")
    const currentLetter = dom.words.querySelector('.otta_letter.otta_current')
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
        addClass(currentLetter, key === expected ? "otta_correct" : "otta_incorrect")
        removeClass(currentLetter, 'otta_current')
        addClass(currentLetter?.nextElementSibling, 'otta_current')
      } else { //по сути это значит что мы в конце слова и пишем неправильные символы
        let extraLetter = document.createElement("span")
        extraLetter.innerHTML = key
        extraLetter.className = "otta_letter otta_incorrect otta_extra"
        currentWord.appendChild(extraLetter)
      }
    }

    if (isSpace) {
      if (expected !== " ") {
        const lettersToInvalidate: Element[] = [...dom.words.querySelectorAll(".otta_word.otta_current .otta_letter:not(.otta_correct)")]
        lettersToInvalidate.forEach((letter: Element) => {
          addClass(letter, "otta_incorrect")
        })
      }
      removeClass(currentWord, 'otta_current')
      addClass(currentWord.nextElementSibling, 'otta_current')
      removeClass(currentLetter, "otta_current")
      addClass(currentWord.nextElementSibling?.firstElementChild, "otta_current")

      //Промотка строк 
      const nextWord: Element | null = currentWord.nextElementSibling
      if (nextWord && nextWord.getBoundingClientRect().top >= dom.game.getBoundingClientRect().top + 74) {
        const margin = parseInt(dom.words.style.marginTop || "0px")
        dom.words.style.marginTop = (margin - 37) + "px"
      }
    }
    if (isBackspace) {
      if (currentLetter && isFirstLetter) {
        removeClass(currentWord, 'otta_current')
        addClass(currentWord.previousElementSibling, 'otta_current')
        removeClass(currentLetter, 'otta_current')
      } else if (currentLetter && !isFirstLetter) {
        removeClass(currentLetter, 'otta_current')
        removeClass(currentLetter, 'otta_correct')
        removeClass(currentLetter, 'otta_incorrect')

        addClass(currentLetter.previousElementSibling, 'otta_current')
        removeClass(currentLetter.previousElementSibling, 'otta_correct')
        removeClass(currentLetter.previousElementSibling, 'otta_incorrect')
      } else {
        removeClass(currentWord.lastElementChild, "otta_incorrect")
        removeClass(currentWord.lastElementChild, "otta_correct")
        addClass(currentWord.lastElementChild, 'otta_current')
        if (currentWord.lastElementChild?.className.includes('otta_extra')) {
          currentWord.removeChild(currentWord.lastElementChild)
        }
      }
    }

    moveCursor(dom)
  }
}


