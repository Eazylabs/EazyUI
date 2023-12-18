import RadioInfo from '../blocks/RadioInfo';

export const RADIOINFO = {
  html: `<div class='form-control'>
  <input type='radio' name='info' class='radio radio-info' checked />
  <input type='radio' name='info' class='radio radio-info' />
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

.radio-info {
  border-color: #4ba3e3;
}

.radio::before {
  content: '';
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
}

.radio-info::before {
  background-color: #4ba3e3;
}

.radio:checked::before {
  transform: scale(1);
}`,
  element: RadioInfo,
};
