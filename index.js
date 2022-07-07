let btn_start = document.getElementById("btn_start");
let btn_reset = document.getElementById("btn_reset");
let btn_stop = document.getElementById("btn_stop");
let millisecond = 0;
let second = 0;
let minute = 0;
let time;



btn_start.onclick = () => { Start(); }
btn_reset.onclick = () => { Reset(); }
btn_stop.onclick = () => { Stop(); }



function Start() {
    Stop();
    time = setInterval(() => { Stopwatch() }, 10)
}

function Reset() {
    clearInterval(time)
    millisecond = 0;
    second = 0;
    minute = 0;
    document.getElementById("millisecond").innerText = millisecond;
    document.getElementById("second").innerText = "0" + second;
    document.getElementById("minute").innerText = "0" + minute;
}

function Stop() {
    clearInterval(time)
}

function Stopwatch() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;

    }
    if (second == 60) {
        second = 0;
        minute++
    }
    document.getElementById("millisecond").innerText = millisecond;
    document.getElementById("second").innerText = ReturnInput(second);
    document.getElementById("minute").innerText = ReturnInput(minute);

}

function ReturnInput(input) {
    return input > 9 ? input : ("0" + input);
}

