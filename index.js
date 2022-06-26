const buttonYes = document.querySelector('.button_yes')
const buttonNo = document.querySelector('.button_no')
const title = document.querySelector('.title')

buttonYes.addEventListener('click', () => {
    title.textContent = 'Всем пиздец!'
})

buttonNo.addEventListener('click', () => {
    buttonNo.style.display = 'none'
    title.textContent = 'Ответ неверный!'
    setTimeout(() => {
        title.textContent = 'Я последний раз спрашиваю: Ты лютый?'
    }, 2000)
})