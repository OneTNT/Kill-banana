const banana = document.getElementById("banana");
const score_label = document.getElementById("score");
const aie = new Audio("aie.mp3");

let score = 0

function mettre_à_jour_score() {
    score_label.textContent = "Score : " + score;
}

banana.addEventListener('click', function() {
    score++;
    mettre_à_jour_score()
});


setInterval(() => {
  aie.currentTime = 0;
  aie.play();
}, 60000);
