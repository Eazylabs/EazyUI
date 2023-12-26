import ClockNeuBox from '../blocks/ClockNeuBox';

export const CLOCKNEUBOX = {
  html: `<div class='clock'>
  <div class='neu'>
    <h1 id='hours'>{twoDigits(hours)}</h1>
    <p>Hours</p>
  </div>
  <div class='neu'>
    <h1 id='minutes'>{twoDigits(minutes)}</h1>
    <p>Minutes</p>
  </div>
  <div class='neu'>
    <h1 id='seconds'>{twoDigits(seconds)}</h1>
    <p>Seconds</p>
  </div>
</div>`,
  css: `.clock {
  display: flex;
  gap: 1rem;
}

.clock div {
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 10px;
}

.clock div p {
  font-size: 1rem;
  font-weight: 700;
}

.neu {
  border: 1px solid #183153;
  box-shadow: 0px 4px 0px 0px #183153;
}`,
  js: `const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const twoDigit = (num) => String(num).padStart(2, "0");

setInterval(() => {
    const date = new Date();
    hours.innerHTML = twoDigit(date.getHours());
    minutes.innerHTML = twoDigit(date.getMinutes());
    seconds.innerHTML = twoDigit(date.getSeconds());
}, 1000);`,
  element: ClockNeuBox,
};
