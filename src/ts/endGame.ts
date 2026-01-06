import { addClass } from "../utils"



export function endGame() {
  if (window.timer) clearInterval(window.timer)
  const gameEl = document.getElementById('game')
  if (!gameEl) return
  addClass(gameEl, 'over')
}
