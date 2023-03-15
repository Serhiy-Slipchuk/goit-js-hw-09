import Notiflix from "notiflix";

const formEl = document.querySelector('.form');
const buttonEl = document.querySelector('button[type="submit"]');

const incomingData = {
  delay: 0,
  step: 0,
  amount: 0,
}

formEl.addEventListener('input', handlerInput);
formEl.addEventListener('click', handlerClick);


function handlerInput(event) {
  let inputName = event.target.name;
  let inputValue = event.target.value;
  updateIncomingData(inputName, inputValue);
}

function handlerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'BUTTON') {
    return;
  };
  buttonEl.disabled = true;
  displayPromises(incomingData);
}

function updateIncomingData(name, value) {
  if (name === 'delay') {
    incomingData.delay = Number(value);
  };
  if (name === 'step') {
    incomingData.step = Number(value);
  };
  if (name === 'amount') {
    incomingData.amount = Number(value);
  };
}

function displayPromises({ delay, step, amount }) {
  setTimeout(() => {
    for (let i = 1; i <= amount; i++) {
      createPromise(i, delay)
        .then(resolve => Notiflix.Notify.success(resolve, { timeout: 10000 }))
        .catch(reject => Notiflix.Notify.failure(reject, { timeout: 10000 } ));
      delay = delay + step;
    };
  }, delay);

  setTimeout(() => {
    buttonEl.disabled = false;
  }, delay + amount * step)
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
  });

  return promise;
}
