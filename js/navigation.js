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

//TODO : use Higher Order Functions
//http://www.sitepoint.com/higher-order-functions-javascript/
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
	/*alert("A");*/
	if($("#body").hasClass("work")){
	}else{
		rotateOut();
		
		window.setTimeout(function(){
			$("#body").removeClass('bodyTransition animated rotateOutUpRight');
			$("#body").addClass('work animated rotateInDownRight');

			$("#body").load(workPath);
		}, 850);
	}
};

function projectTransition(){
	if($("#body").hasClass("projects")){
	}else{
		rotateOut();

		window.setTimeout(function(){
			$("#body").removeClass('bodyTransition animated rotateOutUpRight');
			$("#body").addClass('projects animated rotateInDownRight');
			
			$("#body").load(projectsPath);
		}, 850);
	}
};

function interestTransition(){
	if($("#body").hasClass("interests")){
	}else{
		rotateOut();
		
		window.setTimeout(function(){
			$("#body").removeClass('bodyTransition animated rotateOutUpRight');
			$("#body").addClass('interests animated rotateInDownRight');
			
			$("#body").load(interestsPath);
		}, 850);
	}
};

function contactTransition(){
	if($("#body").hasClass("contact")){
	}else{
		rotateOut();
		
		window.setTimeout(function(){
			$("#body").removeClass('bodyTransition animated rotateOutUpRight');
			$("#body").addClass('contact animated rotateInDownRight');
			

			$("#body").load(contactPath);
		}, 850);
	}
};