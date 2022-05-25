$(document).ready(function () {

    $('#slide').owlCarousel({
        items: 4,
        autoplay: true,
        loop: true,
        margin: 30,
        nav: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
            },
            470: {
                items: 1,
            },
            770: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });

    $('#slide2').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: true,
        autoplayTimeout: 10000,
    });



});