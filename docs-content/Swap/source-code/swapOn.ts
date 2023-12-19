import SwapOn from '../blocks/SwapOn';

export const SWAPON = {
  html: `<div class='swap'>
  <input type='checkbox' name='swap-on' id='swap-on' />
  <label for='swap-on' class='swap-label-circle primary'>
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

.swap .swap-label-circle {
  border-radius: 100%;
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

.primary {
  background-color: #fff;
  border: 1px solid #0ea5e9;
}`,
  element: SwapOn,
};
