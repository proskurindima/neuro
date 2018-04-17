$('.ipad_items').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
 		asNavFor: '.partner_head_items'
	});

	$('.partner_head_items').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		asNavFor: '.ipad_items',
 		prevArrow: $('.prev'),
  		nextArrow: $('.next'),
	});