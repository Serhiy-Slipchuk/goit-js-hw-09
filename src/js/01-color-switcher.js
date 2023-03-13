const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');
let timerId = null;
buttonStopEl.disabled = true;

buttonStartEl.addEventListener('click', onClickStartInterval);
buttonStopEl.addEventListener('click', onClickStopInterval);

function onClickStartInterval() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        buttonStartEl.disabled = true;
        buttonStopEl.disabled = false;
    }, 500);
}

function onClickStopInterval() {
    clearInterval(timerId);
    buttonStartEl.disabled = false;
    buttonStopEl.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
