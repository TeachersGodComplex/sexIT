const audioPlayer = document.getElementById('audioPlayer');

function playAudio() {
  audioPlayer.play();
}

function setVolume(volume) {
  audioPlayer.volume = volume;
}