var timer;
var countdownTime;

function onDeviceReady() {
    document.addEventListener("deviceready", startTimer, false);
}

function startTimer() {
    countdownTime = parseInt(document.getElementById("countdown-input").value);
    timer = setInterval(countdown, 1000);
}

function countdown() {
    countdownTime--;
    if (countdownTime <= 0) {
        clearInterval(timer);
        navigator.vibrate(1000); // vibriert 1 Sekunde lang
    }
}

function stopTimer() {
    clearInterval(timer);
}
