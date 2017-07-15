
$(window).load(function() {

    console.log('window loaded');

    // loop pimp my ride audio
    var audio_intro = new Audio('audio/pimpmyridetheme.mp3');
    var audio_extended = new Audio('audio/Pimp My Ride Theme Song (extended mix).mp3');

    audio_extended.loop = true;
    audio_intro.volume = .70;

    audio_intro.addEventListener("loadeddata", function() {

        console.log("Audio data loaded");
        audio_intro.play();

        setTimeout(function() {
            console.log('looping extended audio');
            audio_extended.play();
        }, (audio_intro.duration-.50) * 1000); 

        audio_intro.onended = function() {

        }
    });

    // list of videos that will be played in the beginning
    // starts from index 0
    var videoSources = [
        'vid/wheelz-slomo.mp4',
        'vid/pmw-intro.mp4',
        'vid/wheelz-rollup.mp4',
        'vid/wheelchair-showcase.mp4',
        'vid/wheelz-driving.mp4',
        'vid/wheelz-gets-pussy.mp4'
    ];

    var player = document.getElementById('vid-intros');

    player.controls = false;
    player.autoplay = true;
    player.muted = true;

    loadVideo(videoSources[0]);

    var counter = 1;

    $("#vid-intros").bind("ended", function() {

        loadVideo(videoSources[counter]);

        if(counter == videoSources.length-1) {
            counter = 0;
        } else {
            counter++;
        }        
    });

    function loadVideo(src) {

        console.log('playing video: ' + src);

        player.src = src;
        player.load();
        player.play();
    }
    
});






