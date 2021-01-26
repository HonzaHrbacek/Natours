(() => {
const links = Array.from(document.querySelectorAll('.navigation__link'))
const checkbox = document.querySelector('.navigation__checkbox')

links.forEach((el) => {
  el.addEventListener('click', () => {
    checkbox.checked = false}) 
  })

})()

