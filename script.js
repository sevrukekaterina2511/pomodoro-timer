const startButton = document.querySelector('#start');
let timerId;

startButton.addEventListener('click', function() {
    const timer = document.getElementById("pomodoro-time");
    let [minutes, seconds] = timer.textContent.split(':').map(Number);


    if (startButton.textContent == 'stop') {
        clearInterval(timerId);
        startButton.textContent = 'start';
    } else {
        startButton.textContent = 'stop';

        timerId = setInterval(() => {

            if (minutes == 0 && seconds == 0) {
                clearInterval(timerId);
                timer.textContent = '25:00';
                startButton.textContent = 'start';
                return;
            } else if (seconds == 0) {
                minutes--;
                seconds = 59;
            };

            if (seconds > 0) {
                seconds--;
            };

            function add(val) {
                if (val < 10) {
                    return `0${val}`
                };
                return val;
            };

            timer.textContent = `${add(minutes)}:${add(seconds)}`
        }, 10);
    };
});