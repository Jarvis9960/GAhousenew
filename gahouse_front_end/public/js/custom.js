 $(document).ready(function () {
							 
	// Hover Effect						 
     $(".map-text div").hover(
     function () {
         $(this).parent().parent().addClass("post-hover");
     }, function () {
         $(this).parent().parent().removeClass("post-hover");
     });
	 // for big text				 
     $(".big-txt").hover(
     function () {
         $(this).parent().parent().addClass("post-hover");
     }, function () {
         $(this).parent().parent().removeClass("post-hover");
     });
	 
	 // Acoordian for mobile
	 if($(window).width() < 767){
	
		$(".map-main .img-area").first().addClass( "active" );
		$(".map-main .map-text").first().css( "display", "block" )
		 $(function() {
		  $('.img-area').click(function(j) {
			
			$(".map-main .img-area").first().removeClass( "active" );
			
			var downArea = $(this).closest('.map-main').find('.map-text');
			$(this).closest('.map-area').find('.map-text').not(downArea).slideUp();
			
			if ($(this).hasClass('active')) {
			  $(this).removeClass('active');
			} else {
			  $(this).closest('.map-area').find('.img-area.active').removeClass('active');
			  $(this).addClass('active');
			}
			
			downArea.stop(false, true).slideToggle();
			j.preventDefault();
		  });
		});
	 
	}
	 
 });

