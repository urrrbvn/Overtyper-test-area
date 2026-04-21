import { newGameFactory } from "./newGame";
import { typingHandlerFactory } from "../ui/typing";
import { createGameDom } from "./createGameDom";
import { createGameState } from "./gameState";
import '../style.css'


export type OvertyperTestArea = {
  destroy: () => void;
}


function mount(params: { container: HTMLElement }): OvertyperTestArea {

  const dom = createGameDom(params.container)
  const state = createGameState()

  const newGame = newGameFactory(dom, state)
  const typingHandler = typingHandlerFactory(dom, state)

  dom.game.addEventListener('keyup', typingHandler)
  dom.repeatBtn.addEventListener('click', newGame)

  newGame()

  return {
    destroy() {
      dom.game.removeEventListener('keyup', typingHandler)
      dom.repeatBtn.removeEventListener('click', newGame)
      params.container.innerHTML = ``
    }
  }

}
export default { mount }
