$(document).ready(function () {

    $(window).scroll(function (event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if (pos_body > 20) {
			$('.site47_head_col0_hanoilab .bott').addClass('croll');
		}
		else {
			$('.site47_head_col0_hanoilab .bott').removeClass('croll');
		}
	});
	
	$(function () {
		new WOW().init();
	})

	$(".search").click(function () {
		$(".togglesearch").toggle();
	});

	$(function () {
		function slideMenu() {
			var activeState = $(".menu-top .main-menu").hasClass("active");
			$(".menu-top .main-menu").animate({ left: activeState ? "0%" : "-100%" }, 400);
		}
		$(".menu-wrapper").click(function (event) {
			event.stopPropagation();
			$(".hamburger").toggleClass("open");
			$(".menu-top .main-menu").toggleClass("active");
			slideMenu();
	
			$("body").toggleClass("overflow-hidden");
		});
	
		$(".main-menu").find(".accordion-toggle").click(function () {
	
	
			$(".main-menu .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
			$(".main-menu .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
		});
	
	}); // jQuery load
});



$(document).ready(function () {

    $(window).scroll(function (event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if (pos_body > 300) {
			$('.backtotop').addClass('show');
		}
		else {
			$('.backtotop').removeClass('show');
		}
	});

	$('.backtotop').click(function(){
		$('html, body').animate({scrollTop : 100},1600);
		return false;
	});

});