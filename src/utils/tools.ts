export const toTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
