'use strict'

const body = document.body;
const btnCtaDarkTheme = document.getElementById('dark-theme');

const home = document.querySelector('.home-link');
const info = document.querySelector('.info-footer-link');
const desc = document.querySelector('.desc');

btnCtaDarkTheme.addEventListener('click', function() {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');

        changeColorDarkMode();
    } else {
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        
        changeColorWhiteMode();
    }
});

function changeColorDarkMode () {
    btnCtaDarkTheme.textContent = 'LIGHT';
    btnCtaDarkTheme.style.color = '#f3f3f3';
    home.style.color = '#f3f3f3';
    info.style.color = '#f3f3f3';
    desc.style.color = '#f3f3f3';
}

function changeColorWhiteMode () {
    btnCtaDarkTheme.textContent = 'DARK';
    btnCtaDarkTheme.style.color = '#373734';
    home.style.color = '#373734';
    info.style.color = '#373734';
    desc.style.color = '#373734';
}