const layout = document.querySelector('.layout')
const header = document.querySelector('.header')
const mainContent = document.querySelector('.main-content')
const sidebar = document.querySelector('.sidebar')
const togglebtn = document.querySelector('.toggle-btn')
const firstLine = document.querySelector('.first-line')
const themeToggle = document.querySelector('#theme-toggle')

togglebtn.addEventListener('click', function(e) {
    layout.classList.toggle('collapse')
})

themeToggle.addEventListener('click', changeTheme)

function changeTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'lightblue' ? 'lightgreen' : 'lightblue';
    root.className = newTheme
}