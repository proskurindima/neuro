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
$('.web_items').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  cssEase: 'linear'
});
//Функция Popup
    function show(state){
            document.getElementById('window').style.display = state;            
            document.getElementById('wrap').style.display = state;  
    }
$(document).ready(function(){
	$('.ai_item_button').click(function(){
		$('#wrap').fadeIn(400);
		$('#window').fadeIn(400);
	});
	$('.close').click(function(){
		$('#wrap').fadeOut(400);
		$('#window').fadeOut(400);
	});
	$('#wrap').click(function(){
		$('#wrap').fadeOut(400);
		$('#window').fadeOut(400);
	});

});
$(window).scroll(function(){
    if ($(window).scrollTop() > 250) {
        $('.header_wrapper').addClass('scroll');
    }
    else {
        $('.header_wrapper').removeClass('scroll')
    }
});

$('.accordion_item_header').on('click', function () {
			var content = $(this).next()
			var parent = $(this).parent()
			if (parent.hasClass('active')) {
				parent.removeClass('active')
				content.stop().slideUp(400)
			} else {
				$('.web_info_accordion_item.active')
					.removeClass('active')
					.find('.accordion_item_content')
					.stop()
					.slideUp(400)
				parent.addClass('active')
				content.stop().slideDown(400)
			}
		});


$(".ai_item:odd .ai_item_img").addClass("scrollflow -slide-left -opacity");
$(".ai_item:odd .ai_item_text").addClass("scrollflow -slide-right -opacity");
$(".ai_item:even .ai_item_img").addClass("scrollflow -slide-right -opacity");
$(".ai_item:even .ai_item_text").addClass("scrollflow -slide-left -opacity");
$(".web_item .web_item_img").addClass("scrollflow -slide-right -opacity");
$(".web_item .web_item_text").addClass("scrollflow -slide-left -opacity");