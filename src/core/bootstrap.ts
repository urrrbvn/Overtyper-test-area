import { newGameFactory } from "./newGame";
import { typingHandlerFactory } from "../ui/typing";
import { createGameDom } from "./createGameDom";
import { createGameState } from "./gameState";



export type OvertyperTestArea = {
  destroy: () => void;
}

export function mount(container: HTMLElement): OvertyperTestArea {
  const dom = createGameDom(container)
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
      container.innerHTML = ``
    }
  }

}
