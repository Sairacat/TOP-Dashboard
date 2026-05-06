const layout = document.querySelector('.layout')
const header = document.querySelector('.header')
const mainContent = document.querySelector('.main-content')
const sidebar = document.querySelector('.sidebar')
const togglebtn = document.querySelector('.toggle-btn')
const firstLine = document.querySelector('.first-line')

togglebtn.addEventListener('click', function(e) {
    layout.classList.toggle('collapse')
})