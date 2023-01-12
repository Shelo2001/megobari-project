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

const cardButton2 = document.querySelector('.cardButton2')
cardButton2.addEventListener('click', (e) => {
  document.getElementById('reviewcard2').style.transform = 'translate(-350px)'
  document.getElementById('reviewcard3').style.transform = 'translate(-350px)'
  document.getElementById('reviewcard4').style.transform = 'translate(-350px)'
  cardButton2.style.color = '#197aff'
  document.getElementById('cardButtons3').style.color = '#cbced6'
  document.getElementById('cardButtons1').style.color = '#cbced6'
})
const cardButton3 = document.querySelector('.cardButton3')
cardButton3.addEventListener('click', (e) => {
  document.getElementById('reviewcard2').style.transform = 'translate(-700px)'
  document.getElementById('reviewcard3').style.transform = 'translate(-700px)'
  document.getElementById('reviewcard4').style.transform = 'translate(-700px)'
  cardButton3.style.color = '#197aff'
  document.getElementById('cardButtons2').style.color = '#cbced6'
  document.getElementById('cardButtons1').style.color = '#cbced6'
})
const cardButton1 = document.querySelector('.cardButton1')
cardButton1.addEventListener('click', (e) => {
  document.getElementById('reviewcard2').style.transform = 'translate(-0px)'
  document.getElementById('reviewcard3').style.transform = 'translate(-0px)'
  document.getElementById('reviewcard4').style.transform = 'translate(-0px)'
  cardButton1.style.color = '#197aff'
  document.getElementById('cardButtons2').style.color = '#cbced6'
  document.getElementById('cardButtons3').style.color = '#cbced6'
})
