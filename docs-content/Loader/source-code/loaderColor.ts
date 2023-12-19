import LoaderColor from '../blocks/LoaderColor';

export const LOADERCOLOR = {
  html: `<div class="loader loader-ring ring-info">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div class="loader loader-ring ring-success">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div class="loader loader-ring ring-warning">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div class="loader loader-ring ring-danger">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div class="loader loader-ring ring-neu">
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
}

.ring-info div {
  border-color: #4ba3e3 transparent transparent transparent;
}

.ring-success div {
  border-color: #14b789 transparent transparent transparent;
}

.ring-warning div {
  border-color: #ffd43b transparent transparent transparent;
}

.ring-danger div {
  border-color: #e03131 transparent transparent transparent;
}

.ring-neu div {
  border-color: #183153 transparent transparent transparent;
}
`,
  element: LoaderColor,
};
