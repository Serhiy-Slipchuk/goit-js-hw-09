import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const buttonStartCountEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

let timerId = null;
let isTimerRun = false;
let selectedTime = 0;
let currentTime = Date.now();
let deltaTime = 0;

buttonStartCountEl.disabled = true;

const optionsFlatpickr = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        selectedTime = selectedDates[0].getTime();
        if (selectedTime <= currentTime) {
            Notiflix.Notify.failure('Введіть дату у майбутньому часі');
        } else {
            buttonStartCountEl.disabled = false;
            buttonStartCountEl.addEventListener('click', handlerButtonClick);
        }
    },
};

flatpickr('#datetime-picker', optionsFlatpickr);


function handlerButtonClick() {
    if (isTimerRun) {
        Notiflix.Notify.failure('Таймер вже запущений. Дочекайтеся закінчення відліку або оновіть сторінку для введення іншої дати');
        return;
    }
    isTimerRun = true;
    timerId = setInterval(() => {
        currentTime = Date.now();
        deltaTime = selectedTime - currentTime;
        if (deltaTime >= 0) {
            updateMarkupElementsValue(convertMs(deltaTime));
        } else {
            stopTimer();
        }
    }, 1000)
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateMarkupElementsValue({ days, hours, minutes, seconds }) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
}

function stopTimer() {
    isTimerRun = false;
    clearInterval(timerId);
    buttonStartCountEl.disabled = true;
    buttonStartCountEl.removeEventListener('click', handlerButtonClick);   
}