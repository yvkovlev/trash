$(".map-popup-js").click(function () {
    $(".map-popup").addClass("show");
    $(".map-popup-overlay").addClass("show");
    $(".map-popup").removeClass("none");
    $(".map-popup-overlay").removeClass("none");
});
$(".map-popup-overlay").click(function () {
    $(".map-popup").addClass("none");
    $(".map-popup-overlay").addClass("none");
    $(".map-popup").removeClass("show");
    $(".map-popup-overlay").removeClass("show");
});

$(document).ready(function () {



    $('.slick-gallery').on('init', function () {

        $('.slider_item1').each(function () {
            var galleryNum = $(this).attr('data-gallery');
            $(this).parent().parent().attr('data-gallery-number', galleryNum);
        })

        $('.info-gallery-show').each(function () {
            var galleryNumber = $(this).attr('data-gallery');
            var galleryNumberBegin = $(this).attr('data-gallery-begin');
            $(this).parent().parent().attr('data-gallery-number', galleryNumber);
            $(this).parent().parent().attr('data-gallery-begin', galleryNumber);
        })

        $('.info-gallery-show').parent().parent().addClass('slick-slide_first');
        $('.slider_item-last').parent().parent().addClass('slick-slide_last');
    })

    $('.slick-gallery').on('afterChange', function () {
        changeSlide();
    })

    $('.gallery-des-nav__prev').on('click', function () {
        var galLen = $('.info-gallery-show').length;
        var galCurrent = parseInt($('.gallery-des-nav__number').html());
        if (galCurrent >= galLen) {
            return false
        } else {
            galCurrent++;
            var numberSlide = $('.slick-slide[data-gallery-begin=' + galCurrent + ']');
            numberSlide = parseInt(numberSlide.attr('data-slick-index'));
            $('.slick-gallery').slick('slickGoTo', numberSlide)
        }
    })

    $('.gallery-des-nav__next').on('click', function () {

        var galCurrent = parseInt($('.gallery-des-nav__number').html());

        if (galCurrent <= 0) {
            return false
        } else {
            galCurrent--;
            var numberSlide = $('.slick-slide[data-gallery-begin=' + galCurrent + ']');
            numberSlide = parseInt(numberSlide.attr('data-slick-index'));
            $('.slick-gallery').slick('slickGoTo', numberSlide)
        }
    })

    function changeSlide() {
        var currentSlideNumber = $('.slick-gallery').slick('slickCurrentSlide');
        currentSlide = $('.slick-slide').eq(currentSlideNumber).attr('data-gallery-number')

        var galleryFeald = $('.gallery-des-nav__number');
        galleryFeald.html('0' + currentSlide);
    }

    setTimeout(function () {
        if ($('.slick-gallery')) {
            $('.slick-gallery').slick({
                dots: false,
                infinite: false,
                arrows: false,
                speed: 600,
                variableWidth: true,
                slidesToShow: 1,
                responsive: [{
                        breakpoint: 576,
                        settings: "unslick"
                    }


                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }

    }, 0)

    $('.gallery-mobile-nav__item').on('click', function () {
        var target = $(this).attr('data-gallery-scroll');
        target = $('[data-position=' + target + ']');
        $('.gallery-mobile-nav__item').removeClass('active')
        $(this).addClass('active');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    })

    $('a[data-fancybox]').fancybox({
        arrows: true,
    });
})