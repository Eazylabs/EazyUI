import LoaderDualRing from '../blocks/LoaderDualRing';

export const LOADERDUALRING = {
  html: `<div class='loader loader-dual-ring'></div>`,
  css: `.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.loader-dual-ring:after {
  content: ' ';
  display: block;
  width: 56px;
  height: 56px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: loader-dual-ring 1.2s linear infinite;
}

@keyframes loader-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
  element: LoaderDualRing,
};
