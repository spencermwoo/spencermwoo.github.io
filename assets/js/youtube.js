var player;
var isMusic = true;
var name = "";
var numMusic = 0;
var numHobby = 5; //starting place, id
var TOTAL_MUSIC = numHobby - 1;

//love, angst, bl1
var playlists = [
    "PL4otHF15gsL0WQR1zewP18b1EjzgIJM2w", //welcome
    "PL4otHF15gsL0-8_yKPgyxGdK4pKxIJ5Dw", //poprocks
    "PL4otHF15gsL3ufeRvYZZj6mhA1J6e5Yk-", //meanies
    "", //vroom vroom
    "PL4otHF15gsL0NMtxBhm7_a0Lr2GHlBK38", //covers

    "PL4otHF15gsL1w2BS08GszHXikZXGBoPSS", //bhop
    "", //comedy
    "PL4otHF15gsL3w2l_EddcwoEio4BJ9zqA-", //dance
    "" //sermons
];
var names = [
    "welcome",
    "poprocks",
    "meanies",
    "vroom_vroom",
    "covers",

    "bhop",
    "comedy",
    "dance",
    "sermons"
];

$(document).ready(function() {
    $('#3, #6, #8').click(function(){
        alert('Apologies, coming soon.');
    })

    $('#0, #1, #2, #4, #5, #7').click(function() {
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