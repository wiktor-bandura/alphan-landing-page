const buttons = [ ...document.querySelectorAll('.gallery-nav > p') ];
const photosFromGallery = [ ...document.querySelectorAll('.photo') ];
const realizations = [ ...document.querySelectorAll('.realization-item') ];

realizations.forEach((element) => {
    element.addEventListener('click', () => {
        buttons.forEach((button) => {
            if(button.getAttribute('data-cat') === element.getAttribute('data-cat')) button.click();
        });
    });
});

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-cat');

        buttons.forEach(el => { if(el.classList.contains('clicked')) el.classList.remove('clicked') });
        btn.classList.add('clicked');

        photosFromGallery.forEach((photo) => {
            if(photo.getAttribute('data-cat') === category) {

                if(photo.classList.contains('unvisible')) photo.classList.remove('unvisible');
                photo.classList.add('visible');
            } else {
                if(photo.classList.contains('visible')) photo.classList.remove('visible');
                photo.classList.add('unvisible');
            }
        });
    });
});