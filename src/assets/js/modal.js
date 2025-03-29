'use strict'

const btnOpenModal = document.querySelector('.btn-content-open-modal');
const btnCloseModal = document.querySelector('.close-modal');
const showModal = document.querySelector('.container-modal');
let test = 'ok';

btnOpenModal.addEventListener('click', function () {
    console.log(test)
    if (showModal.classList.contains('hidden')) {
        showModal.classList.remove('hidden');
        btnCloseModal.classList.remove('hidden');
    }
});

btnCloseModal.addEventListener('click', function () {
    if (!showModal.classList.contains('hidden')) {
        showModal.classList.add('hidden');
        btnCloseModal.classList.add('hidden');
    }
});

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

// openModalContents.addEventListener('click', function () {
//     if (openModalContents.classList.contains('hidden')) {
//         console.log("abriu!");
//         openModalContents.classList.remove('hidden');
//     }
// });

// closeModalBtn.addEventListener('click', function () {
//     if (!openModalContents.classList.contains('hidden')) {
//         console.log("fechou");
//         openModalContents.classList.add('hidden');
//     }
// });