/** 
 document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playlist = document.getElementById('playlist');
    const tracks = playlist.getElementsByTagName('li');

    for (let track of tracks) {
        track.addEventListener('click', function() {
            audioPlayer.src = this.getAttribute('data-src');
            audioPlayer.play();
        });
    }
    });
*/ 