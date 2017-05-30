$(document).ready(function(){
	// $('.portfolio-item').on( "mouseover", function() {
	//  	$('.caption').css( "visible", "red" );
	// }).mouseout(function(){
 //    	$('.caption').css( "color", "gray" );
	// })

		// ===== Scroll to Top ==== 
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});

	document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
	    this.classList.toggle( "active" );
	     $('.drop-menu').fadeToggle('slow');
	  });

	$('.close-icon').click(function(){
		$('.drop-menu').fadeToggle('slow');
	})

	$('.portfolio-item').hover(function(){
		$(this).stop();
		// $(this).find('.caption').addClass('active');
		$(this).find('.caption').animate({
			opacity: 1,
			height: "auto"
		}, 700);
	}, function(){
		// $(this).children('.item-text').css('display', 'none');
		$(this).stop();
		// $(this).find('.caption').removeClass('active');
		$(this).find('.caption').animate({
			opacity: 0,
			height: 0
		}, 400);
	});

	 $("#myCarousel").carousel({
         interval : false
     });


	 $("#v2Carousel").carousel({
         interval : false
     });


 //     $(window).on('scroll', function () {
	//     // var scrollTop = $(window).scrollTop();
	//     currOffset = window.pageYOffset;
	//     if (currOffset > 50) {
	//         $('.navbar').stop().animate({height: "0px"},200);
	//     }
	//     else {
	//          $('.navbar').stop().animate({height: "63px"},200);   
	//     }
	// });
});


