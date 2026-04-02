const banana = document.getElementById("banana");
const score_label = document.getElementById("score");
const aie = new Audio("aie.mp3");
var play_music = false;
var multiplicateur = 1;
const music = new Audio("background_music.mp3");
const shop_items = document.querySelectorAll(".classic_shop_item");

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

shop_items.forEach(item => {
    item.addEventListener('click', function() {

        const text = item.textContent;

        if (text.includes("Multiplicateur de clique X3")) {
            console.log("Action X3");
            if (score >= 30) {
                multiplicateur = 3;
                item.style.display = "none";
            }
        }

    });
});
