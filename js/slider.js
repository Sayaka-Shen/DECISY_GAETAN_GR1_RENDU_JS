
/* Slider de Swiper JS */
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".mon-slider", {
        navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
        },
        pagination: {
        el : ".swiper-pagination",
        },
        autoplay : {
            delay : 2000
        }
    })
})