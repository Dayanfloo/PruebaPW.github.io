let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}
