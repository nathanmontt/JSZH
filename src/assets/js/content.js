'use strict'

const contentDescTopicOne = [
    {
        titleClass: `inicio das aulas`,
        content: [
            `fiz coisa`,
            `fiz tal coisa`,
        ]
    },
    {
        titleClass: `inicio das aulas`,
        content: [
            `fiz coisa`,
            `fiz tal coisa`,
        ]
    },
    {
        titleClass: `inicio das aulas`,
        content: [
            `fiz coisa`,
            `fiz tal coisa`,
        ]
    },
];

// container onde o conteúdo vai ser inserido
const containerExplanation = document.querySelector('.container-explanation-text');

function renderContent(contentData) {
    const container = document.createElement('div');
    container.classList.add('holder');

    const titleEl = document.createElement('h4');
    titleEl.classList.add('title-content');
    titleEl.textContent = contentData.titleClass;
    container.appendChild(titleEl);

    contentData.content.forEach(line => {
        const p = document.createElement('p');
        p.classList.add('content-paragraph');
        p.textContent = line;
        container.appendChild(p);
    });

    const separator = document.createElement('hr');
    container.appendChild(separator);

    return container;
}

function renderAll() {
    // containerExplanation.innerHTML = '';
  
    // Percorre cada objeto no array contentDescTopicOne e adiciona o bloco renderizado ao container
    contentDescTopicOne.forEach(item => {
        const block = renderContent(item);
        containerExplanation.append(block);
    });
}

document.addEventListener('DOMContentLoaded', renderAll);