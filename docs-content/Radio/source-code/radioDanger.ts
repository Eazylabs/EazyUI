import RadioDanger from '../blocks/RadioDanger';

export const RADIODANGER = {
  html: `<div class='form-control'>
  <input type='radio' name='danger' class='radio radio-danger' checked />
  <input type='radio' name='danger' class='radio radio-danger' />
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

.radio-danger {
  border-color: #e03131;
}

.radio::before {
  content: '';
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
}

.radio-danger::before {
  background-color: #e03131;
}

.radio:checked::before {
  transform: scale(1);
}`,
  element: RadioDanger,
};
