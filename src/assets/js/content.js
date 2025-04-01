'use strict'

let i;
const containerStudyExplanation = document.querySelectorAll('.container-explanation-text');
const elTextExplanation = document.querySelectorAll('.explanation-text');

for (i=0 ; i<containerStudyExplanation.length ; i++) {
    containerStudyExplanation[i].classList.add('mt-1')
}

elTextExplanation.forEach(el => {
    el.classList.add('mb-1');
})