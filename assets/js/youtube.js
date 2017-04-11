var player;
var isMusic = true;
var numMusic = 0;
var numHobby = 4; //starting place
var TOTAL_MUSIC = numHobby - 1;

var playlists = [
    "PL4otHF15gsL0WQR1zewP18b1EjzgIJM2w", //welcome
    "PL4otHF15gsL3l9R72rQiUmQdLmcc__PfX", //beep boop
    "PL4otHF15gsL3ufeRvYZZj6mhA1J6e5Yk-", //only meanies
    "", //vroom vroom

    //love
    //angst
    //christian
    //electronic
    //only meanies
    //sad songs
    //covers

    "PL4otHF15gsL1w2BS08GszHXikZXGBoPSS", //bhop
    "", //comedy
    "PL4otHF15gsL3w2l_EddcwoEio4BJ9zqA-", //dance
];
var names = [
    "welcome",
    "beepboop",
    "only_meanies",
    "vroom_vroom",

    "bhop",
    "comedy",
    "dance"
];

$(document).ready(function() {
    $('#3, #5').click(function(){
        alert('Apologies, coming soon.');
    })

    $('#0, #1, #2, #4, #6').click(function() {
        var newNum = this.id;
        var num = numHobby;

        isMusic = (newNum <= TOTAL_MUSIC);
        if (isMusic) {
            num = numMusic;
        }

        document.getElementById(names[num]).src = "https://www.youtube.com/embed/?" +
            "autoplay=1&amp;controls=1&amp;listType=playlist&amp;list=" +
            playlists[newNum] + "&amp;enablejsapi=1&amp;widgetid=1";

        document.getElementById(names[num]).id = names[newNum];

        if (isMusic) {
            numMusic = newNum;
        } else {
            numHobby = newNum;
        }

        onYouTubeIframeAPIReady();

        return false;
    });
})

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    var num = numHobby;
    if (isMusic) {
        num = numMusic;
    }
    player = new YT.Player(names[num], {
        height: 440,
        width: 740,
        //videoId: videoIDs[counter],
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'listType': 'playlist',
            'list': playlists[num]
            //'playlist':['YNnwtxNkwBI', 'hVHtuFAdpJE', 'YqWiIp_KLUc']},
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
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