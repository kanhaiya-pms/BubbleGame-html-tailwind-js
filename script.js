var targetrndm;
var click = 1;
var currentTime =60;

let body = document.getElementById('body')
let gameover = document.getElementById('gameover')
let showScore = document.getElementById('showScore')
let Restart = document.getElementById('Restart')
let target = document.getElementById('target')
let networkStatus = document.getElementById('networkStatus')
let switchlevel = document.getElementById('switchlevel')
var level = 10;
var score = 0;







let pauseButton = document.getElementById('pause');
let resumeButton = document.getElementById('resume');
let paused = false;
let timerInterval;



switchlevel.addEventListener("click", function () {
    if (click == 2) {
        alert("this is last stage")

    }
    else {
        level *= 10;
        startGame();
        click++;
    }

})












function increaseScore() {
    score += 10;
    document.getElementById("score").innerHTML = score;
}

function makebobble() {
    var clattur = ''

    for (let i = 0; i < 216; i++) {
        rn = Math.floor(Math.random() * level);
        clattur += `<div id="box" class="bg-[#149b5e] hover:bg-[#1a6647] h-7 w-7 rounded-full flex justify-center items-center text-sm font-semibold cursor-pointer">${rn}</div>`;

    }

    body.innerHTML = clattur;

}

function getNewHit() {
    targetrndm = Math.floor(Math.random() * level);
    target.innerText = targetrndm
}

function runtimer() {
    let time = currentTime;
    let clearEvent = setInterval(function () {
        document.getElementById("timer").innerText = time;
        if (time == 0) {
            clearTimeout(clearEvent);
            body.style.display = "none";
            gameover.style.display = "";
            showScore.innerText = `Your score :  ${score}`;
            target.innerText = 0;
            // score = 0;
            document.getElementById("score").innerHTML = '0';

            Restart.addEventListener('click', function () {
                gameover.style.display = "none";
                body.style.display = "";
                score = 0;
                runtimer();
                makebobble();
                getNewHit();
                // increaseScore();
            })
        }
        time--
    }, 1000)
    pauseButton.addEventListener('click', function () {
        if (!paused) {
            clearInterval(clearEvent);
            paused =  true;
        }
    });
    
    resumeButton.addEventListener('click', function () {
        if (paused) {
            runtimer();
            paused = false;
        }
    });


}

function startGame() {


    runtimer()
    makebobble();
    getNewHit();



    body.addEventListener('click', function (dets) {
        let match = dets.target.textContent
        console.log(match);
        if (targetrndm == match) {
            increaseScore()
            makebobble();
            getNewHit();


        }
        else {
            console.log("false");
            makebobble();
            getNewHit();

        }
    })
}


startGame()










