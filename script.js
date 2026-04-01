const banana = document.getElementById("banana");
const score_label = document.getElementById("score");
const aie = new Audio("aie.mp3");
var play_music = false;
var multiplicateur = 1;
const music = new Audio("background_music.mp3");

let score = 0

function mettre_à_jour_score() {
    score_label.textContent = "Score : " + score;
}

banana.addEventListener('click', function() {
    score += multiplicateur;
    mettre_à_jour_score();
    play_background_music();
});

function play_background_music() {
    if (play_music == false) {
        music.loop = true;
        music.volume = 0.5;
        music.play();
        play_music = true;
    }
}

setInterval(() => {
  aie.currentTime = 0;
  aie.play();
}, 60000);
