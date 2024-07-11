// Clock functionality
function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');

    const hourDegrees = (hour * 30) + (minute / 2); // 30 degrees per hour, 0.5 degrees per minute
    const minuteDegrees = (minute * 6) + (second / 10); // 6 degrees per minute, 0.1 degrees per second
    const secondDegrees = second * 6; // 6 degrees per second

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);

// Stopwatch functionality
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchMilliseconds = 0;

const stopwatchDisplay = document.getElementById('stopwatch');

document.getElementById('startStopwatch').addEventListener('click', function() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchInterval = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
    }
});

document.getElementById('pauseStopwatch').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
});

document.getElementById('resetStopwatch').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    stopwatchMilliseconds = 0;
    updateStopwatchDisplay();
});

function updateStopwatch() {
    stopwatchMilliseconds++;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const milliseconds = stopwatchMilliseconds % 1000;
    const seconds = Math.floor(stopwatchMilliseconds / 1000) % 60;
    const minutes = Math.floor(stopwatchMilliseconds / (1000 * 60)) % 60;
    const hours = Math.floor(stopwatchMilliseconds / (1000 * 60 * 60));

    stopwatchDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}


// // Timer functionality
// let timerInterval;
// let timerRunning = false;
// let timerMilliseconds = 0;

// const timerDisplay = document.getElementById('timer');

// document.getElementById('startTimer').addEventListener('click', function() {
//     if (!timerRunning) {
//         timerRunning = true;
//         timerInterval = setInterval(updateTimer, 10); // Update every 10 milliseconds
//     }
// });

// document.getElementById('pauseTimer').addEventListener('click', function() {
//     clearInterval(timerInterval);
//     timerRunning = false;
// });

// document.getElementById('resetTimer').addEventListener('click', function() {
//     clearInterval(timerInterval);
//     timerRunning = false;
//     timerMilliseconds = 0;
//     updateTimerDisplay();
// });

// function updateTimer() {
//     timerMilliseconds++;
//     updateTimerDisplay();
// }

// function updateTimerDisplay() {
//     const milliseconds = timerMilliseconds % 1000;
//     const seconds = Math.floor(timerMilliseconds / 1000) % 60;
//     const minutes = Math.floor(timerMilliseconds / (1000 * 60)) % 60;
//     const hours = Math.floor(timerMilliseconds / (1000 * 60 * 60));

//     timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
// }