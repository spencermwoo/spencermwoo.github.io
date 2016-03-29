$(function(){
	initializeTransitions();
});

//var Path = "content/work2.html";
var mainPath = "content/main.html";
var workPath = "content/work.html";
var projectsPath = "content/projects.html";
var interestsPath = "content/interests.html";
var contactPath = "content/contact.html";


/*page = 0;*/

function initializeTransitions(){
	$("#work").click(workTransition);
	$("#projects").click(projectTransition);
	$("#interests").click(interestTransition);
	$("#contact").click(contactTransition);
}

function rotateOut(){
	$("#body").removeClass('main work projects interests contact animated rotateInDownRight');
	$("#body").addClass('bodyTransition animated rotateOutUpRight');
}

function workTransition(){
	rotateOut();
	
	window.setTimeout(function(){
		$("#body").removeClass('bodyTransition animated rotateOutUpRight');
		$("#body").addClass('work animated rotateInDownRight');
	}, 850);

	$("#body").load(workPath);
	
};

function projectTransition(){
	rotateOut();

	window.setTimeout(function(){
		$("#body").removeClass('bodyTransition animated rotateOutUpRight');
		$("#body").addClass('projects animated rotateInDownRight');
	}, 850);

	$("#body").load(projectsPath);
};

function interestTransition(){
	rotateOut();
	
	window.setTimeout(function(){
		$("#body").removeClass('bodyTransition animated rotateOutUpRight');
		$("#body").addClass('interests animated rotateInDownRight');
	}, 850);
	
	$("#body").load(interestsPath);
};

function contactTransition(){
	rotateOut();
	
	window.setTimeout(function(){
		$("#body").removeClass('bodyTransition animated rotateOutUpRight');
		$("#body").addClass('contact animated rotateInDownRight');
	}, 850);
	
	$("#body").load(contactPath);
};