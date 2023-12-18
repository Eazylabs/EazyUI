import RadioWarning from '../blocks/RadioWarning';

export const RADIOWARNING = {
  html: `<div class='form-control'>
  <input type='radio' name='warning' class='radio radio-warning' checked />
  <input type='radio' name='warning' class='radio radio-warning' />
</div>`,
  css: `.form-control {
  display: flex;
  align-items: center;
  gap: 4px;
}

.radio {
  appearance: none;
  background-color: transparent;
  margin: 0;
  font: inherit;
  width: 32px;
  height: 32px;
  border: 2px solid;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}

.radio-warning {
  border-color: #ffd43b;
}

.radio::before {
  content: '';
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
}

.radio-warning::before {
  background-color: #ffd43b;
}

.radio:checked::before {
  transform: scale(1);
}`,
  element: RadioWarning,
};
