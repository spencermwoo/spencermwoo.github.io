var playlists = [
	"PL4otHF15gsL0WQR1zewP18b1EjzgIJM2w", //welcome
	"PL4otHF15gsL3l9R72rQiUmQdLmcc__PfX", //beep boop

	"PL4otHF15gsL1w2BS08GszHXikZXGBoPSS" //bhop
	//christian
	//electronic
	//only meanies
	//sad songs
];
var names = [
	"welcome",
	"beepboop",

	"bhop"
];

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var numHobbies = 1;
function onYouTubeIframeAPIReady() {
	var autoplay = 0;
	var height = 300;
	var width = 500;

	for(var i = playlists.length - 1; i > -1; i--){
		if(i == 0){
			autoplay = 1;
			height = 300;
			width = 560;
		}else if(i < playlists.length - numHobbies){
			height = 200;
			width = 380;
		}

		player = new YT.Player(names[i], {
			height: height,
			width: width,
			//videoId: videoIDs[counter],
			playerVars: { 
				'autoplay': autoplay, 
				'controls': 1,
				'listType': 'playlist',
				'list'    : playlists[i]
				//'playlist':['YNnwtxNkwBI', 'hVHtuFAdpJE', 'YqWiIp_KLUc']},
			},
			events: {
				'onStateChange': onPlayerStateChange
			}
		});
	}
}
							      
function onPlayerReady(event) {
	event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		counter++;
	}
}

function stopVideo() {
	player.stopVideo();
}