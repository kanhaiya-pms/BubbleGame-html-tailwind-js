var targetrndm;


let body = document.getElementById('body')
let target = document.getElementById('target')

var score = 0;

function increaseScore() {
    score += 10;
    document.getElementById("score").innerHTML = score;
}


function makebobble() {
    var clattur = ''

    for (let i = 0; i < 216; i++) {
        rn = Math.floor(Math.random() * 10);
        clattur += `<div id="box" class="bg-[#149b5e] hover:bg-[#1a6647] h-7 w-7 rounded-full flex justify-center items-center text-sm font-semibold cursor-pointer">${rn}</div>`;

    }

    body.innerHTML = clattur;

}



function getNewHit() {
    targetrndm = Math.floor(Math.random() * 10);
    target.innerText = targetrndm
}


function runtimer() {
    let time = 6;
    let clearEvent = setInterval(function () {
        document.getElementById("timer").innerText = time;
        if (time == 0) {
            clearTimeout(clearEvent);
           body.innerHTML = ''
        }
        time--
    }, 1000)


}



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





runtimer()
makebobble();

getNewHit();


