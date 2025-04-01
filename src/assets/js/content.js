'use strict'

// let i;
// const containerStudyExplanation = document.querySelectorAll('.container-explanation-text');
// const elTextExplanation = document.querySelectorAll('.explanation-text');

// for (i=0 ; i<containerStudyExplanation.length ; i++) {
//     containerStudyExplanation[i].classList.add('mt-1')
// }

// elTextExplanation.forEach(el => {
//     el.classList.add('mb-1');
// })

const contentDesc = [
    {
        titleClass: `inicio das aulas`,
        content: [
            `teste <br>`,
            `teste2 <br>`,
            `teste2 <br>`,
            `teste2 <br>`,
            `teste2 <br>`,
            `teste2 <br>`,
            `teste3 <br>`,
            `teste3 <br>`,
            `teste3 <br>`,
            `teste3 <br>`,
            `teste3 <br>`,
            `teste4 <br>`,
            `teste4 <br>`,
            `teste4 <br>`,
            `teste4 <br>`,
            `teste4 <br>`,
        ]
    }
]

// container do html que vai guardar o conteúdo
const divContainer = document.querySelectorAll('.container-explanation-text');

// for para adicionar em "todos os elemento possiveis"
for (let i=0 ; i<divContainer.length; i++) {
    // divContainer[i]
    const parag = document.createElement('p');
    const title = document.createElement('h4');
    parag.classList.add('explanation-text');
    title.classList.add('title-explanation-text');

    title.innerHTML = contentDesc[i].titleClass;
    parag.innerHTML = contentDesc[i].content;

    divContainer[i].append(title, parag)
}