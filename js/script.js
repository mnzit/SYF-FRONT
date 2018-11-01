
var sectionIds = {};

$(".row-nav").each(function () {
	var $this = $(this);
	sectionIds[$this.attr("id")] = $this.first().offset().top;
});

$(window).scroll(function (event) {

	var scrolled = $(this).scrollTop();

	$(".row-nav").each(function () {
		var $this = $(this);

		for (key in sectionIds) {

			if (scrolled >= sectionIds[key]) {
				console.log(scrolled + " " + sectionIds[key]);
				$(".Quick-navigation-item").removeClass("change");
				var c = $("[data-row-id=" + key + "]");
				c.addClass("change");

			}
		}
	});
});

$(".Quick-navigation-item").click(function () {

	$(this).siblings().removeClass("change");
	$(this).addClass("change");
	var i = $(this).index();		
	var name = $(this).attr("data-row-id");
	var id = "#" + name;
	var top = $(id).first().offset().top;

	$('html, body').animate({
		scrollTop: top + 'px'
	}, 500);

});

$("#owl-demo").owlCarousel({
	loop: true,
	margin: 30,
	autoplay: true,
	nav: true,
	dots: true,
	autoplaySpeed: 1000,
	pagination: true,
	navText: ['&#x2039', '&#x203a'],
	navContainer: ".navi",
	dotsContainer: ".dots",
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 1
		},
		1170: {
			items: 1,
		}
	}
});

/*######################################
########################################    
<---------------Banner slider------------------>
########################################
######################################*/

	$(".banner-slider").owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		nav: true,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		transitionStyle: "fade",
		smartSpeed: 800,
		responsive: {
			// breakpoint from 0 up
			0: {
				nav: false,
			},
			// breakpoint from 480 up
			480: {
				nav: false,
			},
			// breakpoint from 768 up
			991: {
				nav: true,
			}
		}
	});
/*######################################
########################################    
<---------------Preloader------------------>
########################################
######################################*/
$(window).on('load', function () {

	$('#preloader').addClass('loaded');
	//    preloader close
	$('.cancel-preloader').on('click', function (e) {
		e.preventDefault();
		if (!($('#preloader').hasClass('loaded'))) {
			$('#preloader').addClass('loaded');
		}
	});
});

var wow = new WOW(
	{
	  boxClass:     'wow',      // animated element css class (default is wow)
	  animateClass: 'animated', // animation css class (default is animated)
	  offset:       0,          // distance to the element when triggering the animation (default is 0)
	  mobile:       true,       // trigger animations on mobile devices (default is true)
	  live:         true,       // act on asynchronously loaded content (default is true)
	  callback:     function(box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	  },
	  scrollContainer: null // optional scroll container selector, otherwise use window
	}
  );
  wow.init();
