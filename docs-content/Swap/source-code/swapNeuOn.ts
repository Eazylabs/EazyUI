import SwapNeuOn from '../blocks/SwapNeuOn';

export const SWAPNEUON = {
  html: `<div class='swap'>
  <input type='checkbox' name='swapneuon' id='swapneuon' />
  <label for='swapneuon' class='swap-label-block neu'>
    <span>ON</span>
    <span>OFF</span>
  </label>
</div>`,
  css: `.swap input[type='checkbox'] {
  display: none;
}

.swap label {
  height: 60px;
  width: 60px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.swap .swap-label-block {
  border-radius: 8px;
  cursor: pointer;
}

.swap input[type='checkbox'] + label span:first-child {
  display: block;
}

.swap input[type='checkbox'] + label span:last-child {
  display: none;
}

.swap input[type='checkbox']:checked + label span:first-child {
  display: none;
}

.swap input[type='checkbox']:checked + label span:last-child {
  display: block;
}

.swap input[type='checkbox'] + label {
  background-color: #fff;
}
.swap input[type='checkbox']:checked + label {
  color: #fff;
  background-color: #0ea5e9;
}

.neu {
  border: 1px solid #183153;
  box-shadow: 0px 4px 0px 0px #183153;
}
`,
  element: SwapNeuOn,
};
