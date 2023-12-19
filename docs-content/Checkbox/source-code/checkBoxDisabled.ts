import CheckboxDisabled from '../blocks/CheckboxDisabled';

export const CHECKBOXDISABLED = {
  html: `<input type='checkbox' class='checkbox' disabled />`,
  css: `.checkbox {
  appearance: none;
  font: inherit;
  color: inherit;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  cursor: pointer;
}

.checkbox:disabled {
  cursor: not-allowed;
  border: 1.5px solid #959495;
}`,
  element: CheckboxDisabled,
};
