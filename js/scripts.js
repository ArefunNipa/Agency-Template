
jQuery(document).ready(function(){

    'use strict';
	
	 
	// -----------------------------------------
    // fixed-top
    // -----------------------------------------
	$(document).scroll(function () {
		var $nav = $("#header_part");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
	jQuery(window).on('scroll resize', function () {
		var currentSection = null;
		jQuery('.section').each(function () {
			var element = jQuery(this).attr('id');
			if (jQuery('#' + element).is('*')) {
				if (jQuery(window).scrollTop() >= jQuery('#' + element).offset().top - 115)
				{
					currentSection = element;
				}
			}
		});

		jQuery('#top-nav ul li').removeClass('active').find('a[href*="#' + currentSection + '"]').parent().addClass('active');
	});
	
	
	
}); // JQuery end

