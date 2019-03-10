$(function(){
	RandomizeQuotes();
});

function RandomizeQuotes() {
	var max = (quotes.length - 1);
	var min = 0;
	var n = Math.floor(Math.random() * (max - min + 1)) + min;

	$("#quote").text("\"" + quotes[n] + "\"");
}

var quotes = [
	"Computers are useless.  They can only give you answers.",
	"Confidence is contagious.  So is lack of confidence.",
	"If you don't trust people, you make them untrustworthy.",
	

	//"If I had asked people what they wanted, they would have said faster horses.",
	"I think I think; therefore I think I am.",
	"Even if you have nothing to write, write and say so.",
	"I have made this longer than usual because I have not had the time to make it shorter.", 
	"Even if I knew the world would end tomorrow, I would still walk my dog.",
	/*"Sometimes the key to restlessness is rest.",*/
	"Could you patent the sun?",
	/*"The drowning man is not troubled by the rain",*/

	"Nothing is as healing as the human touch.",
	"Nothing is more human than to wish for renewal when springtime comes.",
	/*"Look not where you have fallen but where you slipped.",*/
	"What were we doing when we unchained this earth from the sun?",
	"The Earth was small, light blue, and so touchingly alone...",

	"We were always suckers for ridiculous hats.",
	//"I object to being called a chess genius because I consider myself to be an all around genius who happens to play chess.",
	//"And Richard Cory, one calm summer night . . .",
	"And the tree was happy.",
	//"Everything dies, baby that's a fact."
	//"I've got debts no honest man can pay."

	//"You have to be odd to be number one."
	//"This looks like a good place to relapse."
	//"Capacity is not value."

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

	"It is the glory of God to conceal things, but the glory of kings is to search things out.",
	
	/*"If I were still trying to please man, I would not be a servant of Christ.",

	"As far as the east is from the west, so far has he removed our transgressions from us."
	"The conclusion, when all has been heard, is : fear God and keep His commandments, because this applies to every person.",
	"Do not be deceived, God is not mocked; for whatever a man sows, this he will also reap.",
	"So whether you eat or drink, or whatever you do, do all to the glory of God.",
	
	"When you spread out your hands in prayer, I hide my eyes from you; even when you offer many prayers, I am not listening.",
	"I ask then, has God rejected his people?  By no means!"
	"The fear of the LORD is the beginning of knowledge."
	"For this light momentary afflication is preparing for us an eternal weight of glory beyond all comparison."


	"You are the salt of the earth, but if salt has lost its taste, how shall its saltiness be restored?"
	"And then will I declare to them, ‘I never knew you; depart from me, you workers of lawlessness.’"
	"For I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings."
	"Again I tell you, it is easier for a camel to go through the eye of a needle than for a rich person to enter the kingdom of God."
	"But woe to you, scribes and Pharisees, hypocrites!"


	"For the mind that is set on the flesh is hostile to God, for it does not submit to God's law; indeed, it cannot. Those who are in the flesh cannot please God."
	"For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.",
	"For the creation waits with eager longing for the revealing of the sons of God.",

	"How beautiful are the feet of those who preach the good news!",
	"But you trusted in your beauty and played the whore because of your renown and lavished your whorings on any passerby; your beauty became his."

	"But if the Lord creates something new, and the ground opens its mouth and swallows them up with all that belongs to them, and they go down alive into Sheol, then you shall know that these men have despised the Lord."

	"Rejoice, O young man, in your youth, and let your heart cheer you in the days of your youth. Walk in the ways of your heart and the sight of your eyes. But know that for all these things God will bring you into judgment."
	*/

	// "It is not the man who has too little, but the man who craves more, that is poor",
	"How bad is a good person allowed to be?",
	"The relation between the controller and the controlled is reciprocal.",
	"Actors love acting, painters love painting, and writers love having written.",

	"As I grew up I opened my eyes and saw the real world, I began to laugh and I haven’t stopped since.",

	"The pursuit of truth is not the pursuit of truth.  Therefore we must pursue the truth.",
	"Philosophy calls for plain living, but not for penance.",
	// "You can't keep blaming yourself.  Just blame yourself once and move on.",
	
	"We have Palaeolithic emotions; medieval institutions; and godlike technology.",

	// "Christianity is Plato for the masses.",

	"Every virtue lies between two vices.",

	// "A story is not fact: it may not be true.",
	// "A fact is not data: it may not be representative.",
	// "Data is not evidence: it may not be uniquely supportive.",

	// "A flickering lamp, a phantom, and a dream.",

	// "I supposed one could say women stuff themselves with far more pleasures than men.",

	"De Omnibus Dubitandum Est",

	"Beware false paths.  Seek and you will be found.  Liber Primus is the way.",
	"Most of us are relieved to find out we have a disease instead of a moral deficiency.",

	// "To save for the future is to deny the present.",

	// "We ordered food and talked about the weather for forty minutes.",

	// "Theta decay is real."


	// "Downloading more RAM..."

	"I wish things were different.  They are not."
	

];