(function($) {

	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	// Adding Tweens To A Timeline
	// tl
	// 	.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
	// 	.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
	// 	.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 3)
	// 	.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 2)
	// 	.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 2.5);
    tl
  		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
      .add('intro')
  		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
  		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
  		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro')
  		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro+=3');

})(jQuery);
