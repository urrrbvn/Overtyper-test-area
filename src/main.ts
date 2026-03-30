import { newGame } from "./core/newGame"
import { handleTyping } from "./ts/typing"




document.getElementById('game')?.addEventListener('keyup', handleTyping)
document.getElementById('repeat-btn')?.addEventListener('click', newGame)
newGame()
