import { newGame } from "./ts/newGame"
import { handleTyping } from "./ts/typing"




document.getElementById('game')?.addEventListener('keyup', handleTyping)
newGame()
