$(document).ready(function() {
	//initially hide all project details so you can toggle their display later
	$(".detail-display").hide();
	$(".btn-container").hide();

	$('.project').click(function(){
		$("#" + $(this).attr("id") +"-detail").toggle();
		$(".home-container").hide();
		$(".btn-container").show();
		$("#about").hide();
		$("footer").css('top', $("#" + $(this).attr("id") +"-detail").height());
		$("footer").css('left', 'auto');
	});

	$('.home-btn').click(function(){
		$('.detail-display').hide();
		$(".home-container").show();
		$(".btn-container").hide();
		$("#about").show();
		// $("footer").css('top', $(".home-container").height());
		$("footer").css('top', "auto");
		position_footer();
	});

	// positioning code
	var position_footer = function(){
		// check which detail is visible
		var visible_detail = false;
		$(".project-detail").each(function(index){
			if ($(this).is(":visible")){
				visible_detail = this;
			};
		});

		if (visible_detail){
			$("footer").css('top', $(visible_detail).height());
		}
	}

	// Analytics APIs
	$('#github_logo_mini').on('click', function() {
		ga('send', 'event', 'ext-link', 'click', 'github-link');
	});
	$('#flickr_ext_link').on('click', function() {
		ga('send', 'event', 'ext-link', 'click', 'flickr-link');
	});
	$('#linkedin_logo_mini').on('click', function() {
		ga('send', 'event', 'ext-link', 'click', 'linkedin-link');
	});
	$('#resume_link').on('click', function() {
		ga('send', 'event', 'ext-link', 'click', 'resume-link');
	});

	$('.project').on('click', function(){
		ga('send', 'event', 'projectinfo', 'click', 'project-detail');
	});
});