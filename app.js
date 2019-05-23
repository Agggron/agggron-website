const fade_in_elements = function() {
	$('.fade_in_element').each(function() {
		var object_bottom = $(this).offset().top;
		var object_height = $(this).outerHeight();
		var window_bottom = $(window).scrollTop() + $(window).height();

		if (window_bottom > (object_bottom + (object_height / 4))) {
			$(this).animate({
				opacity: 1
			}, 1000);
		}
	});
}

$(document).ready(function() {

	// Fade in elements at startup.
	fade_in_elements();
	// Also fade in elements every time the user scrolls.
	$(window).scroll(fade_in_elements);


	$('#header_navigation_button').click(function() {
		$('.header_container_hidden').slideToggle();
		console.log("toggle");
	});

	var navigation_hidden_links = ['#header_navigation_hidden_about', '#header_navigation_hidden_projects', '#header_navigation_hidden_resume', '#header_navigation_hidden_contact']
	for (i = 0; i < navigation_hidden_links.length; i++) {
		$(navigation_hidden_links[i]).click(function() {
			$('.header_container_hidden').slideToggle();
		})
	}
});