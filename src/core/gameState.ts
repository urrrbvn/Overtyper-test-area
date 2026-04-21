export interface GameState {
  gameTimer: number | null
  gameStartTime: number | null,
  isGameOver: boolean
}

export function createGameState(): GameState {
  return {
    gameTimer: null,
    gameStartTime: null,
    isGameOver: false
  }
}








