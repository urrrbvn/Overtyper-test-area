import type { GameState } from "../core/gameState"
import { addClass } from "../utils"

function getCpm() {
  const allCorrect = document.querySelectorAll("#otta_words .otta_letter.otta_correct")
  const cpm = allCorrect.length * 2
  return cpm
}
export function endGame(gameEl: HTMLElement, cpmEl: HTMLElement, state: GameState) {
  state.isGameOver = true
  addClass(gameEl, 'otta_over')
  cpmEl.textContent = `${getCpm()} CPM`
}


