import CheckboxSuccess from '../blocks/CheckboxSuccess';

export const CHECKBOXSUCCESS = {
  html: `<input type='checkbox' class='checkbox checkbox-success' />`,
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

.checkbox-success {
  border: 1.5px solid #14b789;
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

.checkbox-success:checked {
  background-color: #14b789;
  color: #fff;
}`,
  element: CheckboxSuccess,
};
