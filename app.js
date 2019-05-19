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

});