import CountdownDetail from '../blocks/CoutndownDetail';

export const COUNTDOWNDETAIL = {
  html: `<div class='countdown'>
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
  css: `.countdown {
  display: flex;
  gap: 1rem;
}

.countdown span {
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
  element: CountdownDetail,
};
