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

let i;
const divContainer = document.querySelectorAll('.container-explanation-text');

for (let i=0 ; i<divContainer.length; i++) {
    // divContainer[i]
    const parag = document.createElement('p');
    parag.classList.add('explanation-text');
    parag.innerHTML = "lorem ipsum"

    divContainer[i].append(parag)
}