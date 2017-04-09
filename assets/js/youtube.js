var playlists = [
	"PL4otHF15gsL0WQR1zewP18b1EjzgIJM2w", //intro
	"PL4otHF15gsL1w2BS08GszHXikZXGBoPSS", //bhop
	"PL4otHF15gsL3l9R72rQiUmQdLmcc__PfX" //beep boop
	//christian
	//electronic
	//only meanies
	//sad songs
];
var names = [
	"intro",
	"bhop",
	"beepboop"
];

// Load  IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Creates <iframe> Youtube Player
var player;
function onYouTubeIframeAPIReady() {
	var autoplay = 0;
	var height = 300;
	var width = 480;
	for(var i = playlists.length - 1; i > -1; i--){
		if(i == 0){
			autoplay = 1;
			height = 300;
			width = 560;
		}

	    player = new YT.Player(names[i], {
	        height: height,
	        width: width,
	        //videoId: videoIDs[counter],
	        playerVars: {
	            'autoplay': autoplay,
	            'controls': 1,
	            'listType': 'playlist',
	            'list': playlists[i]
	            //'playlist':['YNnwtxNkwBI', 'hVHtuFAdpJE', 'YqWiIp_KLUc']},
	        },
	        events: {
	            'onStateChange': onPlayerStateChange
	        }
	    });
	}
}

// Call function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// Call function on state change.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        counter++;
    }
}

function stopVideo() {
    player.stopVideo();
}