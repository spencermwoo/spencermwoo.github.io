var player;
var isMusic = true;
var name = "";
var numMusic = 0;
var numHobby = 4; //starting place, id
var TOTAL_MUSIC = numHobby - 1;

var playlists = [
    "PL2ch5sVMNaRaWjkhksqSHtSXx20NIp-BH", //bx
    "PL2ch5sVMNaRbFhrjp3e-EAFzYZosyGiQb", //spacejam
    "PL2ch5sVMNaRaEh5lYvpZU2NqHPzhrDm5h", //welcome
    "PL4otHF15gsL3V5RjaNuJRQXX76rbdHlLW", //meanies

    "PL4otHF15gsL1w2BS08GszHXikZXGBoPSS", //bhop
    "PL4otHF15gsL3kcZl44uv35z-PyWTK0EYS", //cardistry
    "PL4otHF15gsL3w2l_EddcwoEio4BJ9zqA-", //dance
    "PL4otHF15gsL1W0h_goKLrS8ICRzDUSPqH" //talks
];
//poprocks, covers

var names = [
    "bx",
    "spacejam",
    "welcome",
    "meanies",

    "bhop",
    "cardistry",
    "dance",
    "talks"
];

$(document).ready(function() {
    // $('#3, #6, #8').click(function(){
    //     alert('Apologies, coming soon.');
    // })

    $('#0, #1, #2, #3, #4, #5, #6, #7').click(function() {
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
            name = "firstplay";
        } else {
            numHobby = newNum;
            name = "secondplay";
        }

        document.getElementById(name).innerHTML = "" + names[newNum].toLowerCase();

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

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        counter++;
    }
}

function stopVideo() {
    player.stopVideo();
}