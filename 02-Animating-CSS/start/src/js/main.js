(function($) {

	var img = $('img'),
    h2 = $('h2');

	// Simple Tween
  // TweenLite.set(img, {x: 1000});
  // TweenLite.fromTo(img, 1, {x: -200}, {x: 200});
  // TweenLite.to(img, 1, {x: -400});
  TweenLite.from(img, 1, {x: -200});
  TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});
})(jQuery);
