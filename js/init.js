$(document).ready(function(){
	$('.slick-example').slick({
		centerMode: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	    {
	      breakpoint: 1920,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 1400,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
    ]
});
});