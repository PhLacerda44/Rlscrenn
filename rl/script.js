const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;
const numItems = document.querySelectorAll('.carousel-item').length;



function slideTo(index) {
    if (index < 0) {
        index = numItems - 1;
    } else if (index >= numItems) {
        index = 0;
    }

    carousel.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

prevButton.addEventListener('click', () => slideTo(currentIndex - 1));
nextButton.addEventListener('click', () => slideTo(currentIndex + 1));

//Slide automatico
setInterval(()=> {
slideTo(currentIndex + 1);
}, 5000); // Muda a cada 5 segundos