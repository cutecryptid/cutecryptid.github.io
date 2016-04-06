$(document).ready(function() {
	function resizeSections(){
		var wheight = $(window).height();
		$(".section").css('min-height', wheight);
		$(".section-title").css('height', wheight);
		$(".section-title").css('min-height', wheight);
		$(".section-content").css('min-height', wheight);
	}

	function resizeProjects(){
		var wheight = $(window).height();
		$(".project").css('height', (wheight*0.35));
	}

	function fixTitle(section){
		var sectionHeight = $(section).outerHeight();
		var sectionScroll = $(section).offset().top;
		var windowHeight = $(window).height();
		var windowScroll = $(window).scrollTop();
		if (windowScroll >= sectionScroll && sectionScroll + sectionHeight - windowHeight >= windowScroll){
			$(section + " .section-title").addClass('title-fixed').css({
				top: 0
			});
		} else {
			var c = windowScroll - sectionScroll;
			c = Math.max(0,c);
			c = Math.min(sectionHeight - windowHeight, c);
			$(section + " .section-title").removeClass('title-fixed').css({
				top: c
			});
		}
	}

	function fixNav(){
		var sectionHeight = $("#about").outerHeight();
		var sectionScroll = $("#about").offset().top;
		var windowHeight = $(window).height();
		var windowScroll = $(window).scrollTop();
		if (windowScroll >= sectionScroll){
			$("#menu").css({
				position: 'fixed',
				top: 0
			});
		} else {
			$("#menu").css({
				position: 'relative',
				top: 'initial'
			});
		}
	}
	
	resizeSections();
	fixTitle("#about");
	fixTitle("#projects");
	fixTitle("#contact");
	fixNav();

	$(window).resize(function(event) {
		resizeSections();
		resizeProjects();
		fixTitle("#about");
		fixTitle("#projects");
		fixTitle("#contact");
		fixNav();
	});

	$(window).scroll(function(event) {
		resizeSections();
		resizeProjects();
		fixTitle("#about");
		fixTitle("#projects");
		fixTitle("#contact");
		fixNav();
	});




});