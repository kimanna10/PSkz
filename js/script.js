


document.addEventListener('DOMContentLoaded', function () {

    const menuButton = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const arrowIcon = document.querySelector('.menu-btn__arrow');


menuButton.addEventListener('click', function () {

    sidebar.classList.toggle('expanded');
    main.classList.toggle('open');
    footer.classList.toggle('open');
    if (arrowIcon.classList.contains('fa-chevron-circle-right')) {
        arrowIcon.classList.remove('fa-chevron-circle-right');
        arrowIcon.classList.add('fa-chevron-circle-left');
    } else {
        arrowIcon.classList.remove('fa-chevron-circle-left');
        arrowIcon.classList.add('fa-chevron-circle-right');
    }
    
});




const themeToggle = document.querySelector('.theme-toggle');
const iconTheme = document.querySelector('.sidebar__icon-theme');

themeToggle.addEventListener('click', function () {
    const body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    
    const themeStyle = document.getElementById('theme-style');
    const newTheme = body.classList.contains('light-theme') ? 'css/styles-light.css' : 'css/styles-dark.css';
    themeStyle.href = newTheme;

    if (iconTheme.classList.contains('fa-sun')) {
        iconTheme.classList.remove('fa-sun');
        iconTheme.classList.add('fa-moon');
    } else {
        iconTheme.classList.remove('fa-moon');
        iconTheme.classList.add('fa-sun');
    }
});
});
