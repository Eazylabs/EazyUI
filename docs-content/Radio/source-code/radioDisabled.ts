import RadioDisabled from '../blocks/RadioDisabled';

export const RADIODISABLED = {
  html: `<div class='form-control'>
  <input type='radio' name='disabled' class='radio radio-neu' checked disabled />
  <input type='radio' name='disabled' class='radio radio-neu' disabled />
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

.radio-neu {
  border-color: #183153;
}

.radio::before {
  content: '';
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
}

.radio-neu::before {
  background-color: #183153;
}

.radio:checked::before {
  transform: scale(1);
}

.radio:disabled {
  opacity: 0.5;
}`,
  element: RadioDisabled,
};
