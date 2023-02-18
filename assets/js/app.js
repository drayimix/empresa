const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const  menuResponsivo = document.querySelector('.menu_responsivo')


toggleBtn.onclick = function() {
    menuResponsivo.classList.toggle('open')
    const isOpen = menuResponsivo.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fas fa-times'
    : 'fas fa-bars'
}