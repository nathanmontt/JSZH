'use strict'

const openModalContents = document.querySelector('.container-modal');
const closeModalBtn = document.querySelector('.close-modal');

// for (let i=0 ; i<openModalContents.length ; i++) {
//     openModalContents[i].addEventListener('click', function () {
//         if (openModalContents[i].classList.contains('hidden')) {
//             console.log("abriu!");
//             openModalContents[i].classList.remove('hidden')
//         } else {
//             console.log("fechou!");
//             closeModalBtn[i].classList.add('hidden');
//         }
//     });
// }

openModalContents.addEventListener('click', function () {
    if (openModalContents.classList.contains('hidden')) {
        console.log("abriu!");
        openModalContents.classList.remove('hidden');
    }
});

closeModalBtn.addEventListener('click', function () {
    if (!openModalContents.classList.contains('hidden')) {
        console.log("fechou");
        openModalContents.classList.add('hidden');
    }
});