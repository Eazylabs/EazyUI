import SwapNeuHamburger from '../blocks/SwapNeuHamburger';

export const SWAPNEUHAMBURGER = {
  html: `<div class='swap'>
  <input type='checkbox' name='swapneuhamburger' id='swapneuhamburger' />
  <label for='swapneuhamburger' class='swap-label-block neu'>
    <span>
      <svg xmlns='http://www.w3.org/2000/svg' height='28' width='26' viewBox='0 0 448 512'>
        <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
      </svg>
    </span>
    <span>
      <svg xmlns='http://www.w3.org/2000/svg' height='28' width='26' viewBox='0 0 384 512' fill='white'>
        <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
      </svg>
    </span>
  </label>
</div>`,
  css: `.swap input[type='checkbox'] {
  display: none;
}

.swap span svg {
  margin-top: 5px;
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
}`,
  element: SwapNeuHamburger,
};
