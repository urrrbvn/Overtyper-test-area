import { endGame } from "./endGame";


const gameTime = 30 * 1000

export function runTimer() {
  window.timer = setInterval(() => {
    if (!window.gameStartTime) {
      window.gameStartTime = (new Date()).getTime();
    }
    const currentTime = (new Date()).getTime();
    const msPassed = currentTime - window.gameStartTime;
    const sPassed = Math.round(msPassed / 1000);
    const sLeft = Math.round((gameTime / 1000) - sPassed);

    const infoEl = document.getElementById('info')
    if (!infoEl) return
    infoEl.textContent = sLeft + '';

    if (sLeft <= 0) {
      endGame()
      return
    }
  }, 1000);
}
