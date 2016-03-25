$(function(){
	initializeTransitions();
});

/*page = 0;*/

function initializeTransitions(){
	$("#work").click(workTransition);
	$("#projects").click(projectTransition);
	$("#interests").click(interestTransition);
	$("#contact").click(contactTransition);
}

function rotateOut(){
	$("#body").removeClass('work work2 projects interests contact animated rotateInDownRight');
	$("#body").addClass('bodyTransition animated rotateOutUpRight');
}

function workTransition(){
	rotateOut();
	
	window.setTimeout(function(){
		$("#body").removeClass('bodyTransition animated rotateOutUpRight');
		$("#body").addClass('work2 animated rotateInDownRight');
	}, 850);
	
};

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

function contactTransition(){
	rotateOut();
	
	window.setTimeout(function(){
		$("#body").removeClass('bodyTransition animated rotateOutUpRight');
		$("#body").addClass('contact animated rotateInDownRight');
	}, 850);
	
};