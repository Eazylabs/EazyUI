import LoaderRipple from '../blocks/LoaderRipple';

export const LOADERRIPPLE = {
  html: `<div class="loader loader-ellipsis">
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

.loader-ripple div {
  position: absolute;
  border: 4px solid #ccc;
  opacity: 1;
  border-radius: 50%;
  animation: loader-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loader-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes loader-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 8px;
    height: 8px;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 8px;
    height: 8px;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 8px;
    height: 8px;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    opacity: 0;
  }
}`,
  element: LoaderRipple,
};
