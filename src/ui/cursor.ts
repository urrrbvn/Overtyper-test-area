import type { GameDom } from "../core/createGameDom"



export function moveCursor(dom: GameDom) {

  let nextLetter = dom.words.querySelector('.otta_letter.otta_current')
  let nextWord = dom.words.querySelector('.otta_word.otta_current')
  let anchor = nextLetter || nextWord
  if (!anchor) return

  dom.cursor.style.top = anchor.getBoundingClientRect().top + 2 + "px"
  dom.cursor.style.left = anchor.getBoundingClientRect()[nextLetter ? "left" : "right"] - 2 + "px" //При отсутствии nextLetter, мы равняем курсор по слову, а значит ставвим его справа
}
