let resetButton = document.getElementById("reset");
let playButton = document.getElementById("play");
let lapsButton = document.getElementById("lap");
let clearButton = document.getElementById("lap-clear-button");
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let mSecond = document.getElementById("msec");
let laps = document.getElementById("laps");
let bg = document.getElementById("outer-circle");
let isPlay = false;
let isReset = false
let min;
let sec;
let mSec;
let minCounter = 0;
let secCounter = 0;
let mCounter = 0;
let lapItem = 0
// ======================================================
function toggleButton()  {
    lapsButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}
// ======================================================
function play() {
    if (!isPlay && !isReset) {
        playButton.innerHTML = "Pause";
        bg.classList.add("animation-bg")
        min = setInterval(() => {
            minute.innerHTML = `${++minCounter} :`;
        }, 60*1000);
        sec = setInterval(() => {
            if (secCounter === 60) {
                secCounter = 0;
            }
            second.innerHTML = `&nbsp;${++secCounter} :`;
        }, 1000);
        mSec = setInterval(() => {
            if (mCounter === 100) {
                mCounter = 0;
            }
            mSecond.innerHTML = `&nbsp;${++mCounter}`;
        }, 10);
        isPlay = true;
        isReset = true;
    }
    else {
        playButton.innerHTML = "Play";
        clearInterval(min);
        clearInterval(sec);
        clearInterval(mSec);
        isPlay = false;
        isReset = false;
        bg.classList.remove("animation-bg")
    }
    toggleButton();
}
// ======================================================
function reset() {
    isReset = true
    play();
    clearAll()
    lapsButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    minute.innerHTML = "0 :"
    second.innerHTML = "&nbsp;0 :"
    mSecond.innerHTML = "&nbsp;0"
    secCounter = 0
}
// ======================================================
function lap() {
    let li = document.createElement("li")
    let number = document.createElement("span")
    let timeStamp = document.createElement("span")
    li.setAttribute("class", "lap-item")
    number.setAttribute("class", "number")
    timeStamp.setAttribute("class", "time-stamp")
    number.innerText = `#${++lapItem}`
    timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${mCounter}`
    li.append(number, timeStamp)
    laps.append(li)
}
// ======================================================
function clearAll() {
    laps.innerHTML = ""
    lapItem = 0
}
// ======================================================
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapsButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll);