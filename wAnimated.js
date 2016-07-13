/*
 * $(".section_2").wAnimated("bounceInRight", "200");
 */
(function($) {
	$.fn.wAnimated = function(effect, offset) {
		var th = this;
		$(th).css("opacity", "0").addClass("animated").waypoint({
			handler: function(direction) {				
				$(th).addClass(effect).css("opacity", "1");				
			},
			offset: offset
				
		});
	};
})(jQuery);