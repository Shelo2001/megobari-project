const accordions = document.querySelectorAll('.accordion')
accordions.forEach((accordion) => {
  accordion.addEventListener('click', (e) => {
    accordion.classList.toggle('active')
    let accordionBtn = accordion.querySelector('i')
    if (accordionBtn.className === 'fa-solid fa-angle-down') {
      accordionBtn.className = 'fa-solid fa-angle-up'
    } else {
      accordionBtn.className = 'fa-solid fa-angle-down'
    }
  })
})
