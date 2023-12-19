import LoaderRoller from '../blocks/LoaderRoller';

export const LOADERROLLER = {
  html: `<div className="loader loader-roller">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>;`,
  css: `.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.loader-roller div {
  animation: loader-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}

.loader-roller div:after {
  content: ' ';
  display: block;
  position: absolute;
  width: 7.2px;
  height: 7.2px;
  border-radius: 50%;
  background: #ccc;
  margin: -3.6px 0 0 -3.6px;
}

.loader-roller div:nth-child(1) {
  animation-delay: -0.036s;
}

.loader-roller div:nth-child(1):after {
  top: 62.62742px;
  left: 62.62742px;
}

.loader-roller div:nth-child(2) {
  animation-delay: -0.072s;
}

.loader-roller div:nth-child(2):after {
  top: 67.71281px;
  left: 56px;
}

.loader-roller div:nth-child(3) {
  animation-delay: -0.108s;
}

.loader-roller div:nth-child(3):after {
  top: 70.90963px;
  left: 48.28221px;
}

.loader-roller div:nth-child(4) {
  animation-delay: -0.144s;
}

.loader-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}

.loader-roller div:nth-child(5) {
  animation-delay: -0.18s;
}

.loader-roller div:nth-child(5):after {
  top: 70.90963px;
  left: 31.71779px;
}

.loader-roller div:nth-child(6) {
  animation-delay: -0.216s;
}

.loader-roller div:nth-child(6):after {
  top: 67.71281px;
  left: 24px;
}

.loader-roller div:nth-child(7) {
  animation-delay: -0.252s;
}

.loader-roller div:nth-child(7):after {
  top: 62.62742px;
  left: 17.37258px;
}

.loader-roller div:nth-child(8) {
  animation-delay: -0.288s;
}

.loader-roller div:nth-child(8):after {
  top: 56px;
  left: 12.28719px;
}

@keyframes loader-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
  element: LoaderRoller,
};
