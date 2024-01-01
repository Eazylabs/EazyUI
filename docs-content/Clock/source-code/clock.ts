import Clock from '../blocks/Clock';

export const CLOCK = {
  html: `<div className='clock'>
  <h2 id='hours'></h2>
  <h2 id='minutes'></h2>
  <h2 id='seconds'></h2>
</div>`,
  css: `.clock {
  display: flex;
  gap: 5px;
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
  element: Clock,
};
