/*$(document).ready(function() {
	randomizeQuotes();
})*/

$(function(){
	randomizeQuotes();
});
function randomizeQuotes() {
	var quotes = [
	"Computers are useless.  They can only give you answers",
	/*"If you don't trust people, you make them untrustworthy.",*/
	"I think I think; therefore I think I am.",
	"Confidence is contagious.  So is lack of confidence.",
	"Even if you have nothing to write, write and say so.",
	"If I had asked people what they wanted, they would have said faster horses.",
	"I have made this longer than usual because I have not had the time to make it shorter.", 
	"Even if I knew the world would end tomorrow, I would still walk my dog.",
	/*"Sometimes the key to restlessness is rest.",*/
	"Could you patent the sun?",
	/*"The drowning man is not troubled by the rain",*/

	"Nothing is as healing as the human touch.",
	"Nothing is more human than to wish for renewal when springtime comes.",
	/*"Look not where you have fallen but where you slipped.",*/
	"What were we doing when we unchained this earth from the sun?",

	/*"We were always suckers for ridiculous hats.",
	"I object to being called a chess genius because I consider myself to be an all around genius who happens to play chess.",
	"And Richard Cory, one calm summer night . . .",*/
	"And the tree was happy.",

	/*"So it goes . . .",
	"All of man's miseries derive from not being able to sit in a room alone",
	"What age is a black boy, when he learns he's scary?",
	"You don't take pictures when you're rich, you just see it again.",
	"Houston, we've had a problem here . . .",
	"Doubt is a pain too lonely to know that faith is his twin brother.",
	"Wise men have more to learn of fools than fools of wise men."
	"We are the waves and we are the ocean.",
	"Order, unity, and continuity are human inventions just as truly as catalogues and encyclopedias.",
	"Do not mistake my silence for apathy",*/
	/*"All I want to do, ever, is think.",*/
	"The black said to the white, 'If only you were grey I would be lenient with you.'",

	/*"You know less than does a log on the ground",
	"Caitlyn Jenner looks a lot like Bruce Jenner.",
	"I don't mean to sound extreme but death penalty.",*/
	];

	var max = quotes.length;
	var min = 0;
	var n = Math.floor(Math.random() * (max - min + 1)) + min;
	/*document.getElementById('quote').innerHTML = 'pls';*/
	$("#quote").text("\"" + quotes[n] + "\"");
}