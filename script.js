var rn;


let body = document.getElementById('body')
let target = document.getElementById('target')
// let timer = document.getElementById('timer')


function bodybox() {
    for (let i = 0; i < 198; i++) {
        rn = Math.floor(Math.random() * 10);
        body.innerHTML += `<div id="targetNum" class="bg-[#149b5e] hover:bg-[#1a6647] h-7 w-7 rounded-full flex justify-center items-center text-sm font-semibold cursor-pointer">${rn}</div>`;
    }
}

function timer() {
    let time = 3;
    let clearEvent = setInterval(function () {
        document.getElementById("timer").innerText = time;
        if (time == 0) {
            clearTimeout(clearEvent);
        }
        time--
    }, 1000)
    
   
}


timer()
// bodybox();

