import CheckboxNeu from '../blocks/CheckboxNeu';

export const CHECKBOXNEU = {
  html: `<input type='checkbox' class='checkbox checkbox-neu' />`,
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

.checkbox-neu {
  border: 1px solid #183153;
  box-shadow: 1px 1px 0px 0px #183153;
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

.checkbox-neu:checked {
  box-shadow: 0px 0px 0px 0px #183153;
  background-color: #183153;
}`,
  element: CheckboxNeu,
};
