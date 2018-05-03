$(document).ready(function(){
 /* var url = new URL(window.location); 
        var tab = url.searchParams.get("tab"); 
        if(tab == null || tab == ''){ tab = 0; }
        console.log(tab);
        tab -= 0  */ 
  $('.ipad_items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // initialSlide: tab,
    asNavFor: '.partner_head_items, .partner_logo_items ',
  });
  $('.partner_head_items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.ipad_items, .partner_logo_items',
   	prevArrow: $('.prev'),
    nextArrow: $('.next'),
    // initialSlide: tab,
  });
  $('.partner_logo_items').slick({
    slidesToShow: 6,
    asNavFor: '.partner_head_items, .ipad_items',
    focusOnSelect: true,
    // initialSlide: tab,
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
$(document).ready(function(){
  $('.accordion_item_header').on('click', function () {
		var content = $(this).next()
		var parent = $(this).parent()
		if (parent.hasClass('active')) {
			parent.removeClass('active')
			content.stop().slideUp(400)
		} 
    else {
			$('.web_info_accordion_item.active')
			.removeClass('active')
			.find('.accordion_item_content')
			.stop()
			.slideUp(400)
			parent.addClass('active')
			content.stop().slideDown(400)
		}
  });
});

$(document).ready(function(){
  $(".ai_item:odd .ai_item_img").addClass("scrollflow -slide-left -opacity");
  $(".ai_item:odd .ai_item_text").addClass("scrollflow -slide-right -opacity");
  $(".ai_item:even .ai_item_img").addClass("scrollflow -slide-right -opacity");
  $(".ai_item:even .ai_item_text").addClass("scrollflow -slide-left -opacity");
  $(".web_item .web_item_img").addClass("scrollflow -slide-right -opacity");
  $(".web_item .web_item_text").addClass("scrollflow -slide-left -opacity");
});
$(document).ready(function(){
  $(".crypto_item:even").addClass("scrollflow -slide-left -opacity");
    $(".crypto_item:odd").addClass("scrollflow -slide-right -opacity");
});


$(document).ready(function(){
  $('#nav_toggle').click(function(){
    $(this).toggleClass('active');
		$('.main_nav').toggleClass('active');
	});
});
$(document).ready(function() {
	var windowWidth = $(window).width();
    if(windowWidth < 769) {
       $('.main_service_item:eq(1)').removeClass('-pop');
       $('.main_service_item:eq(1)').addClass('-slide-left');
       $('.main_service_item:eq(2)').removeClass('-slide-left');
       $('.main_service_item:eq(2)').addClass('-pop');
    }
    if (windowWidth < 440) {
      $('.feedback_text').removeClass('-slide-left');
      $('.feedback_text').addClass('-pop');
      $('.feedback_map').removeClass('-slide-right');
      $('.feedback_map').addClass('-pop');
      $('.partner_logo_items').slick('unslick');
      }
    if (windowWidth < 620) {
      $('.partner_logo_items').slick('unslick');
    }
});
$(window).resize(function(){
  var windowWidth = $(window).width();
    if(windowWidth < 769) {
       $('.main_service_item:eq(1)').removeClass('-pop');
       $('.main_service_item:eq(1)').addClass('-slide-left');
       $('.main_service_item:eq(2)').removeClass('-slide-left');
       $('.main_service_item:eq(2)').addClass('-pop');
    }
    if (windowWidth < 440) {
      $('.feedback_text').removeClass('-slide-left');
      $('.feedback_text').addClass('-pop');
      $('.feedback_map').removeClass('-slide-right');
      $('.feedback_map').addClass('-pop');
      }
    if (windowWidth < 620) {
       $('.partner_logo_items').slick('unslick');
    }
});