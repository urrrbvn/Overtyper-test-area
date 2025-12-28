


export function moveCursor() {

  let cursor = document.getElementById('cursor')
  if (!cursor) return

  let nextLetter = document.querySelector('.letter.current')
  let nextWord = document.querySelector('.word.current')
  let anchor = nextLetter || nextWord
  if (!anchor) return

  cursor.style.top = anchor.getBoundingClientRect().top + 2 + "px"
  cursor.style.left = anchor.getBoundingClientRect()[nextLetter ? "left" : "right"] + 2 + "px"
}
