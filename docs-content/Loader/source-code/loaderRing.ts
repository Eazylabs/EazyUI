import LoaderRing from '../blocks/LoaderRing';

export const LOADERRING = {
  html: `<div class="loader loader-ring">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>`,
  css: `.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.loader-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #ccc;
  border-radius: 50%;
  animation: loader-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #ccc transparent transparent transparent;
}

.loader-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.loader-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.loader-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes loader-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
  element: LoaderRing,
};
