

// ________________________________________________________________________________


// jQuery(document).ready(function($){
//      $nav = $("#fixblock");
//      $window = $(window);
//          // Определяем координаты верха блока навигации
//     $h = $nav.offset().top;
//     $window.scroll(function(){
//         // Если прокрутили скролл ниже макушки блока, включаем фиксацию
//         if ( $window.scrollTop() > $h) {
//                $nav.addClass("sheensay_fixed");
//         }else{
//             //Иначе возвращаем всё назад. Тут вы вносите свои данные
//             $nav.removeClass("sheensay_fixed");
//         }
//   });
// });








// ___________________________________фиксированный блок при прокрутке_______________________

function getTopOffset(e) { 
	var y = 0;
	do { y += e.offsetTop; } while (e = e.offsetParent);
	return y;
}
var block = document.getElementById('fixblock'); /* fixblock - значение атрибута id блока */
if ( null != block ) {
	var topPos = getTopOffset( block );
	window.onscroll = function() {
		var newcss = (topPos < window.pageYOffset) ? 
			'top:10%; position: fixed;' : 'position:static;';
		block.setAttribute( 'style', newcss );
	}
}

// ___________________________________появляющийся блок при скролинге___________________
    $(window).load(function() {
      $('#before-load').find('i').fadeOut().end().delay(900).fadeOut('slow');
    });

jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 2735 ? 'In': 'Out')](200);           
    });
});



// ___________________________________появляющийся блок при скролинге___________________

    $(window).load(function() {
      $('#close-2').find('i').fadeOut().end().delay(300).fadeOut('slow');
    });

jQuery(function(f){
    var element = f('#close-2');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 2650 ? 'In': 'Out')](300);           
    });
});


// ___________________________________паралакс_______________________________________

$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.manned-flight').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.frameless-parachute').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#frameless-parachute').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.english-channel').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#english-channel').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

	$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax-bg1').css('top',(0-(scrolled*.225))+'px');
    $('#parallax-bg3').css('top',(0-(scrolled*.185))+'%');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#frameless-parachute').offset().top - (($('#english-channel').offset().top - $('#frameless-parachute').offset().top) / 2);
	var section3Top =  $('#english-channel').offset().top - (($('#about').offset().top - $('#english-channel').offset().top) / 2);
	var section4Top =  $('#about').offset().top - (($(document).height() - $('#about').offset().top) / 2);;
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.manned-flight').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.frameless-parachute').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.english-channel').addClass('active');
	} else if ($(document).scrollTop() >= section4Top){
		$('nav#primary a.about').addClass('active');
	}
	
}

