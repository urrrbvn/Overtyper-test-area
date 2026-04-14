import type { GameDom } from "../core/createGameDom";
import type { GameState } from "../core/gameState";
import { endGame } from "./endGame";


const GAME_DURATION = 30000

export function runTimer(dom: GameDom, state: GameState) {

  if (state.gameTimer !== null || state.gameStartTime !== null) return

  state.gameStartTime = Date.now()

  state.gameTimer = setInterval(() => {
    if (!state.gameStartTime) return

    const elapsedTime = Date.now() - state.gameStartTime
    const remainingTime = Math.max(0, GAME_DURATION - elapsedTime)

    if (remainingTime <= 0) {
      resetTimer(state, dom.timer)
      endGame(dom.game, dom.cpm, state)
      return
    }
    dom.timer.textContent = `${Math.floor(elapsedTime / 1000)}`
  }, 1000);
}

export function stopTimer(state: GameState) {
  if (state.gameTimer !== null) {
    clearInterval(state.gameTimer)
  }
  state.gameTimer = null
}

export function resetTimer(state: GameState, infoEl: HTMLElement) {
  stopTimer(state)
  state.gameStartTime = null
  infoEl.textContent = `30`
}

