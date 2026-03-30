import { newGame, newGameFactory } from "./newGame";
import { handleTyping } from "../ts/typing";
import { createGameDom } from "./createGameDom";
import { createGameState } from "./gameState";



export type OvertyperTestArea = {
  destroy: () => void;
}

export function mount(container: HTMLElement): OvertyperTestArea {
  const dom = createGameDom(container)
  const state = createGameState()

  const newGame = newGameFactory(dom, state)

  newGame()

  return {
    destroy() {
      dom.game.removeEventListener('keyup', handleTyping)
      dom.repeatBtn.removeEventListener('click', newGame)
      container.innerHTML = ``
    }
  }

}
