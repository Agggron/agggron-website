const fade_in_elements = function() {
	$('.fade_in_element').each(function() {
		var object_bottom = $(this).offset().top;
		var object_height = $(this).outerHeight();
		var window_bottom = $(window).scrollTop() + $(window).height();

		if (window_bottom > (object_bottom + (object_height / 4))) {
			$(this).animate({
				opacity: 1
			}, 600);
		}
	});
}

const scroll_to_anchor = function(event) {
	var anchor_id = event.data.param1
	console.log("scroll_to_anchor(): anchor_id %s", anchor_id);
	var anchor = $('#anchor_' + anchor_id);
	var header_offset = (9 * $('header').outerHeight()) / 10;
	$('html, body').animate({
		scrollTop: Math.max(anchor.offset().top - header_offset, 0)
	}, 1000);
}

$(document).ready(function() {

	// Fade in elements at startup.
	fade_in_elements();
	// Also fade in elements every time the user scrolls.
	$(window).scroll(fade_in_elements);

	$('html, body').click(function() {
		$('.header_container_hidden').slideUp();
	});

	$('#header_navigation_button').click(function(event) {
		$('.header_container_hidden').slideToggle();
		event.stopPropagation();
		console.log("toggle");
	});

	// var navigation_hidden_links = ['#header_navigation_hidden_about', '#header_navigation_hidden_projects', '#header_navigation_hidden_resume', '#header_navigation_hidden_contact']
	// for (i = 0; i < navigation_hidden_links.length; i++) {
	// 	$(navigation_hidden_links[i]).click(function() {
	// 		$('.header_container_hidden').slideToggle();
	// 	})
	// }

	// Set targets for anchor links => navigation menu items will scroll to the appropriate anchor point.
	var anchors = ['top', 'about', 'projects', 'resume', 'contact'];
	for (i = 0; i < anchors.length; i++) {
		var anchor = anchors[i];
		$('.scroll_to_' + anchor).click({param1: anchor}, scroll_to_anchor);
	}
});