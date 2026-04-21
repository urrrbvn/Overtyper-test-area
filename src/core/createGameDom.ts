
export interface GameDom {
  root: HTMLElement,
  game: HTMLElement,
  words: HTMLElement,
  cursor: HTMLElement,
  timer: HTMLElement,
  cpm: HTMLElement,
  repeatBtn: HTMLElement
}

export function createGameDom(root: HTMLElement): GameDom {

  root.innerHTML = `
      <div id="header">
        <div id="info">
          30
        </div>
       
      </div>
      <div id="game"  tabindex="0">
        <div id="words"></div>
        <div class="result-wrapper">
          <div class="stats">
            <span id="cpm"><span> CPM</span></span>
            <span id="result-text">resut</span>
          </div>
        </div>
        <div id="focus-error">Click here to focus</div>
        <div id="cursor"></div>
      </div>
        <div id="control">
          <button id="repeat-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
            </svg>
          </button>
        </div>
      </div>
  `
  const game = root.querySelector('#game')
  const words = root.querySelector('#words')
  const cursor = root.querySelector('#cursor')
  const timer = root.querySelector('#info')
  const cpm = root.querySelector('#cpm')
  const repeatBtn = root.querySelector('#repeat-btn')

  if (!(game instanceof HTMLElement)) throw new Error('game not found');
  if (!(words instanceof HTMLElement)) throw new Error('words not found');
  if (!(timer instanceof HTMLElement)) throw new Error('info not found');
  if (!(cursor instanceof HTMLElement)) throw new Error('cursor not found');
  if (!(cpm instanceof HTMLElement)) throw new Error('cpm not found');
  if (!(repeatBtn instanceof HTMLButtonElement)) throw new Error('repeat button not found');

  return { root, game, words, cursor, timer, cpm, repeatBtn }
}
