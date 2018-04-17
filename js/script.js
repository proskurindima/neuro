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