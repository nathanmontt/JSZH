'use strict'

const body = document.body;
const btnCtaDarkTheme = document.getElementById('dark-theme');
const whiteColor = `#f3f3f3`;
const darkColor = `#373734`;
const darkerColor = `#070707`;
const borderPrimarySize = `0.001em`;

const home = document.querySelector('.home-link');
const info = document.querySelector('.info-footer-link');
const desc = document.querySelector('.desc');
const title = document.querySelector('.title');

const containerShowFront = document.querySelectorAll('.container-show-front');
const contentTitle = document.querySelectorAll('.content-title');
const contentNameCourse = document.querySelectorAll('.content-name-course');
const btnContentOpenModal = document.querySelectorAll('.btn-content-open-modal');

btnCtaDarkTheme.addEventListener('click', function() {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');

        changeToDarkMode();
    } else {
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        
        changeToWhiteMode();
    }
});

function changeToDarkMode () {
    btnCtaDarkTheme.textContent = 'LIGHT';
    btnCtaDarkTheme.style.color = `${whiteColor}`;
    home.style.color = `${whiteColor}`;
    info.style.color = `${whiteColor}`;
    desc.style.color = `${whiteColor}`;
    title.style.color = `${whiteColor}`;
    
    containerShowFront.forEach(el => {
        el.style.border = `${borderPrimarySize} solid ${whiteColor}`;
    });

    contentTitle.forEach(el => {
        el.style.color = `${whiteColor}`;
    });

    contentNameCourse.forEach(el => {
        el.style.color = `${whiteColor}`;
    });

    btnContentOpenModal.forEach(el => {
        el.style.color = `${darkerColor}`;
        el.style.border = `${borderPrimarySize} solid ${whiteColor}`;
        el.style.backgroundColor = `${whiteColor}`;
    });
}

function changeToWhiteMode () {
    btnCtaDarkTheme.textContent = 'DARK';
    btnCtaDarkTheme.style.color = `${darkColor}`;
    home.style.color = `${darkColor}`;
    info.style.color = `${darkColor}`;
    desc.style.color = `${darkColor}`;
    title.style.color = `${darkColor}`;

    containerShowFront.forEach(el => {
        el.style.border = `${borderPrimarySize} solid ${darkColor}`;
    });

    contentTitle.forEach(el => {
        el.style.color = `${darkColor}`;
    });

    contentNameCourse.forEach(el => {
        el.style.color = `${darkColor}`;
    });

    btnContentOpenModal.forEach(el => {
        el.style.color = `${whiteColor}`;
        el.style.border = `${borderPrimarySize} solid ${darkColor}`;
        el.style.backgroundColor = `${darkerColor}`;
    });
}