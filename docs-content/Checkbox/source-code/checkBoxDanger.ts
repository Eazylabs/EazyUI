import CheckboxDanger from '../blocks/CheckboxDanger';

export const CHECKBOXDANGER = {
  html: `<input type='checkbox' class='checkbox checkbox-danger' />`,
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

.checkbox-danger {
  border: 1.5px solid #e03131;
}
  
.checkbox::before {
  content: '';
  width: 16px;
  height: 16px;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom;
  transition: 120ms transform ease-in-out;
  background-color: #fff;
}

.checkbox:checked::before {
  transform: scale(1);
}

.checkbox-danger:checked {
  background-color: #e03131;
  color: #fff;
}`,
  element: CheckboxDanger,
};
