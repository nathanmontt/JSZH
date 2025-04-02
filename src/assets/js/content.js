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

// container onde o conteúdo vai ser inserido
const containerExplanation = document.querySelector('.container-explanation-text');

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

function renderAll() {
    containerExplanation.innerHTML = '';

    contentDescOne.forEach(item => {
        const block = renderContentOne(item);
        containerExplanation.append(block);
    });
}

document.addEventListener('DOMContentLoaded', renderAll);