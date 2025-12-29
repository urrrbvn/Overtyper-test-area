export function addClass(el: Element | null | undefined, name: string) {
  if (!el) return
  el.className += " " + name
}
export function removeClass(el: Element | null | undefined, name: string) {
  if (!el) return
  el.className = el.className.replace(name, '')
}

// используется для валидации множества полученных элементов, когда проверить нужно больше 3
export function validateElements(elements: (Element | null)[]): elements is Element[] {
  return elements.every(Boolean)
}
