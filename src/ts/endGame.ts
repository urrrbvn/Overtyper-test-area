import { addClass } from "../utils"

function getCpm() {
  const allCorrect = document.querySelectorAll("#words .letter.correct")
  const cpm = allCorrect.length * 2
  return cpm
}
export function endGame() {
  if (window.timer) clearInterval(window.timer)
  const gameEl = document.getElementById('game')
  if (!gameEl) return
  addClass(gameEl, 'over')

  let cpmEl = document.getElementById('cpm')
  if (!cpmEl) return

  cpmEl.textContent = `${getCpm()}`
}
