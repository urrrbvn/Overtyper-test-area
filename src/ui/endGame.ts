import type { GameState } from "../core/gameState"
import { addClass } from "../utils"

function getCpm() {
  const allCorrect = document.querySelectorAll("#words .letter.correct")
  const cpm = allCorrect.length * 2
  return cpm
}
export function endGame(gameEl: HTMLElement, cpmEl: HTMLElement, state: GameState) {
  state.isGameOver = true
  addClass(gameEl, 'over')
  cpmEl.textContent = `${getCpm()} CPM`
}


