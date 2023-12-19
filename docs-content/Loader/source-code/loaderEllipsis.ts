import LoaderEllipsis from '../blocks/LoaderEllipsis';

export const LOADERELLIPSIS = {
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

.loader-ellipsis div {
  position: absolute;
  top: 33.33333px;
  width: 13.33333px;
  height: 13.33333px;
  border-radius: 50%;
  background: #ccc;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.loader-ellipsis div:nth-child(1) {
  left: 8px;
  animation: loader-ellipsis1 0.6s infinite;
}

.loader-ellipsis div:nth-child(2) {
  left: 8px;
  animation: loader-ellipsis2 0.6s infinite;
}

.loader-ellipsis div:nth-child(3) {
  left: 32px;
  animation: loader-ellipsis2 0.6s infinite;
}

.loader-ellipsis div:nth-child(4) {
  left: 56px;
  animation: loader-ellipsis3 0.6s infinite;
}

@keyframes loader-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes loader-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes loader-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}`,
  element: LoaderEllipsis,
};
