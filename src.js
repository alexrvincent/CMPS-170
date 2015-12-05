var myAudio = document.getElementById('mus_intro');
var keyboardaudio = document.getElementById('mus_typing');

myAudio.oncanplaythrough = function () {this.play();}

function changeImage(){

        document.getElementById('title-card').src = "./img/title-project-2.gif";
}