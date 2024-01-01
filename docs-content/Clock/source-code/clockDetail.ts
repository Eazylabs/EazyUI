import ClockDetail from '../blocks/ClockDetail';

export const CLOCKDETAIL = {
  html: `<div class='clock'>
  <h3>
    <span id='hours'></span> Hours
  </h3>
  <h3>
    <span id='minutes'></span> Min
  </h3>
  <h3>
    <span id='seconds'></span> Sec
  </h3>
</div>`,
  css: `.clock {
  display: flex;
  gap: 1rem;
}

.clock span {
  font-size: 48px;
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
  element: ClockDetail,
};
