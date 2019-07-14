$(document).ready(function () {

    // $("#selectmenu").selectmenu();
    $("#size").selectmenu();

    var mql = window.matchMedia('all and (max-width: 768px)');
    var menu_btn = $('.main-menu-item > a');

    if (mql.matches) {
        menu_btn.each(function (index, el) {
            if ($(this).hasClass('active')) {
                $(this).next('ul').addClass('active');
            }
        });
    }

    // custom counter (input type = number)
    function catalogItemCounter(field) {
        var fieldCount = function (el) {
            var
                // Мин. значение
                min = el.data('min') || false,

                // Макс. значение
                max = el.data('max') || false,

                // Кнопка уменьшения кол-ва
                dec = el.prev('.dec'),

                // Кнопка увеличения кол-ва
                inc = el.next('.inc');

            function init(el) {
                if (!el.attr('disabled')) {
                    dec.on('click', decrement);
                    inc.on('click', increment);
                }

                // Уменьшим значение
                function decrement() {
                    var value = parseInt(el[0].value);
                    value--;

                    if (!min || value >= min) {
                        el[0].value = value;
                    }
                }

                // Увеличим значение
                function increment() {
                    var value = parseInt(el[0].value);

                    value++;

                    if (!max || value <= max) {
                        el[0].value = value++;
                    }
                }

            }

            el.each(function () {
                init($(this));
            });
        };

        $(field).each(function () {
            fieldCount($(this));
        });
    }

    catalogItemCounter('.fieldCount');

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
    var color_pic = $('.size-color .color label');

    $(color_pic).click(function () {
        if (!$(this).hasClass('active')){
            $(color_pic).each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
        }
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
        dots: true,
        items: 1,
        navText: false
    });

    $('.carousel .owl-carousel').owlCarousel({
        stagePadding: 90,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 4,
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

    $(function () {
        $("#tabs").tabs();
    });


});
