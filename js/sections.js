$(document).ready(function() {
	function resizeSections(){
		var wheight = $(window).height();
		$(".section").css('min-height', wheight);
		$(".section-title").css('height', wheight);
		$(".section-title").css('min-height', wheight);
		$(".section-content").css('min-height', wheight);
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
	

	resizeSections();
	fixTitle("#about");
	fixTitle("#projects");

	$(window).resize(function(event) {
		resizeSections();
	});

	$(window).scroll(function(event) {
		fixTitle("#about");
		fixTitle("#projects");
	});
});



// var o = (t.extend({}, t.fn.MDChapter.defaults, n), t(e)),
//     i = t(".section-title", o),
//     a = (t(".section-content", o), function() {
//         r()
//     }),
//     r = function() {
//         t(window).on("scroll", c), t(window).on("resize", c), c(null)
//     },
//     c = function() {
//         var e = o.outerHeight(),
//             n = o.offset().top,
//             a = t(window).height(),
//             r = t(window).scrollTop();
//         if (r >= n && n + e - a >= r) i.addClass("title--fixed").css({
//             top: 0
//         });
//         else {
//             var c = r - n;
//             c = Math.max(0, c), c = Math.min(e - a, c), i.removeClass("title--fixed").css({
//                 top: c
//             })
//         }
//     };
// a()