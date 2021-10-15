$(document).ready(function () {
	$('.slide-samphammoi').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
		infinite: true, 
		speed: 700,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
			},
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}]
	});


	$('.slide-sampham').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
		infinite: true, 
		speed: 700,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}]
	});

	$('.slide_logo').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		infinite: true, 
		speed: 700,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 991,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
			},
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 400,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}]
	});

	$('.slide-one').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
		infinite: true, 
		speed: 700,
	});

	$('.slide-don').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
		infinite: true, 
		speed: 700,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
			}
		}, {
			breakpoint: 526,
			settings: {
				slidesToShow: 1,
			}
		}]
	});

	$('.slide-doi').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
		infinite: true, 
		speed: 700,
		responsive: [{
			breakpoint: 426,
			settings: {
				slidesToShow: 1,
			}
		}]
	});

	
	$('.slider-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		adaptiveHeight: true,
		infinite: true,
		useTransform: true,
		speed: 1000,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		asNavFor: '.slider-nav',
	});


	$('.slider-nav').slick({
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		slidesToShow: 4,
		speed: 1000,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: true,
		infinite: true,
		asNavFor: '.slider-single',
		responsive: [{
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 300,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}]
	});

	
}); // jQuery load


jQuery(function () {

	jQuery(".video-for .video-item .background").click(function () {
		jQuery(this).css("display", "none");
	  });
	
	  jQuery('.video-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		asNavFor: '.video-item-nav',
	
	  });
});



$(document).ready(function () {

	$(function () {
		var w = $(window).width();
		var h = $(window).height();

		var duration = 2000,
			el = $(".cosan"),
			elem = $(".cosan .content");

		elem.eq(0).addClass("z-index");

		contentl = elem.length;

		$(".tabs_cosan .cosan").click(function () {
			var index = $(this).index();
			var d = index * (360 / contentl);

			$(".tabs_cosan .cosan").removeClass("active");
			$(this).addClass("active");

			elem.removeClass("z-index");
			elem.eq(index).addClass("z-index");

		})

	});


	
	$(function () {
		var w = $(window).width();
		var h = $(window).height();

		var duration = 2000,
			el = $(".sapve"),
			elem = $(".sapve .content");

		elem.eq(0).addClass("z-index");

		contentl = elem.length;

		$(".tabs_sapve .sapve").click(function () {
			var index = $(this).index();
			var d = index * (360 / contentl);

			$(".tabs_sapve .sapve").removeClass("active");
			$(this).addClass("active");

			elem.removeClass("z-index");
			elem.eq(index).addClass("z-index");

		})

	});


	$(function () {
		var w = $(window).width();
		var h = $(window).height();

		var duration = 2000,
			el = $(".dathang"),
			elem = $(".dathang .content");

		elem.eq(0).addClass("z-index");

		contentl = elem.length;

		$(".tabs_dathang .dathang").click(function () {
			var index = $(this).index();
			var d = index * (360 / contentl);

			$(".tabs_dathang .dathang").removeClass("active");
			$(this).addClass("active");

			elem.removeClass("z-index");
			elem.eq(index).addClass("z-index");
		})
	});

	$(function () {
		var w = $(window).width();
		var h = $(window).height();

		var duration = 2000,
			el = $(".phukien"),
			elem = $(".phukien .content");

		elem.eq(0).addClass("z-index");

		contentl = elem.length;

		$(".tabs_phukien .phukien").click(function () {
			var index = $(this).index();
			var d = index * (360 / contentl);

			$(".tabs_phukien .phukien").removeClass("active");
			$(this).addClass("active");

			elem.removeClass("z-index");
			elem.eq(index).addClass("z-index");

		})

	});


	$(function () {
		var w = $(window).width();
		var h = $(window).height();

		var duration = 2000,
			el = $(".onetab"),
			elem = $(".onetab .content");

		elem.eq(0).addClass("z-index");

		contentl = elem.length;

		$(".tabs_onetab .onetab").click(function () {
			var index = $(this).index();
			var d = index * (360 / contentl);

			$(".tabs_onetab .onetab").removeClass("active");
			$(this).addClass("active");

			elem.removeClass("z-index");
			elem.eq(index).addClass("z-index");

		})

	});

	$('.continue').click(function () {
		$('.van-tabs > .active').next('label').find('a').trigger('click');
	});
	$('.back').click(function () {
		$('.van-tabs > .active').prev('label').find('a').trigger('click');
	});


	// $('.continue').click(function () {
	// 	$('.van-tabs > .active').next('label').find('button').trigger('click');
	// });
	// $('.back').click(function () {
	// 	$('.van-tabs > .active').prev('label').find('button').trigger('click');
	// });

}); // jQuery load



$(document).ready(function () {
	
	$(function () {
		new WOW().init();
	})

	$(".mota").click(function () {
		$(".motachitiet").addClass("auto");
	});

	$(".thongso").click(function () {
		$(".thongsokythuat").addClass("auto");
	}); 

	$(".hinhanh").click(function () {
		$(".hinhanhvasanpham").addClass("auto");
	});

	$(".danhgia").click(function () {
		$(".danhgiasanpham").addClass("auto");
	});
});







var wrapper = document.getElementById("wrapper");

document.addEventListener("click", function (event) {
  if (!event.target.matches(".list")) return;

  // List view
  event.preventDefault();
  wrapper.classList.add("list");
});

document.addEventListener("click", function (event) {
  if (!event.target.matches(".grid")) return;

  // List view
  event.preventDefault();
  wrapper.classList.remove("list");
});





$(document).ready(function () {

	$('.slider-singles').slick({
		slidesToShow: 1,
		slidesToScroll: 3,
		autoplay: false,
		centerMode: false,
		infinite: true,
		arrows: false,
		dots: false,
		fade: false,
		useTransform: true,
		speed: 400,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
	});

	$('.slider-navs')
	.on('init', function(event, slick) {
		$('.slider-navs .slick-slide.slick-current').addClass('is-active');
	})
	.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		focusOnSelect: false,
		infinite: false,
	});


	$('.slider-singles').on('afterChange', function(event, slick, currentSlide) {
		$('.slider-navs').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.slider-navs .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.slider-navs .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});

	$('.slider-navs').on('click', '.slick-slide', function(event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');

		$('.slider-singles').slick('slickGoTo', goToSingleSlide);
	});



	// Get the modal
	var modal = document.getElementById("dathang");
	
	$('#btndathang').on('click', () => {
		modal.style.display = "block";
	})

	$('.close').on('click', () => {
		modal.style.display = "none";
	})

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

}); // jQuery load