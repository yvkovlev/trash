$(document).ready(function () {
	$("#tabNavcoworking").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id)[0].offsetTop;
		$('#tabcoworking').animate({
			scrollTop: top
		}, 1000);
	});

	$("#tabNavEvents").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id)[0].offsetTop;
		$('#tabEvents').animate({
			scrollTop: top
		}, 1000);
	});

	$("#tabcoworking").on("scroll", onScrollCow);

	$("#tabEvents").on("scroll", onScrollEve);

	var sliderSettings = {
		dots: false,
		infinite: false,
		arrows: false,
		speed: 600,
		autoplay: true,
		autoplaySpeed: 3000,
		variableWidth: true,
		draggable: false,
		responsive: [{
			breakpoint: 576,
			settings: "unslick"
		}]
	};

	$('.slick-gallery').slick(sliderSettings);



	$('.left-arrow').on('click', function () {
		$('.slick-gallery').slick('slickPrev');
	});
	$('.rigtharrow').on('click', function () {
		$('.slick-gallery').slick('slickNext');
	});

	setTimeout(function () {
		var ww = $(window).width()
		if (ww <= 576) {
			swiper.destroy()
		}
	}, 0)



	$(window).on('resize', function () {
		var ww = $(window).width()
		if (ww <= 576) {
			swiper.destroy()
		}
	})


	var swiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		autoHeight: true,
		height: 577,
		navigation: {
			nextEl: '.gallery-des-nav__next',
			prevEl: '.gallery-des-nav__prev',
		},
		pagination: {
			el: '.gallery-des-nav',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				current = '0' + current;
				document.querySelector('.gallery-des-nav__number').innerHTML = current;
			}
		},
		on: {
			slideChangeTransitionStart: function () {
				$('.slick-gallery').slick('slickGoTo', 0)
			},
		},
	});

	$('.gallery-des-nav__prev').on('click', function () {
		$('.slick-main').slick('slickPrev');
	});
	$('.gallery-des-nav__next').on('click', function () {
		$('.slick-main').slick('slickNext');
	});


	$('.gallery-mobile-nav__item').on('click', function () {
		var target = $(this).attr('data-gallery-scroll');
		target = $('[data-gallery=' + target + ']');
		$('.gallery-mobile-nav__item').removeClass('active')
		$(this).addClass('active');

		$('.slick-gallery').removeClass('active')
		target.addClass('active')
	})

	$('a[data-fancybox]').fancybox({
		arrows: true,
	});
});