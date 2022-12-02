var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});

const menuBtn = document.querySelector('.menu-button');
const navbarPanel = document.querySelector('.navbar-panel');
const closeMenu = document.querySelector('.close-menu');

menuBtn.addEventListener('click', () => {
    navbarPanel.classList.add('is-open');
});

closeMenu.addEventListener('click', () => {
    navbarPanel.classList.remove('is-open');
});
