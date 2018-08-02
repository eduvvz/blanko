var swipper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 2,
    slideToClickedSlide: true,
    allowTouchMove: false,

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },

});

function renderTextCorousel() {
    // Mudar o texto após a animação de transição
    setTimeout(function () {
        var titleCarousel = document.getElementById("title-carousel-item");
        var txtCarousel = document.getElementById("txt-carousel-item");

        if (swipper.realIndex === 0) {
            titleCarousel.innerText = "Draw";
            txtCarousel.innerText =
                "Quodsi repudiandae usu te, sea ut mollis luptatum invenire. Et fabulas nostrum placerat nam, tibique albucius oportere pro at.";
        } else if (swipper.realIndex === 1) {
            titleCarousel.innerText = "One Date";
            txtCarousel.innerText =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ";
        } else if (swipper.realIndex === 2) {
            titleCarousel.innerText = "Dark UI Kit Freebie";
            txtCarousel.innerText =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque " +
                "eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.";
        } else if (swipper.realIndex === 3) {
            titleCarousel.innerText = "Social Medias";
            txtCarousel.innerText =
                "Sit apeirian legendos eu, his latine tamquam no, in accusam sensibus sit.";
        } else {
            titleCarousel.innerText = "Jesus";
            txtCarousel.innerText =
                "Cu usu inani saepe fabulas. At deleniti reprimique mel. Pri sumo paulo congue at, te nulla option oblique per. Mel eu atqui animal dolores, ad mutat pericula quo.";
        }
    }, 10);
}