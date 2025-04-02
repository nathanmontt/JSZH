'use strict'

let hello = `<strong><em>Hello World!</em></strong>`;
const contentDescOne = [
    {
        titleClass: `Hello World!`,
        content: [
            `Aprendi a colocar o ${hello} dentro de um <em>console.log()</em>.`,
        ]
    },
];

const contentCodeOne = [
    {
        title: `Hello World!`,
        codeContent: [
            `Aprendi a colocar o <br> dentro de um <em>console.log()</em>.`,
            `Aprendi a colocar o ${hello} dentro de um <em>console.log()</em>.`,
        ]
    },
];

// container onde o conteúdo vai ser inserido
const containerExplanation = document.querySelector('.container-explanation-text');
const containerCode = document.querySelector('.change-bg-color');

function renderContentOne(contentData) {
    const container = document.createElement('div');
    container.classList.add('holder');

    const titleEl = document.createElement('h4');
    titleEl.classList.add('title-content', 'mt-05');
    titleEl.innerHTML = contentData.titleClass;
    container.appendChild(titleEl);

    contentData.content.forEach(line => {
        const p = document.createElement('p');
        p.classList.add('content-paragraph', 'mb-05');
        p.innerHTML = line;
        container.appendChild(p);
    });

    // titleEl.style.cssText = ``;

    const separator = document.createElement('hr');
    container.appendChild(separator);

    return container;
}

function renderCodeOne(codeContentData) {
    const codeContainer = document.createElement('div');
    codeContainer.classList.add('holder-code');

    const titleContent = document.createElement('h4');
    titleContent.classList.add('title-content', 'mt-05', 'mb-05');
    titleContent.innerHTML = codeContentData.title;
    titleContent.style.color = 'white';
    codeContainer.appendChild(titleContent);

    codeContentData.codeContent.forEach(line => {
        const p = document.createElement('p');
        p.classList.add('content-paragraph', 'mb-05');
        p.innerHTML = line;
        p.style.cssText = `
            color: white;
        `;
        codeContainer.appendChild(p);
    });

    // titleEl.style.cssText = ``;

    const separator = document.createElement('hr');
    codeContainer.appendChild(separator);

    return codeContainer;
}

function renderAll() {
    containerExplanation.innerHTML = '';
    containerCode.innerHTML = '';

    // Primeira parte
    contentDescOne.forEach(item => {
        const block = renderContentOne(item);
        containerExplanation.append(block);
    });
    contentCodeOne.forEach(item => {
        const holder = renderCodeOne(item);
        containerCode.append(holder);
    });
}

document.addEventListener('DOMContentLoaded', renderAll);