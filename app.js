$(document).ready(function() {

	var body_projects_counter = 0

	$('#body_projects_toggle').click(function() {

		if (body_projects_counter % 3 == 0) {
			$('#project_image_zodiac').fadeOut('slow', function() {
				$('#project_image_yellowmooninn').delay(100).fadeIn('slow');
			});
		}

		if (body_projects_counter % 3 == 1) {
			$('#project_image_yellowmooninn').fadeOut('slow', function() {
				$('#project_image_phagephighter').delay(100).fadeIn('slow');
			});
		}

		if (body_projects_counter % 3 == 2) {
			$('#project_image_phagephighter').fadeOut('slow', function() {
				$('#project_image_zodiac').delay(100).fadeIn('slow');
			});
		}

		body_projects_counter += 1;
	});


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