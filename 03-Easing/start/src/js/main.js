(function($) {

	var img = $('img'),
		h2 = $('h2');

	// Simple Tween
	// TweenLite.from(img, 1, {x: -200, ease:Power4.easeIn});
	// TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});
  TweenLite.from(img, 1, {x: -600, ease: Bounce.easeOut, x: -1000});
})(jQuery);
