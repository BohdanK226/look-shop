$(document).ready(function () {
    $("#selectmenu").selectmenu();

    var mql = window.matchMedia('all and (max-width: 768px)');
    var menu_btn = $('.main-menu-item > a');

    if (mql.matches) {
        menu_btn.each(function (index, el) {
            if ($(this).hasClass('active')) {
                $(this).next('ul').addClass('active');
            }
            ;
        });


    }

    menu_btn.click(function (e) {
        /* Act on the event */
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next('ul').removeClass('active');
        } else {
            menu_btn.removeClass('active').next('ul').removeClass('active');
            $(this).addClass('active').next('ul').addClass('active');
        }
        ;
        e.preventDefault();
    });

    $(".mobile-menu i").click(function () {
        $(".main-menu").toggleClass("active");
    });
    $(window).resize(function () {
        if (mql.matches) {
            menu_btn.each(function (index, el) {
                if ($(this).hasClass('active')) {
                    $(this).next('ul').addClass('active');
                }
                ;
            });
        }
    });

    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots:true,
        items:1,
        navText: false
    });

    $('.carousel .owl-carousel').owlCarousel({
        stagePadding: 90,
        loop: true,
        margin: 0,
        nav: true,
        dots:false,
        items:4,
        navText: false,
        responsive: {
            767: {
                items: 3,
                stagePadding: false
            },
            820: {
                items: 3,
                stagePadding: 30
            },
            920: {
                items: 3,
                stagePadding: 70
            },
            1024: {
                items: 4,
                stagePadding: 10
            },
            1200: {
                items: 4,
                stagePadding: 90
            },
            1400: {
                items: 5,
                stagePadding: 90
            },
            1600: {
                items: 6,
                stagePadding: 90
            }
        }
    });

    $( function() {
        $( "#tabs" ).tabs();
    } );
});
