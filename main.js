/*const dropdownSlideUp = function() {
	$(document.getElementById("nav_dropdown")).slideUp();
};

let count = 0;
$('#nav_element_projects, #nav_dropdown').on('mouseenter', () => {
	count += 1;
	$('#nav_dropdown').slideDown("slow", () => {
		
	});
	$('.nav_dropdown_element_text').fadeIn(1500);
	console.log("count is " + count);
}).on('mouseleave', () => {
	count -= 1;
	setTimeout(() => {
		if (count === 0) {
			$('#nav_dropdown').slideUp("slow", () => {
				$('.nav_dropdown_element_text').hide();
			});
		}
	}, 400);
	console.log("count is " + count);
});*/

$('#nav_element_projects').hover(
	() => {
		$('#under_header_dropdown').stop().animate({'margin-left': '0%'}, 500);
	}, 
	() => {
		$('#under_header_dropdown').stop().animate({'margin-left': '-100%'}, 500);
	}, 500);

$('.body_project').hover(
	(event) => {
		$(event.currentTarget).find('.body_project_title').animate({'font-size': '52px'}, 200);
		$(event.currentTarget).find('.body_project_subtitle').animate({'font-size': '30px'}, 200);
		$(event.currentTarget).find('img').animate({'width': '275px', 'height': '165px'}, 200);
	},
	(event) => {
		$(event.currentTarget).find('.body_project_title').animate({'font-size': '48px'}, 200);
		$(event.currentTarget).find('.body_project_subtitle').animate({'font-size': '28px'}, 200);
		$(event.currentTarget).find('img').animate({'width': '250px', 'height': '150px'}, 200);
	});

$('.body_textbox').hover(
	(event) => {
		$(event.currentTarget).animate({'margin-left': '10px', 'margin-right': '30px'}, 200);
		console.log('enter');
	}, 
	(event) => {
		$(event.currentTarget).animate({'margin-left': '20px', 'margin-right': '20px'}, 200);
		console.log('exit');
	});

const fadeInBodyElements = () => {
	/* Check the location of each desired element */
    $('.body_element').each( function(i){

    	var thisOffsetTop = $(this).offset().top;
    	var thisOuterHeight = $(this).outerHeight();
        var bottom_of_object = $(this).offset().top;
        var scrollTop = $(window).scrollTop();
        var height = $(window).height();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        console.log("bottom object " + thisOffsetTop + " " + thisOuterHeight + " " +bottom_of_object + " bottom window " + scrollTop + " " + height + " " +bottom_of_window);

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'}, 1500);
        }
    }); 
}

function scrollToAnchor(aid){
    var aTag = $(".anchor_" + aid);
    $('html, body').animate({scrollTop: aTag.offset().top}, 'slow');
}

$(document).ready(() => {

	fadeInBodyElements();

	/* Every time the window is scrolled ... */
	$(window).scroll(fadeInBodyElements);

	$("#about_link").click(function() {
	   scrollToAnchor('about');
	});

	$("#contact_link").click(function() {
	   scrollToAnchor('contact');
	});
});