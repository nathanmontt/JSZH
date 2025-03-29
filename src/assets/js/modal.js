'use strict'

const btnOpenModal = document.querySelectorAll('.btn-content-open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');
const showModal = document.querySelectorAll('.container-modal');
let test = 'ok';

for (let i=0 ; i<btnCloseModal.length ; i++) {
    btnOpenModal[i].addEventListener('click', function () {
        console.log(test)
        if (showModal[i].classList.contains('hidden')) {
            showModal[i].classList.remove('hidden');
            btnCloseModal[i].classList.remove('hidden');
        }
    });
}

for (let k=0 ; k<btnCloseModal.length ; k++) {
    btnCloseModal[k].addEventListener('click', function () {
        if (!showModal[k].classList.contains('hidden')) {
            showModal[k].classList.add('hidden');
            btnCloseModal[k].classList.add('hidden');
        }
    });
}

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