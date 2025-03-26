'use strict'

const body = document.body;
const btnCtaDarkTheme = document.getElementById('dark-theme');

const home = document.querySelector('.home-link');
const info = document.querySelector('.info-footer-link');

btnCtaDarkTheme.addEventListener('click', function() {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');

        btnCtaDarkTheme.textContent = 'LIGHT';
        btnCtaDarkTheme.style.color = '#f3f3f3';
        home.style.color = '#f3f3f3';
        info.style.color = '#f3f3f3';
    } else {
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')

        btnCtaDarkTheme.textContent = 'DARK';
        btnCtaDarkTheme.style.color = '#373734';
        home.style.color = '#373734';
        info.style.color = '#373734';
    }
    // console.log('asdadasd')
});