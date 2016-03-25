$(function(){
	initializeTransitions();
});

/*page = 0;*/

function initializeTransitions(){
	$("#projects").click(projectTransition);
	$("#interests").click(interestTransition);
}

function rotateOut(){
	$("#body").removeClass('work projects interests contact animated rotateInDownRight');
	$("#body").addClass('bodyTransition animated rotateOutUpRight');
}

function projectTransition(){
	rotateOut();
	window.setTimeout(function(){
		$("#body").removeClass('bodyTransition animated rotateOutUpRight');

		$("#body").addClass('projects animated rotateInDownRight');
	}, 850);
};

function interestTransition(){
	rotateOut();
	
	window.setTimeout(function(){
		$("#body").removeClass('bodyTransition animated rotateOutUpRight');
		$("#body").addClass('interests animated rotateInDownRight');
	}, 850);
	
};
/*
$(function(){
	initializeVisibility();
});
function initializeVisibility() {
	$(".body").css('visibility', 'hidden');
	$(".body").css('opacity', '0'); 
	$(".body").css('z-index', '-1');


}*/