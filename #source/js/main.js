document.addEventListener('DOMContentLoaded', function(){
	$('.btn-burger').on('click',function(event) {
	   if ($(this).is(event.target)) {
		   $('.mobile').fadeOut('slow');
		   $('header').css('background', '#FFD241');
		   $(this).find('span').removeClass('active');
	   } else {
		   $('.mobile').fadeIn('slow');
		   $('header').css('background', 'none');
		   $(this).find('span').addClass('active');
	   }
	});
	if ($(window).width() < 768) {
		$('input[type="checkbox"]').removeAttr('checked');
	}
});